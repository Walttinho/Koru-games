// Função para iniciar o iframe
function iniciarIframe(iframeId) {
    var iframe = document.getElementById(iframeId);
    var dataSrc = iframe.getAttribute('data-src');

    if (dataSrc) {
        iframe.src = ''; // Define a origem como vazia
        iframe.src = dataSrc; // Define a origem novamente
    } else {
        console.error('Atributo data-src não encontrado para o iframe ' + iframeId);
    }
}

// Função para parar o iframe
function pararIframe(iframeId) {
    var iframe = document.getElementById(iframeId);
    iframe.src = ''; // Remove a origem para parar o iframe
}
