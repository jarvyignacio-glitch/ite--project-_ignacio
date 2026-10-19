document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('liked');
        this.textContent = this.classList.contains('liked') 
            ? '❤️ Liked' 
            : '❤️ Like';
    });
});

const progressFill = document.getElementById('progressFill');

window.addEventListener('scroll', () => {
    if (!progressFill) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressFill.style.width = `${progress}%`;
});