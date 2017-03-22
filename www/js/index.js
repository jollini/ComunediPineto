$(function () {
    function svuotaContenuto() {
        $("#titoloContenuto").html("");
        $("#imgContenuto").attr("src", " ");
        $("#descrizioneContenuto").html("");
        $("#cont1").html("");
        $("#cont2").html("");
        $("#cont3").html("");
        $("#cont4").html("");
    }
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
                        $(lista).append('<div class="contenutochiese" ><a href="#contenuto" class="chiesa" data-id="' + indice + '">'+'<botton class="ui-btn" id="ciao">' + chiesa + '<i class="ui-btn-right fa" style="font-size:20px;" >&#xf054;</i></botton></a> ' +'</div>');
                    });
                    $(".chiesa").click(function () {
                        var id = $(this).attr('data-id');
                        $.ajax("https://pineto-1f0b4.firebaseio.com/Chiese.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {
                                            svuotaContenuto();
                                            $("#titoloContenuto").html(riga.Nome);
                                            $("#descrizioneContenuto").html(riga.Descrizione);
                                            $("#imgContenuto").attr("src", riga.Immagine);
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
                        $(lista).append('<div class="contenutocultura"><a href="#contenuto"a class="cultura" data-id="' + indice + '">' + cultura + '</div>');
                    });
                    $(".cultura").click(function () {
                        var id = $(this).attr('data-id');
                        $.ajax("https://pineto-1f0b4.firebaseio.com/Cultura.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {
                                            svuotaContenuto();
                                            $("#titoloContenuto").html(riga.Nome);
                                            $("#descrizioneContenuto").html(riga.Descrizione);
                                            $("#imgContenuto").attr("src", riga.Immagine);
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
                        $(lista).append('<div class="contenutomonumenti"><a href="#contenuto" class="monumenti" data-id="' + indice + '">' + monumenti + '</div>');
                    });
                    $(".monumenti").click(function () {
                        var id = $(this).attr('data-id');
                        $.ajax("https://pineto-1f0b4.firebaseio.com/Monumenti.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {
                                            svuotaContenuto();
                                            $("#titoloContenuto").html(riga.Nome);
                                            $("#imgContenuto").attr("src", riga.Immagine);
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
                        $(lista).append('<div class="contenutoparchi"><a href="#contenuto" class="parchi" data-id="' + indice + '">' + parchi + '</div>');
                    });
                    $(".parchi").click(function () {
                        var id = $(this).attr('data-id');
                        $.ajax("https://pineto-1f0b4.firebaseio.com/Parchi.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {
                                            svuotaContenuto();
                                            $("#titoloContenuto").html(riga.Nome);
                                            $("#imgContenuto").attr("src", riga.Immagine);
                                            $("#cont2").html(riga.Indirizzo);
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
                        $(lista).append('<div class="contenutoluoghidiinteresse"><a href="#contenuto" class="luoghidiinteresse" data-id="' + indice + '">' + luoghidiinteresse + '</div>');
                    });
                    $(".luoghidiinteresse").click(function () {
                        var id = $(this).attr('data-id');
                        $.ajax("https://pineto-1f0b4.firebaseio.com/Luoghi di interesse.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {
                                            svuotaContenuto();
                                            $("#titoloContenuto").html(riga.Nome);
                                            $("#descrizioneContenuto").html(riga.Descrizione);
                                            $("#cont1").html(riga.Tel);
                                            $("#cont2").html(riga.Indirizzo);
                                            $("#cont3").html(riga.Email);
                                            $("#imgContenuto").attr("src", riga.Immagine);
                                        }

                                    });
                                });
                    });

                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    $("#dovedormire").on("pagecreate", function () {
        $.ajax("https://pineto-1f0b4.firebaseio.com/Dove Dormire.json")
                .done(function (data) {
                    var lista = $("#listadovedormire");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var hotel = riga.Nome + " ";
                        var indirizzo = riga.Indirizzo + " ";
                        $(lista).append('<div class="contenutodovedormire"><a href="#dovedormire" class="dvdormire" data-id="' + indice + '">' + '<h2 style="text-align: center;color:#000;">' + hotel + ":" + "</h2>" + '<p style="text-align: center;color:#000;">' + indirizzo + '</p>' + '<br>' + '</div>');
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    $("#agriturismi").on("pagecreate", function () {
        $.ajax("https://pineto-1f0b4.firebaseio.com/Agriturismi.json")
                .done(function (data) {
                    var lista = $("#listaagriturismi");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var agri = riga.Nome + " ";
                        var indirizzo = riga.Indirizzo + " ";
                        var telefono = riga.Tel + " ";
                        $(lista).append('<div class="contenutoagriturismi"><p data-id="' + indice + '">' + '<h2 style="text-align: center;color:#000;">' + agri + ":" + "</h2>" + '<p style="text-align: center;color:#000;">' + indirizzo + '</p>' + '<p style="text-align: center;color:#000;">' + telefono + '</p>' + '<br>' + '</div>');
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    $("#cantine").on("pagecreate", function () {
        $.ajax("https://pineto-1f0b4.firebaseio.com/Cantine.json")
                .done(function (data) {
                    var lista = $("#listacantine");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var cantina = riga.Nome + " ";
                        var indirizzo = riga.Indirizzo + " ";
                        var descrizione = riga.Descrizione + " ";
                        $(lista).append('<div class="contenutoagriturismi"><a href="#contenuto" class="cantine" data-id="' + indice + '">' + '<h2 style="text-align: center;color:#000;">' + cantina  + "</h2>" +'<br>' + '</div>');
                    });
                    $(".cantine").click(function () {
                        var id = $(this).attr('data-id');
                        $.ajax("https://pineto-1f0b4.firebaseio.com/Cantine.json")
                                .done(function (data) {
                                    $.map(data, function (riga, indice) {
                                        if (indice == id) {
                                            svuotaContenuto();
                                            $("#titoloContenuto").html(riga.Nome);
                                            $("#descrizioneContenuto").html(riga.Descrizione);
                                            $("#cont1").html(riga.Tel);
                                            $("#cont2").html(riga.Indirizzo);
                                            $("#cont3").html(riga.Email);
                                            $("#imgContenuto").attr("src", riga.Immagine);
                                        }

                                    });
                                });
                    });

                })
                .fail(function () {
                    alert("Errore!");
                });
    });

    $("#ristoranti").on("pagecreate", function () {
        $.ajax("https://pineto-1f0b4.firebaseio.com/Ristoranti.json")
                .done(function (data) {
                    var lista = $("#listaristoranti");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var ristorante = riga.Nome + " ";
                        var indirizzo = riga.Indirizzo + " ";
                        var telefono = riga.Tel + " ";
                        $(lista).append('<div class="contenutoristoranti"><p data-id="' + indice + '">' + '<h2 style="text-align: center;color:#000;">' + ristorante + ":" + "</h2>" + '<p style="text-align: center;color:#000;">' + indirizzo + '</p>' + '<p style="text-align: center;color:#000;">' + telefono + '</p>' + '<br>' + '</div>');
                    });
                })
                .fail(function () {
                    alert("Errore!");
                });
    });

});