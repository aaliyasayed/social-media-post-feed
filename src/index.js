import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/main.scss';

import Header from './components/header';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import LoginScreen from './screens/LoginScreen';
import PageNotFound from './screens/PageNotFound';

class Index extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Header />
          <div className='main-wrapper'>
            <div className='global-container margin-auto'>
              <Routes>
                <Route path='/' element={<HomeScreen />}/>
                <Route path='/post/:id' element={<PostScreen />} />
                <Route path='/login' element={<LoginScreen />} />
                <Route path='*' element={<PageNotFound />}/>
              </Routes>
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
