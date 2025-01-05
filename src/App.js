import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Promo name="Danny"/>
      <Intro1/>
      <Intro2/>
      <Intro3/>
      <Footer/>
    </div>
  )
  /*
  return ( //On pourrait penser que le code qui suit est du html mais c'est du jsx
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
