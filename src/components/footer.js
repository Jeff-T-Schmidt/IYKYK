import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	Heading,
} from "./footerStyle";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';


const Footer = () => {
	return (
		<Box>
			<Container>
				<Row>
					<Column>
						<Heading>
							<Button size="large" variant="contained"
								sx={{
									color: 'yellow', backgroundColor: 'orange',
									"&:hover": { backgroundColor: 'orange' }
								}}>
								<KeyboardBackspaceIcon></KeyboardBackspaceIcon>
							</Button>
						</Heading>
					</Column>
					{/* Column 2 spaceholder */}
					<Column>
						<Heading></Heading>
					</Column>
					{/* Column 3 spaceholder */}
					<Column>
						<Heading></Heading>
					</Column>
					<Column>
						<Heading>
							<Button size="large" variant="contained" sx={{ color: 'yellow', backgroundColor: 'orange' }}>
								<PriorityHighIcon></PriorityHighIcon>
							</Button>
						</Heading>
					</Column>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;
