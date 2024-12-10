var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1 задание
function findMedian(numbers) {
    var sortedNumbers = __spreadArray([], numbers, true).sort(function (a, b) { return a - b; });
    var middle = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers.length % 2 === 0) {
        return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
    }
    else {
        return sortedNumbers[middle];
    }
}
var numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
var median = findMedian(numbers);
console.log(median);
//2 задание
function countNonZeroElementsInRange(matrix) {
    var _a;
    var count = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (((_a = matrix[i]) === null || _a === void 0 ? void 0 : _a[j]) !== 0) {
                count++;
            }
        }
    }
    return count;
}
var matrix = [
    [1, 0, 3],
    [2, 4, 0],
    [0, 5, 6]
];
var result = countNonZeroElementsInRange(matrix);
console.log(result);
// 3 задание 
var Vitamins;
(function (Vitamins) {
    Vitamins["A"] = "A";
    Vitamins["B3"] = "B3";
    Vitamins["B6"] = "B6";
    Vitamins["B12"] = "B12";
})(Vitamins || (Vitamins = {}));
console.log(Vitamins.B3);
// 4 задание
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printType(pet) {
    console.log("\u0418\u043C\u044F: ".concat(pet.name));
    console.log("\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ".concat(pet.age));
    console.log("\u0417\u0432\u0443\u043A: ".concat(pet.speak()));
}
var dog = new Dog();
printType(dog);
console.log();
var vitamin = {
    name: "B3",
    type: Vitamins.B3,
    price: 199
};
var vit = JSON.stringify(vitamin);
console.log(vit);
