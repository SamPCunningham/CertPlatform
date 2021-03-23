import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req,res) => 
    res.send(`Server is running on ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Server is running on ${PORT}`)
);