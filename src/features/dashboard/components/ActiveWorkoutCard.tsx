import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../../../lib/auth';

const CenteredCardContent = styled(CardContent)`
  justify-content: center;
  text-align: center;
`;
const StyledCardActions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  & button:not(:first-child) {
    margin-top: 1rem;
  }
`;

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
export const ActiveWorkoutCard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { activeWorkout, week } = user;

  const hasActiveWorkout = Boolean(activeWorkout);

  const goToActiveWorkout = () => {
    navigate(`/workouts/${activeWorkout.id}`);
  };

  return (
    <Card>
      <CenteredCardContent>
        {hasActiveWorkout ? (
          <div>
            <Typography variant="h6">Current Lift:</Typography>
            <Typography>
              Week {week} {activeWorkout.liftType}
            </Typography>
          </div>
        ) : null}
        <StyledCardActions>
          {hasActiveWorkout ? (
            <>
              <Button onClick={goToActiveWorkout} variant="contained" color="primary">
                Go To
              </Button>
              <Button color="secondary" variant="outlined">
                Create New Workout
              </Button>
            </>
          ) : (
            <Button color="primary" variant="contained">
              Get Started By Creating A New Workout
            </Button>
          )}
        </StyledCardActions>
      </CenteredCardContent>
    </Card>
  );
};
