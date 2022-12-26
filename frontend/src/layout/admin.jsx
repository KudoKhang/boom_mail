import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import HeaderAdmin from '../components/HeaderAdmin';
import Footer from '../components/Footer';
import { Main, Section } from './styles';
import { useAuthenticate } from '../hooks/useAuthenticate';

export function LayoutAdmin() {
  useAuthenticate();

  return (
    <>
      <CssBaseline />
      <Main maxWidth={false}>
        <Section>
          <HeaderAdmin />
          <Outlet />
        </Section>
        <Footer />
      </Main>
    </>
  );
}
