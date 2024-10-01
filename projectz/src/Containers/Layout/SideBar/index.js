import React from 'react';
import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import EventIcon from '@mui/icons-material/Event';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ReportIcon from '@mui/icons-material/Report';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import ForumIcon from '@mui/icons-material/Forum';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
const SideBar = () => {
  const menuItems = [
    { name: 'Home', route: '/home/welcome', icon: <HomeIcon /> },
    { name: 'Child Enrollment', route: '/home/child-enrollment', icon: <PersonAddIcon /> },
    { name: 'Nutrition & Health', route: '/home/nutrition-health', icon: <HealthAndSafetyIcon /> },
    { name: 'Programs & Activities', route: '/home/programs-activities', icon: <EventIcon /> },
    { name: 'Maternal Care', route: '/home/maternal-care', icon: <FamilyRestroomIcon /> },
    { name: 'Reports', route: '/home/reports', icon: <ReportIcon /> },
    { name: 'Resources & Guidelines', route: '/home/resources-guidelines', icon: <MenuBookIcon /> },
    { name: 'Inventory & Supplies', route: '/home/inventory-supplies', icon: <InventoryIcon /> },
    { name: 'Staff Management', route: '/home/staff-management', icon: <PeopleIcon /> },
    { name: 'Community Engagement', route: '/home/community-engagement', icon: <ForumIcon /> },
    { name: 'Help & Support', route: '/home/help-support', icon: <HelpIcon /> },
  ];

  return (
    <Grid container flexDirection={'column'} border={'1px solid #d4d4d4'} height={'100%'}>
      {menuItems.map((item, index) => (
        <Grid
          item
          p={2}
          key={index}
          component={NavLink}
          to={item.route}
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: isActive ? '#24a4c4' : '#000',
            backgroundColor: isActive ? '#f2f4f8' : 'transparent'
          })}
        >
          {item.icon}
          <Typography px={1}>{item.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default SideBar;
