function uiportfolio_enqueue_assets() {
  wp_enqueue_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css');
  wp_enqueue_style('animate', get_template_directory_uri() . '/css/animate.css');
  wp_enqueue_style('odometer', get_template_directory_uri() . '/css/odometer-theme-default.css');
  wp_enqueue_style('lightbox', get_template_directory_uri() . '/css/lightbox.css');
  wp_enqueue_style('main-style', get_stylesheet_uri());
  wp_enqueue_script('jquery');
  wp_enqueue_script('bootstrap', get_template_directory_uri() . '/js/bootstrap.min.js', ['jquery'], null, true);
  wp_enqueue_script('responsiveslides', get_template_directory_uri() . '/js/responsiveslides.min.js', ['jquery'], null, true);
  wp_enqueue_script('odometer', get_template_directory_uri() . '/js/odometer.js', [], null, true);
  wp_enqueue_script('wow', get_template_directory_uri() . '/js/wow.min.js', [], null, true);
  wp_enqueue_script('lightbox', get_template_directory_uri() . '/js/lightbox.js', [], null, true);
  wp_add_inline_script('wow', 'new WOW().init();');
}
add_action('wp_enqueue_scripts', 'uiportfolio_enqueue_assets');
