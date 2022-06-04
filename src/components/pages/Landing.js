import { Button } from "@mui/material";
import Link from '@mui/material/Link';

export default function Landing() {
    return (
        <div>
            <Button href='/login' className='loginBtn'>Login</Button>
            <Button href='/signup' className='signupBtn'>Signup</Button>
        </div>
    )
};