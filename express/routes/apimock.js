import express from 'express';

function getFakeConfig() {
  return {
    tenant_id: Math.round(Math.random() * 1000000000),
    subscription_id: Math.round(Math.random() * 1000000000),
    client_id: Math.round(Math.random() * 1000000000),
    client_secret: Math.round(Math.random() * 1000000000),
  };
}

const apiMockRouter = express.Router();

apiMockRouter.get('/about', (req, res) => {
  const markdown = '### About Page Content\nThis site is _mocked._\nKali VM, etc.';
  res.send({ markdown });
});

apiMockRouter.get('/readme', (req, res) => {
  const markdown = '### Readme Page Content\nThis site is _mocked._';
  res.send({ markdown });
});

apiMockRouter.get('/config', (req, res) => {
  res.send({ ...getFakeConfig() });
});

apiMockRouter.post('/config', async (req, res) => {
  req.body.tenant_id = `u${req.body.tenant_id}`;
  res.send({ ...req.body });
});

export default apiMockRouter;
