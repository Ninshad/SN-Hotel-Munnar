import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Rooms from './Pages/Rooms';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/rooms" element={<Rooms/>} />
      <Route path="/contact" element={<Contact/>} />
      
      </Routes>
    </Router>
    </>
  );
}

export default App;
