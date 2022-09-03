import * as React from 'react';
import { useContext, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { default as MLink } from '@mui/material/Link';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button, { ButtonProps } from '@mui/material/Button';
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom"

import Link from '../atoms/Link';
import { ProfileContext, ContextType as ProfileContextType } from '../../contexts/ProfileContext';
import { supabase } from '../../APIClients/supabaseClient';
import { Container, styled } from '@mui/material';
import { ColorButton } from '../atoms/ColorButton';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = {
  'home': "/",
  'agenda': '/agenda',
  'speakers': '/speakers',
  'collaborators': '/collaborators',
  'sponsorship': '/sponsors',
}

type NavLinkProps = { children: React.ReactNode, underline?: boolean }
const NavLink = ({ children, underline }: NavLinkProps) => {
  return (
    <Typography
      fontSize="1.25rem">
      {children}
    </Typography>
  )
}

const DrawerAppBar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate()
  const [profile] = useContext(ProfileContext) as ProfileContextType;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Global Earth Repair Summit
      </Typography>
      <Divider />
      <List>
        {Object.entries(navItems).map(([name, to]) => (
          <ListItem key={name} disablePadding>
            <MLink href={to}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={name} />
              </ListItemButton>
            </MLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', backgroundColor: "rgb(0, 30, 60)" }}>
      <AppBar component="nav" sx={{
        backgroundColor: 'transparent',
        "&:before": {
          content: '""',
          backgroundImage: "url(https://ltfowyvtpuhuazsxpcvn.supabase.co/storage/v1/object/public/public-images/starry-banner-bg.jpeg)",
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0.85,
          transitionProperty: "opacity",
          transitionDuration: "0.5s"
        },
        "&:hover:before": {
          opacity: 1
        }
      }}>
        <Container sx={{ p: { xs: 0, sm: 0 } }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link to="/">Global Earth Repair Summit</Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {Object.entries(navItems).map(([name, to]) => (
                <Button key={name} sx={{ color: '#fff' }}>
                  <NavLink>
                    <Link to={to}>{name}</Link>
                  </NavLink>
                </Button>
              ))}
              {profile ?
                <LoadingButton
                  variant="outlined"
                  loading={loggingOut}
                  onClick={async () => {
                    setLoggingOut(true);
                    const { error } = await supabase.auth.signOut()
                    console.log(error);
                    navigate("/")
                  }}>
                  Logout
                </LoadingButton>
                :
                <ColorButton variant="contained">
                  <NavLink underline>
                    <Link to="/register-type">Register Now</Link>
                  </NavLink>
                </ColorButton>
              }
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}

export { DrawerAppBar as AppBar };