let dubaiText = document.getElementById('dubaitext');
let burjkhalifa = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    // Limiting the scroll effect to avoid infinite scrolling
    if (value < window.innerHeight) {
        dubaiText.style.left = value * -2 + 'px';
        burjkhalifa.style.top = value * 1 + 'px';
        stars.style.top = value * 1 + 'px';
    }
});
// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
