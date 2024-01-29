import React from 'react';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Home from 'modules/pokemon/presenter/list';
import Detalhes from 'modules/pokemon/presenter/details';

import DashboardLayout from 'shared/layout/dashboard';

const Navigation: React.FC = () => {
  const Layout = DashboardLayout;

  const getLayout = (element: React.ReactNode) => {
    return (
      <>
        <Layout {...{hideDrawer: false, floating: true}}> {element} </Layout>
        <Outlet />
      </>
    );
  };
  return (
    <BrowserRouter {...{basename: import.meta.env.VITE_BASE_PATH ?? ''}}>
      <Routes>
        <Route path="/" element={getLayout(<Home />)}></Route>
        <Route path={'details/:id'} element={getLayout(<Detalhes />)}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
