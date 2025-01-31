import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
//   const [backendData, setBackendData] = useState([{}])
//   useEffect(() => {
//   fetch("/api").then(
//     response => response.json()
//   ).then(
//     data => {
//       setBackendData(data)
//     }
//   )
// }, [])

  return (
    <Router>
      <Header/>
      <Navbar />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="*" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact/*" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App;