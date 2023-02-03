import { useContext } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import { Experience } from './Components/Experiences/Experience';
import Footer from './Components/Footer/Footer';
import { Intro } from './Components/Intro/Intro';
import { NavBar } from './Components/NavBar/NavBar';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Services } from './Components/Services/Services';
import Testimonials from './Components/Testmonials/Testimonials';
import { Works } from './Components/Works/Works';
import { themeContext } from './Context/Context';
function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : ''
      }}
    >
      <NavBar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
