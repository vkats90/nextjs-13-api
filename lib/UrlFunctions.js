import UrlData from '../models/UrlData'


function done(err) {
    if (err) console.log(err)
  }

export async function findOneByUrl(url) {
    try {
     const urlFind = await UrlData.findOne({shortUrl: url})
    return urlFind;
    } catch(err) {
      done(err);
    }
};

export async function createUrlEntry (array) {
  UrlData.create(array,(err,data)=>{
    if (err) return done(err)
    return data
  })
};

export default {findOneByUrl,createUrlEntry}

