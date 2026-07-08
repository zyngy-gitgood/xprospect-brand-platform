<?php
/**
 * Theme setup hooks.
 *
 * @package XProspectBrand
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
	exit;
}

add_action(
	'after_setup_theme',
	static function (): void {
		add_theme_support('wp-block-styles');
		add_theme_support('responsive-embeds');
		add_theme_support('editor-styles');
		add_theme_support('title-tag');
		add_editor_style('assets/css/base.css');
	}
);
