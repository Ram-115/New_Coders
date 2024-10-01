import React from 'react';
import { Grid, TextField, Button, Typography, Box } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';

const RegistrationForm = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
      <Grid container spacing={3}>
        
        {/* Demographic Information */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom display={'flex'} alignItems={'center'}>
            <PersonIcon />&nbsp;Demographic Information
          </Typography>
          <TextField fullWidth label="Name" variant="outlined" margin="normal" />
          <TextField fullWidth label="Gender" variant="outlined" margin="normal" />
          <TextField fullWidth label="Date of Birth" variant="outlined" margin="normal" />
        </Grid>

        {/* Photograph Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom display={'flex'} alignItems={'center'}>
            <CameraAltIcon />&nbsp;Photograph
          </Typography>
          <Box sx={{ border: '1px dashed #ccc', borderRadius: '8px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button variant="contained" color="warning" startIcon={<CameraAltIcon />}>
              Capture Photo
            </Button>
          </Box>
        </Grid>

        {/* Parent Authentication */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom display={'flex'} alignItems={'center'}>
            <FingerprintIcon />&nbsp;Parent Authentication
          </Typography>
          <Box sx={{ border: '1px dashed #ccc', borderRadius: '8px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button variant="contained" color="warning" startIcon={<FingerprintIcon />}>
              Authenticate
            </Button>
          </Box>
        </Grid>

        {/* Acknowledgement Mobile */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom display={'flex'} alignItems={'center'}>
            <PhoneIcon />&nbsp;Acknowledgement Mobile
          </Typography>
          <TextField fullWidth label="Mobile for Communication" variant="outlined" margin="normal" />
        </Grid>

        {/* Parents' Aadhaar */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom display={'flex'} alignItems={'center'}>
            Parents' Aadhaar
          </Typography>
          <TextField fullWidth label="Mother Aadhaar" variant="outlined" margin="normal" />
          <TextField fullWidth label="Father Aadhaar" variant="outlined" margin="normal" />
        </Grid>

        {/* Action Buttons */}
        <Grid item xs={12} sm={4} gap={2} display="flex" alignItems="end" justifyContent={'end'}>
          <Button variant="contained" color="success">
            Review
          </Button>
          <Button variant="contained" color="error">
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
