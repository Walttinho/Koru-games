$(document).ready(function () {
  $("#aboutLink").click(function () {
    // Remove e adiciona a classe de animação ao clicar no link
    $("#about").toggleClass("animate__backInUp");
    setTimeout(function () {
      $("#about").toggleClass("animate__backInUp");
    }, 100); // Tempo da animação em milissegundos
  });
});
