$(document).ready(function(){ //Документ отрисован
  $('form').submit(function(e){ //Обработка отправки формы
    $('button[type="submit"]').prop('disabled', true); //Выключаем кнопку
    $('form').prepend("<img class='loading' src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif'>");
    //Добавляем ждуна...
      $.ajax({ //Запускаем аякс запрос
        url:'/handlers/form.php', //Куда запрос отправится (указать обработчик)
        method: "POST", //Метод отправки
        dataType: 'json', //Тип возрващаемых данных
        data: $(this).serialize(),// Данные, указываемые в теле запроса
        // .serialize() проходится по форме, собирая данные с полей в ассоциативный массив ("name"=>"value")
        success:function(data) { // состояние "успех", принимает данные с обработчика, данные хранятся в переменной
                                 // "data", в том формате, в котором ты указал в "dataType"
          $('.loading').remove(); // аннигилируем ждуна
          $('.popup').text(data.message); //выводим сообщение с данными
          alert(data.message + ". Cтатус: " + data.status); //Вывод в алерте
          $('button[type="submit"]').prop('disabled', false); //Включаем кнопку
        },
        error: function (data) { //Состояние "ошибка", выполняется при ошибке на стороне сервера.
          $('.loading').remove(); //Убираем ждуна
          alert(data.responseJSON.message + ". Cтатус: " + data.responseJSON.status); //Выводим сообщение с ошибкой
          $('button[type="submit"]').prop('disabled', false); //Включаем кнопку
        }
      });
      
    return false; //Убираем поведение по умолчанию и всплытие событий
  });
});