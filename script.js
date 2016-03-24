$( document ).ready(function() {

    $("#form").on('submit',function(event) {
        event.preventDefault();

        var pseudo = $("#inputPseudo3").val();
        var email = $("#inputEmail3").val();
        var message = $("#inputMessage3").val();
        var data =  $('#form').serialize();

        $.ajax({
            type: "post",
            url: "https://getsimpleform.com/messages?form_api_token=8804ad20ffc99d4e06a1465ae001e436",
            data: data,
            success : function() {
                $("#res").html("<p>Message envoyé</p>");
            },
            error: function() {
                $("#res").html("<p>Erreur, message non envoyé</p>");
            }
        });
    });

});