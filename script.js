const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.hasAttribute('data-theme')) {
        // Hapus atribut dark mode, ubah ikon ke moon
        body.removeAttribute('data-theme');
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    } else {
        // Tambahkan atribut dark mode, ubah ikon ke sun
        body.setAttribute('data-theme', 'dark');
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    }
});
