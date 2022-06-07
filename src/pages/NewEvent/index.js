import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MaterialUIPickers from "./MuiDateRangePicker";

const newEvent = () => {
    return (
        <>
            <div>
                <div id="eventNameCard">
                    <TextField
                        id="standard-textarea"
                        label="Make a name for your event..."
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                    />
                </div>
                <div id="eventDescCard">
                    <TextField
                        id="standard-textarea"
                        label="Tell us about your event..."
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                    />
                </div>
                <div id="eventMapCard">
                    <TextField
                        id="standard-textarea"
                        label="Enter your event location..."
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                    />
                </div>
                <div id="eventCalendarCard">
                    <MaterialUIPickers />
                </div>
                
                <Button variant="contained">Create Event</Button>
            </div>
        </>
    );
}



export default newEvent;