import express from 'express';
import fetch from 'node-fetch';

async function getConfigFromResponse(response) {
  const parsed = await response.json();
  return {
    tenantId: parsed.tenant_id,
    subscriptionId: parsed.subscription_id,
    clientId: parsed.client_id,
    clientSecret: parsed.client_secret,
  };
}

const configRouter = express.Router();

configRouter.get('/', async (req, res) => {
  try {
    const response = await fetch('http://localhost:3000/apimock/config');
    const config = await getConfigFromResponse(response);
    res.render('config', { title: 'Configuration', config });
  } catch (error) {
    res.status(500);
    res.render('error');
  }
});

configRouter.post('/', async (req, res) => {
  try {
    const response = await fetch('http://localhost:3000/apimock/config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const config = await getConfigFromResponse(response);
    res.render('config', { title: 'Configuration', config });
  } catch (error) {
    res.status(500);
    res.render('error');
  }
});

export default configRouter;
