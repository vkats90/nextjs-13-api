

export default function timeStamp(req,res){
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