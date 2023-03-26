import { Box, Typography, Grid, Button } from "@mui/material";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";

import { AppContext } from "../AppContext";
import Utils from "../utils";
import Header from "../components/Header";
import CardView from "../components/Card";
import "../css/HomePage.css";
const {
  config,
  getTotalDestinationsArray,
  totalTimeTaken,
  fetchNameArray,
  disableButton,
} = Utils;
const destinations = getTotalDestinationsArray(config.totalDestinations);

const HomePage = () => {
  const {
    planetState,
    vehicleState,
    selectedPlanetsState,
    selectedVehiclesState,
    responseState,
  } = useContext(AppContext);
  const [planets, setPlanets] = planetState;
  const [vehicles, setVehicles] = vehicleState;
  const [selectedPlanets, setSelectedPlanets] = selectedPlanetsState;
  const [selectedVehicles, setSelectedVehicles] = selectedVehiclesState;
  const [response, setResponse] = responseState;
  const history = useHistory();

  const fetchPlanets = async () => {
    try {
      const res = await axios.get(`${config.endpoint}/planets`);
      setPlanets(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchVehicles = async () => {
    try {
      const res = await axios.get(`${config.endpoint}/vehicles`);
      setVehicles(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchToken = async () => {
    try {
      const res = await axios.post(
        `${config.endpoint}/token`,
        {},
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      return res.data.token;
    } catch (e) {
      console.log(e);
    }
  };

  const findFalcone = async (body) => {
    try {
      const res = await axios.post(`${config.endpoint}/find`, body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const token = await fetchToken();
    const body = {
      token: token,
      planet_names: fetchNameArray(Object.values(selectedPlanets)),
      vehicle_names: fetchNameArray(Object.values(selectedVehicles)),
    };
    const res = await findFalcone(body);
    setResponse(res.data);
    history.push("/results");
  };

  useEffect(() => {
    setSelectedPlanets({
      0: "",
      1: "",
      2: "",
      3: "",
    });
    setSelectedVehicles({
      0: "",
      1: "",
      2: "",
      3: "",
    });
    fetchPlanets();
    fetchVehicles();
  }, []);

  return (
    <Box className="container">
      <Header />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {destinations.map((item) => (
          <Grid item key={item} xs={12} sm={6} md={6} lg={3}>
            <CardView index={item} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" className="time-taken">
        Time Taken:
        {totalTimeTaken(
          Object.values(selectedPlanets),
          Object.values(selectedVehicles)
        )}
      </Typography>
      <Button
        disabled={!disableButton(Object.values(selectedVehicles))}
        className="submit-button"
        variant="contained"
        onClick={handleClick}
      >
        Find Falcone
      </Button>
    </Box>
  );
};
export default withRouter(HomePage);