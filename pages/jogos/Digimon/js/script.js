document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnLeiaMais").addEventListener("click", leiaMais);

  function leiaMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");

    if (pontos.style.display === "none") {
      pontos.style.display = "inline-block";
      maisTexto.style.display = "none";
      btnLeiaMais.innerHTML = "Leia Mais";
    } else {
      pontos.style.display = "none";
      maisTexto.style.display = "inline-block";
      btnLeiaMais.innerHTML = "Leia Menos";

      // Aguarda a renderização do texto
      setTimeout(function () {
        // Calcula a altura do texto expandido
        var alturaTextoExpandido = maisTexto.offsetHeight;

        // Ajusta a posição do botão para a altura do texto expandido
        btnLeiaMais.style.position = "static";
        btnLeiaMais.style.top = alturaTextoExpandido + "px";
        btnLeiaMais.style.right = "0";
      }, 0);
    }
  }
  function scrollToSection(sectionClass) {
    const section = document.querySelector("." + sectionClass);
    section.scrollIntoView({ behavior: "smooth" });
  }
});
