<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini POST yöntemiyle alalım
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $gender = $_POST['gender'];
    $topic = $_POST['topic'];

    // Verileri ekrana yazdırabiliriz
    echo "Ad: " . htmlspecialchars($name) . "<br>";
    echo "E-posta: " . htmlspecialchars($email) . "<br>";
    echo "Telefon: " . htmlspecialchars($phone) . "<br>";
    echo "Mesaj: " . htmlspecialchars($message) . "<br>";
    echo "Cinsiyet: " . htmlspecialchars($gender) . "<br>";
    echo "Konu: " . htmlspecialchars($topic) . "<br>";
}
?>