const express = require("express");
const multer = require("multer");
const app = express();

const uploadFile = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "6_MulterReceivedFile")  // Already created file in teskbar
        },
        filename: function (req, file, cb)  {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("upload_file_multer"); // through which parameter you upload file //postman_post_form-data_key:upload_file_multer_file:file_value:select-fromfile. 

app.post("/upload", uploadFile, (req, res) => {
    res.send("Uploading Done")
});

app.listen(4200); 


