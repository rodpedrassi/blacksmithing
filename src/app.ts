import express from 'express';
import productRoute from './routes/product.router';

const app = express();

app.use(express.json());

// rotas
app.use('/products', productRoute);

export default app;
