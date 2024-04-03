import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './card';
import Nav from './nav';
import Details from './detail.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import About from './About.jsx';
import Newnav from './newnav.jsx';


function App() {
  return (
    <>
      {/* <Nav /> */}
      <Newnav/>
      <Router>
        <Routes>
          <Route  path='/' element={<Card/>}></Route>
          <Route path='/detail/:id' element={<Details />} />
          <Route path='/about' element={<About/>}></Route>
          
        </Routes>
      </Router>
      {/* <Newnav/> */}
    </>
  );
}
export default App;
