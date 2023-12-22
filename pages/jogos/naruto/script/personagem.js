(async function selecionarPersonagem() {
  try{
  const indicePersonagem = new URLSearchParams(window.location.search).get(
    "character"
  );


  const dadosResposta = await fetch(
    `https://narutodb.xyz/api/character/${indicePersonagem}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao executar a solicitação");
      }
      return response.json();
    })
    .then((data) => {
      data = data;

      const detalharPersonagem = () => {
        document.title = data.name;

        const nomePersonagem = document.getElementById("nomePersonagem");
        nomePersonagem.textContent = data.name;

        const info = document.getElementById("infoPersonagem");
        const infoPersonagem = `
        <div class="left-column">
        <div id="info">
          <ul>
            <li><strong>ID:</strong> ${data.id}</li>
            <li>Registro Ninja: ${data.rank.ninjaRegistration}</li>
            <li>Sexo: ${Array.isArray(data.personal.sex)
              ? data.personal.sex.map((item) => `<li>${item}</li>`).join("")
              : data.personal.sex}</li>
            <li>Aniversário: ${data.personal.birthdate}</li>
            <li>Tipo Sanguíneo: ${data.personal.bloodType}</li>
            <li>Times:
              <ul>
                ${Array.isArray(data.personal.team)
                  ? data.personal.team.map((item) => `<li>${item}</li>`).join("")
                  : data.personal.team}
              </ul>
            </li>
            <li>Afiliação:
              <ul>
                ${data.personal.affiliation
                  .map((item) => `<li>${item}</li>`)
                  .join("")}
              </ul>
            </li>
            <li>Graduação (Genin): ${
              data.personal.age["Academy Graduate"]
            } anos</li>
            <li>Graduação (Chūnin): ${
              data.personal.age["Chunin Promotion"]
            } anos</li>
            <li>Ocupação:
              <ul>
                ${Array.isArray(data.personal.occupation)
                  ? data.personal.occupation.map((item) => `<li>${item}</li>`).join("")
                  : data.personal.occupation}
              </ul>
            </li>
          </ul>
        </div>
        </div>
        <div class="right-column">
        <div id="jutsus">
          <ul>
          <li>Jutsus:</li><ul>${data.jutsu
            .map((item) => `<li>${item}</li>`)
            .join("")}</ul></ul>
          </ul>
        </div>
        </div>`;

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
        let ninjaAnterior =parseInt(indicePersonagem) - 1;
        detalharPersonagem(ninjaAnterior);
      });

      document.getElementById("btnProximo").addEventListener("click", () => {
        let ninjaPosterior =(indicePersonagem + 1 ) ;
        detalharPersonagem(ninjaPosterior);
      });
    })
    .catch((error) => {
      console.error("Erro:", error);
      
    });
  }catch (error) {
    console.error("Erro:", error);
  }
})();

const controlesDiv = document.getElementById("controles");
document.body.appendChild(controlesDiv.cloneNode(true));
