import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';





export default function Header(props) {
  // console.log(props)
  return (
    <AppBar position="static" style={{ background: '#4285F4' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection:'row',
              alignItems: 'center',
            }}
          >
            <Link to='/'>
              <Button 
                className="btn1"  
                size="large" 
                sx={{
                  color: 'white', 
                }}>
                <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
              </Button>
            </Link>
              <Typography variant="h2"
                component="div" sx={{ flexGrow: 1, color:'white' }} textAlign="center" color="black">
                IYKYK
              </Typography>
              {props.isLoggedIn?(
                    <>
                        {/* <Link to={`/home`}><button>Home</button></Link> */}
                        <Typography variant="h5"
                          component="div" sx={{ flexGrow: 1, color:'white', }} textAlign="center" color="black" bottom="0">
                          Welcome, {props.name}!
                        </Typography>
                        <Button 
                          
                          onClick={props.logout}
                        >
                          <LogoutIcon 
                            sx={{
                              color: 'white',
                            }}
                          />
                        </Button>
                    </>
                ):(
                    <>
                        {/* <Link to="/"><Button>Login/Signup</Button></Link>  */}

                    </>
                )}
          </Box>
    </AppBar>
  );
}