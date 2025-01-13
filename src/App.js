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
import ThemeToggle from './components/ThemeToggle';
import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

export const ThemeContext = React.createContext();

function App() {
  const [username, setUsername] = useState("Danny"); //hook
  const [theme, setTheme] = useState('dark'); //hook

  //Data centralisée pour le banner
  const promoData = {
    heading: "Don't miss this deal ",
    callToAction: "Subscribe and get",
    promo: "50% off",
    name: username
  };

  //function pour toggleTheme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`App ${theme}`}>
        <Header/>
        <Nav name={promoData.name}/>
        <ThemeToggle/>
        <Routes>
          <Route path="/promo" element={<Promo promoData={promoData}/>}></Route>
          <Route path="/name" element={<NameUpdate onUpdate={setUsername}/>}></Route>
          <Route path="/clicker-game" element={<Clicker/>}></Route>
          <Route 
            path='/articles' 
            element={
              <>
                <Intro1/>
                <Intro2/>
                <Intro3/>
              </>
            }>
          </Route>
        </Routes>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
