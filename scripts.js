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


// galeria

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

if (window.location.pathname === '/index') {
    window.location.replace('/index.html');
}

if (window.location.pathname === '/menu') {
    window.location.replace('/pages/menu.html');
}