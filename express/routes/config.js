import express from 'express';
import fetch from 'node-fetch';

const configRouter = express.Router();

configRouter.get('/', async (req, res) => {
  try {
    const response = await fetch('http://localhost:3000/apimock/config');
    const parsed = await response.json();
    const { data } = parsed;
    res.render('config', { title: 'Configuration', data });
  } catch (error) {
    res.status(500);
    res.render('error');
  }
});

configRouter.post('/', async (req, res) => {
  try {
    const response = await fetch('http://localhost:3000/apimock/config');
    const parsed = await response.json();
    const { data } = parsed;
    res.render('config', { title: 'Configuration', data: `u: ${data}` });
  } catch (error) {
    res.status(500);
    res.render('error');
  }
});

export default configRouter;
