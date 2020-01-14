import React from 'react';
// import { Route } from 'react-router-dom';  // no longer using this for ssr
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={UsersList} />
//     </div>
//   );
// };

// for routing through server side we use a different way for routes

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/users',
    component: UsersList,
    loadData,
  },
];
