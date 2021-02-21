//import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Help from './components/sectionHelp/Help';
import EngageService from './components/engageSection/EngageService';
import ModalCall from './components/common/Modal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />   
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/services">
                <EngageService />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
