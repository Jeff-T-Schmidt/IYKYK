import Button from '@mui/material/Button';

import './home.css'

const Home = () => {
    // SETS STATE TO READ DATA
    this.setState({
        data: resoponseArray.map(item => {description: item.description})
    })
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

            <div id="eventsSection">
                {
                    this.state.data.map((item,key) => {
                        return <div className='populatedEventCard' key={key}>{item.timeM} {item.description}</div>
                    })
                }
            </div>
        </>

    )
}

export default Home

