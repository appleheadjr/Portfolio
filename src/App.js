
import './App.css';
import ContactMe from './components/Contactme';
import Internship from './components/Internship';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <>
    <Navbar/>
    <div>
      <Profile/>
    </div>
    <div>
      <Introduction/>
    </div>
    <div>
      <Internship/>
    </div>
    <div>
      <Projects/>
    </div>
    
    <div>
      <Skills/>
    </div>
    <div>
      <ContactMe/>
    </div>
    </>
  );
}

export default App;
