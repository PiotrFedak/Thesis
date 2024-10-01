import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import TeamsPage from './pages/TeamsPage';
import AuthPage from './pages/AuthPage';
import Players from './pages/Players';

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
    path: '/Teams',
    element: <TeamsPage />,
  },
  {
    path: '/Auth',
    element: <AuthPage />,
  },
  {
    path: '/Players',
    element: <Players />,
  },
]);

export default router;
