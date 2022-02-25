import express from 'express';
import cors from 'cors';
import routes from './router';

import './database'
const app = express();
app.use(express.json());



app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(routes)

app.listen(process.env.PORT || 3001)