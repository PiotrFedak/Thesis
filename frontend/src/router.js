import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import StatsPage from './pages/StatsPage';
import AuthPage from './pages/AuthPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Map',
    element: <MapPage />,
  },
  {
    path: '/Stats',
    element: <StatsPage />,
  },
  {
    path: '/Auth',
    element: <AuthPage />,
  },
]);

export default router;
