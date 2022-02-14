import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {logoutUser, toggleLoginModal} from '../../store/auth/actions';
import './style.scss';

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();

  const openLoginModal = () => dispatch(toggleLoginModal(true));
  const logout = () => dispatch(logoutUser());

  const handleClick = () => {
    isLoggedIn ? logout() : openLoginModal();
  };

  return (
    <nav className='header'>
      <div className='container global-container'>
        <div className='row d-flex justify-content-between align-items-center'>
          <div className='col-auto'>
            <Logo />
          </div>
          <div className='col-auto cursor-pointer header-login-space' onClick={handleClick}>
            <div>{isLoggedIn ? 'Logout' : 'Login'}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        Torum
      </Link>
    </div>
  );
};

export default Header;
