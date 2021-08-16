import { Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import styled from 'styled-components';

import { BoldText } from './BoldText';
import { Space } from './Space';
import { Lift, LiftType } from '../types';

const SuccessIcon = styled(CheckIcon)`
  color: #8bc34a;
`;

type PastWorkoutProps = {
  coreSets: Lift[];
  didFirstSetLast: boolean;
  didWarmUp: boolean;
  liftType: LiftType;
};

export const PastWorkout = ({
  coreSets,
  didFirstSetLast,
  didWarmUp,
  liftType,
}: PastWorkoutProps) => (
  <Space size="small">
    <Space horizontal size="xxsmall">
      <BoldText>Lift:</BoldText>
      <Typography>{liftType}</Typography>
    </Space>
    <Space horizontal size="xxsmall">
      <BoldText>Did Warm Up</BoldText>
      {didWarmUp && <SuccessIcon />}
    </Space>
    <Space horizontal size="small">
      <BoldText>Core Sets:</BoldText>
      {coreSets.map(({ completed, reps, weight }) => (
        <Space horizontal size="xxsmall">
          <Typography key={weight}>
            {weight} x {reps}
          </Typography>
          {completed && <SuccessIcon />}
        </Space>
      ))}
    </Space>
    <Space horizontal size="xxsmall">
      <BoldText>Did First Set Last</BoldText>
      {didFirstSetLast && <SuccessIcon />}
    </Space>
  </Space>
);
