import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
    fullUrl: String,
    shortUrl: String,
  })

  export default mongoose.models.UrlData || mongoose.model('UrlData', UrlSchema)