import express from 'express';
import cors from 'cors';
import QuestionsR from './routes/QuestionsR.js';
 

const app = express();
const port = 3006;

app.use(express.json());
app.use(cors());
app.use("/api" ,QuestionsR)



app.listen(3006, () => {
    console.log(`server runing on: http://localhost:${port}`);
})

//.env

