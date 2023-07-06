<?
$name = $_POST['name']; //получаем данные с клиента
$phone = $_POST['phone'];
$status = 0; //
$array = ["status"=>"", "message"=>""]; //Инициализируем массив, который будем отправлять в качестве ответа
sleep(3); //Искусственная задержка
if(empty($name)) {
  $array["status"] = $status = 0; //$array["status"] - задаем статус 0 - ошибка, 1 - успех
  $array["message"] = "Введите имя"; // $array["message"] - сообщение об ошибке
  echo json_encode($array); //передаем массив как объект json
    http_response_code('409'); //задаем код ответа
} elseif (empty($phone)) {
    $array["status"] = $status = 0;
    $array["message"] = "Введите номер телефона";
    echo json_encode($array);
    http_response_code('409');
} else {
    $array["status"] = $status = 1;
    $array["message"] = "Данные успешно отправлены";
    echo json_encode($array);
}