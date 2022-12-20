import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use('/products', routes.productRoute);
app.use('/users', routes.userRoute);
app.use('/orders', routes.orderRoute);
app.use('/login', routes.loginRoute);

export default app;
