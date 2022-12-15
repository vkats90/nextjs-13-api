import dbConnect from './dbConnect';
import UrlData from '../models/UrlData'


function done(err) {
    if (err) console.log(err)
  }

export default async function findOneByUrl(url) {
    try {
     const urlFind = await UrlData.findOne({shortUrl: url})
    return urlFind;
    } catch(err) {
      done(err);
    }
};