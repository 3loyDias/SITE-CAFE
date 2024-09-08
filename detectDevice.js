// detetar despositivo

document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o dispositivo é móvel ou não
    if (window.innerWidth <= 768) { 
        // Se a largura da tela for menor ou igual a 768px, carrega o CSS mobile
        document.getElementById('stylesheet').setAttribute('href', 'style-phone.css');
    } else {
        // Caso contrário, mantém o CSS padrão para desktop
        document.getElementById('stylesheet').setAttribute('href', 'style.css');
    }
});

// Detectar mudanças de redimensionamento (útil quando o usuário redimensiona a tela)
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        document.getElementById('stylesheet').setAttribute('href', 'style-phone.css');
    } else {
        document.getElementById('stylesheet').setAttribute('href', 'style.css');
    }
});