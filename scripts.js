document.querySelectorAll('.menu-item-image-container').forEach(container => {
    container.addEventListener('click', function() {
        const img = this.querySelector('.menu-item-image');
        img.classList.toggle('expanded');
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