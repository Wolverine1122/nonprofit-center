import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import Pages
import Home from './Pages/Home';
import Search from './Pages/Search';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import MapSearch from './Pages/MapSearch';
import NotFound from './Pages/NotFound';

//import permanent components
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import './Styles/app.scss';

function App() {
  return <div className='container'>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='map-search' element={<MapSearch />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router >
  </div>
}

export default App;