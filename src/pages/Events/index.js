import * as React from 'react';
import PostCarousel from '../../components/Carousel/index.js'
import SimpleAccordion from '../../components/Accordion/index.js'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Paper, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const currentEvent = () => {

    return (
        <>
            <div id="eventInfoSection">
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    <Item>EVENT TITLE</Item>
                </Stack>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Item>DATE</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>TIME</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>LOCATION</Item>
                    </Grid>
                    </Grid>
            </Box>
            <SimpleAccordion />
            </div>
            <div id="groupChat">
                
            </div>
            <div id="newPostCarousel">
                <PostCarousel />
            </div>
        </>
    );
}

export default currentEvent