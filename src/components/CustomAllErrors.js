import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const CustomAllErrors = ({ event }) => (
  <Segment>
    <Grid columns={1} relaxed="very">
      <Grid.Column>
        <p>Error: {event.error}</p>
        <p>Quantity: {event.quantity}</p>
        <p>
          Description: {event.description}
        </p>
        <p>Data: {event.date}</p>
      </Grid.Column>
      
    </Grid>
  </Segment>
);

export default CustomAllErrors;
