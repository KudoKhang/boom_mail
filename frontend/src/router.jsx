import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ADMIN_URL, URL } from './config/constants';
import { LayoutUser, LayoutAdmin } from './layout';

const SignUp = lazy(() => import('./pages/SignUp'));
const Login = lazy(() => import('./pages/Login'));
const Pricing = lazy(() => import('./pages/Pricing'));
const PageError = lazy(() => import('./pages/PageError'));
const Home = lazy(() => import('./pages/Home'));
const Payment = lazy(() => import('./pages/Payment'));
const Profile = lazy(() => import('./pages/Profile'));
const PageCCV = lazy(() => import('./pages/CCV'));
const Tutorial = lazy(() => import('./pages/Tutorial'));

const AdminLogin = lazy(() => import('./pages/Admin/Login'));
const AdminDashboard = lazy(() => import('./pages/Admin/Dashboard'));

const { HOME, PRICING, LOGIN, SIGNUP, PAYMENT, PROFILE, CCV, TUTORIAL } = URL;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={TUTORIAL} />,
    errorElement: <PageError />,
  },
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
      {
        path: CCV,
        element: <PageCCV />,
      },
      {
        path: TUTORIAL,
        element: <Tutorial />,
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
