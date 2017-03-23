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
                        $(lista).append('<div  data-role="listview" class="contenutochiese"><a href="#contenuto" class="chiesa iconecontenuto" data-id="' + indice + '">' + '<button class="ui-btn" style="background-color: #fff; color:#000;padding:7%;font-family:cursive;" >' + chiesa + '<i class="ui-btn-right fa" style="font-size: 24px;margin-top: 4%;">&#xf054;</i></button></a> ' + '</div>');
                    });
                    $(".chiesa").click(function () {
                        var id = $(this).attr('data-id');
                        var url = "https://console.firebase.google.com/project/pineto-1f0b4/database/data/Chiese" + "/" + id + ".json";
                        $("#imgContenuto").attr("src", "images/visitpinet.png");
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
                        $(lista).append('<div data-role="listview" class="contenutocultura"><a href="#contenuto"a class="cultura" data-id="' + indice + '">' + '<button class="ui-btn" style="background-color: #fff; color:#000;padding:7%;font-family:cursive;" >' + cultura + '<i class="ui-btn-right fa" style="font-size: 24px;margin-top: 4%;">&#xf054;</i></button></a> ' + '</div>');          
                    });
                    $(".cultura").click(function () {
                        var id = $(this).attr('data-id');
                        $("#imgContenuto").attr("src", "images/visitpinet.png");
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
                        $(lista).append('<div data-role="listview" class="contenutomonumenti"><a href="#contenuto" class="monumenti" data-id="' + indice + '">' +'<button class="ui-btn" style="background-color: #fff; color:#000;padding:7%;font-family:cursive;" >' + monumenti + '<i class="ui-btn-right fa" style="font-size: 24px;margin-top: 4%;">&#xf054;</i></button></a> ' + '</div>');
                    });
                    $(".monumenti").click(function () {
                        var id = $(this).attr('data-id');
                        $("#imgContenuto").attr("src", "images/visitpinet.png");
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
                        $(lista).append('<div data-role="listview" class="contenutoparchi"><a href="#contenuto" class="parchi" data-id="' + indice + '">' + '<button class="ui-btn" style="background-color: #fff; color:#000;padding:7%;font-family:cursive;" >' +parchi + '<i class="ui-btn-right fa" style="font-size: 24px;margin-top: 4%;">&#xf054;</i></button></a> ' + '</div>');
                    });
                    $(".parchi").click(function () {
                        var id = $(this).attr('data-id');
                        $("#imgContenuto").attr("src", "images/visitpinet.png");
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
                        $(lista).append('<div class="contenutoluoghidiinteresse"><a href="#contenuto" class="luoghidiinteresse" data-id="' + indice + '">' + '<button class="ui-btn" style="background-color: #fff; color:#000;padding:7%;font-family:cursive;" >' + luoghidiinteresse + '<i class="ui-btn-right fa" style="font-size: 24px;margin-top: 4%;">&#xf054;</i></button></a> ' + '</div>');
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
    
     $("#dovedormire").on("pagecreate", function () {
        $.ajax("https://pineto-1f0b4.firebaseio.com/Camping.json")
                .done(function (data) {
                    var lista = $("#listacamping");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var camping = riga.Nome + " ";
                        var indirizzo = riga.Indirizzo + " ";
                        $(lista).append('<div class="contenutodovedormire"><a href="#dovedormire" class="dvdormire" data-id="' + indice + '">' + '<h2 style="text-align: center;color:#000;">' + camping + ":" + "</h2>" + '<p style="text-align: center;color:#000;">' + indirizzo + '</p>' + '<br>' + '</div>');
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
                        $(lista).append('<div class="contenutoagriturismi"><a href="#contenuto" class="cantine" data-id="' + indice + '">' + '<h2 style="text-align: center;color:#000;">' + cantina + "</h2>" + '<br>' + '</div>');
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


    $("#farmacie").on("pagecreate", function () {
        $.ajax("https://pineto-1f0b4.firebaseio.com/Farmacie.json")
                .done(function (data) {
                    var lista = $("#listafarmacie");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var farmacia = riga.Nome + " ";
                        var indirizzo = riga.Indirizzo + " ";
                        var telefono = riga.Tel + " ";
                        $(lista).append('<div class="contenutofarmacie"><a href="#contenuto" class="farmacie" data-id="' + indice + '">' + '<h2 style="text-align: center;color:#000;">' + farmacia + "</h2>" + '<p style="text-align: center;color:#000;">' + indirizzo + '</p>' + '<p style="text-align: center;color:#000;">' + telefono + '</p>' + '<br>' + '</div>');
                    });
                    $(".farmacie").click(function () {
                        var id = $(this).attr('data-id');
                        $.ajax("https://pineto-1f0b4.firebaseio.com/Farmacie.json")
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

    function preferiti(idPreferito) {

        var arrayPref = JSON.parse(window.localStorage.getItem("preferiti"));
        if (arrayPref === null) {
            arrayPref = [];
        }
        var idPreferito = idPreferito;
        var posPreferito = $.inArray(idPreferito, arrayPref);
        if (posPreferito != -1) {
            arrayPref.splice(posPreferito, 1);
        } else {
            arrayPref.push(idPreferito);
        }
        window.localStorage.setItem("preferiti", JSON.stringify(arrayPref));

        console.log(window.localStorage.getItem("preferiti"));

    }


//
//
//    $('.swipebox').swipebox();
//    $('#galleria').click(function (e) {
//        e.preventDefault();
//        $.swipebox([
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/piazzadellaliberta.jpg?alt=media&token=e9408161-56ec-49a1-8d98-ba6475efad23', title: 'Piazza Della Libertà'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/pineta%20alta.jpg?alt=media&token=20a13622-eb66-412c-b68b-2411153f0431', title: 'Pineta Alta'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/pineta-catucci.jpg?alt=media&token=cd1e2825-53ac-4096-89f3-fc3f37ce1b7c', title: 'Pineta Catucci'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/la-storia-di-pineto.jpg?alt=media&token=15e3bf08-28f8-4867-8340-e4dad4238efd', title: 'Pineta Storica'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/1-1.jpg?alt=media&token=010bcecf-bdab-48ff-b4f3-22cf9cdebff4', title: '?'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/6.jpg?alt=media&token=5ea729ae-f403-4d79-bc3d-e40ad0122419', title: '?'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/cantine.jpg?alt=media&token=4ccdade0-889f-47d8-92b7-7fe3abf1f130', title: 'Colline Pinetesi'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/druda.jpg?alt=media&token=c26d887b-f9d6-4064-92e2-13fa99a5dc70', title: 'Campo Druda'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/mutignano.JPG?alt=media&token=d8e76581-4003-4523-8fd1-4293d29a53f4', title: 'Uno dei Murales del Bordo Antico di Mutignano'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/orologio.jpg?alt=media&token=a990423e-4f49-4217-ac5f-2dacd560130b', title: 'Orologio Solare'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/palavolley.jpg?alt=media&token=94571bd4-c432-4c35-84f1-a94f7c42d3f5', title: 'Palavolley Santa Maria'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/parcofiliani.jpg?alt=media&token=2bb39290-2fd9-4864-a248-20ea6699d40b', title: 'Parco Filiani'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/s.maria.JPG?alt=media&token=68c5f0d2-20c9-41de-9b59-25fd4f671c2e', title: 'Chiesa Santa Maria'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/Pineto05.jpg?alt=media&token=b3e97c4e-46ca-4143-b1f9-d544735f59d7', title: 'Pineto al Tramonto'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/vulcanello.jpg?alt=media&token=5762075f-69b1-44f6-8588-837e24cdf58d', title: 'Vulcanello Cenerone'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/pineto-villa-filiani.jpg?alt=media&token=79bdc030-f8b1-4e9c-aee3-caa6cf15d386', title: 'Villa Filiani'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/pistaciclabile.JPG?alt=media&token=7da0c01e-9eea-4388-a823-99628854fff4', title: 'Pista Ciclabile'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/pineto-villa-filiani.jpg?alt=media&token=79bdc030-f8b1-4e9c-aee3-caa6cf15d386', title: 'Villa Filiani'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/porto.jpg?alt=media&token=322a909a-8494-4f1b-9835-a0a74d837674', title: 'Antico Porto di Hadria'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/s.agnese.JPG?alt=media&token=3183de68-d733-4db9-87fb-5cf476c04311', title: 'Chiesa S. Agnese'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/s.famiglia.JPG?alt=media&token=d299f887-5b2a-466b-a8fe-cfaf0539ad2a', title: 'Chiesa S. Famiglia'},
//            {href: 'https://firebasestorage.googleapis.com/v0/b/pineto-1f0b4.appspot.com/o/s.silvestro.JPG?alt=media&token=c8238227-d4f3-4472-b3b8-cb1105e03fa9', title: 'Chiesa S. Silvestro'}
//        ]);
//    });

});




