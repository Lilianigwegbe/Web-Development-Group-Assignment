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

  //..            
document.addEventListener('DOMContentLoaded', function() {


  // 1. Animate Progress Bars
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const progress = parseFloat(bar.dataset.progress);
    const fill = bar.querySelector('.progress-fill');


  fill.style.width = '0%'; // Start at 0 width


    if(progress >= 85){
        fill.style.backgroundColour = '#28a745';
    } else if(progress >= 92){
        fill.style.backgroundColour = '#28a745';
    } else if(progress >= 80){
        fill.style.backgroundColour = '#28a745';
    } else if(progress >= 95){
        fill.style.backgroundColour = '#28a745';
    } else {
        fill.style.backgroundColour = '#dc3545';
    }


  setTimeout(() => {
    fill.style.width = progress + '%';
    fill.style.transition = 'width 1s ease-in-out'; // Add transition after initial load
  }, 100); // Small delay to ensure initial render
  });


  // 2. Image Overlay
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  workItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
  const overlay = document.createElement('div');
  overlay.classList.add('portfolio-overlay');
  overlay.innerHTML = '<span class="view-icon"><i class="fas fa-eye"></i></span>';
  this.appendChild(overlay);
  });


  item.addEventListener('mouseleave', function() {
  const overlay = this.querySelector('.portfolio-overlay');
  if (overlay) {
  overlay.remove();
  }
  });
  });


  // 3. Scroll to Top Button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.classList.add('scroll-top-btn');
  document.body.appendChild(scrollToTopBtn);
  window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
  scrollToTopBtn.style.display = 'block';
  } else {
  scrollToTopBtn.style.display = 'none';
  }
  });


  scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
      top: 0,
      behavior: 'smooth'
      });
      });  


    //4. Counting Up for Stats
    const statNumbers = document.querySelectorAll('.stat-number');


    function animateCount(element, start, end, duration){
        let current = start;
        const range = end - start;
        const increment = Math.ceil(range / duration * 100);
        let timer = setInterval(() => {
            current += increment;
            element.textContent = current;
            if (current >= end){
                clearInterval(timer);
                element.textContent = end;
            }
        }, 20);
    }


    const observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                statNumbers.forEach(number =>{
                    const endValue = parseInt(number.textContent);
                    number.textContent = 0;
                    animateCount(number, 0, endValue, 2000);
                });
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.7});


    const statsSection = document.querySelector('.stats-section');
    if(statsSection){
        observer.observe(statsSection);
    }
});

                          
