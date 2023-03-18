import React, { Suspense } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectContacts, selectFilter } from 'redux/selectors';
import { setFilterAction } from 'redux/filtersSlice';
import logo from '../../components/Icon/Phonebook192x192.png';
import css from './SearchAppBar.module.css';
import UserMenu from 'components/UserMenu/UserMenu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const SearchAppBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contactsList = useSelector(selectContacts);
  const contactsAmount = contactsList.length;
  const handleChange = event => {
    const value = event.target.value;
    dispatch(setFilterAction(value));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <img
              src={logo}
              alt="phonebook icon"
              width={35}
              height={35}
              className={css.logo}
            />
            <Box
              sx={{ marginRight: 'auto', display: { xs: 'none', sm: 'block' } }}
            >
              <Typography variant="h6" noWrap component="div">
                Phonebook
              </Typography>
              <Typography variant="h9" noWrap>
                {contactsAmount === 0
                  ? 'You have no contacts'
                  : contactsAmount === 1
                  ? 'You have only one contact'
                  : `You have ${contactsAmount} contacts`}
              </Typography>
            </Box>
            <Search sx={{ marginRight: 'auto' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
                autoComplete="off"
                type="text"
                name="filter"
                value={filter}
              />
            </Search>
            <UserMenu />
            <Button
              className={css.btn}
              variant="contained"
              type="button"
              onClick={() => dispatch(logOut())}
            >
              LogOut
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </Box>
  );
};
