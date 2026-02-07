import express from 'express'

const port = 9090;

const app = express();

app.get('/', (req,res) => {
    res.json({message: "E-commerce api's running well"})
});

app.listen(port, () => {
    console.log("Server is live on port: 9090");
});