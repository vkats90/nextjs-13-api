import dbConnect from '../../lib/dbConnect'
import UrlData from '../../models/UrlData'
import validUrl from 'valid-url'
import crypto from 'crypto'
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

function done(err) {
    if (err) console.log(err)
  }

const createUrlEntry = (array) => {
    UrlData.create(array,(err,data)=>{
      if (err) return done(err)
      return data
    })
  };
  
  const findOneByUrl = async (url) => {
    try {
     const urlFind = await UrlData.findOne({shortUrl: url})
    return urlFind;
    } catch(err) {
      done(err);
    }
  };


export default async function UrlShortener (req,res) {
    
    await runMiddleware(req, res, cors)
    await dbConnect()

    if (validUrl.isHttpUri(req.body.url)||validUrl.isHttpsUri(req.body.url)) {
        let tempUrl = crypto.randomBytes(3).toString('hex');
        if (! await findOneByUrl(tempUrl)) { 
        createUrlEntry({'fullUrl':req.body.url,'shortUrl':tempUrl});
        }
        res.json({'original_url':req.body.url,'short_url':tempUrl});
      }
    else res.json({error:'invalid url'})
}