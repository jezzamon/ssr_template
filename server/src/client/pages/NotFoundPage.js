import React from 'react';

// note: react staticRouter renames context prop staticContext
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Opps, route not found</h1>;
};

export default {
  component: NotFoundPage,
};
