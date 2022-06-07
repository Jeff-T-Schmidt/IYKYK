import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>

        <MobileDatePicker
          label="Date mobile"
          inputFormat="yyyy-MM-dd"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Time"
          orientation="landscape"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

      </Stack>
    </LocalizationProvider>
  );
}
