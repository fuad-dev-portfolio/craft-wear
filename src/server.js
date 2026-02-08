import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import connectDB from './config/db.js'
import app from './app.js'  // import your configured app

connectDB()

const port = process.env.PORT || 9090

app.listen(port, () => {
  console.log(`Server is live on port: ${port}`)
})




// import express from 'express'
// import app from './app.js'
// import connectDB from './config/db.js';
// import dotenv from 'dotenv';
// import path from 'path';

// dotenv.config({path:'../.env'});

// const port = process.env.PORT || 9090;

// connectDB();

// app.get('/', (req,res) => {
//     res.json({message: "E-commerce api's running well"})
// });

// app.listen(port, () => {
//     console.log(`Server is live on port: ${port}`);
// });