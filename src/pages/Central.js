import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CustomAllErrors from "../components/CustomAllErrors";
import { Grid } from "semantic-ui-react";
import CustomHeader from "../components/CustomHeader";
import CustomBack from "../components/CustomBack";
import CustomCheckbox from "../components/CustomCheckbox";
import CustomInput from "../components/CustomInput";
import CentralContext from "../context/CentralContext";
import { getToken } from "../helpers/localStorageHelper";

function Central() {
  const { setAllEvents, setIsFetching } = useContext(CentralContext);
  const history = useHistory();

  useEffect(() => {
    setIsFetching(true);
    const baseUrl = "https://central-errors-events.herokuapp.com/v1/events/all";
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
      .then((events) => {
        setAllEvents(events.content);
      });
    setIsFetching(false);
  }, [setAllEvents, setIsFetching]);

  const backToLogin = async () => {
    history.push("/login");
  };

  return (
    <div>
      <CustomBack toLogin={backToLogin} />
      <Grid
        textAlign="center"
        style={{ height: "30vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 1600 }}>
          <CustomHeader message="Filtrar erros" />
          <CustomInput />
          <CustomCheckbox />
          <CustomAllErrors />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Central;
