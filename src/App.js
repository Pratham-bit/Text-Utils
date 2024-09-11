import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Textform from './components/Textform';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#36454F';
      showalert("Dark Mode has been enabled.", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been enabled.", "success");
    }
  };

  return (
    <>
    <Router>
    
      <Navbar title="TextUtils" abouttext="About Textutils" mode={mode} togglemode={togglemode} text="Enable Dark Mode" />
      <Alert alert={alert} />
      <div className="container my-4">
        <Routes> 
           <Route path="/about" element={<About mode={mode}/>} /> 
           <Route path="/" element={<Textform showalert={showalert} heading="Try TextUtils - Word Counter,Character Counter, Remove Extra Spaces" mode={mode} />} /> 
          
        </Routes> 
        {/* <Textform showalert={showalert} heading="Enter the text to analyze" mode={mode} /> */}
      </div>
    </Router> 
    </>
  );
}

export default App;
