import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { URL } from './config/constants';

const Layout = lazy(() => import('./layout'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Login = lazy(() => import('./pages/Login'));
const Pricing = lazy(() => import('./pages/Pricing'));
const PageError = lazy(() => import('./pages/PageError'));
const Home = lazy(() => import('./pages/Home'));
const Payment = lazy(() => import('./pages/Payment'));

const { HOME, PRICING, LOGIN, SIGNUP, PAYMENT } = URL;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageError />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: PRICING,
        element: <Pricing />,
      },
      {
        path: PAYMENT,
        element: <Payment />,
      },
    ],
  },
  {
    path: LOGIN,
    element: <Login />,
    errorElement: <PageError />,
  },
  {
    path: SIGNUP,
    element: <SignUp />,
    errorElement: <PageError />,
  },
]);
