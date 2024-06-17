import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
    <div className="App">
       <Routes>
         <Route exact path="/" element={Home} />
         <Route path="/gallery" element={Gallery} />
         <Route path="/about" element={About} />
        </Routes>
   </div>
   </React.Fragment>
  );
};

export default App;

