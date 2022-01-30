import { Spin } from 'antd';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const File = lazy(() => import('./pages/File'));

const AppRoutes = () => {
  const styles = {
    margin: '20px 0',
    marginBottom: '20px',
    height: '100vh',
    padding: '20% 50%',
    TextAlign: 'center',
    borderRadius: '4px',
  };

  const Spinner = () => (
    <div style={styles}>
      <Spin size="large" />
    </div>
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<File />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
