import { AddForm } from 'components/AddForm/AddForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsAction } from 'redux/contacts/contactOperations';
import { selectError, selectIsLoading } from 'redux/selectors';
import css from './Contacts.module.css'


const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <AddForm className={css['add-form']}/>
      {isLoading && !error && <Loader />}
      <ContactsList className={css.contacts}/>
    </div>
  );
};
export default Contacts;
