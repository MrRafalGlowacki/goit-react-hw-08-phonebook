import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputHandlerAction } from 'redux/contactsSlice';
import { selectName } from 'redux/selectors';
import css from './AddName.module.css';

export const AddName = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  const handleChange = event => {
    const payload = { name: event.target.name, value: event.target.value };
    dispatch(inputHandlerAction(payload));
  };

  return (
    <>
      <label htmlFor="name" className={css.name}>
        Name
      </label>
      <input
        onChange={handleChange}
        autoComplete="off"
        placeholder="Enter Name"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-źА-Ź]+(([' -][a-zA-Zа-źА-Ź ])?[a-zA-Zа-źА-Ź]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};
