import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import PostCard from '../PostCards/index.js'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const PostCarousel = (props) => {
    
    var items = [
        {
            name: "Chat 1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Chat B",
            description: "Hello World!"
        },
        {
            name: "This is the third Chat",
            description: "Hello World!"
        },
        {
            name: "Chat #3 #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel
            fullHeightHover={false}     // We want the nav buttons wrapper to only be as big as the button element is
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    backgroundColor: 'cornflowerblue',
                    borderRadius: 0
                }
            }} 

            NextIcon='>'             // Change the "inside" of the next button to "next"
            PrevIcon='<'             // Change the "inside of the prev button to "prev"
            animation="slide"
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    // FOR THE MODAL IN THE CAROUSEL
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <PostCard />
            <Button 
                className="CheckButton"
                onClick={handleOpen}
            >
                Check it out!
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Pop-up Chat (Topic)
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    We can display our chat here?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Yeah I like that :)
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    I too have an opinion
                </Typography>
            </Box>
            </Modal>
        </Paper>
    )
}


export default PostCarousel