import { AddForm } from 'components/AddForm/AddForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsAction } from 'redux/contacts/contactOperations';
import { selectError, selectIsLoading } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);
  return (
    <>
      <AddForm />
      {isLoading && !error && <Loader />}
      <ContactsList />
    </>
  );
};
export default Contacts;
