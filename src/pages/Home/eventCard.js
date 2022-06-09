import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";


const EventCard = ({userEvents}) => {
  const navigate = useNavigate();
  
  const handleClick = (event) => {
    event.preventDefault();
    if (data) {
      localStorage.setItem("eventID", data.id)
    }
    navigate('/currentevent');
  }


  return (
    <div onClick={handleClick}>
      {
        userEvents.map((userEvents) => (
            <div key={userEvents.id}>

        <Card sx={{ maxWidth: 345 }} >
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
    </div>
  );
};

export default EventCard