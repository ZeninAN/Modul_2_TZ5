/// <reference path="TZ4.ts" />
const owner = new Transport.OwnerClass(
    "Зенин",
    "Андрей",
    "Сергеевич",
    new Date(2005, 1, 3),
    Transport.TypeDocument.Passport,
    "1234",
    "567890"
);

const vehicle = new Transport.VehicleClass(
    "Chevrole",
    "Corvette",
    2016,
    "JTDBE32K620055880",
    "228IVT",
    owner
);

owner.printOwnerInfo();
console.log("\n---\n");
vehicle.printVehicleInfo(); 
const car = new Transport.CarClass(
    "BMW",
    "X5",
    2021,
    "WBAFY42040L456789",
    "B456XY77",
    owner,
    Transport.BodyType.SUV,
    Transport.CarType.Premium
);

const motorbike = new Transport.MotorbikeClass(
    "Yamaha",
    "YZF-R1",
    2019,
    "JYARN23E0KA003456",
    "M123YY77",
    owner,
    "Спортивная",
    true
);

const storage = new Transport.VehicleStorageClass<Transport.Vehicle>();
storage.addVehicle(car);
storage.addVehicle(motorbike);

console.log("\n--- Сведения о всех транспортных средствах в хранилище ---\n");
storage.getAllVehicles().forEach(vehicle => vehicle.printVehicleInfo());

