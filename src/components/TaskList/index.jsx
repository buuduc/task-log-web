import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormTask  from '../FormTask'
import './TaskList.css'

const data = [
    {
        number: '246',
        link: 'https://app.shortcut.com/codemotionteam/epic/3511'
    },
    {
        number: '246',
        link: 'https://app.shortcut.com/codemotionteam/epic/3511'
    },
    {
        number: '246',
        link: 'https://app.shortcut.com/codemotionteam/epic/3511'
    }
]


const AccordionItem = ({ title, description }) => (
    <Accordion>
        <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <FormTask/>
    </AccordionDetails>
  </Accordion>
)


function SimpleAccordion() {
  return (
    <div className='tasklist'>
   {data.map(item => <AccordionItem key={item.number} title={`${item.number} -- ${item.link} `}/>)}
    </div>
  );
}

export default SimpleAccordion
