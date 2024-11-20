import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import TeamsTable from './pages/TeamsTable';
import AuthPage from './pages/AuthPage';
import Players from './pages/Players';
import GuestLayout from './access/GuestLayout';
import TeamsList from './pages/TeamsList';
import SoloTeam from './pages/SoloTeam';
import Games from './pages/Games';
import AdminPanel from './pages/AdminPanel';

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
    element: <TeamsTable />,
  },
  {
    path: '/TeamsList',
    element: <TeamsList />,
  },
  {
    path: '/teams/:teamId',
    element: <SoloTeam />,
  },
  {
    path: '/Players',
    element: <Players />,
  },
  {
    path: '/Games',
    element: <Games />,
  },
  {
    path: '/Admin',
    element: <AdminPanel />,
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
