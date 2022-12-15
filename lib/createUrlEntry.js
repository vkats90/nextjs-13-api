import dbConnect from './dbConnect';
import UrlData from '../models/UrlData'


function done(err) {
    if (err) console.log(err)
  }

export default async function createUrlEntry (array) {
    UrlData.create(array,(err,data)=>{
      if (err) return done(err)
      return data
    })
  };