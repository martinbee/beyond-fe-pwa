import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '@material-ui/icons/FitnessCenter';
import styled from 'styled-components';

import { useAuth } from '../lib/auth';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  min-height: 100vh;
`;
const SpacedToolbar = styled(Toolbar)`
  justify-content: space-between;
`;
const Content = styled(Container)`
  padding: 1.5rem;
`;

const getFullName = ({ firstName, lastName }: { firstName: string; lastName: string }): string =>
  `${firstName} ${lastName}`;

export const MainLayout = ({ children }: { children: React.ReactChild }) => {
  const { user } = useAuth();

  return (
    <Page>
      <AppBar position="static">
        <SpacedToolbar>
          <Logo />
          <Typography variant="h5">Beyond 5/3/1</Typography>
          <Typography>{getFullName(user)}</Typography>
        </SpacedToolbar>
      </AppBar>
      <Content maxWidth="sm">{children}</Content>
    </Page>
  );
};
