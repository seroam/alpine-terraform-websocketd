import express from 'express';

const configRouter = express.Router();

configRouter.get('/', async (req, res) => {
  res.render('config');
});

export default configRouter;
