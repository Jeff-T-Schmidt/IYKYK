import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

import './style.css'

const Home = () => {
    // this.setState({
    //     data: resoponseArray.map(item => {description: item.description})
    // });

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
                {
                    this.state.data.map((item) => {
                        return (
                            <div>
                                <div>
                                    <img />
                                </div>
                                <div>
                                    <h4> EVENT NAME </h4>
                                    <p> EVENT DESCRIPTION </p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </>

    )
}

export default Home

