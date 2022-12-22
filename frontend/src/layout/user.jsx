import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Main, Section } from './styles';
import { useAuthenticate } from '../hooks/useAuthenticate';

export function LayoutUser() {
  const { reloadUser } = useAuthenticate();

  return (
    <>
      <CssBaseline />
      <Main maxWidth={false}>
        <Section>
          <Header />
          <Outlet context={{ reloadUser }} />
        </Section>
        <Footer />
      </Main>
    </>
  );
}
