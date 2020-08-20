new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.projects_pagination',
        bulletClass: 'projects_btn',
        bulletActiveClass: 'projects_btn_active',
        clickable: true,
      },
});