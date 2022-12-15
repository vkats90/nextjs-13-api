import dbConnect from '../../../lib/dbConnect'
import UrlData from '../../../models/UrlData'
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

const findOneByUrl = async (url) => {
    try {
     const urlFind = await UrlData.findOne({shortUrl: url})
    return urlFind;
    } catch(err) {
      done(err);
    }
  };

export default async function ShortUrl (req,res) {
    await runMiddleware(req, res, cors)
    await dbConnect()

    const {url} = req.query;
    let tempUrl = await findOneByUrl(url);
    res.redirect(tempUrl.fullUrl);
}