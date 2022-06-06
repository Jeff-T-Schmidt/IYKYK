import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'


export default function Header(props) {
  return (
    <AppBar position="static" style={{ background: '#4285F4' }}>
      <Link to='/home'>
      {props.isLoggedIn?(
            <>
                <Link to={`/home/${props.userId}`}><button>Home</button></Link>
                <button onClick={props.logout}>Logout</button>
            </>
        ):(
            <>
                <Link to="/"><button>Login/Signup</button></Link> 
                <Link to="/"><button style={{marginLeft: "92.9%"}}>Logout</button></Link> 
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