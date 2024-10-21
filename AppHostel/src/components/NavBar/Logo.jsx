import { Avatar, Box, Typography } from '@mui/material';

const Logo = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt="Logo" src="../../public/logo-hostel-amanecer.png" sx={{ width: 56, height: 56, marginRight: 2 }} />
            <Typography variant="h5" component="div">
                Amanecer de la Bahia
            </Typography>
        </Box>
    );
};

export default Logo;