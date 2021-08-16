import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../../../lib/auth';
import { PastWorkout } from '../../../components/PastWorkout';
import { Space } from '../../../components/Space';

const FullWidthButton = styled(Button)`
  width: 100%;
`;

// could take props instead
// super hacky, need to get pagination and keep workout from history if it is active
export const HistoryCard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { activeWorkout, history } = user;
  const mostRecentWorkoutIndex = Boolean(activeWorkout) ? 1 : 0;
  const mostRecentWorkout = history[mostRecentWorkoutIndex];

  if (!mostRecentWorkout) return null;

  const goToHistory = () => navigate('../history');

  const { coreSets, didFirstSetLast, didWarmUp, liftType } = mostRecentWorkout;

  return (
    <Card>
      <CardContent>
        <Space size="small">
          <Typography variant="h6">Previous Lift:</Typography>
          <PastWorkout
            coreSets={coreSets}
            didFirstSetLast={didFirstSetLast}
            didWarmUp={didWarmUp}
            liftType={liftType}
          />
          <FullWidthButton color="primary" onClick={goToHistory} variant="contained">
            Go To History
          </FullWidthButton>
        </Space>
      </CardContent>
    </Card>
  );
};
