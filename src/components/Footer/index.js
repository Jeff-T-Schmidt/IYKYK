import React from "react";
import './footerStyle.css';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import {Link} from 'react-router-dom'



const Footer = () => {

	return (
		<>
			<div id="page-container">
				<div id="content-wrap">
				</div>
				<footer id="footer">
					<Link to={-1}>
					<Button className="btn1"  size="large" variant="contained"sx={{color: 'yellow', backgroundColor: 'orange',"&:hover": { backgroundColor: 'orange' },marginLeft: "22%", marginTop: "1%"}}>
						<KeyboardBackspaceIcon></KeyboardBackspaceIcon>
					</Button>
					</Link>
					<Button className="btn2" size="large" variant="contained" sx={{color: 'yellow', backgroundColor: 'orange',"&:hover": { backgroundColor: 'orange' }, marginTop: "1%", marginLeft: "50%" }}>
						<PriorityHighIcon></PriorityHighIcon>
					</Button>
				</footer>
			</div>
		</>
	);
};
export default Footer;
