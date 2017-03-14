$(document).on("pagecreate", "#mappa", function () {
    var defaultLatLng = new google.maps.LatLng(42.6076493, 14.067674200000056);
    drawMap(defaultLatLng);
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Saluti!"
        });
    }
});


//$("div[data-role='page']").on("swiperight", function(event) {
//$(this).find("div[data-role='panel']").panel("open");
//});
//$("div[data-role='page']").on("swipeleft", function(event) {
//$(this).find("div[data-role='panel']").panel("close");
//});

$("#monumenti").on("pageshow", function () {
    $.ajax("https://pineto-1f0b4.firebaseio.com/chiese.json")
            .done(function (data) {
                var lista = $("#listamonumenti");
                lista.empty();
                $.map(data, function (riga, indice) {
                    var chiesa = val();
                    //console.log(testoGiocatore);
                    $(lista).append('<li>' + chiesa + '</li>');
                });
            })
            .fail(function () {
                alert("Errore!");
            });
});