import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  isLoggedIn,
  redirectTo = '/login',
  children,
}) {
  if (!isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
  redirectTo: PropTypes.string,
  children: PropTypes.node,
};
