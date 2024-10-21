import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Logo from './/NavBar/Logo';
import MenuDrawer from './NavBar/DrawserMenu';

const Header = ({ onMenuOptionChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuOptions = [
    'Home',
    'Habitaciones y Tarifas',
    'Descubre Ushuaia',
    'Servicios',
    'Ubicacion y contacto',
    'Reseñas',
  ];

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexGrow: 1 }}>
            <Logo />
            <Box sx={{ width: 60 }}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{
                  border: '1px solid rgba(0, 0, 0, 0.5)',  // Borde similar a 'outlined'
                  borderRadius: '4px',  // Radio de borde para que se vea como un botón
                  padding: '6px',  // Espaciado interno para que se vea más como un botón
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',  // Efecto hover como un botón
                  },
                }}
              >
                <Menu sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <MenuDrawer
        open={drawerOpen}
        toggleDrawer={toggleDrawer}
        menuOptions={menuOptions}
        onMenuOptionChange={onMenuOptionChange}
      />
    </>
  );
};

export default Header;
