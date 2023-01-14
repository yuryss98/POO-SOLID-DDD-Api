import express from 'express';
import errorHandler from './infra/middleware/errorHandler';
import routes from './infra/routes';

const app = express();

app.use(express.json());
app.use('/products', routes.productRoute);
app.use('/users', routes.userRoute);
app.use('/orders', routes.orderRoute);
app.use('/login', routes.loginRoute);

app.use(errorHandler);

export default app;