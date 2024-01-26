import React from 'react';
import '../../App.css'
import { Typography, Container, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import DiagxImagen from '../../assets/estudiosImagenes.png'
import Consultorio from '../../assets/consultorio.png'
import Laboratorio from '../../assets/laboratorio.png'
import Calendario from '../../assets/calendario.png'
import Grid from '@mui/material/Unstable_Grid2';




function ComponenteMain() {

    return(
        <div>
            <Typography variant="h5" mt={12} mb={12} sx={{
                fontWeight: 500,
                letterSpacing: '.3rem',
                textAlign: 'center'}}> 
                NUESTROS SERVICIOS DE SALUD 
            </Typography>
            <Container maxWidth="lg">
                <Typography variant="span" mt={12} mb={12} sx={{
                    fontWeight: 500,
                    letterSpacing: '.3rem',
                    textAlign: 'center'}}> 
                    Somos un centro de diagnóstico por imágenes con consultorios médicos de diferentes especialidades.
                    Contamos con tecnología de avanzada en estudios de imágenes preventivos para el diagnóstico temprano que permiten una mayor efectividad en futuros tratamientos, mejorando la calidad de vida.
                </Typography>
            </Container>
            <Grid container columns={{ xs: 4, sm: 4, md: 4, lg: 10 }} sx={{marginTop: 10, marginBottom: 10, justifyContent:"center", gap: 5}}>
                <Grid container item xs={2} sx={{justifyContent:"center"}}>
                    <Card sx={{ maxWidth: 280}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="280"
                            image={DiagxImagen}
                            alt="Diagnostico por Imagenes"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{
                                    fontWeight: 500,
                                    letterSpacing: '.15rem',
                                    textAlign: 'center'}}>
                                    Estudios de Diagnóstico por Imagenes
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{
                                    fontWeight: 500,
                                    letterSpacing: '.1rem',
                                    textAlign: 'center'}}>
                                    Contamos con tecnología de avanzada en estudios de diagnóstico por imágenes
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid container item xs={2} sx={{justifyContent:"center"}}>
                    <Card sx={{ maxWidth: 280}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="280"
                            image={Consultorio}
                            alt= "Consultorios Médicos"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{
                                    fontWeight: 500,
                                    letterSpacing: '.15rem',
                                    textAlign: 'center'}}>
                                    Consultorios Médicos
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{
                                    fontWeight: 500,
                                    letterSpacing: '.1rem',
                                    textAlign: 'center'}}>
                                    Contamos con difetente especialidades y sub-especialidades médicas de la mano de prestigiosos profesionales
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid container item xs={2} sx={{justifyContent:"center"}}>
                    <Card sx={{ maxWidth: 280}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="280"
                            image={Laboratorio}
                            alt="Laboratorio"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{
                                    fontWeight: 500,
                                    letterSpacing: '.15rem',
                                    textAlign: 'center', paddingTop: 3, paddingBottom: 3}}>
                                    Laboratorio
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{
                                    fontWeight: 500,
                                    letterSpacing: '.1rem',
                                    textAlign: 'center'}}>
                                    Realizamos estudios de diagnóstico bioquímico
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid container item xs={2} sx={{justifyContent:"center"}}>
                    <Card sx={{ maxWidth: 280}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="280"
                            image={Calendario}
                            alt="Turnos"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{
                                    fontWeight: 500,
                                    letterSpacing: '.15rem',
                                    textAlign: 'center', paddingTop: 3, paddingBottom: 3}}>
                                    Turnos
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{
                                    fontWeight: 500,
                                    letterSpacing: '.1rem',
                                    textAlign: 'center'}}>
                                    Contamos con distintos canales de atención para la gestión de turnos y consultas
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default ComponenteMain
