<?
$name = $_POST['name'];
$phone = $_POST['phone'];
sleep(3);
if(empty($name)) {
  echo "Введите имя";
} elseif (empty($phone)) {
  echo "Введите номер телефона";
} else {
  echo "Данные успешно отправлены";
}