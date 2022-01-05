import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

export class ConfirmPage extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (

      <>
        <div style={{ marginTop: '10%', marginLeft: '40%' }}>

          <Box sx={{ width: '42%' }} >
            <Card variant="outlined" style={{ backgroundColor: 'peachpuff' }}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <CardContent>
                  <Grid item>
                    <AppBar title="Confirm User Data" />

                    <List>
                      <ListItem>
                        <ListItemText primary="First Name" secondary={firstName} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Last Name" secondary={lastName} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Email" secondary={email} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Occupation" secondary={occupation} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="City" secondary={city} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Bio" secondary={bio} />
                      </ListItem>
                    </List>
                    <br />
                  </Grid>
                </CardContent>

                <CardActions>
                  <Grid item>
                    <ButtonGroup variant="contained">
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={this.back}
                      >Back</Button>

                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={this.continue}
                      >Confirm & Continue</Button>
                    </ButtonGroup>
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

export default ConfirmPage;
