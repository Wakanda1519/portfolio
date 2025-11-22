function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function filterProjects(category) {
    const items = document.querySelectorAll('.project-item');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        if(btn.dataset.filter === category) {
            btn.classList.add('active');
            btn.classList.remove('glass');
        } else {
            btn.classList.remove('active');
            btn.classList.add('glass');
        }
    });

    items.forEach(item => {
        item.classList.remove('fade-in');
        void item.offsetWidth;

        if (category === 'all' || item.dataset.category === category) {
            item.classList.remove('hidden');
            item.classList.add('fade-in');
        } else {
            item.classList.add('hidden');
        }
    });
}

const tiltCards = document.querySelectorAll('.glass');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPct = x / rect.width;
        const yPct = y / rect.height;
        const xRotation = (yPct - 0.5) * 10 * -1;
        const yRotation = (xPct - 0.5) * 10; 

        card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            document.getElementById('mobile-menu').classList.add('hidden');
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});