import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const CustomAllErrors = ({ fromData }) => (
  <Segment>
    <Grid columns={1} relaxed="very">
      <Grid.Column>
        <p>Error: Warning</p>
        <p>Quantity: 2</p>
        <p>
          Description: Aconteceu alguma coisa ,Aconteceu alguma coisa Aconteceu
          alguma coisa Aconteceu alguma coisa
        </p>
        <p>Data: 14/02/1988</p>
      </Grid.Column>
      
    </Grid>
  </Segment>
);

export default CustomAllErrors;
