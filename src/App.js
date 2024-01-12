import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SpartanAbode from '../src/components/SpartanAbode';
import Testimonials from './components/Testimonials';
import Alert from './components/Alert';
import Perks from './components/Perks';
import Pricing from './components/Pricing';
import Warriors from './components/Societies';
import Societies from './components/Warriors';

function App() {
  const [alert, setAlert] = useState(null);
  const DisplayAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }
  const initialMode = localStorage.getItem('mode') || 'light';
  const [mode, setMode] = useState(initialMode);
  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? 'black' : 'white';
    // Save the mode to local storage whenever it changes
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      DisplayAlert("Dark Mode is enabled","success");
    }
    else{
      setMode('light');
      DisplayAlert("Light Mode is enabled","success");
    }
  };
  
  return (
    <>
    <NavBar name="Vinayak Santhosh" mode={mode} toggleMode={toggleMode} DisplayAlert={DisplayAlert}/>
    <Alert alert={alert}/>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<SpartanAbode/>}></Route>
          <Route path='/testimonial' element={<Testimonials name="Vinayak Santhosh" mode={mode} toggleMode={toggleMode} DisplayAlert={DisplayAlert}/>}></Route>
          <Route path='/perks' element={<Perks name="Vinayak Santhosh" mode={mode}/>}></Route>
          <Route path='/pricing' element={<Pricing name="Vinayak Santhosh" mode={mode}/>}></Route>
          <Route path='/societies' element={<Societies name="Vinayak Santhosh" mode={mode}/>}></Route>
          <Route path='/warriors' element={<Warriors name="Vinayak Santhosh" mode={mode}/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
