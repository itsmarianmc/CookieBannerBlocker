const menu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

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

menu.addEventListener('click', () => {
	const isActive = menu.classList.contains('active');

	if (isActive) {
		menu.classList.remove('active');
		navLinks.classList.remove('active');
	} else {
		menu.classList.add('active');
		navLinks.classList.add('active');
	}
});

window.addEventListener('scroll', function() {
	const header = document.querySelector('header');
	if (window.scrollY > 50) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
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
			menu.classList.remove('active');

			window.scrollTo({
				top: targetElement.offsetTop - 80,
				behavior: 'smooth'
			});
		}
	});
});

document.querySelectorAll('.feature-card, .step, .testimonial-card').forEach(el => {
	observer.observe(el);
});

document.addEventListener('DOMContentLoaded', function() {
	const banner = document.querySelector('.banner');
	const bannerOl = document.getElementById('cookie-banner');
	const learnMoreBtn = document.getElementById('learnMoreBtn');
	const installBtn = document.getElementById('installBtn');
	const overlay = document.querySelector('.overlay');

	let secondsLeft = 3;
	const countdownInterval = setInterval(() => {
		secondsLeft--;

		if (secondsLeft <= 0) {
			expandBanner();
		}
	}, 1000);

	function expandBanner() {
		banner.classList.add('expanded');
	}

	learnMoreBtn.addEventListener('click', function() {
		expandBanner();
	});

	installBtn.addEventListener('click', function() {
		animateClose();
	});

	function animateClose() {
		overlay.style.opacity = '0';

		setTimeout(() => {
			overlay.style.display = 'none';
		}, 600);
	}

	const defaultConsent = {
		'ad_storage': 'denied',
		'ad_user_data': 'denied',
		'ad_personalization': 'denied',
		'analytics_storage': 'denied',
		'functionality_storage': 'denied',
		'personalization_storage': 'denied',
		'security_storage': 'granted',
	};
	gtag('consent', 'default', defaultConsent);

	document.getElementById("acceptAllBtn").addEventListener('click', () => {
		gtag('consent', 'update', {
			'ad_storage': 'granted',
			'ad_user_data': 'granted',
			'ad_personalization': 'granted',
			'analytics_storage': 'granted',
			'functionality_storage': 'granted',
			'personalization_storage': 'granted',
			'security_storage': 'granted'
		});
		setBannerAccepted();
		animateClose();
	});

	function setBannerAccepted() {
		localStorage.setItem('bannerAccepted', 'true');
	}

	function checkBannerAccepted() {
		return localStorage.getItem('bannerAccepted') === 'true';
	}

	function initCookieBanner() {
		if (checkBannerAccepted()) {
			bannerOl.style.display = 'none';
		} else {
			localStorage.removeItem('cookieSettings');
			gtag('consent', 'default', defaultConsent);
			banner.style.display = 'block';
		}
	}

	initCookieBanner();
});