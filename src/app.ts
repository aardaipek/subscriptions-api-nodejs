import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import logs from './config/log';
import routes from './routes/sample';


const NAMESPACE = 'Server'
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => logs.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`));


