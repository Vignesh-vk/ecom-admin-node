const express       = require('express');
const Router        = express.Router();
const path = require('path');
const DB            = require('../../models/db');
const HELPERFUNC    = require('../../models/commonfunctions');
var mongoose        = require('mongoose');
const multer = require('multer');

const imageStorage = multer.diskStorage({
    destination: 'uploads', 
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
    }
});
const imageUpload = multer({
      storage: imageStorage,
      limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) { 
           // upload only png and jpg format
           return cb(new Error('Please upload a Image'))
         }
       cb(undefined, true)
    }
}) 

Router.post('/uploadImage', imageUpload.single('image'), (req, res) => {
    //  res.send(req.file)
      var uploadFormData={
        filename:req.body.filename,
        category:req.body.category
    }
    var response ={
         status:0,
         message:"Something Error Occuured",
    }
      DB.InsertDocument('images', uploadFormData, function(err, result1) {
      console.log(err);
      if(err) {
            res.send(response);
          } else {
            response.status  = 1;
            response.message = 'Image Uploaded successfully';
            response.id      = result1._id;
            res.send(response);
          }
        });
}, (error, req, res, next) => {
     res.status(400).send({ error: error.message })
})
Router.get('/listImage', function (req, res) {
  const response = {
    status: 0,
  }
  DB.GetDocument('images', {}, {}, {}, function (err, result) {
    if (err) {
      res.send(response);
    } else {
      response.status = 1;
      response.data = result;
      response.count = result.length;
      res.send(response);
    }
  });
});
module.exports = Router;