import Utils from "../utils";
const {
  config,
  getTotalDestinationsArray,
  checkIfSelected,
  checkIfVehicleValid,
  noOfVehiclesAvailable,
  fetchNameArray,
  totalTimeTaken,
  disableButton,
} = Utils;
describe("Testing Utils", () => {
  it("config", () => {
    const url = "https://findfalcone.geektrust.com";
    expect(config.endpoint).toEqual(url);
    expect(config.totalDestinations).toEqual(4);
  });

  it("getTotalDestinationsArray", () => {
    const array = getTotalDestinationsArray(4);
    expect(array).toEqual([0, 1, 2, 3]);
  });

  it("checkIfSelected", () => {
    const selected = [
      {
        name: "Donlon",
        distance: 100,
      },
      {
        name: "Enchai",
        distance: 200,
      },
      {
        name: "Jebing",
        distance: 300,
      },
      "",
    ];
    const option1 = {
      name: "Donlon",
      distance: 100,
    };
    const option2 = {
      name: "Sapir",
      distance: 400,
    };
    expect(checkIfSelected(selected, option1)).toBe(true);
    expect(checkIfSelected(selected, option2)).toBe(false);
  });

  it("noOfVehiclesAvailable", () => {
    const selected = [
      {
        name: "Space pod",
        total_no: 2,
        max_distance: 200,
        speed: 2,
      },
      {
        name: "Space pod",
        total_no: 2,
        max_distance: 200,
        speed: 2,
      },
      {
        name: "Space rocket",
        total_no: 1,
        max_distance: 300,
        speed: 4,
      },
      {
        name: "Space shuttle",
        total_no: 1,
        max_distance: 400,
        speed: 5,
      },
    ];
    const vehicle1 = {
      name: "Space pod",
      total_no: 2,
      max_distance: 200,
      speed: 2,
    };
    const vehicle2 = {
      name: "Space ship",
      total_no: 2,
      max_distance: 6,
      speed: 10,
    };
    expect(noOfVehiclesAvailable(selected, vehicle1)).toBe(0);
    expect(noOfVehiclesAvailable(selected, vehicle2)).toBe(2);
  });

  it("checkIfVehicleValid", () => {
    const distance = 400;
    const vehicle1 = {
      name: "Space pod",
      total_no: 2,
      max_distance: 200,
      speed: 2,
    };
    const vehicle2 = {
      name: "Space shuttle",
      total_no: 1,
      max_distace: 400,
      speed: 5,
    };
    expect(checkIfVehicleValid(distance, vehicle1)).toBeFalsy();
    expect(checkIfVehicleValid(distance, vehicle2)).toBeTruthy();
  });

  it("totalTimeTaken", () => {
    const planets = [
      {
        name: "Donlon",
        distance: 100,
      },
      {
        name: "Enchai",
        distance: 200,
      },
      {
        name: "Jebing",
        distance: 300,
      },
      "",
    ];
    const vehicles = [
      {
        name: "Space pod",
        total_no: 2,
        max_distance: 200,
        speed: 2,
      },
      {
        name: "Space pod",
        total_no: 2,
        max_distance: 200,
        speed: 2,
      },
      {
        name: "Space rocket",
        total_no: 1,
        max_distance: 300,
        speed: 4,
      },
      "",
    ];
    expect(totalTimeTaken(planets, vehicles)).toBe(225);
  });

  it("fetchNameArray", () => {
    const selected1 = [
      {
        name: "Donlon",
        distance: 100,
      },
      {
        name: "Enchai",
        distance: 200,
      },
      {
        name: "Jebing",
        distance: 300,
      },
      {
        name: "Sapir",
        distance: 400,
      },
    ];
    const selected2 = [
      {
        name: "Space pod",
        total_no: 2,
        max_distance: 200,
        speed: 2,
      },
      {
        name: "Space rocket",
        total_no: 1,
        max_distance: 300,
        speed: 4,
      },
      {
        name: "Space shuttle",
        total_no: 1,
        max_distance: 400,
        speed: 5,
      },
      {
        name: "Space ship",
        total_no: 2,
        max_distance: 600,
        speed: 10,
      },
    ];
    expect(fetchNameArray(selected1)).toEqual([
      "Donlon",
      "Enchai",
      "Jebing",
      "Sapir",
    ]);
    expect(fetchNameArray(selected2)).toEqual([
      "Space pod",
      "Space rocket",
      "Space shuttle",
      "Space ship",
    ]);
  });

  it("disableButton", () => {
    const option1 = [
      {
        name: "Space pod",
        total_no: 2,
        max_distance: 200,
        speed: 2,
      },
      {
        name: "Space rocket",
        total_no: 1,
        max_distance: 300,
        speed: 4,
      },
      {
        name: "Space shuttle",
        total_no: 1,
        max_distance: 400,
        speed: 5,
      },
      {
        name: "Space ship",
        total_no: 2,
        max_distance: 600,
        speed: 10,
      },
    ];
    const option2 = [
      {
        name: "Space pod",
        total_no: 2,
        max_distance: 200,
        speed: 2,
      },
      {
        name: "Space rocket",
        total_no: 1,
        max_distance: 300,
        speed: 4,
      },
      {
        name: "Space shuttle",
        total_no: 1,
        max_distance: 400,
        speed: 5,
      },
      "",
    ];

    expect(disableButton(option1)).toBeTruthy();
    expect(disableButton(option2)).toBeFalsy();
  });
});