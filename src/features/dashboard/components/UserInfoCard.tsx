import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import Settings from '@material-ui/icons/Settings';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../lib/auth';

// const CREATE_WORKOUT = gql`
//   mutation CreateWorkout($input: CreateWorkoutInput!) {
//     createWorkout(input: $input) {
//       workout {
//         id
//         user {
//           activeWorkout {
//             id
//             liftType
//           }
//           id
//           week
//         }
//       }
//     }
//   }
// `;

// const COMPLETE_WORKOUT = gql`
//   mutation CompleteWorkout($input: CompleteWorkoutInput!) {
//     completeWorkout(input: $input) {
//       workout {
//         id
//         user {
//           activeWorkout {
//             id
//             liftType
//           }
//           id
//           week
//         }
//       }
//     }
//   }
// `;

// could take props instead
export const UserInfoCard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { trainingMaxes } = user;

  const goToSettings = () => {
    navigate('../settings');
  };

  return (
    <Card>
      <CardContent>
        <IconButton onClick={goToSettings}>
          <Settings />
        </IconButton>
        <div>
          <Typography>Press: {trainingMaxes.PRESS}</Typography>
          <Typography>Squat: {trainingMaxes.SQUAT}</Typography>
          <Typography>Bench: {trainingMaxes.BENCH}</Typography>
          <Typography>Deadlift: {trainingMaxes.DEADLIFT}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
