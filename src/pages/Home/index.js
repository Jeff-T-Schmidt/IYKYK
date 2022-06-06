import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

import './home.css'

const Home = () => {
    return (
        <>
            <div className='flex-container'>
                <div className='headButtons'>
                    <div className='row1'>
                        <Link to='/newEvent'>
                    <Button className="btn1"variant="contained">New Event</Button>
                        </Link>
                    </div>
                    <div className='row2'>
                    <Link to='/myinvites'>
                    <Button className="btn2"variant="contained">My Invites</Button>
                    </Link>
                    </div>
                    <div className='row3'>
                    <Link to='/createevent'>
                    <Button className="btn3"variant="contained">Create Event</Button>
                    </Link>
                    </div>
                </div>
            </div>
                <div className='eventBox1'>
                    <div className='eventImage1'>Event Image</div>
                    <div className='eventName1'>Event Name</div>
                    <div className='eventDeets1'>Event Details</div>
                </div>
                <div className='eventBox1'>
                    <div className='eventImage1'>Event Image</div>
                    <div className='eventName1'>Event Name</div>
                    <div className='eventDeets1'>Event Details</div>
                </div>
                <div className='eventBox1'>
                    <div className='eventImage1'>Event Image</div>
                    <div className='eventName1'>Event Name</div>
                    <div className='eventDeets1'>Event Details</div>
                </div>
        </>

    )
}

export default Home

