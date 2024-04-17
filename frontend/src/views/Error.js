import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, useMediaQuery, useTheme } from '@mui/material';
import errorImage from '../Assets/Error.PNG'; // Adjust the import path as necessary

const Error = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // Open the modal as soon as the component mounts
  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="error-dialog-title"
      aria-describedby="error-dialog-description"
      fullScreen={fullScreen}
    >
      <DialogContent>
        <img src={errorImage} alt="Error" style={{ width: '500px', height: '310px' }} />
      </DialogContent>
    </Dialog>
  );
};

export default Error;