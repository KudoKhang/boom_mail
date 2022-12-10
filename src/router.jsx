import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Layout = lazy(() => import('./layout'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Login = lazy(() => import('./pages/Login'));
const Pricing = lazy(() => import('./pages/Pricing'));
const PageError = lazy(() => import('./pages/PageError'));
const Home = lazy(() => import('./pages/Home'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageError />,
    children: [
      {
        path: 'dashboard',
        element: <Home />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <PageError />,
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <PageError />,
  },
]);
