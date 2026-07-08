<?php
/**
 * Pattern categories.
 *
 * @package XProspectBrand
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
	exit;
}

add_action(
	'init',
	static function (): void {
		register_block_pattern_category(
			'xprospect-components',
			array('label' => __('X-PROSPECT Components', 'xprospect-brand'))
		);
	}
);
