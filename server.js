// const express = require("express");
// const path = require("path");
// const multer = require("multer");
// const mongoose  = require("mongoose");
// const app = express();
// const PORT = 5000;
// require("./models/image")
// const File = mongoose.model("file");
// const router = express.Router();

// const storage = multer.diskStorage({
//    destination: "./public/",
//    filename: function(req, file, cb){
//       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
//    }
// });

// const upload = multer({
//    storage: storage,
//    limits:{fileSize: 1000000},
// }).single("myfile");

// const obj =(req,res) => {
//    upload(req, res, () => {
//       console.log("Request ---", req.body);
//       console.log("Request file ---", req.file);
//       const file = new File();
//       file.meta_data = req.file;
//       file.save().then(()=>{
//       res.send({message:"uploaded successfully"})
//       })
//    });
// }

// router.post("/upload", obj);

// app.use(router);

// app.get("/",(req,res)=>{
//    return res.send("<p>hello!</p>");
// });

// mongoose.connect("mongodb://localhost/send-photo",{
//    useUnifiedTopology: true,
//    useNewUrlParser: true,
//    useCreateIndex: true,
// }).then(()=>{console.log("DB is connected")})

// app.listen(PORT,()=>{
//    console.log("\u{1F525}\u{1F680} app listen on port",PORT,"\u{1F525}\u{1F680}")
// });