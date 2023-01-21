import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';

const Layout = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Now is loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
