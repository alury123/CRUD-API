import express from 'express';
import bodyParser from 'body-parser';
import UsersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', UsersRoutes);
app.get('/', (req,res) =>
    res.send('Hello lol'));

app.listen(PORT,() => console.log(`Server Running on port: http://localhost:${PORT}`));