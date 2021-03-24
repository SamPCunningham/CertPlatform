import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/trainingRoutes';


const app = express();
const PORT = 4000;

//Connection to MongoDB database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/trainingDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

// bodyparser setup (bodyparser is a request parser, pulls info from request body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CORS setup 
app.use(cors());

routes(app);

app.get('/', (req,res) => 
    res.send(`Server is running on ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Server is running on ${PORT}`)
);