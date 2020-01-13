const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;


// import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';


const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});
app.listen(3000, () => {
  console.log('listening to port 3000');
});
