import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

// import { MainLayout } from '@/components/Layout';
// import { Landing, Dashboard } from '@/features/misc';
// import { Profile, Users } from '@/features/users';

const Dashboard = () => <div>Dashboard</div>;
const Landing = () => <div>Landing</div>;
const Profile = () => <div>Landing</div>;
const Users = () => <div>Landing</div>;
const MainLayout = ({ children }) => <div>{children}</div>;

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/app" element={<App />}>
        <Route path="/users/*" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default ProtectedRoutes;
