require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// MIDDLE WARES
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// CONNECT MONGODB
const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const dbConnect = async () => {
    try {
        await client.connect();
        console.log('Database connected');
    } catch (error) {
        console.log(error)
    }
};
dbConnect();

// DATABASE COLLECTION
const Projects = client.db('portfolio').collection('projects');

app.get('/', (req, res) => {
    res.send('Hello form API server')
})

// GET ALL PROJECT
app.get('/project', async (req, res) => {
    try {
        const projects = await Projects.find({}).toArray();
        res.send({
            success: true,
            message: "Successfully got the projects",
            data: projects
        })
    } catch (error) {
        console.log(error)
        res.send({
            success: false,
            error: error.message
        })
    }
})


// GET SINGLE PROJECT  
app.get('/project/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const project = await Projects.findOne({ _id: new ObjectId(id) });
        res.send({
            success: true,
            message: "Successfully got the projects",
            data: project
        })
    } catch (error) {
        console.log(error)
        res.send({
            success: false,
            error: error.message
        })
    }
})

app.listen(port, console.log(`server is running on port ${port}`));