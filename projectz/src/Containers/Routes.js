import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInPage from './Layout/LogIn/LogIn';
import Home from './Layout/HomePage';
import PostCard from './Components/Feeds';
import Networks from './Components/Networks';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage/>} />
        <Route path="/home" element={<Home/>}>
          <Route path="feeds" element={<PostCard/>} />
          <Route path="networks" element={<Networks/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes;