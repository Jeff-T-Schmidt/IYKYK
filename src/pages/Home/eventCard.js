import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { flexbox } from '@mui/system';


const EventCard = ({userEvents, setEventId}) => {
  

  const navigate = useNavigate();
  
  const handleClick = (id) => {

    setEventId(id)
    navigate('/currentevent');
  }


  return (
    <div id="popContainer">
      {
        userEvents.map((userEvents) => (
          <div  className="eventCard" key={userEvents.id} onClick={ () => {
              handleClick(userEvents.id)
          }}>

            <Card 
                sx={{ 
                  borderRadius:5,
                  margin: 2,
                  boxShadow: 3,

                }} 
                id={`${userEvents.id}`}
              >
              <Link to="/currentevent"/>
              <CardActionArea  >
                <CardContent >
                  <CardContent 
                    
                  >
                    <Typography 
                      sx={{
                        fontWeight: 'bold',
  
                      }}
                      gutterBottom variant="h4" 
                      component="div">
                      {userEvents.title}
                    </Typography>
                    <CardContent 
                      sx={{
                        fontWeight: 'light',
                        display: 'flex',
                        gap: 2,
                      }}
                    >
                      <Typography 
                        gutterBottom variant="overline" 
                        component="div">
                        {userEvents.start_date}
                      </Typography>
                      <Typography gutterBottom variant="overline" component="div">
                        {userEvents.location}
                      </Typography>
                    </CardContent>
                  </CardContent>
                  <Typography 
                    noWrap
                    sx={{
                      display: 'flex',
                      width: 1,
                    }}
                    variant="body2" 
                    color="text.secondary">
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