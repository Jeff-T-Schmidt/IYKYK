import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import API from "../../utils/API.js"
const EventCard = ({userId,userEvents, setEventId}) => {
  console.log(userId)
  const [adminEvent,setAdminEvent] = useState([])
  const navigate = useNavigate();
  
  useEffect(()=>{
    API.getEventByAdmin(userId).then(data=>{
      console.log(data)
      setAdminEvent(data)
    })
  },[])
  const handleClick = (id) => {

    setEventId(id)
    navigate('/currentevent');
  }


  return (
    <>
      {
        adminEvent.map((userEvents) => (
            <div key={userEvents.id} onClick={ () => {
                handleClick(userEvents.id)
            }}>

        <Card sx={{ maxWidth: 345 }} id={`${userEvents.id}`}>
          <Link to="/currentevent"/>
          <CardActionArea  >
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                {userEvents.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {userEvents.start_date}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {userEvents.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {userEvents.details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
        ))
      } 
      </>
  );
};

export default EventCard