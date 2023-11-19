(async function selecionarPersonagem() {
  let indicePersonagem = 0;
  const resposta = await fetch(
    "https://naruto-api-rsl3.onrender.com/api/v1/characters?limit=1000"
  );
  const dadosResposta = await resposta.json();

  const selecionaPersonagem = new URLSearchParams(window.location.search).get(
    "character"
  );

  if (!selecionaPersonagem) {
    console.error("Personagem não selecionado");
    return;
  }

  indicePersonagem = dadosResposta.findIndex(
    (personagem) => personagem.id === parseInt(selecionaPersonagem)
  );

  if (indicePersonagem === -1) {
    console.error("Personagem não encontrado");
    return;
  }

  const detalharPersonagem = (indice) => {
    const data = dadosResposta[indice];

    document.title = data.name;

    const nomePersonagem = document.getElementById("nomePersonagem");
    nomePersonagem.textContent = data.name;

    const info = document.getElementById("infoPersonagem");
    const infoPersonagem = `
      
      <p>ID: ${data.id}</p>
      <div id= "info">
      <p>Sexo: ${data.info.Sexo}</p>
      <p>Aniversário: ${data.info["Aniversário"]}</p>
      <p>Tipo Sanguíneo: ${data.info["Tipo Sanguíneo"]}</p>
      <p>Ocupação: ${data.info.Ocupação}</p>
      <p>Afiliação: ${data.info.Afiliação}</p>
      <p>Times: ${data.info.Times}</p>
      <p>Registro Ninja: ${data.info["Registro Ninja"]}</p>
      <p>Graduação (Genin): ${data.info["Graduação (Genin)"]}</p>
      <p>Graduação (Chūnin): ${data.info["Graduação (Chūnin)"]}</p></div>
      <br>
      <div id= "description">
            
    `;
    const historia = document.getElementById("historiaPersonagem");
    const historiaPersonagem = `
    <p>Descrição: ${data.about.join("<br>")}</p></div>
    <a href="${
      data.page
    }" target="_blank">Link para a página do personagem</a>`
    historia.innerHTML = historiaPersonagem;
    info.innerHTML = infoPersonagem;

    history.pushState(null, null, `?character=${data.id}`);

    const imagens = data.images;
    let imagemAtualIndice = 0;

    const imagemAtual = document.getElementById("imagemAtual");
    imagemAtual.src = imagens[imagemAtualIndice];

    document
      .getElementById("btnImagemAnterior")
      .addEventListener("click", () => {
        imagemAtualIndice =
          (imagemAtualIndice - 1 + imagens.length) % imagens.length;
        imagemAtual.src = imagens[imagemAtualIndice];
      });

    document
      .getElementById("btnImagemProxima")
      .addEventListener("click", () => {
        imagemAtualIndice = (imagemAtualIndice + 1) % imagens.length;
        imagemAtual.src = imagens[imagemAtualIndice];
      });
  };

  detalharPersonagem(indicePersonagem);

  document.getElementById("btnAnterior").addEventListener("click", () => {
    indicePersonagem =
      (indicePersonagem - 1 + dadosResposta.length) % dadosResposta.length;
    detalharPersonagem(indicePersonagem);
  });

  document.getElementById("btnProximo").addEventListener("click", () => {
    indicePersonagem = (indicePersonagem + 1) % dadosResposta.length;
    detalharPersonagem(indicePersonagem);
  });
})();

const controlesDiv = document.getElementById('controles');
document.body.appendChild(controlesDiv.cloneNode(true));
