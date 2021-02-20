//import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Help from './components/sectionHelp/Help';
import EngageService from './components/engageSection/EngageService';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<Home />
      <EngageService />*/}
      <Help />
      
      
    </div>
  );
}

export default App;
