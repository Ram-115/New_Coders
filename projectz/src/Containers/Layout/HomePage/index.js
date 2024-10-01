import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toolbar, Box, Grid } from '@mui/material';
import NavBar from '../NavBar';
import SideBar from '../SideBar';

function Home() {

  return (
    <Grid container sx={{ display: 'flex' }} width={'100%'} height={'100%'}>
      <Grid container height={'64px'} position={'sticky'} top={0} sx={{zIndex:999}}>
      <NavBar />
      </Grid>
      <Grid container width={'100%'} overflow={'hidden'} height={'calc(100% - 64px)'}>
        <Grid item sm={2.5}>
          <SideBar />
        </Grid>
        <Grid item sm={9.5} p={2} flex={1} sx={{overflowY:'auto'}} maxHeight={'100%'}>
            <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
