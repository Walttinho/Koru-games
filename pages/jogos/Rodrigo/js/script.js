$(document).ready(function() {

    $("#logo").on("click", function() {
        $(this).addClass("shake-animation");
        setTimeout(function() {
            $("#logo").removeClass("shake-animation");
        }, 1000); //Tempo em milissegundos
    });
});