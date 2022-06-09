import Button from '@mui/material/Button';
import * as API from "../../utils/API.js"
import EventCard from './eventCard.js'
import './style.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import './style.css'

const Home = (props) => {
    const [eventData, setEventData] = useState();
    const [selectedEvent, setSelectedEvent] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [token, setToken] = useState(null)
    const navigate = useNavigate();
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken)
        }
        API.getOneUser(props.userId).then(data=> {
            setEventData(data.events)
        })
    }, [])
    useEffect(() => {
        if (!props.isLoggedIn) {
            navigate('/')
        }
    }
    )


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
            {eventData && <div>
                <EventCard userEvents={eventData} setEventId={props.setEventId}/>
            </div>}

                
        </div>

    )


}
export default Home

