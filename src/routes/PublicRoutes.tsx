import { Navigate, Route, Routes } from 'react-router-dom';

// import { AuthRoutes } from '@/features/auth';
// import { Landing } from '@/features/misc';
const AuthRoutes = () => <div>Auth</div>;
const Landing = () => <div>Landing</div>;

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PublicRoutes;
