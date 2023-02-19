
import './App.css';
import LandingPage from './LandingPage';
import Gallery from './Gallery'
import AboutUs from './AboutUs';
import Donate from './Donate';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './NavBar';



function App() {
  return (
      // <>
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route exact path='/' element={<LandingPage />}></Route>
          <Route exact path='/gallery' element={<Gallery />}></Route>
          <Route exact path='/aboutus' element={<AboutUs />}></Route>
          <Route exact path='/donate' element={<Donate />}></Route>

        </Routes>
      </Router>
    // </>
  );
}

export default App;
