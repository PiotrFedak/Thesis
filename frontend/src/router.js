import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Map',
    element: <MapPage />,
  },
]);

export default router;
