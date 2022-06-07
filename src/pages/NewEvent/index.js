import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MaterialUIPickers from "./MuiDateRangePicker";
import { Link, Navigate, useNavigate } from 'react-router-dom'

const newEvent = () => {
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
            <div>
                <div id="eventNameCard">
                    <TextField
                        id="standard-textarea"
                        label="Make a name for your event..."
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                    />
                </div>
                <div id="eventDescCard">
                    <TextField
                        id="standard-textarea"
                        label="Tell us about your event..."
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                    />
                </div>
                <div id="eventMapCard">
                    <TextField
                        id="standard-textarea"
                        label="Enter your event location..."
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                    />
                </div>
                <div id="eventCalendarCard">
                    <MaterialUIPickers />
                </div>
                
                <Button variant="contained">Create Event</Button>
            </div>
        </>
    );
}



export default newEvent;