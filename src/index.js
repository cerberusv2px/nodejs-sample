import './env';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
const routes = require('./routes');

const app = express();

const APP_PORT = process.env.APP_PORT || '3000';
const APP_HOST = process.env.APP_HOST || '0.0.0.0';

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server started at http://${app.get('host')}:${app.get('port')}`);
});

export default app;
