import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import API from '../../utils/API';
import InviteCard from './inviteCard';

const MyInvites = (props) => {
    const navigate = useNavigate()
    // console.log(props.allEventData)

    // for (let i = 0; i < props.allEventData.length; i++) {
    //     const attendees = (props.allEventData[i].attendees)
    //     // console.log(attendees)
    //     for (let i = 0; i < attendees.length; i++) {
    //         // console.log(props.email, attendees[i].invited_email,attendees[i].going === false)
    //         if (attendees[i].going === false && props.email === attendees[i].invited_email) {
    //             // console.log(attendees[i])
                
    //         }
    //     }
    // }

    useEffect(() => {
        if (!props.isLoggedIn) {
            navigate("/")
        }
    })

    useEffect(() => {

    }, [])

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
            <InviteCard userId={props.userId} email={props.email} isLoggedIn={props.isLoggedIn} token={props.token} eventId={props.eventId} setEventId={props.setEventId} allEventData={props.allEventData} />
        </>
    )
}

export default MyInvites