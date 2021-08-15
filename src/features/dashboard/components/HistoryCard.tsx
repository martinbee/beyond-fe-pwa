import { Card, CardContent, Typography } from '@material-ui/core';

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
export const HistoryCard = () => {
  const { user } = useAuth();
  const { week } = user;

  return (
    <Card>
      <CardContent>
        <div>
          <Typography>Filler: {week}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
