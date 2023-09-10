import express from 'express';
const app=express();
import dotenv from 'dotenv'
import Connection from './db/conn.js';
import cors from 'cors'
import router from './route/route.js';
import { saveData } from './route/saveData.js';
dotenv.config()


const port=process.env.PORT || 5000

Connection()

app.use(cors())

// app.use(bodyParser.json({extended:true}))
// app.use(bodyParser.urlencoded({extended:true}))


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/',router)

app.get('/savedata',saveData)

app.listen(port,()=>{
    console.log(`server start at ${port}`)
})