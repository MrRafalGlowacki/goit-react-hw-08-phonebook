import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsListItem.module.css';
import { useDispatch } from 'react-redux';
import { setOpenedContact, updateModalState } from 'redux/modal/modalSlice';

export const ContactsListItem = ({
  contact,
  id,
  name,
  number,
  onContactRemove,
}) => {
  const dispatch = useDispatch();
  const handleContactsEdit = contact => {
    dispatch(updateModalState());
    dispatch(setOpenedContact(contact));
  };
  return (
    <li
      key={id}
      className={css.item}
      onClick={() => handleContactsEdit(contact)}
    >
      <span className={css.name}>
        {name}: {number}
      </span>{' '}
    
      <button
        type="button"
        className={css.button}
        onClick={() => onContactRemove(id, name)}
      >
        X
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  number: PropTypes.string,
  onContactRemove: PropTypes.func,
};
