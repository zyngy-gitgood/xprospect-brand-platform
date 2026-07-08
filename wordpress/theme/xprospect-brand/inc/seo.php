<?php
/**
 * SEO metadata foundation.
 *
 * @package XProspectBrand
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Returns page-aware SEO metadata.
 *
 * @return array{title:string,description:string}
 */
function xprospect_brand_get_seo_meta(): array {
	$defaults = array(
		'title'       => 'X-PROSPECT株式会社｜AIを、現場で使える力に。',
		'description' => 'X-PROSPECTは、全国の中小企業向けにAI導入、業務改革、システム開発、社員教育、運用定着まで一貫して支援します。',
	);

	if (is_front_page() || is_home()) {
		return $defaults;
	}

	$page_meta = array(
		'ai'         => array(
			'title'       => 'AI導入支援｜X-PROSPECT株式会社',
			'description' => 'AI導入の企画、業務分析、PoC、システム開発、社員教育、運用定着まで支援します。',
		),
		'services'   => array(
			'title'       => 'サービス｜X-PROSPECT株式会社',
			'description' => 'AI導入・業務改革、AIシステム開発、DX・IT基盤構築、AI人材育成を通じて企業の成長を支援します。',
		),
		'technology' => array(
			'title'       => '技術｜X-PROSPECT株式会社',
			'description' => 'システム開発、クラウド、AI、3D点群、XR、特許技術を活用し、現場で使える仕組みを構築します。',
		),
		'recruit'    => array(
			'title'       => '採用情報｜X-PROSPECT株式会社',
			'description' => 'AI時代に現場で価値を出せるエンジニアを募集しています。',
		),
		'company'    => array(
			'title'       => '会社情報｜X-PROSPECT株式会社',
			'description' => 'X-PROSPECT株式会社の会社概要、事業内容、所在地、許可情報をご紹介します。',
		),
		'contact'    => array(
			'title'       => 'お問い合わせ｜X-PROSPECT株式会社',
			'description' => 'AI導入、システム開発、技術者支援についてお気軽にご相談ください。',
		),
	);

	foreach ($page_meta as $slug => $meta) {
		if (is_page($slug)) {
			return $meta;
		}
	}

	return $defaults;
}

add_filter(
	'document_title_parts',
	static function (array $title): array {
		$meta = xprospect_brand_get_seo_meta();

		$title['title'] = $meta['title'];

		unset($title['site'], $title['tagline']);

		return $title;
	}
);

add_action(
	'wp_head',
	static function (): void {
		$meta        = xprospect_brand_get_seo_meta();
		$canonical   = is_singular() ? get_permalink() : home_url('/');
		$ogp_image   = get_template_directory_uri() . '/assets/images/ogp-default.svg';
		$site_name   = get_bloginfo('name') ?: 'X-PROSPECT';
		$description = $meta['description'];
		$title       = $meta['title'];

		printf('<meta name="description" content="%s">' . "\n", esc_attr($description));
		printf('<link rel="canonical" href="%s">' . "\n", esc_url($canonical));
		printf('<meta property="og:site_name" content="%s">' . "\n", esc_attr($site_name));
		printf('<meta property="og:title" content="%s">' . "\n", esc_attr($title));
		printf('<meta property="og:description" content="%s">' . "\n", esc_attr($description));
		printf('<meta property="og:type" content="%s">' . "\n", is_front_page() ? 'website' : 'article');
		printf('<meta property="og:url" content="%s">' . "\n", esc_url($canonical));
		printf('<meta property="og:image" content="%s">' . "\n", esc_url($ogp_image));
		echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
		printf('<meta name="twitter:title" content="%s">' . "\n", esc_attr($title));
		printf('<meta name="twitter:description" content="%s">' . "\n", esc_attr($description));
		printf('<meta name="twitter:image" content="%s">' . "\n", esc_url($ogp_image));
	},
	5
);
