import { Box, Drawer, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const NotificationsDrawer = ({ notifications, setNotifications }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Drawer
      open={notifications}
      anchor="right"
      onClose={() => setNotifications(false)}
      PaperProps={{
        sx: {
          width: isXs ? '100%' : '400px',
        },
      }}
    >
      <Grid container display={'flex'}>
        <Stack direction={'row'} width={'100%'} p={2} borderBottom={'1px solid #d4d4d4'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography fontSize={'18px'} fontWeight={500}>Notifications</Typography>
            <CloseIcon style={{cursor:'pointer'}} onClick={() => setNotifications(false)}/>
        </Stack>
        <Grid item xs={12} display={'flex'} height={'90vh'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Box sx={{width:'100px', height:'100px'}}>
<img src='https://cdni.iconscout.com/illustration/premium/thumb/no-notification-illustration-download-in-svg-png-gif-file-formats--bell-ring-empty-inbox-simple-error-state-pack-user-interface-illustrations-6024629.png' width={'100%'} height={'100%'} alt=''/>
            </Box>
            <Typography fontSize={'22px'} fontWeight={500}>No notifications yet</Typography>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default NotificationsDrawer;
