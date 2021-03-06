import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { flexbox } from '@mui/system';
import API from "../../utils/API";
import './style.css'



const InviteCard = (props) => {
    const navigate = useNavigate();
    const [filteredEvent, setFilteredEvent] = useState([])

    useEffect(() => {
        const attendeeEvents = props.allEventData.filter(data=>{
            const invitedEmail = data.attendees.filter(emailData => {
                // console.log(emailData.going)
                return emailData.invited_email === props.email
            })
            // console.log(invitedEmail)
            return invitedEmail
        })
        setFilteredEvent(attendeeEvents)
    }, [])
    // filteredEvent.map(data => {
    //     console.log(data.attendees)
    // })
    console.log(filteredEvent)



    const handleClick = (id) => {
        props.setEventId(id)
        alert('This Event has been added!')
    }

    // create button
    // 


    return (
        <div id="popContainer">
            {
                filteredEvent.map((allEventData) => (
                    <div className="eventCard" key={allEventData.id} >

                        <Card
                            sx={{
                                borderRadius: 5,
                                margin: 2,
                                boxShadow: 3,

                            }}
                            id={`${allEventData.id}`}
                        >
                            <Link to="/currentevent" />
                            <CardActionArea >
                                <CardContent >
                                    <CardContent

                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 'bold',

                                            }}
                                            gutterBottom variant="h4"
                                            component="div">
                                            {allEventData.title}
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
                                                {allEventData.start_date}
                                            </Typography>
                                            <Typography gutterBottom variant="overline" component="div">
                                                {allEventData.location}
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
                                        {allEventData.details}
                                    </Typography>
                                    <Button onClick={()=> handleClick(allEventData.id)} variant="contained">Accept</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
        </div>
    );
};

export default InviteCard