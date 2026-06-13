import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../lib/auth';

export default function ProtectedRoute() {
  if (!isLoggedIn()) {
    return <Navigate to="/admin/login" replace />;
  }
  return <Outlet />;
}
