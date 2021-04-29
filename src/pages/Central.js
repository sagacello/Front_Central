import React, { Component } from 'react';
import CustomAllErrors from '../components/CustomAllErrors';
import { Grid } from 'semantic-ui-react';
import CustomHeader from '../components/CustomHeader';
import CustomBack from '../components/CustomBack';
import CustomCheckbox from '../components/CustomCheckbox';
import CustomInput from '../components/CustomInput';

class Central extends Component {
  state = {
    erro: '',
    quantity: 0,
    description: '',
    data: Date,
  };
  backToLogin = () => {
    const { history } = this.props;
    history.push('/login');
  };

  render() {
    return (
      <div>
        <CustomBack toLogin={this.backToLogin} />
        <Grid
          textAlign="center"
          style={{ height: '30vh' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 1600 }}>
          <CustomHeader message="Filtrar erros" />
            <CustomInput />
            <CustomCheckbox />
            <CustomAllErrors formData={this.state} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Central;
