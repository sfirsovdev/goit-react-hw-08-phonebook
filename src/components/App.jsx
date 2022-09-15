import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import RegisterView from 'pages/RegisterView';
import LoginView from 'pages/LoginView';
import ContactsView from 'pages/ContactsView';
import AppBar from './AppBar';
import { authOperations, authSelectors } from 'redux/auth';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoading = useSelector(authSelectors.getIsLoading);

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isLoading && (
        <>
          <AppBar />
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route
              path="/register"
              element={
                <RestrictedRoute isLoggedIn={isLoggedIn}>
                  <RegisterView />
                </RestrictedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <RestrictedRoute isLoggedIn={isLoggedIn}>
                  <LoginView />
                </RestrictedRoute>
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <ContactsView />
                </PrivateRoute>
              }
            ></Route>

            <Route
              path="*"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <ContactsView />
                </PrivateRoute>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
};
