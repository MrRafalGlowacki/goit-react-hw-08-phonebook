import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { SelectUserEmail, SelectUserName } from 'redux/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const userName = useSelector(SelectUserName);
  const userEmail = useSelector(SelectUserEmail);
  return (
    <Box sx={{}} className={css.box}>
      <Typography sx={{}} className={css.name}>
        Welcome, {userName}!
      </Typography>
      <Typography sx={{}} className={css.email}>
        {userEmail}
      </Typography>
    </Box>
  );
};

export default UserMenu;
