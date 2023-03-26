import { Autocomplete, TextField } from "@mui/material";
import { useContext, useEffect } from "react";

import { AppContext } from "../AppContext";
import Utils from "../utils";
const { checkIfSelected } = Utils;

const AutoComplete = ({ index }) => {
  const { planetState, selectedPlanetsState } = useContext(AppContext);
  const [selectedPlanets, setSelectedPlanets] = selectedPlanetsState;
  const [planets, setPlanets] = planetState;

  const handleInputChange = (e, newValue) => {
    const temp = { ...selectedPlanets };
    temp[index] = newValue;
    setSelectedPlanets(temp);
  };

  const defaultProps = {
    options: planets,
    getOptionLabel: (option) => option.name,
    getOptionDisabled: (option) =>
      checkIfSelected(Object.values(selectedPlanets), option),
  };

  return (
    <Autocomplete
      {...defaultProps}
      disableClearable
      onChange={handleInputChange}
      sx={{ py: 2, width: "93%" }}
      renderInput={(params) => (
        <TextField {...params} label="Select a Planet" />
      )}
    />
  );
};
export default AutoComplete;