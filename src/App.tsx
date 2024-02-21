import './App.css';
import NavBar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './pages/home';
import Bibliotheque from './pages/Bibliotheque/Bibliotheque';
import Profil from './pages/Profil/Profil';
import About from './pages/About/About';
import SideBar from './components/SideBar/Sidebar';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={Home} / >
            <Route exact path='/Bibliotheque' Component={Bibliotheque} />
            <Route exact path='/Profil' Component={Profil}/>
            <Route exact path='/About' Component={About}/>
            <Route exact path='/Signup' Component={Signup}/>
            <Route exact path='/Login' Component={Login}/>
        </Routes>
    
      </BrowserRouter>
    </>
  );
}

export default App;
