	    // Обновляем число при загрузке страницы
   // Массив с путями к картинкам
   var images = [
    "control_banana_1.png",
    "contol_cat_2.png",
    "control_cherry_3.png",
    "control_duck_4.png",
    "control_flower_5.png",
    "control_house_6.png",
    "control_plane_7.png",
    "control_rocket_8.png",
    "control_tea_9.png",
    "conrol_tram_10.png",
    // Добавьте пути к другим картинкам
  ];
  // Переменные для хранения текущих индексов картинок
  var leftImageIndex;
  var rightImageIndex;
  var userId;


function getRandomNumber() {
    var numbers = [0, 28, 31];
    var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    return randomNumber;
  }
  
  // Функция для обновления числа
  function update1Number() {
    var numberElement = document.getElementById('number');
    var numberElement2 = document.getElementById('number2');
   var numberElement3 = getRandomNumber();
    numberElement.textContent = numberElement3;
    numberElement2.textContent = numberElement3;
  }
  
  window.onload = function() {
       update1Number();
  
    var leftImageElement = document.getElementById('left-image');
    var rightImageElement = document.getElementById('right-image');
      
    // Генерируем случайные начальные значения для индексов
    leftImageIndex = Math.floor(Math.random() * images.length);
    rightImageIndex = leftImageIndex;
    while (rightImageIndex === leftImageIndex) {
      rightImageIndex = Math.floor(Math.random() * images.length);
    }

    // Устанавливаем начальные значения индексов и отображаем картинки
    leftImageElement.src = images[leftImageIndex];
    rightImageElement.src = images[rightImageIndex];

    // Вызываем функцию displayValue()
    displayValue();
  };

  // Функция для обновления числа при нажатии
  function update2Number() {
    var numberElement = document.getElementById('number');
    var numberElement2 = document.getElementById('number2');
    var currentNumber = parseInt(numberElement.textContent);
    var numbers = [0, 35, 70];

    // Находим следующее число в порядке возрастания
    var nextNumberIndex = numbers.indexOf(currentNumber) + 1;
    if (nextNumberIndex >= numbers.length) {
      nextNumberIndex = 0;
    }

    // Обновляем текст на странице
    numberElement.textContent = numbers[nextNumberIndex];
    numberElement2.textContent = numbers[nextNumberIndex];
  }

  // Функция для обновления левой картинки при нажатии
  function updateLeftImage() {
    var leftImageElement = document.getElementById('left-image');

    // Обновляем индекс левой картинки
    leftImageIndex++;
    if (leftImageIndex >= images.length) {
      leftImageIndex = 0;
    }

    // Обновляем отображаемую картинку
    leftImageElement.src = images[leftImageIndex];
  }

  // Функция для обновления правой картинки при нажатии
  function updateRightImage() {
    var rightImageElement = document.getElementById('right-image');

    // Обновляем индекс правой картинки
    rightImageIndex++;
    if (rightImageIndex >= images.length) {
      rightImageIndex = 0;
    }

    // Обновляем отображаемую картинку
    rightImageElement.src = images[rightImageIndex];
  }

  // Функция для получения значения из localStorage
  function displayValue() {
    var value = localStorage.getItem("myValue");
    userId = value; // Присваиваем значение переменной userId
    // Дальше можно использовать значение переменной userId по вашему усмотрению
    
    
  
  // Находим элемент для отображения времени
var currentTimeBlock = document.getElementById("current_date_time_block");
var currentTimeBlockk = document.getElementById("current_date_time_blockk");

// Функция для обновления времени
function updateTime() {
  // Получаем текущее время
  var currentTime = new Date();

  // Форматируем текущее время в формат "чч:мм:сс"
  var formattedTime =
    currentTime.getHours().toString().padStart(2, "0") + ":" +
    currentTime.getMinutes().toString().padStart(2, "0") + ":" +
    currentTime.getSeconds().toString().padStart(2, "0");

  // Выводим отформатированное время на страницу
  currentTimeBlock.textContent = formattedTime;

  // Сохраняем текущее время в Local Storage
  localStorage.setItem("savedTime", formattedTime);
}

// Вызываем функцию для обновления времени сразу и каждую секунду
updateTime();
setInterval(updateTime, 3600000);

// Проверяем, есть ли сохраненное время в Local Storage
var savedTime = localStorage.getItem("savedTime");

// Если есть, то устанавливаем его в блок
if (savedTime) {
  currentTimeBlock.textContent = savedTime;
}
//
  // Находим элемент с id "x"
var xElement = document.getElementById("x");

// Функция для обновления даты и времени
function updateDateTime() {
  // Получаем текущую дату и время
  var currentTime = new Date();

  // Форматируем дату в нужный формат (день.месяц.год)
  var formattedDate =
    currentTime.getDate().toString().padStart(2, "0") + "." +
    (currentTime.getMonth() + 1).toString().padStart(2, "0") + "." +
    currentTime.getFullYear();

  // Форматируем время в нужный формат (чч:мм:сс)
  var formattedTime =
    currentTime.getHours().toString().padStart(2, "0") + ":" +
    currentTime.getMinutes().toString().padStart(2, "0");
    currentTime.getSeconds().toString().padStart(2, "0");

  // Устанавливаем отформатированную дату и время в элемент "x"
  xElement.textContent = formattedDate + " " + formattedTime;
}

// Вызываем функцию для обновления даты и времени сразу и каждую секунду
updateDateTime();
setInterval(updateDateTime, 3600000);

  

// таймер 
var timerElement = document.getElementById("timer");
var intervalId;

// Функция для обновления секундомера
function updateTimer() {
  var now = new Date();
  var diff = now - startDate;

  
  var minutes = Math.floor((diff % 3600000) / 60000);
  var seconds = Math.floor((diff % 60000) / 1000);

  var formattedTime = 
    minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0');

  timerElement.innerText = formattedTime;
}

// Функция для начала отсчета таймера
function startTimer() {
  startDate = new Date();
  updateTimer();
  intervalId = setInterval(updateTimer, 1000);
}

// Функция для остановки таймера
function stopTimer() {
  clearInterval(intervalId);
}

// Вызываем функцию для начала отсчета таймера при загрузке страницы
startTimer();

//Изменение маршрута


        }