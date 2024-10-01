import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();
    return (
        <Grid 
            container 
            display={'flex'} 
            justifyContent={'center'} 
            alignItems={'center'} 
            height={'100%'}
            px={8}
        >
            <Card sx={{ display: 'flex'}}>
                <Grid container>
                <Grid item xs={12} md={6}>
                        <CardMedia
                            component="img"
                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            image="https://www.shutterstock.com/image-photo/just-beautiful-cute-smiling-baby-600nw-2208761477.jpg"
                            alt="Mango Tree Illustration"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column'}}>
                        <CardContent sx={{ flex: '1 0 auto' , display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            <Typography component="div" fontSize={'28px'} fontWeight={500}>
                                Welcome to our Web
                            </Typography>
                            <Typography py={1}
                                variant="subtitle1"
                                component="div"
                                sx={{ color: 'text.secondary' }}
                            >
                                You can start child registration from the next step
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center'}}>
                            <Button 
                                onClick={() => navigate('/home/child-enrollment')} 
                                variant='text' 
                                sx={{fontSize:'16px'}}
                                endIcon={<ArrowForwardIcon />}
                            >
                                Child Enrollment
                            </Button>
                        </Box>
                        </CardContent>
                    </Grid>     
                </Grid>
            </Card>
        </Grid>
    );
}

export default WelcomePage;
