import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {toggleLoginModal} from '../../store/auth/actions';

const Header = () => {
  const dispatch = useDispatch();
  const openLoginModal = () => dispatch(toggleLoginModal(true));

  return (
    <nav className='header'>
      <div className='container'>
        <div className='row d-flex justify-content-between align-items-center'>
          <div className='col-auto'>
            <Logo />
          </div>
          <div className='col-auto' onClick={openLoginModal}>
            <div>Login</div>
          </div>
        </div>
      </div>
      <style>{`
        .header {
          background-color: #fff;
          border-bottom: 1px solid #dee2e6;
          display: flex;
          align-items: center;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 999;
          height: 60px;
          box-shadow: 0 4px 4px rgb(0 0 0 / 10%);
        }
        .logo {
          font-size: 20px;
          font-weight: 900;
        }
        a {
          line-height: 22px;
          color: $colorPrimary !important;
          text-align: center;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        Feedogram
      </Link>
    </div>
  );
};

export default Header;
