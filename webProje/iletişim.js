function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let topic = document.getElementById('topic').value;

    if (!validateName(name)) {
        alert("Geçersiz bir isim girdiniz. Lütfen yalnızca harf ve sayı kullanın.");
        return false;
    }
    if (email === "") {
        alert("E-posta adresinizi girmelisiniz.");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Geçerli bir e-posta adresi girmelisiniz.");
        return false;
    }
    if (phone === "") {
        alert("Telefon numaranızı girmelisiniz.");
        return false;
    }
    if (!validatePhone(phone)) {
        alert("Geçerli bir telefon numarası girmelisiniz. (5447317941 şeklinde)");
        return false;
    }
    if (message === "") {
        alert("Mesajınızı girmelisiniz.");
        return false;
    }
    if (!gender) {
        alert("Cinsiyetinizi seçmelisiniz.");
        return false;
    }
    if (topic === "") {
        alert("Konuyu seçmelisiniz.");
        return false;
    }

    alert('Form başarıyla gönderildi!');
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/; // 10 haneli bir telefon numarası için
    return re.test(String(phone));
}

function validateName(name) {
    const re = /^[a-zA-Z0-9]+$/; // Sadece harf ve sayılardan oluşan bir isim için regular expression
    return re.test(name);
}
