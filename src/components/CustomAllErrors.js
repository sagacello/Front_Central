import React, { useContext } from "react";
import { Grid, Segment } from "semantic-ui-react";
import CentralContext from "../context/CentralContext";

const CustomAllErrors = () => {
  const { allEvents } = useContext(CentralContext);

  return allEvents.map((event) => (
    <Segment>
      <Grid columns={1} relaxed="very">
        <Grid.Column>
          <p>Id: {event.id}</p>
          <p>Event Type: {event.level}</p>
          <p>Quantity: {event.quantity}</p>
          <p>Description: {event.description}</p>
          <p>Data: {event.eventDate}</p>
        </Grid.Column>
      </Grid>
    </Segment>
  ));
};

export default CustomAllErrors;
