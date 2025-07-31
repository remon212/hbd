// Deteksi perangkat mobile
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Inisialisasi animasi
if (isMobile()) {
    document.querySelector('.card').style.transform = 'translate(-50%, -50%) perspective(2000px)';
    document.querySelector('.card').classList.add('mobile-view');
} else {
    // Animasi hover untuk desktop
    document.querySelector('.card').addEventListener('mouseenter', function() {
        this.style.transform = 'translate(-50%,-50%) perspective(2000px) rotate(15deg) scale(1.2)';
    });
    
    document.querySelector('.card').addEventListener('mouseleave', function() {
        this.style.transform = 'translate(-50%,-50%) perspective(2000px)';
    });
}