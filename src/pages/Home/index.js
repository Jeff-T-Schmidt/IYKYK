import Button from '@mui/material/Button';
import * as API from "../../utils/API.js"
import EventCard from './eventCard.js'
import './style.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import './style.css'

const Home = (props) => {
    const navigate = useNavigate();
    const allUserEvents = props.eventData.concat(props.adminEventData);

    useEffect(() => {
        if (!props.isLoggedIn) {
            navigate('/')
        }
    })


    return (
        <div>
            <div>
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
            </div>
            { <div id="homeContainer" sx={{ display: 'flex', justifyContent: 'center',}}>
                <EventCard allUserEvents={allUserEvents} setEventId={props.setEventId}/>
            </div>}

                
        </div>

    )


}
export default Home

