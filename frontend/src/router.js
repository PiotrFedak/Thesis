import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Map from './components/Map';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Map',
    element: <Map />,
  },
]);

export default router;
