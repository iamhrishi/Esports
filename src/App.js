import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Home from './components/Home';
import { Routes , Route } from "react-router-dom";
import News from './components/News';
import GameNews from './components/GameNews';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type) =>{
      setAlert({
        message:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#e9ecef';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} mode={mode} toggleMode={toggleMode}/>
    <Routes>
    <Route exact path='/home' element={<Home mode={mode} toggleMode={toggleMode}/>}/>
    <Route exact path='/about' element={<About mode={mode} toggleMode={toggleMode}/>}/>
    <Route exact path='/News' element={<News mode={mode} toggleMode={toggleMode}/>}/>
    <Route exact path='/Games' element={<GameNews mode={mode} toggleMode={toggleMode}/>}/>
    <Route exact path='/Login' element={<Login mode={mode} toggleMode={toggleMode}/>}/>
    </Routes>
    <Footer mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
