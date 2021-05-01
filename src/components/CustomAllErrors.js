import React, { useContext } from "react";
import { Grid, Segment } from "semantic-ui-react";
import CentralContext from "../context/CentralContext";

const CustomAllErrors = () => {
  const { isFetching, allEvents } = useContext(CentralContext);
  if (isFetching) return <span>Carregando...</span>;
  else {
    console.log(allEvents);
    return allEvents.content.map((event) => (
      <Segment>
        <Grid columns={1} relaxed="very">
          <Grid.Column>
            <p>Error: {event.error}</p>
            <p>Quantity: {event.quantity}</p>
            <p>Description: {event.description}</p>
            <p>Data: {event.date}</p>
          </Grid.Column>
        </Grid>
      </Segment>
    ));
  }
};

export default CustomAllErrors;
