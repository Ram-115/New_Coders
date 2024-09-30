import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toolbar, Box } from '@mui/material';
import NavBar from '../NavBar';
import SideBar from '../SideBar';

function Home() {

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar/>
      <SideBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Home;
