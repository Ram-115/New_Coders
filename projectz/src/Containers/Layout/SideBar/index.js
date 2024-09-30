import React from 'react'
import { Toolbar, Drawer, List, ListItem, ListItemText, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const drawerWidth = 240;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      {/* <List>
      <ListItem button component={Link} to="feeds">
        <ListItemText primary="Feeds" />
      </ListItem>
      <ListItem button component={Link} to="networks">
        <ListItemText primary="Networks" />
      </ListItem>
    </List> */}
      <Grid container flexDirection={'column'} mt={1}>
        <Grid item p={1} sx={{cursor:'pointer', textDecoration:'none'}} component={Link} to="feeds">
          <Typography>Feeds</Typography>
        </Grid>
        <Grid item p={1} sx={{cursor:'pointer', textDecoration:'none'}} component={Link} to="networks">
          <Typography>Network</Typography>
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default SideBar