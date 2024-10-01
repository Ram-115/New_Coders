import { AppBar, Avatar, Badge, Grid, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsDrawer from '../Notifications';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [notifications, setNotifications] = useState(false);

    const toggleNotifications = () => {
        setNotifications((prev) => !prev); // Toggle the notification state
    };

    return (
        <Grid container px={2} py={1.5}
            sx={{
                background: 'linear-gradient(135deg, #fdf497, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'
            }}>
            <Grid container width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'end'}>
                {/* <Stack>
                    <MenuIcon sx={{ color: '#fff' }} />
                </Stack> */}
                <Stack direction={'row'} spacing={3} alignItems={'center'}>
                    <Badge badgeContent={4} color="success">
                        <NotificationsIcon sx={{ color: '#fff', cursor:'pointer' }} onClick={toggleNotifications} />
                    </Badge>
                    <Avatar sx={{ cursor: 'pointer' }} onClick={handleClick} src='https://c4.wallpaperflare.com/wallpaper/146/782/552/nature-is-pleased-with-simplicity-and-nature-is-no-dummy-wallpaper-preview.jpg' />
                </Stack>
            </Grid>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <NotificationsDrawer notifications={notifications} setNotifications={setNotifications}/>
        </Grid>
    )
}

export default NavBar;
