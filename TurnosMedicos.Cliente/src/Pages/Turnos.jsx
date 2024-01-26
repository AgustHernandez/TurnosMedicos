import '../App.css'
import { Box, Typography, Container, Grid } from '@mui/material';
import BusquedaEspecialista from './Componentes/BusquedaEspecialista';


function Turnos() {

    return (
        <Box>
            <Typography variant="h5" mt={20.1} mb={10} sx={{
                fontWeight: 500,
                letterSpacing: '.3rem',
                textAlign: 'center'}}>
                TURNOS
            </Typography>
            <Container maxWidth="lg" mb={12}>
                <Typography variant="span" sx={{
                    fontWeight: 500,
                    letterSpacing: '.3rem',
                    textAlign: 'center'}}> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, reprehenderit rerum. Maxime ipsa in veritatis voluptatibus ea totam tempora pariatur debitis velit laborum iste deserunt exercitationem dolores dolore, eligendi inventore.
                </Typography>
            </Container>
            <Grid container columns={{ xs: 4, sm: 4, md: 4, lg: 10 }} sx={{marginTop: 20, marginBottom: 25.8, justifyContent:"center", gap: 5}}>
                    <BusquedaEspecialista/>
            </Grid>
        </Box>
    )
}

export default Turnos