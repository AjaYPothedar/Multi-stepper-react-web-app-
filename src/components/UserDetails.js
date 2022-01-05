import React, { Component } from 'react';
import { ButtonGroup } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CardActions, CardContent } from '@material-ui/core';

export class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <div style={{ marginTop: '10%', marginLeft: '40%' }}>

          <Box sx={{ maxWidth: '42%' }} >
            <Card variant="outlined" style={{ backgroundColor: 'peachpuff' }}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <CardContent>
                  <Grid item>
                    <AppBar title="Enter User Details" />
                    <TextField
                      placeholder="Enter Your First Name"
                      label="First Name"
                      onChange={handleChange('firstName')}
                      defaultValue={values.firstName}
                      margin="normal"
                      fullWidth
                    />
                    <br />
                    <TextField
                      placeholder="Enter Your Last Name"
                      label="Last Name"
                      onChange={handleChange('lastName')}
                      defaultValue={values.lastName}
                      margin="normal"
                      fullWidth
                    />
                    <br />
                    <TextField
                      placeholder="Enter Your Email"
                      label="Email"
                      onChange={handleChange('email')}
                      defaultValue={values.email}
                      margin="normal"
                      fullWidth
                    />
                    <br />
                  </Grid>
                </CardContent>
                <CardActions>
                  <Grid item>

                    <Button
                      color="primary"
                      variant="contained"
                      onClick={this.continue}
                    >Continue</Button>
                  </Grid>
                </CardActions>
              </Grid>
            </Card>
          </Box>
        </div>
      </>
    );
  }
}

export default UserDetails;
