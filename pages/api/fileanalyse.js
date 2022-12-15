import Cors from 'cors'
import multer from 'multer';
import bodyParser from 'body-parser';

export const config = {
    api: {
      bodyParser: false
    }
  }
  
const upload = multer({ dest: 'uploads/' })

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

export default async function fileanalyse (req,res) {
    await runMiddleware(req, res, cors);
    await runMiddleware(req,res,upload.single('upfile'))

    res.json({'name':req.file.originalname,'type':req.file.mimetype,'size':req.file.size})
}