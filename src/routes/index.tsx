import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';
import styled from 'styled-components';

import { useAuth } from '../lib/auth';

const FullCenter = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const ProtectedRoutes = React.lazy(() => import('./ProtectedRoutes'));
const PublicRoutes = React.lazy(() => import('./PublicRoutes'));

export const AppRoutes = () => {
  const auth = useAuth();

  if (auth.loading) {
    return (
      <FullCenter>
        <CircularProgress />
      </FullCenter>
    );
  }

  return auth.user ? <ProtectedRoutes /> : <PublicRoutes />;
};
