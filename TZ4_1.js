var Transport;
(function (Transport) {
    var TypeDocument;
    (function (TypeDocument) {
        TypeDocument["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        TypeDocument["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
        TypeDocument["IDCard"] = "ID-\u043A\u0430\u0440\u0442\u0430";
    })(TypeDocument = Transport.TypeDocument || (Transport.TypeDocument = {}));
    var OwnerClass = /** @class */ (function () {
        function OwnerClass(lastName, firstName, middleName, birthDate, typeDocument, documentSeries, documentNumber) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._birthDate = birthDate;
            this._typeDocument = typeDocument;
            this._documentSeries = documentSeries;
            this._documentNumber = documentNumber;
        }
        Object.defineProperty(OwnerClass.prototype, "lastName", {
            get: function () {
                return this._lastName;
            },
            set: function (value) {
                this._lastName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (value) {
                this._firstName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "middleName", {
            get: function () {
                return this._middleName;
            },
            set: function (value) {
                this._middleName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "birthDate", {
            get: function () {
                return this._birthDate;
            },
            set: function (value) {
                this._birthDate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "typeDocument", {
            get: function () {
                return this._typeDocument;
            },
            set: function (value) {
                this._typeDocument = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "documentSeries", {
            get: function () {
                return this._documentSeries;
            },
            set: function (value) {
                this._documentSeries = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "documentNumber", {
            get: function () {
                return this._documentNumber;
            },
            set: function (value) {
                this._documentNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        OwnerClass.prototype.printOwnerInfo = function () {
            console.log("\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446: ".concat(this._lastName, " ").concat(this._firstName, " ").concat(this._middleName));
            console.log("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ".concat(this._birthDate.toDateString()));
            console.log("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442: ".concat(this._typeDocument));
            console.log("\u0421\u0435\u0440\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this._documentSeries));
            console.log("\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this._documentNumber));
        };
        return OwnerClass;
    }());
    Transport.OwnerClass = OwnerClass;
    var VehicleClass = /** @class */ (function () {
        function VehicleClass(brand, model, year, vin, registrationNumber, owner) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }
        Object.defineProperty(VehicleClass.prototype, "brand", {
            get: function () {
                return this._brand;
            },
            set: function (value) {
                this._brand = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (value) {
                this._model = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "year", {
            get: function () {
                return this._year;
            },
            set: function (value) {
                this._year = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "vin", {
            get: function () {
                return this._vin;
            },
            set: function (value) {
                this._vin = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "registrationNumber", {
            get: function () {
                return this._registrationNumber;
            },
            set: function (value) {
                this._registrationNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            set: function (value) {
                this._owner = value;
            },
            enumerable: false,
            configurable: true
        });
        VehicleClass.prototype.printVehicleInfo = function () {
            console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this._brand));
            console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this._model));
            console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this._year));
            console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this._vin));
            console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this._registrationNumber));
        };
        return VehicleClass;
    }());
    Transport.VehicleClass = VehicleClass;
    var BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
        BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
        BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u044D\u043A";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    var CarType;
    (function (CarType) {
        CarType["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarType["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
        CarType["Premium"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
    })(CarType = Transport.CarType || (Transport.CarType = {}));
    var CarClass = /** @class */ (function () {
        function CarClass(brand, model, year, vin, registrationNumber, owner, bodyType, carType) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
            this._bodyType = bodyType;
            this._carType = carType;
        }
        Object.defineProperty(CarClass.prototype, "bodyType", {
            get: function () {
                return this._bodyType;
            },
            set: function (value) {
                this._bodyType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarClass.prototype, "carType", {
            get: function () {
                return this._carType;
            },
            set: function (value) {
                this._carType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarClass.prototype, "brand", {
            get: function () {
                return this._brand;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarClass.prototype, "model", {
            get: function () {
                return this._model;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarClass.prototype, "year", {
            get: function () {
                return this._year;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarClass.prototype, "vin", {
            get: function () {
                return this._vin;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarClass.prototype, "registrationNumber", {
            get: function () {
                return this._registrationNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarClass.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            enumerable: false,
            configurable: true
        });
        CarClass.prototype.printVehicleInfo = function () {
            console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this._brand));
            console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this._model));
            console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this._year));
            console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this._vin));
            console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this._registrationNumber));
            console.log("\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this._bodyType));
            console.log("\u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ".concat(this._carType));
        };
        return CarClass;
    }());
    Transport.CarClass = CarClass;
    var MotorbikeClass = /** @class */ (function () {
        function MotorbikeClass(brand, model, year, vin, registrationNumber, owner, frameType, isForSport) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
            this._frameType = frameType;
            this._isForSport = isForSport;
        }
        Object.defineProperty(MotorbikeClass.prototype, "frameType", {
            get: function () {
                return this._frameType;
            },
            set: function (value) {
                this._frameType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeClass.prototype, "isForSport", {
            get: function () {
                return this._isForSport;
            },
            set: function (value) {
                this._isForSport = value;
            },
            enumerable: false,
            configurable: true
        });
        MotorbikeClass.prototype.printVehicleInfo = function () {
            console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this._brand));
            console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this._model));
            console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this._year));
            console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this._vin));
            console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this._registrationNumber));
            console.log("\u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this._frameType));
            console.log("\u0414\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0430: ".concat(this._isForSport ? "Да" : "Нет"));
        };
        return MotorbikeClass;
    }());
    Transport.MotorbikeClass = MotorbikeClass;
    var VehicleStorageClass = /** @class */ (function () {
        function VehicleStorageClass() {
            this.creationDate = new Date();
            this.vehicles = [];
        }
        VehicleStorageClass.prototype.addVehicle = function (vehicle) {
            this.vehicles.push(vehicle);
        };
        VehicleStorageClass.prototype.getAllVehicles = function () {
            return this.vehicles;
        };
        return VehicleStorageClass;
    }());
    Transport.VehicleStorageClass = VehicleStorageClass;
})(Transport || (Transport = {}));
/// <reference path="TZ4.ts" />
var owner = new Transport.OwnerClass("Зенин", "Андрей", "Сергеевич", new Date(2005, 1, 3), Transport.TypeDocument.Passport, "1234", "567890");
var vehicle = new Transport.VehicleClass("Chevrole", "Corvette", 2016, "JTDBE32K620055880", "228IVT", owner);
owner.printOwnerInfo();
console.log("\n---\n");
vehicle.printVehicleInfo();
var car = new Transport.CarClass("BMW", "X5", 2021, "WBAFY42040L456789", "B456XY77", owner, Transport.BodyType.SUV, Transport.CarType.Premium);
var motorbike = new Transport.MotorbikeClass("Yamaha", "YZF-R1", 2019, "JYARN23E0KA003456", "M123YY77", owner, "Спортивная", true);
var storage = new Transport.VehicleStorageClass();
storage.addVehicle(car);
storage.addVehicle(motorbike);
console.log("\n--- Сведения о всех транспортных средствах в хранилище ---\n");
storage.getAllVehicles().forEach(function (vehicle) { return vehicle.printVehicleInfo(); });
