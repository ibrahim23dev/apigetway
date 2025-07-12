import express from 'express';
import mongoose from 'mongoose';
import { config as dotenv } from 'dotenv';
import cors from 'cors';
import authRoutes from '../src/src/routes/auth';

dotenv();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ibrahim640:<db_password>@cluster0.hjwda.mongodb.net/')
  .then(() => console.log('Auth DB connected'))
  .catch(err => console.error('Auth DB connection error:', err));

app.use('/', authRoutes);

app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));