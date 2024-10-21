import { Box, Container, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: '#212121', color: '#ffffff', py: 4 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Hostel Name
                        </Typography>
                        <Typography variant="body2">
                            Enjoy your stay at the best hostel in town with cozy rooms, a friendly environment, and top-notch services.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="#" underline="hover" color="inherit">
                            Home
                        </Link>
                        <br />
                        <Link href="#" underline="hover" color="inherit">
                            Rooms
                        </Link>
                        <br />
                        <Link href="#" underline="hover" color="inherit">
                            Services
                        </Link>
                        <br />
                        <Link href="#" underline="hover" color="inherit">
                            Contact
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2">
                            123 Hostel Street<br />
                            City, Country 12345<br />
                            Email: contact@hostel.com<br />
                            Phone: +123 456 7890
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={4} textAlign="center">
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} Hostel Name. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
