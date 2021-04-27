import React, { Component } from 'react';
import CustomCentral from '../components/CustomCentral';
import { Grid } from 'semantic-ui-react';
import CustomHeader from '../components/CustomHeader';

class Central extends Component {
  state = {
    erro: '',
    quantity: 0,
    description: '',
    data: Date,
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '40vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 1600 }}>
          <CustomHeader message="Central de Erros" />
          { 
          <CustomCentral formData={this.state} />
          }
        </Grid.Column>
      </Grid>
    );
  }
}

export default Central;
