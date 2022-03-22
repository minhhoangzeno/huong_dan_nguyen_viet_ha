
import React from 'react';
// vendor styles
import "react-datetime/css/react-datetime.css";
import ReactDOM from 'react-dom';
import 'react-progress-bar-plus/lib/progress-bar.css';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
// import { PrivateToken } from './pages/PrivateToken';
import { ToastProvider } from 'react-toast-notifications';
import ScrollToTop from "./components/ScrollToTop";
import AuthenProvider from './context/AuthenProvider';
import { store } from './redux/store';
import HomePage from './pages/HomePage'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// core styles
import "./scss/volt.scss";


ReactDOM.render(
  <ReduxProvider store={store} >
    <AuthenProvider>
      <ToastProvider>
        <BrowserRouter basename="/" >
          <ScrollToTop />
          <HomePage />
        </BrowserRouter>
      </ToastProvider>
    </AuthenProvider>
  </ReduxProvider>
  ,
  document.getElementById("root")
);
