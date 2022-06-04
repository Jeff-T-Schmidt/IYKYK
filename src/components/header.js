import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";



export default function Header() {
  return (
    <AppBar position="static" style={{ background: '#4285F4' }}>
      <Typography variant="h3"
        component="div" sx={{ flexGrow: 1 }} textAlign="center" color="black">
        IYKYK
      </Typography>

    </AppBar>
  );
}