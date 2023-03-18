import React, { lazy, Suspense, useEffect } from 'react';
// import { AddForm } from './AddForm/AddForm';
// import { ContactList } from 'components/ContactsList/ContactsList';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import { fetchContactsAction } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
// import Login from 'pages/Login';
// import Register from 'pages/Register';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from './castomHook/useAuth';
// import Contacts from 'pages/Contacts';
// import Home from 'pages/Home';
import { Loader } from './Loader/Loader';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

const baseUrl = '/goit-react-hw-08-phonebook';
const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const NotFound = lazy(() => import('pages/NotFound'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isAuthorized, isRefreshing } = useAuth();
  console.log('auth:', isAuthorized, 'refresh:', isRefreshing);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path={`${baseUrl}/contacts`}
          element={
            <PrivateRoute component={<Contacts />} redirect={'/login'} />
          }
        />
        <Route
          path={`${baseUrl}/`}
          element={<PublicRoute component={<Home />} />}
        />
        <Route
          path={`${baseUrl}/login`}
          element={<PublicRoute component={<Login />} />}
        />
        <Route
          path={`${baseUrl}/register`}
          element={<PublicRoute component={<Register />} />}
        />
        <Route path="*" element={<PublicRoute component={<NotFound />} />} />
      </Routes>
    </Suspense>

    // <>
    //   <AddForm />
    //   {isLoading && !error && <Loader />}
    //   <ContactList />
    // </>
  );
};
