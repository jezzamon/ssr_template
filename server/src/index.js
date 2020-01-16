import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    //just for purposes of ssr-api and udemy course
    proxyReqOptDecorator(opts) {
      opts.header['x-forward-host'] = 'localhost:3000';
      return opts;
    },
  })
);
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  // some logic to init and load data into the store
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});
app.listen(3000, () => {
  console.log('listening to port 3000');
});
