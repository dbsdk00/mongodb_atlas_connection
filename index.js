import express from "express";
import mongoose from  "mongoose";
import path from "path"
import routes from "./routes/routes.js"

console.log(`몽고db에 접속`);
mongoose
    .connect(
        'mongodb+srv://yoonah:KJPe9xE8Ne-*S2h@yoonah.4dcrshc.mongodb.net/myFirstDatabase?authSource=admin'
    )
    .then(()=>{
        console.log("몽고DB아틀라스 나의 계정 접속");
    })
    .catch((e) => {
        console.log(e);
    })
    const app = express();

    app.use(express.json());
    app.use("/api", routes);
    app.get("/", (req, res)=> {
        res.sendFile(path.resolve('routes/index.html'));
    })

    app.listen(8088, ()=> {
        console.log(`웹 서버 시작됨 http://localhost:${8088}`);
    })