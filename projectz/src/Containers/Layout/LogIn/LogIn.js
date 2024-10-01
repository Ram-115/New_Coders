import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography, Box, Grid, Stack } from '@mui/material';


const LogInPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
      navigate('/home/child-enrollment');
    };
  return (
    <Grid container display={'flex'} alignItems={'center'} height={'100vh'} justifyContent={'center'}>
    <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} width={'40%'}>
      <Typography variant="h4">Login</Typography>
      <TextField margin="normal" label="Username" variant="outlined" fullWidth />
      <TextField margin="normal" label="Password" type="password" variant="outlined" fullWidth />
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Button sx={{mt:1, color:'#fff'}} variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      </Box>
    </Box>
  </Grid>
  )
}

export default LogInPage