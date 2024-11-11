import Box from '@mui/material/Box';
import wizcat from '../assets/wizcat.jpg'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Typography } from '@mui/material';
import { useState } from 'react';

export default function Whoami() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Box
      display='flex'
      alignItems='center'
      flexDirection='column'
      textAlign='center'
      padding={2}
    >
      <Avatar
        src={wizcat}
        alt="hehe"
        sx={{ width: 150, height: 150, borderRadius: '50%', margin: 'auto' }}
      />

      <Typography variant="h5" marginTop={2}>
        Hi, my name is <strong>i5-650</strong>!
      </Typography>
      <Typography variant="body1" color="text.secondary" marginTop={1}>
        I'm a computer science student expecting my fifth year graduation in 2025.
      </Typography>

      <Accordion expanded={expanded} sx={{ width: '70%', marginTop: 2 }}>
        <AccordionSummary>
          <Button onClick={handleToggle} variant="text" sx={{ width: '100%', backgroundColor: '#01A268', color: 'white' }}>
            {expanded ? 'Read less' : 'Read more'}
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="body2">
              Passionated about computers since a young age, I'm always willing to learn. Futhermore, I have a specialized myself in back-end, services and applications for the past 3 years and currently enhancing my skills in devops.
            </Typography>
            <Typography>
              I will write this later.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
