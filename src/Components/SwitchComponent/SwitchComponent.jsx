import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const TextSwitch = styled(Switch)(({ theme }) => ({
  width: 250,
  height: 40,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 2  ,
    transform: 'translateX(6px)', // Position when unchecked
    transition: 'transform 300ms', // Smooth transition
    '&.Mui-checked': {
      transform: 'translateX(120px)', // Thumb moves 40% of 250px width
      color: '#fff',
    },
  },
  '& .MuiSwitch-thumb': {
    width: 120,
    height: 35,
    borderRadius: 25, // Rounded capsule shape
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[100],
    color: '#fff',
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.grey[300],
    borderRadius: 20,
    position: 'relative',
    '&:before': {
      content: `"EVENTS"`, // Text for the on state
      position: 'absolute',
      left: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#fff',
    },
    '&:after': {
      content: `"COLLECTION"`, // Text for the off state

      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      color: theme.palette.white,
    },
  },
}));

export default function ToggleWithText() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <TextSwitch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'text switch' }}
          />
        }
      />
    </FormGroup>
  );
}
