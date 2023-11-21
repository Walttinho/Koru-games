
(async function listarPersonagens() {
  await fetch("https://www.narutodb.xyz/api/character?limit=2000")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (!data) {
        document.createElement("h3").textContent =
          "Carregando Personagens...";
        return console.log("carregando");
      }
      for (let i = 3; i < data.characters.length; i++) {
        let option = document.createElement("option");
        option.value = data.characters[i].id;
        option.innerHTML = data.characters[i].name;
        document.getElementById("listarPersonagens").appendChild(option);
      }
    });
})();
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
(async function listarPersonagensCarrossel() {
  const response = await fetch(
    "https://www.narutodb.xyz/api/character?limit=2000"
  );
  const data = await response.json();
  console.log(data);

  const carroselElemento = document.getElementById("personagemCarrossel");
  for (let i = 3; i < data.characters.length; i++) {
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

    imagemPersonagem.alt = data.characters[i].name;
    imagemPersonagem.addEventListener("click", () => {
      window.location.href = `./personagens/personagem.html?character=${data[i].id}`;
    });

    divPersonagem.appendChild(imagemPersonagem);
    divPersonagem.appendChild(nomePersonagem);
    carroselElemento.appendChild(divPersonagem);
  }
})();

function redirecionarParaPersonagem() {
  const selecionaPersonagem =
    document.getElementById("listarPersonagens").value;
  window.location.href = `./personagens/personagem.html?character=${selecionaPersonagem}`;
}

document
  .querySelector(".carrosel")
  .addEventListener("mousemove", (event) => {
    const container = document.querySelector(".carrosel"); 

    if (event.pageX > container.offsetLeft + container.offsetWidth - 80) {
      container.scrollLeft += 50;
    } else if (event.pageX < container.offsetLeft + 80) {
      container.scrollLeft -= 50;
    }
  });


// scripts.js
const listaImagens = [
  'https://media.graphassets.com/1XGdFvojRsa5QJxI0PFz',
  'https://media.graphassets.com/gk1TRPpwT3meNPVldAGE',
  'https://media.graphassets.com/v9oaZywuSHGubrE51z1c',
  'https://media.graphassets.com/a1TskZ1R8ubIMiBprVcQ',
  'https://media.graphassets.com/ZtNX16tqT6imDl7IQLto',
  'https://media.graphassets.com/PBVeCo1tTrqmajQUoQzQ',
  'https://media.graphassets.com/53yUSA2QvfoPzuAXGQYw',
  "https://img.hype.games/cdn/8f839c29-a960-41dd-a1cf-7e1fc9a1fad4Cover_Screeshot_1.jpg",
  "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/05/NarutoRiseOfANinja.png",
  "https://s2-techtudo.glbimg.com/hzDW8_RabTYnNM_0O_cGsEP8oIs=/0x0:840x473/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/E/c/eB4mamS0CQE6fD1Vh50Q/141406.jpg",
  "https://sm.ign.com/t/ign_pl/blogroll/n/naruto-shi/naruto-shippuden-ultimate-ninja-storm-4-coming-to_272u.1280.jpg"


 
  
];

const mainImg = document.getElementById('imagemPrincipal');
const minhaturasCarrosel = document.getElementById('minhaturasCarrosel');

// Exibir imagem principal ao carregar a página
mainImg.src = listaImagens[0];

// Criar miniaturas das imagens
listaImagens.forEach((imagem, index) => {
  const thumbnail = document.createElement('img');
  thumbnail.src = imagem;
  thumbnail.addEventListener('click', () => {
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
      behavior: 'smooth'
    });

    if (scrollAmount >= (carrosselElement.scrollWidth - carrosselElement.clientWidth)) {
      scrollAmount = 0;
    }
  }

  setInterval(scroll, 50); // Ajuste a velocidade de rolagem conforme necessário
}

autoScroll(minhaturasCarrosel); // Chama a função para o carrossel de miniaturas
// Chama a função para o carrossel de personagens

