import React from 'react'
import './App.css';
import Header from './Header';
import Nav from './Nav.js'
import Main from './Main.js'
import Footer from './Footer.js'
import Specials from './Specials.js'
import BookingPage from './BookingPage';






function App() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <Main>
      <BookingPage />
    </Main>
    <Footer></Footer>
    </>
  );
}

export default App;
