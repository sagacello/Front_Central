import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import CustomHeader from "../components/CustomHeader";
import CustomBack from "../components/CustomBack";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import CentralContext from "../context/CentralContext";
import { getToken } from "../helpers/localStorageHelper";
import CustomEventDetails from "../components/CustomEventDetails";

function EventDetails() {
  const { id } = useParams();
  const { setEventDetails, isFetching, setIsFetching } = useContext(
    CentralContext
  );
  const history = useHistory();

  useEffect(() => {
    setIsFetching(true);
    const baseUrl = `https://central-errors-events.herokuapp.com/api/v1/events/${id}`;
    const token = getToken();
    const request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    fetch(baseUrl, request)
      .then((response) => response.json())
      .then((eventLog) => {
        setEventDetails(eventLog);
      });
    setIsFetching(false);
  }, [setEventDetails, setIsFetching, id]);

  const backToCentral = () => {
    history.push("/central");
  };

  if (isFetching) {
    return (
      <div
        style={{
          display: "flex",
          aligItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadSpinner />
      </div>
    );
  } else {
    return (
      <div>
        <CustomBack toLogin={backToCentral} />
        <Grid
          textAlign="center"
          style={{ height: "30vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 1600 }}>
            <CustomHeader message="Log do evento" />
            <CustomEventDetails />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDetails;
