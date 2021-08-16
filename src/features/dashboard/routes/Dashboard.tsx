import { Space } from '../../../components/Space';
import { ActiveWorkoutCard, HistoryCard, UserInfoCard } from '../components';

export const Dashboard = () => {
  return (
    <Space>
      <ActiveWorkoutCard />
      <UserInfoCard />
      <HistoryCard />
    </Space>
  );
};
