import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MaterialUIPickers from "./MuiDateRangePicker";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import API from "../../../utils/API"

const NewEvent = (props) => {
    console.log(props.token)
    const [eventData, setEventData] = useState({
        title: "",
        location: "",
        details: "",
        start_date: "",
        end_date: "",
        admin_id: props.userId
    })


    const handleSubmit = (event) => {
        console.log(event)
        event.preventDefault();
        API.createEvent(eventData,props.token).then(data => {
            console.log(data)
            setEventData({
                title: "",
                location: "",
                details: "",
                start_date: "",
                end_date: "",
                admin_id: props.userId
            })
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
            <form component="form" onSubmit={handleSubmit}>
                <div id="eventNameCard">
                    <TextField
                        id="standard-textarea"
                        label="Make a name for your event..."
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                        value={eventData.title}
                        onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
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
                        onChange={(e) => setEventData({ ...eventData, details: e.target.value })}
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
                        onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
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

                <button type="submit" variant="contained">Create Event</button>
            </form>
        </>
    );
}



export default NewEvent;