interface Van {
  name: string;
  model: string;
  year: number;
  price: number;
  engine: string;
  horsepower: number;
  fuelType: string;
  transmission: string;
  cargoVolume: string;
  payloadCapacity: string;
  towingCapacity: string;
}

export const vans: Van[] = [
  {
    name: "Ford Transit",
    model: "T-350",
    year: 2022,
    price: 38990,
    engine: "3.5L V6",
    horsepower: 275,
    fuelType: "gasoline",
    transmission: "10-speed automatic",
    cargoVolume: "487.3 cu ft",
    payloadCapacity: "4,530 lbs",
    towingCapacity: "6,000 lbs",
  },
  {
    name: "Mercedes-Benz Sprinter",
    model: "2500",
    year: 2022,
    price: 44995,
    engine: "2.0L 4-cylinder diesel",
    horsepower: 161,
    fuelType: "diesel",
    transmission: "7-speed automatic",
    cargoVolume: "319.1 cu ft",
    payloadCapacity: "3,860 lbs",
    towingCapacity: "5,000 lbs",
  },
  {
    name: "Ram ProMaster",
    model: "3500",
    year: 2022,
    price: 38635,
    engine: "3.6L V6",
    horsepower: 280,
    fuelType: "gasoline",
    transmission: "6-speed automatic",
    cargoVolume: "460 cu ft",
    payloadCapacity: "4,430 lbs",
    towingCapacity: "6,910 lbs",
  },
  {
    name: "Nissan NV Cargo",
    model: "3500",
    year: 2022,
    price: 31060,
    engine: "4.0L V6",
    horsepower: 261,
    fuelType: "gasoline",
    transmission: "5-speed automatic",
    cargoVolume: "323.1 cu ft",
    payloadCapacity: "3,850 lbs",
    towingCapacity: "9,400 lbs",
  },
  {
    name: "Chevrolet Express Cargo",
    model: "3500",
    year: 2022,
    price: 35200,
    engine: "4.3L V6",
    horsepower: 276,
    fuelType: "gasoline",
    transmission: "8-speed automatic",
    cargoVolume: "239.7 cu ft",
    payloadCapacity: "4,080 lbs",
    towingCapacity: "9,600 lbs",
  },
];
