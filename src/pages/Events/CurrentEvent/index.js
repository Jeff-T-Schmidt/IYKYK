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
import ScrollToBottom from "react-scroll-to-bottom";
import { io } from "socket.io-client";
import './style.css'
import API from '../../../utils/API.js';

const socket = io("http://localhost:3002", {
    transports: ['websocket'],
})
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CurrentEvent = ({name, eventId,isLoggedIn}) => {
    console.log(name)
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    // const [username, setUsername] = useState(name);
    const [oneEventData,setOneEventData] = useState({
    })
    useEffect(()=>{
        API.getOneEvent(eventId).then(data =>{
            console.log(data)
            setOneEventData(data)
        })
    },[])
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isLoggedIn){
          navigate("/")
         }
       })
    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
              author: name,
              message: currentMessage,
              time:
                new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),

            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);


    return (
        <>
            <div id="eventInfoSection">
                <Box sx={{ width: '100%' }}>
                    <Stack spacing={2}>
<<<<<<< HEAD
                        <Item>Title</Item>
=======
                        <Item><h2>Title</h2>{oneEventData.title}</Item>
>>>>>>> dev
                    </Stack>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Item>Start Date: {oneEventData.start_date}</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>End Date: {oneEventData.end_date}</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>Location: {oneEventData.location}</Item>
                        </Grid>
                    </Grid>
                </Box>
                <SimpleAccordion oneEventData = {oneEventData} setOneEventData={setOneEventData}/>
            </div>
            {/* <div id="groupChat">

            </div>
            <div id="newPostCarousel">
                <PostCarousel />
            </div> */}

         <div className='chat-box'>
         {/* <input className='nameInput'
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          /> */}
            <div className="chat-body">
              <ScrollToBottom className="message-container">
                 {messageList.map((messageContent) => {
                     return(
              <div
                   className="message"
                id={name === messageContent.author ? "you" : "other"}
              >
              <div className="message-content">
                <p>{messageContent.message}</p>
              </div>
              <div className="message-meta">
                <p id="time">{messageContent.time}</p>
                <p id="author">{messageContent.author}</p>
              </div>
            </div>)
          }) 
        }
        </ScrollToBottom>
       </div>  
       <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div> 
      </div>

        </>
    )
}

export default CurrentEvent