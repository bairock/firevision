import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apollo'

const app = <React.StrictMode>
  <ApolloProvider client={client}>
  <App />
  </ApolloProvider>
</React.StrictMode>


ReactDOM.render(
  app,
  document.getElementById('root')
);

