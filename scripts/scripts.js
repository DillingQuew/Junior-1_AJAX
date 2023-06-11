$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault(); 
    $('form').prepend("<img class='loading' src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif'>");
    // setTimeout(() => {
      $.ajax({
        url:'/handlers/form.php',
        method: "POST",
        dataType: 'html',
        data: $(this).serialize(),
        success:function(data) {
          $('.loading').remove();
          $('.popup').text(data);
   
          alert('Данные успешно отправлены');
        },
        error: function (jqXHR, exception) {
          $('.loading').remove();
          if (jqXHR.status === 0) {
            alert('Ошибка при отправке формы');
          } else if (jqXHR.status == 404) {
            alert('Ошибка при отправке формы');
          } else if (jqXHR.status == 500) {
            alert('Ошибка при отправке формы');
          } else if (exception === 'parsererror') {
            alert('Ошибка при отправке формы');
          } else if (exception === 'timeout') {
            alert('Ошибка при отправке формы');
          } else if (exception === 'abort') {
            alert('Ошибка при отправке формы');
          } else {
            alert('Uncaught Error. ' + jqXHR.responseText);
          }
        }
      });
    // }, 1000);
  });
});