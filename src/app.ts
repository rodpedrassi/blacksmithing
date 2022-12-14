import express from 'express';
import productRoute from './routes/product.router';
import userRoute from './routes/user.router';

const app = express();

app.use(express.json());

// rotas
app.use('/products', productRoute);
app.use('/users', userRoute);

export default app;
