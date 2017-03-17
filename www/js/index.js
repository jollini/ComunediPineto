$(function () {
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

    $("#chiese").on("pagecreate", function () {
        $.ajax("https://pineto-1f0b4.firebaseio.com/Chiese.json")
                .done(function (data) {
                    var lista = $("#listachiese");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var chiesa = riga.Nome + " ";
                        $(lista).append('<div><a href="#contenuto" class="chiesa" data-id="' + indice + '">' + chiesa + '</div>');
                    });
                    $(".chiesa").click(function () {
                        var id = $(this).attr('data-id');
                        $.ajax("https://pineto-1f0b4.firebaseio.com/Chiese.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {
                                            $("#titoloContenuto").html(riga.Nome);
                                            $("#descrizioneContenuto").html(riga.Descrizione);
                                            $("#imgContenuto").attr("src", riga.Immagine)
                                        }
                                    });
                                });
                    });

                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    $("#cultura").on("pagecreate", function () {
        $.ajax("https://pineto-1f0b4.firebaseio.com/Cultura.json")
                .done(function (data) {
                    var lista = $("#listacultura");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var cultura = riga.Nome + " ";
                        $(lista).append('<p><a href="#contenuto"a class="cultura" data-id="' + indice + '">' + cultura + '</p>');
                    });
                    $(".cultura").click(function () {
                        var id = $(this).attr('data-id');
                        $.ajax("https://pineto-1f0b4.firebaseio.com/Cultura.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {
                                            $("#titoloContenuto").html(riga.Nome);
                                            $("#descrizioneContenuto").html(riga.Descrizione);
                                            $("#imgContenuto").attr("src", riga.Immagine)
                                        }
                                    });
                                });
                    });

                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    $("#monumenti").on("pagecreate", function () {
        $.ajax("https://pineto-1f0b4.firebaseio.com/Monumenti.json")
                .done(function (data) {
                    var lista = $("#listamonumenti");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var monumenti = riga.Nome + " ";
                        $(lista).append('<p><a href="#contenuto" class="monumenti" data-id="' + indice + '">' + monumenti + '</p>');
                    });
                    $(".monumenti").click(function () {
                        var id = $(this).attr('data-id');
                        $.ajax("https://pineto-1f0b4.firebaseio.com/Monumento.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {
                                            $("#titoloContenuto").html(riga.Nome);
                                            $("#descrizioneContenuto").html(riga.Descrizione);
                                            $("#imgContenuto").attr("src", riga.Immagine)
                                        }
                                    });
                                });
                    });

                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    $("#parchi").on("pagecreate", function () {
        $.ajax("https://pineto-1f0b4.firebaseio.com/Parchi.json")
                .done(function (data) {
                    var lista = $("#listaparchi");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var parchi = riga.Nome + " ";
                        $(lista).append('<p><a href="#contenuto" class="monumenti" data-id="' + indice + '">' + parchi + '</p>');
                    });
                $(".parchi").click(function () {
                        var id = $(this).attr('data-id');
                        $.ajax("https://pineto-1f0b4.firebaseio.com/Parchi.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {
                                            $("#titoloContenuto").html(riga.Nome);
                                            $("#descrizioneContenuto").html(riga.Descrizione);
                                            $("#imgContenuto").attr("src", riga.Immagine)
                                        }
                                    });
                                });
                    });

                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    $("#luoghidiinteresse").on("pagecreate", function () {
        $.ajax("https://pineto-1f0b4.firebaseio.com/Luoghi di interesse.json")
                .done(function (data) {
                    var lista = $("#listaluoghidiinteresse");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var luoghidiinteresse = riga.Nome + " ";
                        $(lista).append('<p><a href="#contenuto" class="luoghidiinteresse" data-id="' + indice + '">' + luoghidiinteresse + '</p>');
                    });
                 $(".luoghidiinteresse").click(function () {
                        var id = $(this).attr('data-id');
                        $.ajax("https://pineto-1f0b4.firebaseio.com/Luoghi di interesse.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {
                                            $("#titoloContenuto").html(riga.Nome);
                                            $("#descrizioneContenuto").html(riga.Descrizione);
                                            $("#imgContenuto").attr("src", riga.Immagine)
                                        }
                                    });
                                });
                    });

                })
                .fail(function () {
                    alert("Errore!");
                });
    });



});
