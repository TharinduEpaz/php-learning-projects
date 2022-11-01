<?php
//getting all the form values
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];

if(!empty($email) && !empty($name)){
    $receiver = "epazingha@gmail.com";
    $subject = "From : $name <$email>";
    $body = "Name : $name\nEmail: $email\n Phone:$phone\n Message : $message";
    $sender = "From; $email";
    if(mail($receiver,$subject,$body,$sender)){
        echo "Message send successfully";
    }
    else{
        echo "Failed to send your message";
    }
}
else{
    echo "Email and name fields are required";
}

?>