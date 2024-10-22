import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import TeamsPage from './pages/TeamsPage';
import AuthPage from './pages/AuthPage';
import Players from './pages/Players';
import GuestLayout from './access/GuestLayout';
import TeamsList from './pages/TeamsList';

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
    path: '/TeamsList',
    element: <TeamsList />,
  },
  {
    path: '/Players',
    element: <Players />,
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/Auth',
        element: <AuthPage />,
      },
    ],
  },
]);

export default router;
