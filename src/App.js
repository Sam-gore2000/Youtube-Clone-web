
import './App.css';
import Navbar from './Component/Navbar';
import React,{useState} from "react";
import {BrowserRouter as Router,Routes, Route,} from "react-router-dom";
import Home from './Page/Home/Home';
import Video from './Page/Video/Video';
import Videoplay from './Component/Videoplay';


function App() {
const[sidebar ,setSidebar]=useState(true);

  return (
    <div className="App">
    <Navbar setSidebar={setSidebar} />
    <div className='data'>
    <Videoplay />
    </div>

    <Router>
      <Routes>
        <Route path='/' element={<Home  sidebar={sidebar} />}/>
        <Route path='/Video/:categoryId.:videoId' element={<Video/>}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
