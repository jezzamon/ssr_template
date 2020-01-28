import React from 'react';
import App from './App';
// import { Route } from 'react-router-dom';  // no longer using this for ssr
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

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
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...AdminsListPage,
        path: '/admins',
      },
      {
        ...UsersListPage,
        path: '/users',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
