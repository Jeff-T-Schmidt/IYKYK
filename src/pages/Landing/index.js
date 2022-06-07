import { Button } from "@mui/material";
import './style.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Landing(props) {
    const navigate = useNavigate()
    useEffect(()=>{
        if(props.isLoggedIn){
          navigate("/home")
         }
       })
    return (
        <div>
            <p className='landingP'>Welcome to IYKYK, where; if you know, you know.</p>
            <Button href='/login' variant='contained' sx={{ backgroundColor: '#4285F4', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '75%', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%', height: '75px', fontSize: 'x-large'}}>Login</Button>
            <Button href='/signup' variant='contained' sx={{ backgroundColor: '#4285F4', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '75%', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px', height: '75px', fontSize: 'x-large'}}>Signup</Button>
        </div>
    )
};