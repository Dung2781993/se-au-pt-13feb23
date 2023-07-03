import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Posts from '../components/Posts';
import Dashboard from '../components/Dashboard';
import NotFound from '../components/NotFound';

export const AppRoutes = (props) => {
  return (
    <Routes>
      <Route exact path='/' element={<Home {...props} />}>
        <Route path='/home' element={<Home {...props} />} />
        <Route path='/posts' element={<Posts {...props} />} />
      </Route>
      <Route path='/dashboard' element={<Dashboard {...props} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}