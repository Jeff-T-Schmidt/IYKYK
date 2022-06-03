import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


export default function StickyFooter() {
    return (


        <Container maxWidth="sm" style={{postion: 'fixed', bottom: 0}} gutterBottom>
            <Typography variant="body1">
                My sticky footer can be found here.
            </Typography>
        </Container>

    );
}
