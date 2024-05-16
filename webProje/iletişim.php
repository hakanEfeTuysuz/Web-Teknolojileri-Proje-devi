<?php
// Form verilerini POST yöntemiyle alalım
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$gender = $_POST['gender'];
$topic = $_POST['topic'];

// Verileri ekrana yazdırabiliriz
echo "Ad: " . $name . "<br>";
echo "E-posta: " . $email . "<br>";
echo "Telefon: " . $phone . "<br>";
echo "Mesaj: " . $message . "<br>";
echo "Cinsiyet: " . $gender . "<br>";
echo "Konu: " . $topic . "<br>";
?>