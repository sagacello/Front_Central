import React, { useContext } from "react";
import { Grid, Segment } from "semantic-ui-react";
import CentralContext from "../context/CentralContext";

const CustomEventDetails = () => {
  const { eventDetails } = useContext(CentralContext);

  return (
    <Segment>
      <Grid columns={1} relaxed="very">
        <Grid.Column>
          <p>Id: {eventDetails.id}</p>
          <p>Event Log: {eventDetails.log}</p>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default CustomEventDetails;
