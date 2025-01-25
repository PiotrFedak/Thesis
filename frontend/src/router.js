import React from 'react';
import PropTypes from 'prop-types';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import TeamsTable from './pages/TeamsTable';
import AuthPage from './pages/AuthPage';
import Players from './pages/Players';
import GuestLayout from './access/GuestLayout';
import DefaultLayout from './access/DefaultLayout';
import TeamsList from './pages/TeamsList';
import SoloTeam from './pages/SoloTeam';
import Games from './pages/Games';
import AdminPanel from './pages/AdminPanel';
import WaitingPage from './pages/WaitingPage';
import { useStateContext } from './contexts/ContextProvider';

const AdminRoute = ({ element }) => {
  const { user } = useStateContext();

  if (user?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return element;
};

AdminRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

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
    path: '/Players',
    element: <Players />,
  },
  {
    path: '/Games',
    element: <Games />,
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/Auth',
        element: <AuthPage />,
      },
      {
        path: '/wait',
        element: <WaitingPage />,
      },
    ],
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/TeamsTable',
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
        path: '/Admin',
        element: <AdminRoute element={<AdminPanel />} />,
      },
    ],
  },
]);

export default router;
