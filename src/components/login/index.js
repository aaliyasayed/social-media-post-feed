import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { authenticateUser, toggleLoginModal} from '../../store/auth/actions';
import './style.scss';

const Login = () => {
  const dispatch = useDispatch();
  const { loginModal: isOpen, loginError } = useSelector((state) => state.Auth);
  const closeModal = () => dispatch(toggleLoginModal(false));

  const [user, setUser] = useState({email: '', password: ''});
  const customStyles = {
    overlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: '99'
    },
    content: {
      width: '500px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '0px',
      overflow: 'hidden',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#0c0f13',
      border: 'none',
    }
  };

  const login = () => {
    if (user.email && user.password) {
      dispatch(authenticateUser(user));
    }
  };

  const handleOnChange = (key, value) => {
    setUser({...user, [key]: value});
  }

  return (
    <Modal isOpen={isOpen} overlayClassName='Overlay' onRequestClose={closeModal} shouldCloseOnOverlayClick={true} ariaHideApp={false} style={customStyles}>
      <div className='modal-body d-flex'>
        <div className='close' onClick={closeModal}><i className='fa fa-times'></i></div>
        <div className='login-content d-flex flex-column'>
          <div className='heading'>Login to your account</div>
          <input type='email' name='username' placeholder='Email' onChange={(e) => handleOnChange('email', e.target.value)} />
          <input type='password' name='password' placeholder='Password' onChange={(e) => handleOnChange('password', e.target.value)}/>
          <div className='btn-login' onClick={login}>LOGIN</div>

          <div className='text-danger mt-3 text-center'>{loginError}</div>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
