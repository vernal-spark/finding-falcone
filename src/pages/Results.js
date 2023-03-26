import { Box, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

import { AppContext } from "../AppContext";
import Header from "../components/Header";
import "../css/HomePage.css";
import Utils from "../utils";
const { totalTimeTaken } = Utils;

const Results = () => {
  const { responseState, selectedPlanetsState, selectedVehiclesState } =
    useContext(AppContext);
  const [response, setResponse] = responseState;
  const [selectedPlanets, setSelectedPlanets] = selectedPlanetsState;
  const [selectedVehicles, setSelectedVehicles] = selectedVehiclesState;
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Box className="container">
      <Header />
      {response.status === "success" ? (
        <>
          <Typography variant="h6" className="time-taken">
            Success! Congragulations on Finding Falcone. King Shan might be
            pleased.
          </Typography>
          <Typography variant="h6" className="time-taken">
            Time Taken:
            {totalTimeTaken(
              Object.values(selectedPlanets),
              Object.values(selectedVehicles)
            )}
          </Typography>
          <Typography variant="h6" className="time-taken">
            Planet found:{response.planet_name}
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="h6" className="time-taken">
            OOPs! Falcone not found.
          </Typography>
        </>
      )}
      <Button
        onClick={handleClick}
        className="submit-button"
        variant="contained"
      >
        Start Again
      </Button>
    </Box>
  );
};

export default withRouter(Results);