
$('#header .fa-bars').click(function(){
    $('#header .nav').addClass('active');
    $('#header .fa-times').addClass('active');
});

$('#header .fa-times').click(function(){
    $('#header .nav').removeClass('active');
    $('#header .fa-times').removeClass('active');
});



    
    var swiper = new Swiper("#elementor-specialists .swiper", {

        loop : true,            // 무한반복
        slidesPerView: 1,       // 한번에 보여줄 슬라이드 갯수
        slidesPerGroup: 1,      // 한번에 이동하는 슬라이드 갯수(그룹)
        spaceBetween: 24,
        // centeredSlides: true,
        breakpoints: {
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 24,
            },
            980: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30,
            },
        },

        pagination: {
          el: "#elementor-specialists  .swiper-pagination",
          clickable: true,     // 페이지네이션 불릿기호 클릭가능? - 클릭하면 해당 슬라이드로 이동
        },
    });