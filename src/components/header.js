import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";


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