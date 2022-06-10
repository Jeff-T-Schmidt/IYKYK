import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';


export default function Header(props) {
  return (
    <AppBar position="static" style={{ background: '#4285F4' }}>
      <Link to='/'>
      {props.isLoggedIn?(
            <>
                {/* <Link to={`/home`}><button>Home</button></Link> */}
                <Button 
                  
                  onClick={props.logout}
                >
                  Logout
                </Button>
            </>
        ):(
            <>
                <Link to="/"><Button>Login/Signup</Button></Link> 

            </>
        )}
      
      <Typography variant="h3"
        component="div" sx={{ flexGrow: 1 }} textAlign="center" color="black">
        IYKYK
      </Typography>
      </Link>
    </AppBar>
  );
}