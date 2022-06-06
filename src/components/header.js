import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <AppBar position="static" style={{ background: '#4285F4' }}>
      <Link to='/home'>
      <Typography variant="h3"
        component="div" sx={{ flexGrow: 1 }} textAlign="center" color="black">
        IYKYK
      </Typography>
      </Link>
    </AppBar>
  );
}