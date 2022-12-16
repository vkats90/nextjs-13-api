import dbConnect from '../../../lib/dbConnect'
import UrlData from '../../../models/UrlData'
import Cors from 'cors'
import {findOneByUrl} from '../../../lib/UrlFunctions'

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


export default async function ShortUrl (req,res) {
    await runMiddleware(req, res, cors)
    await dbConnect()

    const {url} = req.query;
    let tempUrl = await findOneByUrl(url);
    res.redirect(tempUrl.fullUrl);
}