import * as React from 'react';
import PostCarousel from '../../../components/Carousel/index.js'
import SimpleAccordion from '../../../components/Accordion/index.js'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Paper} from '@mui/material';
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
          <Box 
            sx={{
              flexGrow: 1,
              margin:2,            
            }}
            id="eventInfoSection"
          >
              <Box> 
                  <Stack 
                    sx={{
                      borderRadius:15,
                      boxShadow:3,
                      marginBottom:1,
                    }}
                    spacing={3}
                  >
                      <Item><h2>{oneEventData.title}</h2></Item>
                  </Stack>
              </Box>

              <Box 
                sx={{ 
                  flexGrow: 1,
                  marginTop: 1,
                  marginBottom:1,
                }}>
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
              <SimpleAccordion 
                 sx={{ 
                  flexGrow: 1,
                  margin:2,
                }}
                oneEventData = {oneEventData} 
                setOneEventData={setOneEventData}
              />
          </Box>
          {/* <div id="groupChat">

          </div>
          <div id="newPostCarousel">
              <PostCarousel />
          </div> */}

         <Box 
          sx={{
            margin: 2,
          }}
          className='chat-box'
         >
         {/* <input className='nameInput'
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          /> */}
          <Box className="chat-body">
            <ScrollToBottom className="message-container">
              {
                messageList.map((messageContent) => {
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
                    </div>
                  )
                }) 
              }
            </ScrollToBottom>
          </Box>  
          <Box className="chat-footer">
            <TextField
              sx={{
                width:0.9,
                height: 1,
                padding: 0.2,
                marginLeft: 2,
                marginRight: 2,
              }}
              id="standard-textarea"
              variant="standard"
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
            <Button 
              sx={{
                width: 0.5,
              }}
              id='chatFooterButton' 
              type='submit' 
              variant='contained'
              onClick={sendMessage}
            >&#9658;</Button>
          </Box> 
        </Box>

        </>
    )
}

export default CurrentEvent