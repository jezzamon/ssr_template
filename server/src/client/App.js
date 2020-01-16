import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = () => {
return <div>{renderRoutes()}</div>;
};

export default {
  component: App,
};
