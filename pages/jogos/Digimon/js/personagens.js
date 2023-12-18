// Função para definir o conteúdo inicial para Miniatura 1
function setInitialContent() {
    mudarConteudoMiniatura1();
  }
  
  // Função para atualizar o conteúdo para Miniatura 1
  function mudarConteudoMiniatura1() {
    mudarConteudo('Takuma é um estudante do 8 ano que vem de uma família extremamente comum. Quando participa no acampamento de Estudos Históricos extracurriculares e visita um templo relacionado com lendas de desaparecimentos misteriosos, dá por si perdido em outro mundo.', 'image/personagens/Takuma.jpg', 'Takuma Momotsuka');
  }
  
  // Função para atualizar o conteúdo para Miniatura 2
  function mudarConteudoMiniatura2() {
    mudarConteudo('Aoi é uma estudante do 9º ano de outra escola que participa no acampamento da ativdade extracurricular. Trabalha arduamente para lidar com as queixas e pedidos imprudentes dos seus colegas. Normalmente, é calma e raramente fala. No mundo desconhecido, encarrega-se de trabalhos meticulosos como a gestão da comida e manutenção da base.', 'image/personagens/Aoi_Shibuya.jpg', 'Aoi Shibuya');
  }
  
  // Função para atualizar o conteúdo para Miniatura 3
  function mudarConteudoMiniatura3() {
    mudarConteudo('Kaito é um rapaz que vive na área perto do acampamento da atividade extracurricular. Para impedir a sua irmã mais nova de ir ao templo interdito, acompanha Takuma e os outros, acabando por parar noutro mundo. Tem um forte sentido de dever e despreza injustiças, mas como também tende a meter-se facilmente em lutas e odeia depender de outros, ocasionalmente, age sem pedir segundas opiniões. Apesar de só se preocupar com a sua irmazinha, fo seu caráter costuma dar aso a mal-entendidos.', 'image/personagens/Kaito_Shinonome.jpg', 'Kaito Shinonome');
  }
  
  // Função para atualizar o conteúdo para Miniatura 4
  function mudarConteudoMiniatura4() {
    mudarConteudo('Minoru é um colega de turma e amigo próximo de Takuma que participa no acampamento da atividade extracurricular com ele. É o tipo de pessoa otimista que fala e brinca muito. É relaxado e consegue abrir-se a qualquer pessoa, mas também é incerto na medida em que deixa-se levar e atrai problemas. Não gosta de discussões e, para evitar conflitos, faz as pessoas rir com brincadeiras.', 'image/personagens/Minoru_Hinata.jpg', 'Minoru Hinata');
  }
  
  // Função para atualizar o conteúdo para Miniatura 5
  function mudarConteudoMiniatura5() {
    mudarConteudo('Miu é uma garota que vive na área perto do acampamento da atividade extracurricular. É ela que fala a Saki e aos outros sobre o templo interdito, acabando todos por parar num outro mundo. É uma rapariga misteriosa que despista os outros com o seu comportamento excêntrico. Apesar de ser a irmã mais nova de Kaito, o seu instinto  é de superprotetora', 'image/personagens/Miu_Shinonome.jpg', 'Miu Shinonome');
  }
  
  // Função para atualizar o conteúdo para Miniatura 6
  function mudarConteudoMiniatura6() {
    mudarConteudo('Ryou é um estudante do 9º ano de outra escola que participa no acampamento da ativdade extracurricular. Parece não conseguir aceitar o facto de estar perdido num outro mundo e tem medo de Kunemon, por quem sente desdém. Não tem jeito para esconder o medo com coragem, pelo que a sua cobardia torna-se cada vez mais aparente', 'image/personagens/Ryou_Tominaga.png', 'Ryou Tominaga');
  }
  
  // Função para atualizar o conteúdo para Miniatura 7
  function mudarConteudoMiniatura7() {
    mudarConteudo('Saki é uma estudante do 7º ano que se junta ao acampamento da atividade extracurricular. É honesta e diz tudo aquilo que lhe passa pela cabeça, o que por vezes causa problemas. A sua atitude despreocupada e boa aparência pode fazê-la parecer popular, mas nenhum dos seus supostos amigos a acompanhou para o acampamento, onde acabou por ficar sozinha. Por isso, ela junta-se a Takuma e amigos. Juntos, exploram o templo interdito e acabam noutro mundo', 'image/personagens/Saki_kimishima.jpg', 'Saki kimishima');
  }
  
  // Função para atualizar o conteúdo para Miniatura 8
  function mudarConteudoMiniatura8() {
    mudarConteudo('Shuuji é um estudante do 10º ano que se junta ao acampamento como auxiliar. É uma pessoa benevolente, gentil e no qual muitos depositam confiança. Takuma e companhia estavam com a impressão de que ele era um líder no qual podiam confiar, mas após ficarem perdidos num outro mundo onde o seu conhecimento geral já não se aplica, age com base apenas no entusiamo, revelando um lado frágil que culpa os que o rodeiam.', 'image/personagens/Shuuji_Kayama.jpg', 'Shuuji Kayama');
  }
   
  // Função para atualizar o conteúdo com base na miniatura clicada
  function mudarConteudo(texto, imagem, titulo) {
    // Atualiza o texto, a imagem e o título com base nos parâmetros passados
    document.getElementById('descricao').innerHTML = texto;
    document.getElementById('imagemGrande').src = imagem;
    document.getElementById('titulo').innerHTML = titulo;
  }
  
  // Adiciona um ouvinte de evento para chamar a função setInitialContent() quando a página é totalmente carregada
  document.addEventListener('DOMContentLoaded', setInitialContent);
  