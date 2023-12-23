async function verificarImagemValida(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function carregarImagemValida(url, fallbackUrl) {
  const imagemValida = await verificarImagemValida(url);
  if (imagemValida) {
    return url;
  } else {
    return fallbackUrl;
  }
}

async function listarPersonagensCarrossel() {
  try {
    const selectElement = document.getElementById("opcoes");
    const selectedOption = selectElement.value;

    let url = "https://narutodb.xyz/api/team/61"

    switch (selectedOption) {
      case "1":
        url = "https://narutodb.xyz/api/team/61";
        break;
      case "2":
        url = "https://narutodb.xyz/api/team/177";
        break;
      case "3":
        url = "https://narutodb.xyz/api/team/24";//alterar
        break;
      case "4":
        url = "https://narutodb.xyz/api/team/30";
        break;
      case "5":
        url = "https://narutodb.xyz/api/team/26";
        break;
      case "6":
        url = "https://narutodb.xyz/api/team/66";
        break;
      case "7":
        url = "https://narutodb.xyz/api/team/83";
        break;
      case "8":
        url = "https://narutodb.xyz/api/team/101";
        break;
      default:
        url = "https://narutodb.xyz/api/team/177";
        return;
    }

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const carroselElemento = document.getElementById("personagemCarrossel");
    carroselElemento.innerHTML = "";

    if (data && data.characters && Array.isArray(data.characters)) {
      for (let i = 0; i < data.characters.length; i++) {
        const divPersonagem = document.createElement("div");
        divPersonagem.classList.add("personagem");

        const nomePersonagem = document.createElement("p");
        nomePersonagem.textContent = data.characters[i].name;

        const imagemPersonagem = document.createElement("img");

        const imagemUrl = await carregarImagemValida(
          data.characters[i].images[0],
          "./image/activities.svg"
        );

        imagemPersonagem.src = imagemUrl;
        imagemPersonagem.alt = data.characters[i].name;

        imagemPersonagem.addEventListener("click", () => {
          window.location.href = `./personagens/personagem.html?character=${data.characters[i].id}`;
        });

        divPersonagem.appendChild(imagemPersonagem);
        divPersonagem.appendChild(nomePersonagem);
        carroselElemento.appendChild(divPersonagem);
      }
    } else {
      console.error(
        "Os dados dos personagens estão em um formato inesperado ou não foram recebidos corretamente."
      );
    }
  } catch (error) {
    console.error("Erro ao buscar ou analisar os dados:", error);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  listarPersonagensCarrossel();
});

  

function redirecionarParaPersonagem() {
  const selecionaPersonagem =
    document.getElementById("listarPersonagens").value;
  window.location.href = `./personagens/personagem.html?character=${selecionaPersonagem}`;
}

document.querySelector(".carrosel").addEventListener("mousemove", (event) => {
  const container = document.querySelector(".carrosel");

  if (event.pageX > container.offsetLeft + container.offsetWidth - 80) {
    container.scrollLeft += 50;
  } else if (event.pageX < container.offsetLeft + 80) {
    container.scrollLeft -= 50;
  }
});

const listaImagens = [
  "https://media.graphassets.com/1XGdFvojRsa5QJxI0PFz",
  "https://media.graphassets.com/gk1TRPpwT3meNPVldAGE",
  "https://media.graphassets.com/v9oaZywuSHGubrE51z1c",
  "https://media.graphassets.com/a1TskZ1R8ubIMiBprVcQ",
  "https://media.graphassets.com/ZtNX16tqT6imDl7IQLto",
  "https://media.graphassets.com/PBVeCo1tTrqmajQUoQzQ",
  "https://media.graphassets.com/53yUSA2QvfoPzuAXGQYw",
  "https://img.hype.games/cdn/8f839c29-a960-41dd-a1cf-7e1fc9a1fad4Cover_Screeshot_1.jpg",
  "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/05/NarutoRiseOfANinja.png",
  "https://s2-techtudo.glbimg.com/hzDW8_RabTYnNM_0O_cGsEP8oIs=/0x0:840x473/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/E/c/eB4mamS0CQE6fD1Vh50Q/141406.jpg",
  "https://sm.ign.com/t/ign_pl/blogroll/n/naruto-shi/naruto-shippuden-ultimate-ninja-storm-4-coming-to_272u.1280.jpg",
];

const mainImg = document.getElementById("imagemPrincipal");
const minhaturasCarrosel = document.getElementById("minhaturasCarrosel");

mainImg.src = listaImagens[0];

listaImagens.forEach((imagem, index) => {
  const thumbnail = document.createElement("img");
  thumbnail.src = imagem;
  thumbnail.addEventListener("click", () => {
    mainImg.src = imagem;
  });
  minhaturasCarrosel.appendChild(thumbnail);
});

function autoScroll(carrosselElement) {
  let scrollAmount = 0;
  const thumbnailWidth = carrosselElement.scrollWidth / listaImagens.length;

  function scroll() {
    scrollAmount += 1;
    carrosselElement.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    });

    if (
      scrollAmount >=
      carrosselElement.scrollWidth - carrosselElement.clientWidth
    ) {
      scrollAmount = 0;
    }
  }

  setInterval(scroll, 50);
}

autoScroll(minhaturasCarrosel);
