import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Event Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is where we can put a detailed description of the event.  We can really just type whatever we want here, and this way the user can make their description long without it always taking up the whole screen.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
