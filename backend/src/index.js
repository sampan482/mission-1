import express from 'express';
import dotenv from 'dotenv';
import userroutes from './routes/userroutes.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use('/api/users', userroutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}   );