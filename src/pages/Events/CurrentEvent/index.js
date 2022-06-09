import * as React from 'react';
import PostCarousel from '../../../components/Carousel/index.js'
import SimpleAccordion from '../../../components/Accordion/index.js'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Paper, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { io } from "socket.io-client";

const socket = io("http://localhost:3002")
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CurrentEvent = (props) => {
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");
    // const navigate = useNavigate()
    // useEffect(()=>{
    //     if(!props.isLoggedIn){
    //       navigate("/")
    //      }
    //    })
    const sendMessage = () => {
        socket.emit("send_message", { message })
    }
    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message);
        });
    }, [socket]);

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
             <div>
                <h1>Message Board</h1>
                <input
                    placeholder="Message..."
                    onChange={(event) => {
                        setMessage(event.target.value);
                    }}
                />
                <button onClick={sendMessage}> Send Message</button>
                <h1> Message:</h1>
                {messageReceived}
            </div>
        </>
    );
}

export default CurrentEvent