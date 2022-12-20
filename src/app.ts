import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use('/products', routes.productRoute);
app.use('/users', routes.userRoute);

export default app;
