import { AppBar, Avatar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const NavBar = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201 }}>
    <Toolbar>
     <Avatar src='https://c4.wallpaperflare.com/wallpaper/146/782/552/nature-is-pleased-with-simplicity-and-nature-is-no-dummy-wallpaper-preview.jpg'/>
    </Toolbar>
  </AppBar>
  )
}

export default NavBar