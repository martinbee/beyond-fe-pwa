export type LiftType = 'BENCH' | 'PRESS' | 'DEADLIFT' | 'SQUAT';

export type Lift = {
  completed: boolean;
  reps: number;
  weight: number;
};

export type Workout = {
  active: boolean;
  id: string;
  coreSets: Lift[];
  didFirstSetLast: boolean;
  didWarmUp: boolean;
  jokerSets: Lift[];
  liftType: LiftType;
};
