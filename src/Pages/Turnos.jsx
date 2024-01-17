import { useState } from 'react';
import '../App.css'
import { Box, Typography, Container, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import Especialidad from '../assets/especialidad.png'
import Doctor from '../assets/doctor.png'
import BusquedaEspecialista from './Componentes/BusquedaEspecialista';


function Turnos() {
    const [tipoBusqueda, setTipoBusqueda] = useState('')
    console.log(tipoBusqueda)

    const tipoBusquedaEspecialista = () => {
        setTipoBusqueda('Especialista')
    }

    const tipoBusquedaEspecialidad = () => {
        setTipoBusqueda('Especialidad')
    }

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
            {tipoBusqueda === '' ?
                <Grid container columns={{ xs: 4, sm: 4, md: 4, lg: 10 }} sx={{marginTop: 20, marginBottom: 25.8, justifyContent:"center", gap: 5}}>
                    <Grid container item xs={4} sx={{justifyContent:"center"}}>
                        <Card sx={{ maxWidth: 300}} onClick={tipoBusquedaEspecialidad} >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="300"
                                image={Especialidad}
                                alt="Turnos por Especialidad"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" mt={5} mb={5} sx={{
                                        fontWeight: 500,
                                        letterSpacing: '.15rem',
                                        textAlign: 'center'}}>
                                        Turnos por Especialidad
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid container item xs={4} sx={{justifyContent:"center"}}>
                        <Card sx={{ maxWidth: 300}} onClick={tipoBusquedaEspecialista} >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="300"
                                image={Doctor}
                                alt="Turnos por Especialista"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" mt={5} mb={5} sx={{
                                        fontWeight: 500,
                                        letterSpacing: '.15rem',
                                        textAlign: 'center'}}>
                                        Turnos por Especialista
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid> 
                :
                <Grid container columns={{ xs: 4, sm: 4, md: 4, lg: 10 }} sx={{marginTop: 20, marginBottom: 25.8, justifyContent:"center", gap: 5}}>
                    {tipoBusqueda === 'Especialista' ?
                        <BusquedaEspecialista/>
                    :
                        <Grid container item xs={4} sx={{justifyContent:"center"}}>
                            <Card sx={{ maxWidth: 300}} onClick={tipoBusquedaEspecialidad} >
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="300"
                                    image={Especialidad}
                                    alt="Turnos por Especialidad"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" mt={5} mb={5} sx={{
                                            fontWeight: 500,
                                            letterSpacing: '.15rem',
                                            textAlign: 'center'}}>
                                            Turnos por Especialidad
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    }
                </Grid>
            }
        </Box>
    )
}

export default Turnos