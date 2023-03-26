import { Card, Typography } from "@mui/material";
import { useEffect, useState, useContext } from "react";

import AutoComplete from "./AutoComplete";
import { AppContext } from "../AppContext";
import "../css/Card.css";
import RadioComponent from "./RadioComponent";

const CardView = ({ index }) => {
  const { selectedPlanetsState } = useContext(AppContext);
  const [selectedPlanets, setSelectedPlanets] = selectedPlanetsState;
  return (
    <Card className="card">
      <AutoComplete index={index} />
      {selectedPlanets[index] !== "" && (
        <>
          <Typography variant="caption">
            Distance:{selectedPlanets[index].distance}
          </Typography>
          <RadioComponent
            index={index}
            distance={selectedPlanets[index].distance}
          />
        </>
      )}
    </Card>
  );
};

export default CardView;