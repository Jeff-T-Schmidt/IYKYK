import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { flexbox } from '@mui/system';


const EventCard = ({setEventId, allUserEvents }) => {

  const navigate = useNavigate();
  
  const handleClick = (id) => {

    setEventId(id)
    navigate('/currentevent');
  }


  return (
    <div id="popContainer">
      {
        allUserEvents.map((allUserEvents) => (
          <div  className="eventCard" key={allUserEvents.id} onClick={ () => {
              handleClick(allUserEvents.id)
          }}>

            <Card 
                sx={{ 
                  borderRadius:5,
                  margin: 2,
                  boxShadow: 3,
                  backgroundColor: 'rgba(255,255,255, 0.8)',
                }} 
                id={`${allUserEvents.id}`} //this gets the event id of the clicked card
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
                      {allUserEvents.title}
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
                        {allUserEvents.start_date}
                      </Typography>
                      <Typography gutterBottom variant="overline" component="div">
                        {allUserEvents.location}
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
                    {allUserEvents.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default EventCard