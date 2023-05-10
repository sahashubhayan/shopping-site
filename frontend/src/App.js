import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './styles/global.css';
import './styles/navbar.css';
import NavBar from './components/NavBar';
import Home from './pages/home';
import About from './pages/about';
import Shop from './pages/shop';
import Profile from './pages/profile';
import Cart from './pages/cart';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <NavBar />
     <main>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/shop' element= {<Shop/>} />
        <Route path='/profile' element= {<Profile/>} />
        <Route path='/cart' element= {<Cart/>} />
      </Routes>
     </main>
     <Footer/>
    </>
  );
}

export default App;
