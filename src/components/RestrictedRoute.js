import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({
  isLoggedIn,
  redirectTo = '/contacts',
  children,
}) {
  if (isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}

RestrictedRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
  redirectTo: PropTypes.string,
  children: PropTypes.node,
};
