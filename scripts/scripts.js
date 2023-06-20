document.addEventListener("DOMContentLoaded", function() {
  // получаем имя пользователя из объекта localStorage
  let name = localStorage.getItem("name");

  // если имя пользователя не было сохранено, запрашиваем его у пользователя
  if (!name) {
    name = prompt("Здравствуйте! Как вас зовут?");
    // сохраняем имя пользователя в объекте localStorage
    localStorage.setItem("name", name);
  }

  // выводим имя пользователя в правом верхнем углу экрана
  const greetingElement = document.createElement("div");
  greetingElement.textContent = `Привет, ${localStorage.getItem("name")}!`;
  greetingElement.style.position = "fixed";
  greetingElement.style.top = "0";
  greetingElement.style.right = "0";
  greetingElement.style.padding = "10px";
  greetingElement.style.backgroundColor = "#191a19";
  greetingElement.style.color = "#fff";
  document.body.appendChild(greetingElement);

  // добавляем кнопку "Изменить имя"
  const changeNameButton = document.createElement("button");
  changeNameButton.textContent = "Изменить имя";
  changeNameButton.addEventListener("click", changeName);
  changeNameButton.style.position = "fixed";
  changeNameButton.style.top = `${greetingElement.offsetHeight + 10}px`; // расположение под надписью
  changeNameButton.style.right = "0";
  changeNameButton.style.padding = "10px";
  changeNameButton.style.backgroundColor = "#191a19";
  changeNameButton.style.border = "none";
  changeNameButton.style.color = "#fff";
  changeNameButton.style.fontFamily = "Arial";
  changeNameButton.style.fontSize = "16px";
  changeNameButton.style.cursor = "pointer";
  document.body.appendChild(changeNameButton);

  // функция для изменения имени пользователя
  function changeName() {
    const newName = prompt("Как вас зовут?");
    if (newName) {
      localStorage.setItem("name", newName); // сохраняем новое имя в localStorage
      greetingElement.textContent = `Привет, ${newName}!`; // обновляем текст приветствия
      changeNameButton.style.top = `${greetingElement.offsetHeight + 10}px`; // обновляем позицию кнопки
    }
  }

  // создаем переменные для времени начала и конца отсчета
  let startTime;
  let stopTime;

  // функция для начала отсчета
  function startTimer() {
    startTime = new Date();
    console.log("Отсчет начат.");
  }

  // функция для остановки отсчета
  function stopTimer() {
    stopTime = new Date();
    console.log("Отсчет остановлен.");
  }

  // функция для определения времени, прошедшего между началом и концом отсчета
  function getTimeElapsed() {
    if (startTime && stopTime) {
      const timeDiff = stopTime.getTime() - startTime.getTime();
      const secondsDiff = timeDiff / 1000;
      console.log(`Время, прошедшее между началом и концом отсчета: ${secondsDiff} секунд.`);
    } else {
      console.log("Отсчет еще не завершен.");
    }
  }

  // запускаем таймер при загрузке страницы
  startTimer();

  // запрашиваем у пользователя основание и высоту треугольника
  const base = prompt("Введите основание треугольника:");
  const height = prompt("Введите высоту треугольника:");

  // преобразуем введенные значения в числа и вычисляем площадь треугольника
  const area = 0.5 * Number(base) * Number(height);

  // выводим площадь треугольника на экран
  alert(`Площадь треугольника равна ${area}.`);

  // останавливаем таймер после вычисления площади треугольника
  stopTimer();

  // запрашиваем у пользователя 2 строки
  const str1 = prompt("Введите первую строку:");
  const str2 = prompt("Введите вторую строку:");

  // сравниваем количество символов в строках и выводим результат на экран
  if (str1.length === str2.length) {
    alert("true");
  } else {
    alert("false");
  }

  // запрашиваем у пользователя массив из 5 элементов
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(Number(prompt(`Введите элемент массива под номером ${i + 1}:`)));
  }

  // находим минимальное и максимальное значение в массиве
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // выводим результат на экран
  alert(`Минимальное значение в массиве: ${min}, максимальное значение в массиве: ${max}.`);

  // выводим время, прошедшее между началом и концом отсчета
  getTimeElapsed();
});

