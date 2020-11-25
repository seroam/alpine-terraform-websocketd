import express from 'express';
import fetch from 'node-fetch';
import { Remarkable } from 'remarkable';
import config from '../config.json';

const sitesRouter = express.Router();

sitesRouter.get('/about', async (req, res) => {
  let markdown = 'No information found.';
  try {
    const response = await fetch('http://localhost:3000/apimock/about');
    const parsed = await response.json();
    markdown = new Remarkable().render(parsed.markdown);
  } catch (error) {
    markdown = error;
  }
  res.render('site', { title: config.appName, markdown });
});

sitesRouter.get('/readme', async (req, res) => {
  let markdown = 'No information found.';
  try {
    const response = await fetch('http://localhost:3000/apimock/readme');
    const parsed = await response.json();
    markdown = new Remarkable().render(parsed.markdown);
  } catch (error) {
    markdown = error;
  }
  res.render('site', { title: 'Readme', markdown });
});

export default sitesRouter;
