import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Stats from './components/Stats/Stats';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Stats />
      <Courses />
    </div>
  );
}

export default App;
