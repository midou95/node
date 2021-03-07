import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

routes(app);

app.on('error', (err) => {
  console.log(`server error ${err}`);
});

export default app;
