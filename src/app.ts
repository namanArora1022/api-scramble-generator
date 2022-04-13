import express from 'express';
import cors from 'cors';

// IMPORTING ROUTES
import indexRoutes from './routes/index';

const app = express();
const port = process.env.PORT ?? 5000;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use('/api', indexRoutes);

// STARTING THE SERVER
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
