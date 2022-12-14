//to fix: IP address test does not pass

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


export default async function whoAmI(req, res) {
    await runMiddleware(req, res, cors)
    res.json({"ipaddress":req.ip,"language":req.headers["accept-language"],"software":req.headers["user-agent"],});
  };