import React from 'react';
import '../App.css'
import { Typography, Container } from '@mui/material';




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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, reprehenderit rerum. Maxime ipsa in veritatis voluptatibus ea totam tempora pariatur debitis velit laborum iste deserunt exercitationem dolores dolore, eligendi inventore.
                    Aliquam autem dolorem perferendis alias repellendus maiores, perspiciatis odit dolorum a voluptates, impedit expedita repudiandae, exercitationem qui soluta rerum. At veritatis corporis temporibus suscipit atque tempore itaque corrupti praesentium nesciunt!
                </Typography>
            </Container>
            
        </div>
    )
}

export default ComponenteMain