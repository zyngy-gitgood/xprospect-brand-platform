<?php
/**
 * Front-end assets.
 *
 * @package XProspectBrand
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
	exit;
}

add_action(
	'wp_enqueue_scripts',
	static function (): void {
		$theme_version = wp_get_theme()->get('Version');

		wp_enqueue_style(
			'xprospect-brand-base',
			get_template_directory_uri() . '/assets/css/base.css',
			array(),
			$theme_version
		);

		wp_enqueue_script(
			'xprospect-brand-main',
			get_template_directory_uri() . '/assets/js/main.js',
			array(),
			$theme_version,
			array(
				'in_footer' => true,
				'strategy'  => 'defer',
			)
		);
	}
);
