import './style.css'

const Profile = () => {
    return (
        <>
        <div className='container'>
            <div className="profilePic">
            <button  className="edit">Edit</button>
            <p>This is content in the area</p>
            </div>
            <div className="name">
            <button  className="edit">Edit</button>
            </div>
            <div className="user"> 
            <button className="edit">Edit</button>
            </div>
            <div className='logout'>
            <button className="logout-btn">Logout</button>
            </div>
        </div>
        </>
    )
}

export default Profile