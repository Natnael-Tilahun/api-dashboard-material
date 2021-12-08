import { Email, Password, Phone } from '@mui/icons-material';
import {
  Grid,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

export default function newuserContainer() {
  return (
    <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ padding: 10 }}>
        <form style={{ minWidth: 800 }}>
          <Typography component="h5" variant="h5">
            User Registration
          </Typography>
          <List>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="fullname"
                label="Full Name"
                inputProps={{ type: Text }}
                
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="phone"
                label="Phone Number"
                inputProps={{ type: Phone }}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                inputProps={{ type: Email }}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Password"
                inputProps={{ type: Password }}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="confirmPasword"
                label="Confirm Password"
                inputProps={{ type: Password }}
              ></TextField>
            </ListItem>
          </List>
        </form>
      </Paper>
    </Grid>
  );
}
