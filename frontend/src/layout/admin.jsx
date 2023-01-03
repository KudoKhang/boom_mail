import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import HeaderAdmin from '../components/HeaderAdmin';
import Footer from '../components/Footer';
import { Main, Section } from './styles';
import { useAdminAuthenticate } from '../hooks/useAdminAuthenticate';

export function LayoutAdmin() {
  const { user } = useAdminAuthenticate();

  return (
    <>
      <CssBaseline />
      <Main maxWidth={false}>
        <Section>
          <HeaderAdmin user={user} />
          <Outlet />
        </Section>
        <Footer />
      </Main>
    </>
  );
}
