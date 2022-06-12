import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { positions } from '@mui/system';
import { CardActionArea } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import API from "../../../utils/API"

const NewEvent = ({setEventId,isLoggedIn,token,userId}) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/")
        }
    })
    const [eventData, setEventData] = useState({
        title: "",
        location: "",
        details: "",
        start_date: "",
        end_date: "",
        admin_id: userId
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        API.createEvent(eventData, token).then(data => {
            setEventData({
                title: "",
                location: "",
                details: "",
                start_date: "",
                end_date: "",
                admin_id: userId
            })
            if (data) {

                setEventId(data.id)
            }
        })
        navigate("/inviteattendees")
    };

    return (
        <>
            <div className='flex-container'>
                <div className='headButtons'>
                    <div className='row1'>
                        <Link to='/home'>
                            <Button className="btn1" variant="contained">My Events</Button>
                        </Link>
                    </div>
                    <div className='row2'>
                        <Link to='/myinvites'>
                            <Button className="btn2" variant="contained">My Invites</Button>
                        </Link>
                    </div>
                    <div className='row3'>
                        <Link to='/newEvent'>
                            <Button className="btn3" variant="contained">Create Event</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <form 
                component="form" 
                onSubmit={handleSubmit}
            >   
                <Card
                    sx={{
                        margin: 4,
                        borderRadius: 5,
                    }}
                >

                    <CardContent 
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}
                        id="dateContainer"
                    >
                        <CardContent></CardContent>
                        <CardContent 
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: 3,
                            }}
                            className="eventCalendarCard"
                        >
                            <Typography>
                                Start Date
                            </Typography>
                            <input
                                type="date"
                                name='start_date'
                                value={eventData.start_date}
                                onChange={(e) => setEventData({ ...eventData, start_date: e.target.value })}
                            />
                        </CardContent>
                        <CardContent 
                            
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: 3,
                            }}
                            className="eventCalendarCard"
                        >
                            <Typography>
                                End Date
                            </Typography>
                            <input
                                type="date"
                                name='end_date'
                                value={eventData.end_date}
                                onChange={(e) => setEventData({ ...eventData, end_date: e.target.value })}
                            />
                        </CardContent>
                        <CardContent></CardContent>
                    </CardContent>
                </Card>
                
                <Card
                    sx={{
                        margin: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 5,
                    }}
                    right
                >
                    <CardContent
                        sx={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent: "flex-start",
                            gap: 10,
                        }}
                    >
                        <CardContent 
                            sx={{
                                width: 1,
                            }}
                            id="eventNameCard"
                        >
                            <TextField
                                sx={{
                                    width: 1,
                                }}
                                id="standard-textarea"
                                label="Title"
                                placeholder="Make a name for your event..."
                                multiline
                                variant="standard"
                                value={eventData.title}
                                onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                            />
                        </CardContent>

                        <CardContent 
                            sx={{
                                width: 1,
                            }}
                            id="eventMapCard"
                        >
                            <TextField
                                sx={{
                                    width: 1,
                                }}
                                id="standard-textarea"
                                label="Location"
                                placeholder="Enter your event location..."
                                multiline
                                variant="standard"
                                value={eventData.location}
                                onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
                            />
                        </CardContent>
                    </CardContent>

                    <CardContent id="eventDescCard">
                        <TextField
                            sx={{
                                width:1,
                            }}
                            id="standard-textarea"
                            label="Details"
                            placeholder="Tell us about your event..."
                            multiline
                            variant="standard"
                            value={eventData.details}
                            onChange={(e) => setEventData({ ...eventData, details: e.target.value })}
                        />
                    </CardContent>

                </Card>
                
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    sx={{marginRight:4}}
                >
                    <Button
                        type="submit" 
                        variant="contained"
                        >Create Event</Button>
                </Box>
            </form>
        </>
    );
}


export default NewEvent;
