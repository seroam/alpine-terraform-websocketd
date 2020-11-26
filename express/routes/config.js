import express from 'express';
import fetch from 'node-fetch';
import configJson from '../config.json';

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
    const response = await fetch(`${configJson.apiUrl}/config`);
    const config = await getConfigFromResponse(response);
    res.render('config', { title: 'Configuration', config });
  } catch (error) {
    res.status(500);
    res.render('error');
  }
});

configRouter.post('/', async (req, res) => {
  try {
    const data = {
      tenant_id: req.body.tenantId,
      subscription_id: req.body.subscriptionId,
      client_id: req.body.clientId,
      client_secret: req.body.clientSecret,
    };
    const response = await fetch(`${configJson.apiUrl}/config`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const config = await getConfigFromResponse(response);
    res.render('config', { title: 'Configuration', config });
  } catch (error) {
    res.status(500);
    res.render('error', { ...error });
  }
});

export default configRouter;
