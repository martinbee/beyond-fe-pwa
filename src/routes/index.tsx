import * as React from 'react';
import { useAuth } from '../lib/auth';

const ProtectedRoutes = React.lazy(() => import('./ProtectedRoutes'));
const PublicRoutes = React.lazy(() => import('./PublicRoutes'));

export const AppRoutes = () => {
  const auth = useAuth();

  return auth.user ? <ProtectedRoutes /> : <PublicRoutes />;
};
