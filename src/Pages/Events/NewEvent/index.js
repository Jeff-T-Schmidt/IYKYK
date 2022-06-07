import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
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
                    <textarea 
                        id="eventNameInput"
                        className="eventNameInput"
                        placeholder="Make a name for your event..."
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
                    <textarea 
                        id="eventDescInput"
                        className="eventDescInput"
                        placeholder="Tell us about your event..."
                    />
                </div>
                <div id="eventCalendarCard">
                    <MaterialUIPickers />
                </div>
                <div id="eventMapCard">
                    <TextField
                        id="standard-textarea"
                        label="Enter your event location..."
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                    />
                    <textarea 
                        id="eventLocationInput"
                        className="eventLocationInput"
                        placeholder="Enter your event location..."
                    />
                </div>
                <Button variant="contained">Create Event</Button>

            </div>
        </>
    );
}



export default newEvent;