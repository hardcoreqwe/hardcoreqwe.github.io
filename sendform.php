<?php
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"
$proc = $_POST['procedure'];

$token = "1360766966:AAFTj3AbcPFpXToi0u9473_89DD_YZ-d1CA"; // Тут пишем токен
$chat_id = "-473589541"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "PINGERE school"; //Указываем название сайта

$arr = array(

  'Закявка на обучение: ' => $sitename,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Выбранный курс: ' => $proc
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>