import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import BuySell from './components/buysell/BuySell';
import Blogs from './components/blogs/Blogs.jsx';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
    <Navbar />
    <Home />
    <BuySell />
    <Blogs />
    <Footer />
  </div>
  )
}

export default App
