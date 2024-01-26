import '../App.css'
import { Box, Typography, Container, Grid } from '@mui/material';
import BusquedaEspecialista from './Componentes/BusquedaEspecialista';


function Turnos() {

    return (
        <Box>
            <Typography variant="h5" mt={20.1} sx={{
                fontWeight: 500,
                letterSpacing: '.3rem',
                textAlign: 'center'}}>
                    TURNOS
            </Typography>
            <Grid container columns={{ xs: 4, sm: 4, md: 4, lg: 10 }} sx={{marginTop: 12, marginBottom: 25.8, justifyContent:"center", gap: 5}}>
                <BusquedaEspecialista/>
            </Grid>
        </Box>
    )
}

export default Turnos