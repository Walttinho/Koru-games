document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const thumbnailScroll = document.querySelector('#thumbnailScroll');
    const totalImages = document.querySelectorAll('.carousel img').length;
    let translateValue = 0;
    let currentIndex = 0;
  
    function nextSlide() {
      currentIndex++;
      if (currentIndex >= totalImages) {
        currentIndex = 0;
      }
      translateValue = currentIndex * -100;
      updateCarousel();
      updateThumbnails();
    }
  
    function prevSlide() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = totalImages - 1;
      }
      translateValue = currentIndex * -100;
      updateCarousel();
      updateThumbnails();
    }
  
    function updateCarousel() {
      carousel.style.transform = `translateX(${translateValue}%)`;
    }
  
    function updateThumbnails() {
      // Remova as miniaturas existentes
      thumbnailScroll.innerHTML = '';
  
      // Adicione miniaturas ao scroll
      for (let i = 0; i < totalImages; i++) {
        const thumbnail = document.createElement('img');
        thumbnail.src = document.querySelectorAll('.carousel img')[i].src;
        thumbnail.alt = `Thumbnail ${i + 1}`;
        thumbnail.onclick = function () {
          currentIndex = i;
          translateValue = currentIndex * -100;
          updateCarousel();
          updateThumbnails();
        };
        thumbnailScroll.appendChild(thumbnail);
      }
    }
  
    // Adiciona eventos aos botões de navegação
    document.querySelector('.left').addEventListener('click', prevSlide);
    document.querySelector('.right').addEventListener('click', nextSlide);
  
    setInterval(nextSlide, 6000); // Altera o tempo do slide em segundos
    setInterval(() => nextThumbnail(), 2000); // Altera o tempo das miniaturas em milissegundos
  
    function nextThumbnail() {
      currentIndex++;
      if (currentIndex >= totalImages) {
        currentIndex = 0;
      }
      translateValue = currentIndex * -100;
      updateThumbnails();
    }
  
    updateThumbnails(); // Atualiza as miniaturas no início
  });
  
  