document.addEventListener("DOMContentLoaded", function() {
  // создаем элемент для таймера и добавляем его на страницу
  const timerElement = document.createElement("div");
  timerElement.style.position = "fixed";
  timerElement.style.top = "0";
  timerElement.style.left = "0";
  timerElement.style.padding = "10px";
  timerElement.style.backgroundColor = "#191a19";
  timerElement.style.color = "#fff";
  timerElement.style.fontFamily = "Arial";
  timerElement.style.fontSize = "16px";
  document.body.appendChild(timerElement);

  // функция для обновления значения таймера
  function updateTimer() {
    if (startTime) {
      const timeDiff = new Date() - startTime;
      const secondsDiff = Math.floor(timeDiff / 1000);
      const minutesDiff = Math.floor(secondsDiff / 60);
      const hoursDiff = Math.floor(minutesDiff / 60);
      const formattedTime = `${hoursDiff.toString().padStart(2, '0')}:${(minutesDiff % 60).toString().padStart(2, '0')}:${(secondsDiff % 60).toString().padStart(2, '0')}`;
      timerElement.textContent = `Прошло времени: ${formattedTime}`;
    } else {
      timerElement.textContent = "Таймер не запущен";
    }
  }

  // функция для начала отсчета таймера
  function startTimer() {
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
  }

  // функция для остановки отсчета таймера
  function stopTimer() {
    clearInterval(timerInterval);
    startTime = undefined;
    updateTimer();
  }

  // функция для вычисления времени между стартом и финишем
  function getElapsedTime() {
    if (startTime) {
      const timeDiff = new Date() - startTime;
      const secondsDiff = Math.floor(timeDiff / 1000);
      const minutesDiff = Math.floor(secondsDiff / 60);
      const hoursDiff = Math.floor(minutesDiff / 60);
      const formattedTime = `${hoursDiff.toString().padStart(2, '0')}:${(minutesDiff % 60).toString().padStart(2, '0')}:${(secondsDiff % 60).toString().padStart(2, '0')}`;
      return formattedTime;
    } else {
      return "Таймер не запущен";
    }
  }

  // добавляем кнопки для начала и остановки отсчета таймера и для вычисления времени между стартом и финишем
  const startButton = document.createElement("button");
  startButton.textContent = "Начать отсчет";
  startButton.style.position = "fixed";
  startButton.style.top = "50px";
  startButton.style.left = "10px";
  startButton.addEventListener("click", startTimer);
  document.body.appendChild(startButton);

  const stopButton = document.createElement("button");
  stopButton.textContent = "Остановить отсчет";
  stopButton.style.position = "fixed";
  stopButton.style.top = "70px";
  stopButton.style.left = "10px";
  stopButton.addEventListener("click", stopTimer);
  document.body.appendChild(stopButton);

  const elapsedTimeButton = document.createElement("button");
  elapsedTimeButton.textContent = "Показать время отсчета";
  elapsedTimeButton.style.position = "fixed";
  elapsedTimeButton.style.top = "90px";
  elapsedTimeButton.style.left = "10px";
  elapsedTimeButton.addEventListener("click", () => {
    alert(`Время отсчета: ${getElapsedTime()}`);
  });
  document.body.appendChild(elapsedTimeButton);
});

// создаем элемент заставки
const overlayElement = document.createElement("div");
const nameElement = document.createElement("h1");
const dateElement = document.createElement("p");

// задаем стили для заставки
overlayElement.style.position = "fixed";
overlayElement.style.top = "0";
overlayElement.style.left = "0";
overlayElement.style.width = "100%";
overlayElement.style.height = "100%";
overlayElement.style.backgroundColor = "#000";
overlayElement.style.opacity = "0.8";
overlayElement.style.zIndex = "9999";
overlayElement.style.display = "none";
overlayElement.style.alignItems = "center";
overlayElement.style.justifyContent = "center";

nameElement.textContent = `Привет, ${localStorage.getItem("name")}!`;
nameElement.style.color = "#fff";
nameElement.style.fontFamily = "Arial";
nameElement.style.fontSize = "40px";
nameElement.style.marginBottom = "20px";

dateElement.textContent = new Date().toLocaleDateString();
dateElement.style.color = "#fff";
dateElement.style.fontFamily = "Arial";
dateElement.style.fontSize = "20px";

// добавляем элементы на заставку
overlayElement.appendChild(nameElement);
overlayElement.appendChild(dateElement);

// добавляем заставку на страницу
document.body.appendChild(overlayElement);

// создаем кнопку для вызова заставки
const buttonElement = document.createElement("button");
buttonElement.textContent = "Показать заставку";

// задаем стили для кнопки
buttonElement.style.padding = "10px";
buttonElement.style.border = "none";
buttonElement.style.borderRadius = "5px";
buttonElement.style.backgroundColor = "#fff";
buttonElement.style.color = "#000";
buttonElement.style.cursor = "pointer";
buttonElement.style.fontSize = "16px";
buttonElement.style.marginTop = "20px";

// добавляем обработчик события для вызова заставки при клике на кнопку
buttonElement.addEventListener("click", function() {
  createOverlay();
});

// добавляем кнопку на страницу
document.body.appendChild(buttonElement);

// функция для создания элемента заставки
function createOverlay() {
  // отображаем заставку
  overlayElement.style.display = "flex";
}

// добавляем обработчик события для скрытия заставки при клике
overlayElement.addEventListener("click", function() {
  overlayElement.style.display = "none";
});
