<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet='UTF-8';
$mail->setLanguage('ru','phpmailer/language/');
$mail->IsHTML(true);

    //! От кого письмо
    $mail->setFrom('webform@example.com', 'Mailer');
    
    //! Кому отправить    
    $mail->addAddress('webform@example.com');               
    
    //! Тема письма
    $mail->Subject='Очередная форма заполнена';

    //! Тело письма
    $body='<h1>Форма</h1>';

    if(trim(!empty($_POST['username']))){
        $body.='<p><strong>Имя: </strong> '.$_POST['username'].'</p>';
    }
    
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail: </strong> '.$_POST['email'].'</p>';
    }

    if(trim(!empty($_POST['bio']))){
        $body.='<p><strong>Биография: </strong> '.$_POST['bio'].'</p>';
    }
    
    $mail->Body=$body;

    //! Отправка
    if(!$mail->send()){
        $message='Ошибка';
    }else{
        $message='Данные отправленны!';
    }

    $response=['message'=>$message];

    header('Content-type: application/json');
    echo json_encode($response);

?>