import express from 'express';

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
  const data = Math.random() * 1000;
  res.send({ data });
});

apiMockRouter.post('/config', (req, res) => {
  const data = 'value';
  res.send({ data });
});

export default apiMockRouter;
