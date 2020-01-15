import React from 'react';
// import { Route } from 'react-router-dom';  // no longer using this for ssr
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={HomePage} />
//       <Route path="/users" component={UsersList} />
//     </div>
//   );
// };

// for routing through server side we use a different way for routes

export default [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...UsersListPage,
    path: '/users',
  },
];
