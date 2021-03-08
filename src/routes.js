import userRoutes from './routes/userRoutes';
import orderRoutes from './routes/orderRoutes';

export default (app) => {
  app.use('/users', userRoutes);
  app.use('/orders', orderRoutes);
};
