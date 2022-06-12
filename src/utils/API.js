//DEVELOP
const BASE_URL="http://localhost:3001"
//PROD
// const BASE_URL="https://iykyk-backend.herokuapp.com"

module.exports = {
    getAllUsers:()=>{
        return fetch(`${BASE_URL}/api/users`).then(res=>res.json())
    },
    getOneUser:userId=>{
        return fetch(`${BASE_URL}/api/users/${userId}`).then(res=>res.json())
    },
    verify:token=>{
        return fetch(`${BASE_URL}/api/users/verifyToken`,{
            headers:{
                authorization:`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    login:userData=>{
        return fetch(`${BASE_URL}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    signup:userData=>{
        return fetch(`${BASE_URL}/api/users/signup`,{
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                "Content-Type":"application/json",
            }
        })
    },
    // updateUser:updatedUserData=>{
    //     return fetch(`${BASE_URL}/api/users/${updatedUserData.userId}`,{
    //         method:"PUT",
    //         body:JSON.stringify(updatedUserData),
    //         headers:{
    //             "Content-Type":"application/json"
    //         }
    //     }).then(res=>res.json())
    // },

    getOneEvent:(eventId)=>{
        return fetch(`${BASE_URL}/api/events/${eventId}`).then(res=>res.json())
    },
    
    createEvent:(eventData,token)=>{
        return fetch(`${BASE_URL}/api/events/`,{
            method:"POST",
            body:JSON.stringify(eventData),
            headers:{
                "Content-Type":"application/json",
                authorization:`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    createAttendee:(attendeeData,token)=>{
        return fetch(`${BASE_URL}/api/events/attendees`,{
            method:"POST",
            body:JSON.stringify(attendeeData),
            headers:{
                "Content-Type":"application/json",
                authorization:`Bearer ${token}`
            }
        }).then(res=>res.json())
    }
}