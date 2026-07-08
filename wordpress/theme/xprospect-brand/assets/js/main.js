(() => {
	const header = document.querySelector('[data-xprospect-header]');
	const menu = document.querySelector('[data-xprospect-menu]');
	const menuToggle = document.querySelector('[data-xprospect-menu-toggle]');
	const accordions = document.querySelectorAll('[data-xprospect-accordion]');

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
