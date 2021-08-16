import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../../../lib/auth';
import { BoldText } from '../../../components/BoldText';
import { Space } from '../../../components/Space';

const FullWidthButton = styled(Button)`
  width: 100%;
`;

export const UserInfoCard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { trainingMaxes, week } = user;

  const goToSettings = () => {
    navigate('../settings');
  };

  return (
    <Card>
      <CardContent>
        <Space size="small">
          <Typography variant="h6">User Info:</Typography>
          <Space size="xsmall" horizontal>
            <BoldText>Current Week:</BoldText>
            <Typography>{week}</Typography>
          </Space>
          <Space size="xsmall">
            <BoldText>Training Maxes</BoldText>
            <Typography>Press: {trainingMaxes.PRESS}</Typography>
            <Typography>Squat: {trainingMaxes.SQUAT}</Typography>
            <Typography>Bench: {trainingMaxes.BENCH}</Typography>
            <Typography>Deadlift: {trainingMaxes.DEADLIFT}</Typography>
          </Space>
          <FullWidthButton color="primary" onClick={goToSettings} variant="contained">
            Go To Settings
          </FullWidthButton>
        </Space>
      </CardContent>
    </Card>
  );
};
