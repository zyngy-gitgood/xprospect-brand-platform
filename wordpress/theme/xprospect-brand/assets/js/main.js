(() => {
	document.documentElement.classList.add('xprospect-js');

	const header = document.querySelector('[data-xprospect-header]');
	const menu = document.querySelector('[data-xprospect-menu]');
	const menuToggle = document.querySelector('[data-xprospect-menu-toggle]');
	const accordions = document.querySelectorAll('[data-xprospect-accordion]');
	const motionTargets = document.querySelectorAll([
		'.xprospect-reveal',
		'.xprospect-rc2-heading',
		'.xprospect-section-heading',
		'.xprospect-rc2-card',
		'.xprospect-content-card',
		'.xprospect-trust-card',
		'.xprospect-stack-item',
		'.xprospect-flow',
		'.xprospect-contact-cta',
		'.xprospect-consultation-block__inner',
	].join(','));
	const countItems = document.querySelectorAll('[data-xprospect-count]');

	const setHeaderState = () => {
		if (!header) {
			return;
		}

		header.classList.toggle('is-scrolled', window.scrollY > 8);
	};

	const closeMenu = () => {
		if (!menu || !menuToggle) {
			return;
		}

		menu.classList.remove('is-open');
		menuToggle.setAttribute('aria-expanded', 'false');
	};

	if (header) {
		setHeaderState();
		window.addEventListener('scroll', setHeaderState, { passive: true });
	}

	if (menu && menuToggle) {
		menuToggle.addEventListener('click', () => {
			const isOpen = menu.classList.toggle('is-open');

			menuToggle.setAttribute('aria-expanded', String(isOpen));
		});

		menu.addEventListener('click', (event) => {
			if (event.target instanceof HTMLAnchorElement) {
				closeMenu();
			}
		});

		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				closeMenu();
			}
		});
	}

	motionTargets.forEach((item, index) => {
		item.classList.add('xprospect-reveal', `xprospect-reveal-delay-${Math.min(index % 6, 5)}`);
	});

	if (motionTargets.length > 0 && 'IntersectionObserver' in window) {
		const revealObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}

				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			});
		}, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

		motionTargets.forEach((item) => revealObserver.observe(item));
	} else {
		motionTargets.forEach((item) => item.classList.add('is-visible'));
	}

	const animateCount = (item) => {
		const target = Number(item.getAttribute('data-xprospect-count'));
		if (!Number.isFinite(target)) {
			return;
		}

		const suffix = item.getAttribute('data-xprospect-suffix') || '';
		const duration = 1100;
		const start = performance.now();

		const tick = (now) => {
			const progress = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			item.textContent = `${Math.round(target * eased)}${suffix}`;

			if (progress < 1) {
				window.requestAnimationFrame(tick);
			}
		};

		window.requestAnimationFrame(tick);
	};

	if (countItems.length > 0 && 'IntersectionObserver' in window) {
		const countObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}

				animateCount(entry.target);
				observer.unobserve(entry.target);
			});
		}, { threshold: 0.45 });

		countItems.forEach((item) => countObserver.observe(item));
	} else {
		countItems.forEach(animateCount);
	}

	accordions.forEach((accordion) => {
		accordion.addEventListener('toggle', (event) => {
			if (!(event.target instanceof HTMLDetailsElement) || !event.target.open) {
				return;
			}

			accordion.querySelectorAll('details[open]').forEach((item) => {
				if (item !== event.target) {
					item.removeAttribute('open');
				}
			});
		}, true);
	});
})();
