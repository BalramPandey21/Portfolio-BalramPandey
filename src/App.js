import React from 'react';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Pages/Home/Home';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Contect from './Components/Pages/Contects/Contect';
import Journey from './Components/Pages/Journey/Journey';
const App=()=>{
return(<div>
  <Navbar/>
  <Home/>
  <AboutMe/>
  <Journey/>
  <Contect/>

</div>)
}
export default App;