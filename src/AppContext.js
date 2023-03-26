import { createContext, useState } from "react";
export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [selectedPlanets, setSelectedPlanets] = useState({
    0: "",
    1: "",
    2: "",
    3: ""
  });
  const [selectedVehicles, setSelectedVehicles] = useState({
    0: "",
    1: "",
    2: "",
    3: ""
  });
  const [response, setResponse] = useState({});
  return (
    <AppContext.Provider
      value={{
        planetState: [planets, setPlanets],
        vehicleState: [vehicles, setVehicles],
        selectedPlanetsState: [selectedPlanets, setSelectedPlanets],
        selectedVehiclesState: [selectedVehicles, setSelectedVehicles],
        responseState: [response, setResponse]
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
