import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Main, Section } from './styles';
import { useAuthenticate } from '../hooks/useAuthenticate';
import { getUser } from '../api';
import { localCache } from '../utils/localStorage';
import { useAlert } from '../contexts/alert';

export default function Layout() {
  const { showError } = useAlert();
  useAuthenticate();

  const reloadUser = async () => {
    try {
      const user = await getUser();
      localCache.setUser(user);
    } catch (error) {
      showError(error?.response?.data?.message || error?.message);
    }
  };

  useEffect(() => {
    (async () => {
      await reloadUser();
    })();
  }, []);

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
