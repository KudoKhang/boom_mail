import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ADMIN_URL, URL } from './config/constants';
import { LayoutUser, LayoutAdmin } from './layout';

const SignUp = lazy(() => import('./pages/SignUp'));
const Login = lazy(() => import('./pages/Login'));
const Pricing = lazy(() => import('./pages/Pricing'));
const PageError = lazy(() => import('./pages/PageError'));
const Home = lazy(() => import('./pages/Home'));
const Payment = lazy(() => import('./pages/Payment'));
const Profile = lazy(() => import('./pages/Profile'));
const AdminLogin = lazy(() => import('./pages/Admin/Login'));
const AdminDashboard = lazy(() => import('./pages/Admin/Dashboard'));

const { HOME, PRICING, LOGIN, SIGNUP, PAYMENT, PROFILE } = URL;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutUser />,
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
      {
        path: PROFILE,
        element: <Profile />,
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
  {
    path: ADMIN_URL.BASE,
    element: <LayoutAdmin />,
    errorElement: <PageError />,
    children: [
      {
        path: ADMIN_URL.HOME,
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: ADMIN_URL.LOGIN,
    element: <AdminLogin />,
    errorElement: <PageError />,
  },
]);
