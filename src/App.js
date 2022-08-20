import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Stats from './components/Stats/Stats';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Stats />
    </div>
  );
}

export default App;
