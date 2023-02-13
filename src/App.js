import React from 'react';
import { Route, Routes } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

import { HomeTemplate } from './templates/HomeTemplates/HomeTemplate';
import { ContactTemplate } from './templates/ContactTemplate/ContactTemplate';
import { DetailTemplate } from './templates/DetailTemplate/DetailTemplate';
import LoginTemplate from './templates/LoginTemplate/LoginTemplate';
import SignUpTemplate from './templates/SignUpTemplate/SignUpTemplate';
import AboutTemplate from './templates/AboutTemplate/AboutTemplate';
import ShowtimesTemplate from './templates/ShowtimesTemplate/ShowtimesTemplate';
import NewsTemplate from './templates/NewsTemplate/NewsTemplate';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate'
import HistoryBookingTemplate from './templates/HistoryBookingTemplate/HistoryBookingTemplate';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import ContactTemplate from './templates/HistoryBookingTemplate/HistoryBookingTemplate';

// import Home from './views/Home/Home';
// import Contact from './views/Contact/Contact';
// import News from './views/News/News';
// import DeitailMovies from './views/Detail/DeitailMovies';
// import Login from './views/Login/Login';
// import Register from './views/Register/Register'
// import Checkout from './views/Checkout/Checkout';
// import Showtimes from './views/Showtimes/Showtimes';
// import About from './views/About/About';
// import HistoryBooking from './views/HistoryBooking/HistoryBooking';

import './App.css';

// export const history = createBrowserHistory()

function App() {
  return (
    <div className="wrapper m-auto overflow-hidden">
      {/* <HomeTemplate /> */}
      <ScrollToTop />
      <Routes >
        {/* <Switch> */}
        <Route exact path='/' element={<HomeTemplate />} />
        <Route exact path='/home' element={<HomeTemplate />} />
        <Route exact path='/showtimes' element={<ShowtimesTemplate />} />
        <Route exact path='/contact' element={<ContactTemplate />} />
        <Route exact path='/news' element={<NewsTemplate />} />
        <Route exact path='/login' element={<LoginTemplate />} />
        <Route exact path='/register' element={<SignUpTemplate />} />
        <Route exact path='/movie/:id' element={<DetailTemplate />} />
        <Route exact path='/about' element={<AboutTemplate />} />
        <Route exact path='/history-booking' element={<HistoryBookingTemplate />} />
        <Route exact path='/checkout/:id' element={<CheckoutTemplate />} />
        {/* </Switch> */}
      </Routes>
    </div>
  );
}

export default App;
