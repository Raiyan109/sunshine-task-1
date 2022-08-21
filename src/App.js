import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Stats from './components/Stats/Stats';
import Courses from './components/Courses/Courses';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
