import { AppBar, Avatar, Grid, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavBar = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: 1201 }}>
            <Toolbar>
                <Grid container display={'flex'} justifyContent={'end'}>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <NotificationsIcon  sx={{color:'#fff'}}/>
                        <Avatar src='https://c4.wallpaperflare.com/wallpaper/146/782/552/nature-is-pleased-with-simplicity-and-nature-is-no-dummy-wallpaper-preview.jpg' />
                    </Stack>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar