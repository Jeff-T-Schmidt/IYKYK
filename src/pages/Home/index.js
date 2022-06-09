import Button from '@mui/material/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import API from "../../utils/API"
import './style.css'


const Home = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [token, setToken] = useState(null)
    const navigate = useNavigate();
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken)
        }
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

                <div className='eventBox1'>
                    <div className='eventImage1'>Event Image</div>
                    <div className='eventName1'>Event Name</div>
                    <div className='eventDeets1'>Event Details</div>
                    <Link to="/myinvites">
                    <button className='invite'>Invite</button>
                    </Link>
                </div>
                <div className='eventBox1'>
                    <div className='eventImage1'>Event Image</div>
                    <div className='eventName1'>Event Name</div>
                    <div className='eventDeets1'>Event Details</div>
                    <Link to="/myinvites">
                    <button className='invite'>Invite</button>
                    </Link>
                </div>
                <div className='eventBox1'>
                    <div className='eventImage1'>Event Image</div>
                    <div className='eventName1'>Event Name</div>
                    <div className='eventDeets1'>Event Details</div>
                    <Link to="/myinvites">
                    <button className='invite'>Invite</button>
                    </Link>
                </div>
            </div>
        </div>

    )


}
export default Home

