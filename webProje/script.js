// script.js

$(document).ready(function() {
    $('#searchForm').submit(function(event) {
        event.preventDefault(); // Formun varsayılan submit davranışını engelle
        
        const breed = $('#breed').val(); // Kullanıcının seçtiği köpek cinsini al
        
        if (!breed) {
            $('#content').html('<p>Lütfen bir köpek cinsi seçin.</p>');
            return;
        }

        $.ajax({
            url: `https://dog.ceo/api/breed/${breed}/images/random`,
            method: 'GET',
            success: function(data) {
                if (data.status === 'success') {
                    $('#content').html(`
                        <div class="card mb-3">
                            <div class="card-body">
                                <h2 class="card-title">${breed.charAt(0).toUpperCase() + breed.slice(1)}</h2>
                                <img src="${data.message}" class="img-fluid" alt="${breed}">
                            </div>
                        </div>
                    `);
                } else {
                    $('#content').html('<p>Köpek bulunamadı.</p>');
                }
            },
            error: function() {
                $('#content').html('<p>Bir hata oluştu.</p>');
            }
        });
    });
});

