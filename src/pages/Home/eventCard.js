import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import * as API from "../../utils/API"


const eventCard = (events) => {
  

  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {events.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {events.start_date}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {events.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {events.details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
};

export default eventCard