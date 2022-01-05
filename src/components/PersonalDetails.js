import React, { Component } from 'react';
import { ButtonGroup } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { Card} from '@material-ui/core';
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CardActions, CardContent } from '@material-ui/core';

export class PersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
    
        <>
        <div style={{marginTop:'10%', marginLeft:'40%'}}>
        
        <Box sx={{ width: '42%' }} >
          <Card variant="outlined" style={{backgroundColor:'peachpuff'}}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
          <CardContent>
          <Grid item>
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              margin="normal"
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"

            />
            <br />
            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"

            />
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
            >Continue</Button>
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

        export default PersonalDetails;
