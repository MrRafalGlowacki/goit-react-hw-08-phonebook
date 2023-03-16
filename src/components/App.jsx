import React, { lazy } from 'react';
// import { AddForm } from './AddForm/AddForm';
// import { ContactList } from 'components/ContactsList/ContactsList';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import { fetchContactsAction } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';
// import Contacts from 'pages/Contacts';
// import Home from 'pages/Home';
// import { Loader } from './Loader/Loader';

const baseUrl = '/goit-react-hw-08-phonebook';
const Home = lazy(() => import('pages/Home'));
// const Register = lazy(() => import('pages/Register'));
const NotFound = lazy(() => import('pages/NotFound'));
const Contacts = lazy(() => import('pages/Contacts'));
// const Login = lazy(() => import('pages/Login'));

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // useEffect(() => {
  //   dispatch(fetchContactsAction());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path={`${baseUrl}/`} element={<Home />} />
      <Route path={`${baseUrl}/login`} element={<Login />} />
      <Route path={`${baseUrl}/register`} element={<Register />} />
      <Route path={`${baseUrl}/contacts`} element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    // <>
    //   <AddForm />
    //   {isLoading && !error && <Loader />}
    //   <ContactList />
    // </>
  );
};
