<?php
// POST ile gönderilen kullanıcı adı ve şifre değişkenlerini al
$username = $_POST['username'];
$password = $_POST['password'];

// Kullanıcı adı ve şifre alanlarının boş olup olmadığını kontrol etme
if (!empty($username) && !empty($password)) {
    // Kullanıcı adının mail adresi formatında olup olmadığını kontrol etme
    if (filter_var($username, FILTER_VALIDATE_EMAIL)) {
        // Kullanıcı adından domain kısmını atarak sadece numarayı al
        $username = substr($username, 1, strpos($username, '@') - 1);
        
        // Kullanıcı adı ve şifre kontrolü
        if ($username === $password) {
            // Giriş başarılıysa kullanıcıya hoşgeldin mesajını göster
            echo "Hoşgeldiniz, $username";
        } else {
            // Giriş başarısızsa kullanıcıyı tekrar login sayfasına yönlendir
            header("Location: login.html");
            exit();
        }
    } else {
        // Kullanıcı adı mail adresi formatında değilse hata mesajı göster
        echo "Kullanıcı adı geçersiz";
    }
} else {
    // Kullanıcı adı veya şifre alanları boşsa hata mesajı göster
    echo "Kullanıcı adı veya şifre boş olamaz";
}
?>