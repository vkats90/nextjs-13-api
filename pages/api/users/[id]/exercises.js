import dbConnect from '../../../../lib/dbConnect'
import {addExerciseToUser} from '../../../../lib/ExerciseUtils'
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

    req.body.date?req.body.date+='T00:00:00':undefined;
    let dateFormat;
    if (!req.body.date) dateFormat = new Date().toDateString()
    else  dateFormat = new Date(req.body.date).toDateString();
    let user = await addExerciseToUser(req.query.id,req.body.description,req.body.duration,dateFormat);
    res.json({'_id':user._id,'username':user.username,'date':dateFormat,'duration':Number(req.body.duration),'description':req.body.description})
}