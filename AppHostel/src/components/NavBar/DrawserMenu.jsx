import { Drawer, Box, List, ListItem, ListItemText } from '@mui/material';

const MenuDrawer = ({ open, toggleDrawer, menuOptions, onMenuOptionChange }) => {
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <List>
          {menuOptions.map((text, index) => (
            <ListItem button onClick={() => onMenuOptionChange(text)} key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;