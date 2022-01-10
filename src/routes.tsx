import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

const AppRoutes = () => {
  const Spinner = () => (
    <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      {' '}
    </svg>
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
