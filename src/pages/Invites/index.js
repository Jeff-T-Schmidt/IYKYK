import Email from '../../components/Email';
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const MyInvites = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!props.isLoggedIn) {
            navigate("/")
        }
    })

    // useEffect(() => {
    //     const currentEvent = localStorage.getItem("eventID");
    //     if (currentEvent) {
    //         setToken(savedToken)
    //     }
    // }, [])
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
            <div></div>
            <Email eventId={props.eventId} />
        </>
    )
}

export default MyInvites