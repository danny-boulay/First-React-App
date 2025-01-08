import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
import Clicker from './components/Clicker';
import NameUpdate from './components/NameUpdate';
import { useState } from 'react';

function App() {
  //Centralized data 
  const [username, setUsername] = useState("Danny");

  const promoData = {
    heading: "Don't miss this deal ",
    callToAction: "Subscribe and get",
    promo: "50% off",
    name: username
  };

  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Promo promoData={promoData}/>
      <NameUpdate onUpdate={setUsername}/>
      <Clicker/>
      <Intro1/>
      <Intro2/>
      <Intro3/>
      <Footer/>
    </div>
  )
}

export default App;
