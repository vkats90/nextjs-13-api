import dbConnect from '../../lib/dbConnect'
import {findUserByName,createUser,listUsers} from '../../lib/ExerciseUtils'
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

    await runMiddleware(req, res, cors)
    await dbConnect()

    if (req.method === 'POST') {
        let id = await findUserByName(req.body.username)
        if (id == null) {
        await createUser(req.body.username);
        id = await findUserByName(req.body.username)
        }
        res.json({"username":req.body.username,"_id":id._id})
    }
    else {
        const list = await listUsers()
        res.json(list); 
    }
  }