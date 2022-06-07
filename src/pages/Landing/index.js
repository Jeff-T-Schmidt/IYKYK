import { Button } from "@mui/material";
import './style.css'

export default function Landing() {
    return (
        <div>
            <p className='landingP'>Welcome to IYKYK, where; if you know, you know.</p>
            <Button href='/login' variant='contained' sx={{ backgroundColor: '#4285F4', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '75%', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%', height: '75px', fontSize: 'x-large'}}>Login</Button>
            <Button href='/signup' variant='contained' sx={{ backgroundColor: '#4285F4', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '75%', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px', height: '75px', fontSize: 'x-large'}}>Signup</Button>
        </div>
    )
};