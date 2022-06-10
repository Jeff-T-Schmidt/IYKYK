import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function SimpleAccordion({oneEventData}) {
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
            {oneEventData.details}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
