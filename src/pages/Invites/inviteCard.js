import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { flexbox } from '@mui/system';
import API from "../../utils/API";


const InviteCard = (props) => {
    const navigate = useNavigate();



    // const handleClick = (id) => {
    //     // setEventId(id)
    //     navigate('/currentevent');
    // }


    // return (
        // <div id="popContainer">
        //     {
        //         props.allEventData.map((allEventData) => (
        //             <div className="eventCard" key={attendeeData.id} >

        //                 <Card
        //                     sx={{
        //                         borderRadius: 5,
        //                         margin: 2,
        //                         boxShadow: 3,

        //                     }}
        //                     id={`${attendeeData.id}`}
        //                 >
        //                     <Link to="/currentevent" />
        //                     <CardActionArea  >
        //                         <CardContent >
        //                             <CardContent

        //                             >
        //                                 <Typography
        //                                     sx={{
        //                                         fontWeight: 'bold',

        //                                     }}
        //                                     gutterBottom variant="h4"
        //                                     component="div">
        //                                     {attendeeData.title}
        //                                 </Typography>
        //                                 <CardContent
        //                                     sx={{
        //                                         fontWeight: 'light',
        //                                         display: 'flex',
        //                                         gap: 2,
        //                                     }}
        //                                 >
        //                                     <Typography
        //                                         gutterBottom variant="overline"
        //                                         component="div">
        //                                         {attendeeData.start_date}
        //                                     </Typography>
        //                                     <Typography gutterBottom variant="overline" component="div">
        //                                         {attendeeData.location}
        //                                     </Typography>
        //                                 </CardContent>
        //                             </CardContent>
        //                             <Typography
        //                                 noWrap
        //                                 sx={{
        //                                     display: 'flex',
        //                                     width: 1,
        //                                 }}
        //                                 variant="body2"
        //                                 color="text.secondary">
        //                                 {attendeeData.details}
        //                             </Typography>
        //                         </CardContent>
        //                     </CardActionArea>
        //                 </Card>
        //             </div>
        //         ))}
        // </div>
    // );
};

export default InviteCard