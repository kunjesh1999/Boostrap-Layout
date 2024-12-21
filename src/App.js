
import './App.css';

import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About'
import Navbar from './Components/Navbar';
import Scholarship from './Components/Scholarship';
// import Contact from './Components/Contact.JS';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About'element={<About/>}/>
      <Route path='/scholarship' element={<Scholarship/>}/>
    
      </Routes>
   </BrowserRouter>
  );
}

export default App;
