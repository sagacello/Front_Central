import React, { useState } from 'react';
import CustomAllErrors from '../components/CustomAllErrors';
import { Grid } from 'semantic-ui-react';
import CustomHeader from '../components/CustomHeader';
import CustomBack from '../components/CustomBack';
import CustomCheckbox from '../components/CustomCheckbox';
import CustomInput from '../components/CustomInput';
// import { fetchEvents } from '../service/auth';

function Central()  {

  const [event, setEvent] = useState({
    error: '',
    quantity: 0,
    description: '',
    data: Date(),
});

  const backToLogin = async () => {
    // const { history } = this.props;
    // history.push('/login');
    // const event = await fetchEvents();
    // console.log(event);
    const event = {
      error: 'ERROR',
      quantity: 900,
      description: 'erro do java',
      date: '2020-07-22'
    }
    setEvent(event);
  };

    return (
      <div>
        <CustomBack toLogin={backToLogin} />
        <Grid
          textAlign="center"
          style={{ height: '30vh' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 1600 }}>
          <CustomHeader message="Filtrar erros" />
            <CustomInput />
            <CustomCheckbox />
            <CustomAllErrors event={event} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }

export default Central;
