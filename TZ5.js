var data = [12, 23, 34, 45, 77, 23];
function removeOddNumbers(arr) {
    var i = 0;
    function removeNext() {
        if (i < arr.length) {
            if (arr[i] % 2 !== 0) {
                console.log("\u0423\u0434\u0430\u043B\u044F\u0435\u043C ".concat(arr[i]));
                arr.splice(i, 1);
                setTimeout(removeNext, 1000);
            }
            else {
                i++;
                removeNext();
            }
        }
    }
    removeNext();
}
removeOddNumbers(data);
console.log(data);
// 2) Функция высшего порядка с замыканиями:
function createLogger(prefix) {
    return function (message) {
        console.log("".concat(prefix, ": ").concat(message));
    };
}
// Использование:
var infoLogger = createLogger("INFO");
var errorLogger = createLogger("ERROR");
infoLogger("Приложение запущено"); // Выводит: INFO: Приложение запущено
errorLogger("Произошла ошибка"); // Выводит: ERROR: Произошла ошибка
infoLogger("Данные обработаны");
