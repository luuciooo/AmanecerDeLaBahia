import { Box, Button, Stack, TextField } from '@mui/material';
import { useTheme } from '@emotion/react';

const ReservationForm = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: '5%',
                left: '60%',
                transform: 'translateX(-50%)',
                width: '65%',
                maxWidth: '700px',
                backgroundColor: theme.palette.background.default,
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Stack spacing={2}>
                <TextField
                    label="Check In"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    label="Check Out"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                />
                <TextField label="Number of People" type="number" fullWidth />
                <Button variant="outlined" fullWidth>
                    Borrar
                </Button>
                <Button variant="contained" color="primary" fullWidth>
                    Reservar
                </Button>
            </Stack>
        </Box>
    );
};

export default ReservationForm;