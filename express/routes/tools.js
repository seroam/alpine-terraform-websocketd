import express from 'express';

const toolsRouter = express.Router();
const tools = {
  deploy: {
    title: 'Deploy',
    websocketUri: 'ws://localhost:5000/ws/deploy',
  },
  destroy: {
    title: 'Destroy',
    websocketUri: 'ws://localhost:5000/ws/destroy',
  },
  log: {
    title: 'Log',
    websocketUri: 'ws://localhost:5000/ws/log',
  },
  ipaddresses: {
    title: 'IP Addresses',
    websocketUri: 'ws://localhost:5000/ws/ipaddresses',
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
