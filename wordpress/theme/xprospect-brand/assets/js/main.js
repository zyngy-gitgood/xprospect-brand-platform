(() => {
	document.documentElement.classList.add('xprospect-js');

	const header = document.querySelector('[data-xprospect-header]');
	const menu = document.querySelector('[data-xprospect-menu]');
	const menuToggle = document.querySelector('[data-xprospect-menu-toggle]');
	const accordions = document.querySelectorAll('[data-xprospect-accordion]');
	const revealItems = document.querySelectorAll('.xprospect-reveal');

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

	if (revealItems.length > 0 && 'IntersectionObserver' in window) {
		const revealObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}

				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			});
		}, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

		revealItems.forEach((item) => revealObserver.observe(item));
	} else {
		revealItems.forEach((item) => item.classList.add('is-visible'));
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
