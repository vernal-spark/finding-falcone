const config = {
    endpoint: "https://findfalcone.geektrust.com",
    totalDestinations: 4,
  };
  
  function getTotalDestinationsArray(n) {
    const array = [];
    for (let i = 0; i < n; i++) {
      array.push(i);
    }
    return array;
  }
  
  function checkIfSelected(selected, obj) {
    return selected.some((ele) => ele.name === obj.name);
  }
  
  function noOfVehiclesAvailable(selected, vehicle) {
    let count = 0;
    selected.forEach((ele) => {
      if (ele.name === vehicle.name) {
        count++;
      }
    });
    return vehicle.total_no - count;
  }
  
  function checkIfVehicleValid(distance, vehicle) {
    if (vehicle.max_distance < distance) {
      return false;
    } else {
      return true;
    }
  }
  
  function totalTimeTaken(planets, vehicles) {
    let i = 0;
    let timeTaken = 0;
    while (i < 4 && planets[i] !== "" && vehicles[i] !== "") {
      timeTaken += planets[i].distance / vehicles[i].speed;
      i++;
    }
    return timeTaken;
  }
  
  function fetchNameArray(selected) {
    const names = selected.map((ele) => ele.name);
    return names;
  }
  
  function disableButton(array) {
    return array.every((ele) => ele !== "");
  }
  
  export default {
    config,
    getTotalDestinationsArray,
    checkIfSelected,
    checkIfVehicleValid,
    noOfVehiclesAvailable,
    totalTimeTaken,
    fetchNameArray,
    disableButton,
  };