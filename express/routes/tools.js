import express from 'express';
import config from '../config.json';

const toolsRouter = express.Router();
const tools = {
  deploy: {
    title: 'Deploy',
    websocketUri: `${config.wsUrl}/deploy`,
    verbose: config.verbose,
  },
  destroy: {
    title: 'Destroy',
    websocketUri: `${config.wsUrl}/destroy`,
    verbose: config.verbose,
  },
  log: {
    title: 'Log',
    websocketUri: `${config.wsUrl}/log`,
    verbose: config.verbose,
  },
  ipaddresses: {
    title: 'IP Addresses',
    websocketUri: `${config.wsUrl}/ipaddresses`,
    verbose: config.verbose,
  },
};

toolsRouter.get('/', (req, res) => {
  res.redirect('/tool/deploy');
});

toolsRouter.get('/deploy', (req, res) => {
  res.render('tool', tools.deploy);
});

toolsRouter.get('/destroy', (req, res) => {
  res.render('tool', tools.destroy);
});

toolsRouter.get('/log', (req, res) => {
  res.render('tool', tools.log);
});

toolsRouter.get('/ipaddresses', (req, res) => {
  res.render('tool', tools.ipaddresses);
});

export default toolsRouter;
