import express from 'express';
import productRoute from './routes/product.router';
import userRoute from './routes/user.router';
import orderRouter from './routes/order.router';
import loginRouter from './routes/login.router';

const app = express();

app.use(express.json());

// rotas
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;
