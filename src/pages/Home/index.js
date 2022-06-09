import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import * as API from "../../utils/API.js"
import EventCard from './eventCard.js'
import './style.css'

const Home = (props) => {

    API.getOneUser(props.userId).then(data=> {
        console.log(data)

    })

    return (
        <>
            <div className='flex-container'>
                <div className='headButtons'>
                    <div className='row1'>
                        <Link to='/newEvent'>
                    <Button className="btn1"variant="contained">My Events</Button>
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
            <div>
                {/* {
                    userEvents.map((events) => (
                        <div key={events.id}>
                            <EventCard userEvent={events}/>
                        </div>
                    ))
                } */}
            </div>

        </>

    )
}

export default Home

