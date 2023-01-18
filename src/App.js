import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import { Resume } from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Contact from './Components/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"}>
        <Route exact path={"/Home"} element={<Home/>}/>
        <Route exact path={"/About"} element={<About/>}/>   
        <Route exact path={"/Resume"} element={<Resume/>}/>    
        <Route exact path={"/Portfolio"} element={<Portfolio/>}/>     
        <Route exact path={"/Services"} element={<Services/>}/>
        <Route exact path={"/Contact"} element={<Contact/>}/>

        
        </Route>
      </Routes>
      </BrowserRouter>
     
    
    </div>


  );
}

export default App;
