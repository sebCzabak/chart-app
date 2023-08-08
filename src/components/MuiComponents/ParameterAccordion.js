import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ParameterAccordion = ({ title, content }) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography variant="h3">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{content}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default ParameterAccordion;
