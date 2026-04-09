import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';

import Footer from './components/Footer';
import Contactus from './components/pages/Contactus';
import BlogSectionClassic from './components/pages/What-We-Do';
import Nav from './components/pages/Navigation';
import Whoweare from './components/pages/who-we-are';
import Whatwedo from './components/pages/What-We-Do';

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogSectionClassic />} />
         <Route path="/contact" element={<Contactus />} />



          <Route path="/who-we-are" element={<Whoweare />} />
          <Route path="/what-we-do" element={<Whatwedo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
