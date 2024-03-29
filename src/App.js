import './App.css';
import './styles/navbar_styles.css';
import './styles/pages_styles.css'
import './styles/footer_styles.css'

import { BrowserRouter as Router,
Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import RoutineBuiler from './pages/RoutineBuilder';
import MobileNav from './components/MobileNav/MobileNav';



import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <MobileNav/>
          <NavBar/>

          <Routes>
              <Route path="/" element={ <Home/>} />
              <Route path="/About" element={ <About/>} />
              <Route path="/Contact" element={ <Contact/>} />
              <Route path="/Login" element={ <Login/>} />
              <Route path="/SignUp" element={ <SignUp/>} />
              <Route path="/RoutineBuilder" element={ <RoutineBuiler/>} />

          </Routes>

          <Footer/>

        </Router>  


    </div>
  );
}

export default App;
