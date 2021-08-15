import * as React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { Dashboard } from '../features/dashboard';
import { History } from '../features/history';
import { Settings } from '../features/settings';
import { WorkoutsRoutes } from '../features/workouts';

const MainLayout = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/workouts/*" element={<WorkoutsRoutes />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default ProtectedRoutes;
