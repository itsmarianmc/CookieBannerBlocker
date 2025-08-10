window.addEventListener('scroll', function() {
	const header = document.querySelector('header');
	if (window.scrollY > 50) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menu.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
	    navLinks.classList.toggle('active');
        menu.innerHTML = '<i class="fas fa-times"></i>';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		const targetId = this.getAttribute('href');
		if (targetId === '#') return;

		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			navLinks.classList.remove('active');

			window.scrollTo({
				top: targetElement.offsetTop - 80,
				behavior: 'smooth'
			});
		}
	});
});

const observerOptions = {
	root: null,
	rootMargin: '0px',
	threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animated');
		}
	});
}, observerOptions);

document.querySelectorAll('.feature-card, .step, .testimonial-card').forEach(el => {
	observer.observe(el);
});