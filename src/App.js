//import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Help from './components/sectionHelp/Help';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<Home />*/}
      <Help />
      
    </div>
  );
}

export default App;
