document.addEventListener("DOMContentLoaded", function() {
  // Находим нужные элементы
  var inputElement = document.querySelector(".num_QR_inp");
  var resultElement = document.querySelector("#result");
  var result2Element = document.querySelector("#result2");

  // Находим кнопку "Продолжить"
  var continueButton = document.querySelector(".continue-button");

  // Получаем сохраненное значение из localStorage
  var savedValue = localStorage.getItem("savedInputValue");

  // Если есть сохраненное значение, устанавливаем его в input
  if (savedValue) {
    inputElement.value = savedValue;
    resultElement.textContent = savedValue; // Также обновляем значение на странице
    result2Element.textContent = savedValue; // Обновляем значение во втором элементе
  }

  // Добавляем обработчик события для кнопки "Продолжить"
  continueButton.addEventListener("click", function() {
    // Получаем значение из input
    var inputValue = inputElement.value;

    // Обновляем значение в нужных элементах
    resultElement.textContent = inputValue;
    result2Element.textContent = inputValue;

    // Сохраняем значение в localStorage
    localStorage.setItem("savedInputValue", inputValue);

    // Очищаем поле ввода
    inputElement.value = "";

    // Перезагружаем страницу
    location.reload();
  });
});
