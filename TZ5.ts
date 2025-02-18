const data: number[] = [12,23,34,45,77,23];

function removeOddNumbers(arr: number[]): void {
    let i = 0;
    function removeNext() {
      if (i < arr.length) {
        if (arr[i] % 2 !== 0) {
          console.log(`Удаляем ${arr[i]}`);
          arr.splice(i, 1);
          setTimeout(removeNext, 1000);
        } else {
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

function createLogger(prefix: string): (message: string) => void {
    return function(message: string): void {
        console.log(`${prefix}: ${message}`);
    };
}

// Использование:
const infoLogger = createLogger("INFO");
const errorLogger = createLogger("ERROR");

infoLogger("Приложение запущено");   // Выводит: INFO: Приложение запущено
errorLogger("Произошла ошибка");  // Выводит: ERROR: Произошла ошибка
infoLogger("Данные обработаны");