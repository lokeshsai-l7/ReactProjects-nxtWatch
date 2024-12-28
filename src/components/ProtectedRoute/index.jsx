import { Navigate, Route } from 'react-router-dom';
import Cookie from 'js-cookie';

const ProtectedRoute = ({ element }) => {
  const token = Cookie.get('jwt_token');
  if (token === undefined) {
    return <Navigate to="/login" replace />;
  }
  return element;
};

export default ProtectedRoute;
