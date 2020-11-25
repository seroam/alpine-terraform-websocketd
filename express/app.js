import express from 'express';
import path from 'path';
import createError from 'http-errors';
import apiMockRouter from './routes/apimock';
import configRouter from './routes/config';
import sitesRouter from './routes/sites';
import toolsRouter from './routes/tools';
import config from './config.json';

const app = express();

// app setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.locals.appName = config.appName;

// routes
const mainRouter = express.Router();
mainRouter.get('/', (req, res) => {
  res.redirect('/tool');
});
app.use('/', mainRouter);
app.use('/apimock', apiMockRouter);
app.use('/config', configRouter);
app.use('/tool', toolsRouter);
app.use('/site', sitesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
