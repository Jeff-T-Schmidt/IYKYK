import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import { useState } from "react";

const NewEvent = (props) => {
    const [eventData,setEventData] = useState({
        title:"",
        location:"",
        details:"",
        start_date:"",
        end_date:"",
        admin_id:props.userId
    })
      const handleSubmit = (event) => {
        event.preventDefault();
        props.createEvent(eventData);
        setEventData({
            title:"",
            location:"",
            details:"",
            start_date:"",
            end_date:"",
            admin_id:""
        })
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
            <div component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <div id="eventNameCard">
                    <TextField
                        id="standard-textarea"
                        label="Make a name for your event..."
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                        value={eventData.title}
                        onChange={(e)=>setEventData({...eventData,title:e.target.value})}
                    />
                </div>
                <div id="eventDescCard">
                    <TextField
                        id="standard-textarea"
                        label="Tell us about your event..."
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                        value={eventData.details}
                        onChange={(e)=>setEventData({...eventData,details:e.target.value})}
                    />
                </div>
                <div id="eventMapCard">
                    <TextField
                        id="standard-textarea"
                        label="Enter your event location..."
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                        value={eventData.location}
                        onChange={(e)=>setEventData({...eventData,location:e.target.value})}
                    />
                </div>
                <div id="eventCalendarCard">
                    <label>
                        Start Date
                    </label>
                    <input 
                    type="date" 
                    name='start_date'
                    value={eventData.start_date}
                    onChange={(e)=>setEventData({...eventData,start_date:e.target.value})}
                    />
                    
                </div>
                <div id="eventCalendarCard">
                    <label>
                        End Date
                    </label>
                <input 
                    type="date" 
                    name='end_date'
                    value={eventData.end_date}
                    onChange={(e)=>setEventData({...eventData,end_date:e.target.value})}
                    />
                    
                </div>
                
                <Button variant="contained">Create Event</Button>
            </div>
        </>
    );
}



export default NewEvent;