import React from 'react';
import { Divider, Grid, Image, Segment, Button, Icon } from 'semantic-ui-react';

const CustomCentral = ({ Quantity, Description, Data }) => (
  <Segment>
    <Grid columns={2} relaxed="very">
      <Grid.Column>
        <p>
         Error: Warning
        </p>
        <p>
        Quantity: 2
        </p>
        <p>
          Description: Aconteceu alguma coisa ,Aconteceu alguma coisa Aconteceu alguma coisa 
          Aconteceu alguma coisa 
        </p>
        <p>
          Data: 14/02/1988
        </p>
      </Grid.Column>
      <Grid.Column>
        <p>
         1 Um texto grande de erro,Um texto grande de erroUm texto grande de erroUm texto grande de erroUm texto grande de erro
         2 Um texto grande de erroUm texto grande de erroUm texto grande de erroUm texto grande de erro
         3 Um texto grande de erroUm texto grande de erroUm texto grande de erro
         4 Um texto grande de erroUm texto grande de erroUm texto grande de erro
          5Um texto grande de erroUm texto grande de erroUm texto grande de erroUm texto grande de erro
          6Um texto grande de erroUm texto grande de erroUm texto grande de erro
        7  Um texto grande de erroUm texto grande de erroUm texto grande de erro
         8 Um texto grande de erroUm texto grande de erroUm texto grande de erro
         
        </p>
      </Grid.Column>
    </Grid>

    <Divider vertical>
      <div>
      <Button.Group color='blue'>
    <Button>Log</Button>
  </Button.Group>
      </div>
    </Divider>
  </Segment>
);

export default CustomCentral;
