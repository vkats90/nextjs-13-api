import dbConnect from '../../../../lib/dbConnect'
import {findUserById} from '../../../../lib/ExerciseUtils'
import Cors from 'cors'

const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
})

function runMiddleware(req,res,fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
}

export default async function (req,res) {

    await runMiddleware(req, res, cors);
    await dbConnect();
    
    let user = await findUserById(req.query.id);
    let exercises = user.exercise
   
      req.query.from?(exercises=exercises.filter(x=>new Date(x.date)>new Date(req.query.from+'T00:00:00'))):exercises
      req.query.to?exercises=exercises.filter(x=>new Date(x.date)<new Date(req.query.to+'T00:00:00')):exercises
      req.query.limit?exercises=exercises.filter((x,i)=>i<Number(req.query.limit)):exercises
      //exercises = exercises.filter((x,i)=>new Date(x.date)>new Date(req.query.from) && new Date(x.date)<new Date(req.query.to) && i<=req.query.limit)
      exercises = exercises.map(x=>({'description':x.description,'duration':x.duration,'date':x.date}))
  
  
    let count = exercises.length;
    res.json({_id:user._id,username:user.username,from:req.query.from?new Date(req.query.from+'T00:00:00').toDateString():undefined,to:req.query.to?new Date(req.query.to+'T00:00:00').toDateString():undefined,limit:req.query.limit,count:count,log:exercises})
    console.log({_id:user._id,username:user.username,from:req.query.from?new Date(req.query.from+'T00:00:00').toDateString():undefined,to:req.query.to?new Date(req.query.to+'T00:00:00').toDateString():undefined,limit:req.query.limit,count:count,log:exercises})
  }