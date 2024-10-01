import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography, Box, Grid, Stack } from '@mui/material';


const LogInPage = () => {
  const navigate = useNavigate();
  const [signUp, setsignUp]=useState(false);

  const handleLogin = () => {
    navigate('/home/welcome');
  };
  return (
    <Grid container display={'flex'} sx={{backgroundColor:'F1F2F6'}} alignItems={'center'} height={'100%'} justifyContent={'center'}>
      <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'} height={'100%'} justifyContent={'center'}>
          <img src='https://img.freepik.com/premium-vector/mother-holding-baby-with-love-flat-design-illustration_207579-1354.jpg' width={'100%'} height={'100%'} style={{objectFit:'contain'}} alt='' />
      </Grid>
      {signUp ?
      <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'} height={'100%'} justifyContent={'center'}>
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} width={'75%'}>
          <Typography variant="h4" textAlign={'center'}>Login</Typography>
          <TextField margin="normal" label="Username" variant="outlined" fullWidth />
          <TextField margin="normal" label="Password" type="password" variant="outlined" fullWidth />
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Button sx={{ mt: 1, color: '#fff' , width:'120px'}} variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
          </Box>
        </Box>
      </Grid>:
      <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'} height={'100%'} justifyContent={'center'}>
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} width={'75%'}>
          <Typography variant="h4" textAlign={'center'}>SignUp</Typography>
          <TextField margin="normal" label="Full Name" variant="outlined" fullWidth />
          <TextField margin="normal" label="User Name" variant="outlined" fullWidth />
          <TextField margin="normal" label="New Password" type="password" variant="outlined" fullWidth />
          <TextField margin="normal" label="Re-Enter New Password" type="password" variant="outlined" fullWidth />
          <Box display={'flex'} justifyContent={'start'} alignItems={'center'} py={1}>
            <Typography display={'flex'} flexDirection={'row'}>
              Already have a account.? <Typography pl={1} color={'#24a4c4'} sx={{cursor:'pointer'}} onClick={()=>setsignUp(true)}>Log in</Typography></Typography>
          </Box>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Button sx={{ mt: 1, color: '#fff' , width:'120px'}} variant="contained" color="primary" onClick={()=>setsignUp(true)}>
              Register
            </Button>
            </Box>
        </Box>
      </Grid>}
    </Grid>
  )
}

export default LogInPage