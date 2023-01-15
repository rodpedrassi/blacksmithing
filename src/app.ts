import express from 'express';
import productRoute from './routes/product.router';
import userRoute from './routes/user.router';
import orderRouter from './routes/order.router';

const app = express();

app.use(express.json());

// rotas
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRouter);

export default app;
