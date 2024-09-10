// -------------------//
// animacao das imagens do menu
// -------------------//
document.addEventListener('DOMContentLoaded', function () {
    const menuItemContainers = document.querySelectorAll('.menu-item-image-container');

    menuItemContainers.forEach(container => {
        container.addEventListener('click', function () {
            const img = this.querySelector('.menu-item-image');

            if (img.classList.contains('expanded')) {
                img.classList.remove('expanded');
            } else {
                // Remove a classe "expanded" de todas as outras imagens
                menuItemContainers.forEach(cont => {
                    const otherImg = cont.querySelector('.menu-item-image');
                    otherImg.classList.remove('expanded');
                });

                // Adiciona a classe "expanded" à imagem clicada
                img.classList.add('expanded');
            }
        });
    });
});

// -------------------//
// animação das imagens da galeria
// -------------------//
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            if (item.classList.contains('zoomed')) {
                item.classList.remove('zoomed');
            } else {
                galleryItems.forEach(i => i.classList.remove('zoomed'));
                item.classList.add('zoomed');
            }
        });
    });
});

// -------------------//
// animação do header
// -------------------//
window.addEventListener('load', function() {
    const header = document.querySelector('header');
    header.classList.add('show');
});

// -------------------//
// animação dos botões
// -------------------//
window.addEventListener('load', function() {
    const header = document.querySelector('header');
    const buttons = document.querySelectorAll('.nav-link');
    
    // Anima o header
    header.classList.add('show');
    
    // Anima os botões com um delay em cascata
    buttons.forEach((button, index) => {
      setTimeout(() => {
        button.classList.add('show');
      }, index * 200); // Atraso de 200ms entre cada botão
    });
});

// -------------------//
// animação do footer
// -------------------//
window.addEventListener('load', function() {
    const header = document.querySelector('header');
    const buttons = document.querySelectorAll('.nav-link');
    const footer = document.querySelector('footer');
    
    // Anima o header
    header.classList.add('show');
    
    // Anima os botões com um delay em cascata
    buttons.forEach((button, index) => {
      setTimeout(() => {
        button.classList.add('show');
      }, index * 200); // Atraso de 200ms entre cada botão
    });
    
    // Anima o footer
    footer.classList.add('show');
  });

// -------------------//

