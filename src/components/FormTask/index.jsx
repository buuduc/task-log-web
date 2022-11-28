import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
        maxWidth: '100%',
      }}
      noValidate
    >
      <div>
        <TextField
          fullWidth
          required
          label="Description"
          defaultValue="Hello World"
        />
        <TextField
          fullWidth
          disabled
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          fullWidth
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          fullWidth
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <Button variant="contained">Contained</Button>

    </Box>
  );
}
