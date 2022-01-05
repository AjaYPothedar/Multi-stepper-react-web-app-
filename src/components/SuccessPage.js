import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import { Card } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { CardContent } from '@material-ui/core';


export class SuccessPage extends Component {
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
    return (

      <>
        <div style={{ marginTop: '10%', marginLeft: '40%' }}>

          <Box sx={{ width: '50%' }} >
            <Card variant="outlined" style={{ backgroundColor: 'peachpuff' }}>
              <CardContent>
                <AppBar title="Success" />
                <h1>Thank You For Your Submission</h1>
              </CardContent>
            </Card>
          </Box>
        </div>

      </>

    );
  }
}

export default SuccessPage;
