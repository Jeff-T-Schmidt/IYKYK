import Button from '@mui/material/Button';

import './home.css'

const Home = () => {
    return (
        <>
            <div className='flex-container'>
                <div className='headButtons'>
                    <div className='row1'>
                    <Button className="btn1"variant="contained">New Event</Button>
                    </div>
                    <div className='row2'>
                    <Button className="btn2"variant="contained">My Invites</Button>
                    </div>
                    <div className='row3'>
                    <Button className="btn3"variant="contained">Create Event</Button>
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

