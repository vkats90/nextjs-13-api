//to fix: show todays date when query is empty

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

export default async function timeStamp(req,res){
    await runMiddleware(req, res, cors)
    const {date} = req.query
    if (/^\d+$/.test(date)) {
      req.utc = new Date(parseInt(date)).toGMTString();
      req.unix = Date.parse(req.utc);
      res.json({'unix':req.unix, "utc":req.utc})
    }
    else if (new Date(date) != "Invalid Date"){
      req.utc = new Date(date).toGMTString();
      req.unix = Date.parse(req.utc);
      res.json({'unix':req.unix, "utc":req.utc})
    }
    else res.json({error : "Invalid Date"})
  }