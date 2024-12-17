enum TypeDocument {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    IDCard = "ID-карта"
}

interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    typeDocument: TypeDocument;
    documentSeries: string;
    documentNumber: string;
    printOwnerInfo(): void;
}

interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    printVehicleInfo(): void;
}

class OwnerClass implements Owner {
    private _lastName: string;
    private _firstName: string;
    private _middleName: string;
    private _birthDate: Date;
    private _typeDocument: TypeDocument;
    private _documentSeries: string;
    private _documentNumber: string;

    constructor(
        lastName: string,
        firstName: string,
        middleName: string,
        birthDate: Date,
        typeDocument: TypeDocument,
        documentSeries: string,
        documentNumber: string
    ) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._typeDocument = typeDocument;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }

    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string) {
        this._lastName = value;
    }

    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }

    get middleName(): string {
        return this._middleName;
    }
    set middleName(value: string) {
        this._middleName = value;
    }

    get birthDate(): Date {
        return this._birthDate;
    }
    set birthDate(value: Date) {
        this._birthDate = value;
    }

    get typeDocument(): TypeDocument {
        return this._typeDocument;
    }
    set typeDocument(value: TypeDocument) {
        this._typeDocument = value;
    }

    get documentSeries(): string {
        return this._documentSeries;
    }
    set documentSeries(value: string) {
        this._documentSeries = value;
    }

    get documentNumber(): string {
        return this._documentNumber;
    }
    set documentNumber(value: string) {
        this._documentNumber = value;
    }

    printOwnerInfo(): void {
        console.log(`Владелец: ${this._lastName} ${this._firstName} ${this._middleName}`);
        console.log(`Дата рождения: ${this._birthDate.toDateString()}`);
        console.log(`Документ: ${this._typeDocument}`);
        console.log(`Серия документа: ${this._documentSeries}`);
        console.log(`Номер документа: ${this._documentNumber}`);
    }
}

class VehicleClass implements Vehicle {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }

    get brand(): string {
        return this._brand;
    }
    set brand(value: string) {
        this._brand = value;
    }

    get model(): string {
        return this._model;
    }
    set model(value: string) {
        this._model = value;
    }

    get year(): number {
        return this._year;
    }
    set year(value: number) {
        this._year = value;
    }

    get vin(): string {
        return this._vin;
    }
    set vin(value: string) {
        this._vin = value;
    }

    get registrationNumber(): string {
        return this._registrationNumber;
    }
    set registrationNumber(value: string) {
        this._registrationNumber = value;
    }

    get owner(): Owner {
        return this._owner;
    }
    set owner(value: Owner) {
        this._owner = value;
    }

    printVehicleInfo(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
    }
}

const owner = new OwnerClass(
    "Зенин",
    "Андрей",
    "Сергеевич",
    new Date(2005, 1, 3),
    TypeDocument.Passport,
    "1234",
    "567890"
);

const vehicle = new VehicleClass(
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
//2 задание 
enum BodyType {
    Sedan = "Седан",
    SUV = "Внедорожник",
    Coupe = "Купе",
    Hatchback = "Хэтчбэк"
}

enum CarType {
    Economy = "Эконом",
    Business = "Бизнес",
    Premium = "Премиум"
}

interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
    printVehicleInfo(): void;
}

interface Motorbike extends Vehicle {
    frameType: string;
    isForSport: boolean;
    printVehicleInfo(): void;
}

class CarClass implements Car {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _bodyType: BodyType;
    private _carType: CarType;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        bodyType: BodyType,
        carType: CarType
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carType = carType;
    }
    carClass: CarClass;

    get bodyType(): BodyType {
        return this._bodyType;
    }
    set bodyType(value: BodyType) {
        this._bodyType = value;
    }

    get carType(): CarType {
        return this._carType;
    }
    set carType(value: CarType) {
        this._carType = value;
    }

    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get vin() {
        return this._vin;
    }
    get registrationNumber() {
        return this._registrationNumber;
    }
    get owner() {
        return this._owner;
    }

    printVehicleInfo(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carType}`);
    }
}

class MotorbikeClass implements Motorbike {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _frameType: string;
    private _isForSport: boolean;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        frameType: string,
        isForSport: boolean
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._frameType = frameType;
        this._isForSport = isForSport;
    }
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;

    get frameType(): string {
        return this._frameType;
    }
    set frameType(value: string) {
        this._frameType = value;
    }

    get isForSport(): boolean {
        return this._isForSport;
    }
    set isForSport(value: boolean) {
        this._isForSport = value;
    }

    printVehicleInfo(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Для спорта: ${this._isForSport ? "Да" : "Нет"}`);
    }
}
//3 задание
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
}

class VehicleStorageClass<T extends Vehicle> implements VehicleStorage<T> {
    creationDate: Date;
    vehicles: T[];

    constructor() {
        this.creationDate = new Date();
        this.vehicles = [];
    }

    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }

    getAllVehicles(): T[] {
        return this.vehicles;
    }
}

const car = new CarClass(
    "BMW",
    "X5",
    2021,
    "WBAFY42040L456789",
    "B456XY77",
    owner,
    BodyType.SUV,
    CarType.Premium
);

const motorbike = new MotorbikeClass(
    "Yamaha",
    "YZF-R1",
    2019,
    "JYARN23E0KA003456",
    "M123YY77",
    owner,
    "Спортивная",
    true
);

const storage = new VehicleStorageClass<Vehicle>();
storage.addVehicle(car);
storage.addVehicle(motorbike);

console.log("\n--- Сведения о всех транспортных средствах в хранилище ---\n");
storage.getAllVehicles().forEach(vehicle => vehicle.printVehicleInfo());
