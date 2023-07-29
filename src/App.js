import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/styles.css'

import { Home, Contact, Blog, About, Video, Gallery, Sermons } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sermons" element={<Sermons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
