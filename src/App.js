import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import NotFound from './Pages/NotFound';
import './Styles/app.css'

function App() {
  return <Router>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/search'>Search Nonprofits</Link>
      <Link to='/sign-in'>Sign In/Sign Up</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='search' element={<Search />} />
      <Route path='sign-in' element={<SignIn />} />
      <Route path='sign-up' element={<SignUp />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router >
}

export default App;