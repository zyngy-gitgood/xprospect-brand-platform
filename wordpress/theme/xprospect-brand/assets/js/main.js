(() => {
	const accordions = document.querySelectorAll('[data-xprospect-accordion]');

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
