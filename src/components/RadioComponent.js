import {
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
  } from "@mui/material";
  import { useContext } from "react";
  
  import { AppContext } from "../AppContext";
  import Utils from "../utils";
  const { checkIfVehicleValid, noOfVehiclesAvailable } = Utils;
  
  const RadioComponent = ({ index, distance }) => {
    const { vehicleState, selectedVehiclesState } = useContext(AppContext);
    const [vehicles, setVehicles] = vehicleState;
    const [selectedVehicles, setSelectedVehicles] = selectedVehiclesState;
  
    const handleInputChange = (e) => {
      const temp = { ...selectedVehicles };
      const vehicle = JSON.parse(e.target.value);
      temp[index] = vehicle;
      setSelectedVehicles(temp);
    };
  
    return (
      <FormControl>
        <RadioGroup column="true" onChange={handleInputChange}>
          {vehicles.map((ele) =>
            checkIfVehicleValid(distance, ele) &&
            noOfVehiclesAvailable(Object.values(selectedVehicles), ele) > 0 ? (
              <FormControlLabel
                value={JSON.stringify(ele)}
                control={<Radio />}
                label={`${ele.name}(${noOfVehiclesAvailable(
                  Object.values(selectedVehicles),
                  ele
                )})`}
                key={ele.name}
              />
            ) : (
              <FormControlLabel
                disabled
                value={JSON.stringify(ele)}
                control={<Radio />}
                label={`${ele.name}(${noOfVehiclesAvailable(
                  Object.values(selectedVehicles),
                  ele
                )})`}
                key={ele.name}
              />
            )
          )}
        </RadioGroup>
      </FormControl>
    );
  };
  export default RadioComponent;