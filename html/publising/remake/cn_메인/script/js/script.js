  /*퀵메뉴 스크롤*/

  var speed = 500; // 따라다닐 속도 : "slow", "normal", or "fast" or numeric(단위:msec)
  $(document).ready(function(){ 
    var currentPosition = parseInt($(".aside").css("top")); 
    $(window).scroll(function() { 
      var position = $(window).scrollTop(); 
      $(".aside").stop().animate({"top":position+currentPosition+"px"}, {duration:speed},1500);
    });       
  });

 //스크롤이벤트가 발생하면
 $(window).scroll(function(){
  
});

/* 오늘의 뉴스 slide */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
    
    //autoplay
    autoplay:{
      delay: 3000,
      disableOnInteraction: false,
    },
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  
  //멈춤, 재생
  $('.start').on('click', function() {
    $('.stop').toggleClass('active');
    $(this).addClass('active');
  });
  
  $('.stop').on('click', function() {
    $('.start').toggleClass('active');
    $(this).addClass('active');
  });
  
  $('.start').on('click', function() {
    swiper.autoplay.start();
    return false;
  });
  $('.stop').on('click', function() {
    swiper.autoplay.stop();
    
    return false;
  });
  
  
  
  
  /* 오늘의 뉴스 tab*/
  var $back = $("<div/>").addClass("back");
  var $bizlLstWrap = $("#biz div.wrap_s"); 
  $("#biz li").each(function () {
      $back.clone().addClass( $(this).data("cname") ).appendTo( $bizlLstWrap );
  }).on("click focusin", function () {
      var $this = $(this);
      if ( !$this.hasClass("on") ) {
          $("#biz li.on").removeClass("on");
          $this.addClass("on");
          $this.parent().attr("class", "list "+$this.data("cname"));
      }
  });
  
  
  
  
  /* nav moblie hamberger_bar */
  $('#header .fa-bars').click(function(){
    $('#header .nav').addClass('active');
    $('#header .fa-times').addClass('active');
  });
  
  $('#header .fa-times').click(function(){
    $('#header .nav').removeClass('active');
    $('#header .fa-times').removeClass('active');
  });
  
  
  
  /* banner slide */
  $('#top_banner .close p').click(function(){
    $('#top_banner .open').slideToggle(300);
    $('#top_banner p.open_btn').toggleClass('active');
    $('#top_banner p.close_btn').toggleClass('active');
  });
  
  
  
  /* type-10 slide */
  new Swiper('#type-10>.swiper-container', {
  
    //autoplay
    autoplay:{
      delay: 3000,
      disableOnInteraction: false,
    },
  
      loop : true,            // 무한반복
    slidesPerView: 1,       // 한번에 보여줄 슬라이드 갯수
    slidesPerGroup: 1,      // 한번에 이동하는 슬라이드 갯수(그룹)
    spaceBetween: 24,
    // centeredSlides: true,
    breakpoints: {
        440: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 24,
        },
        980: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 30,
        },
    },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,     // 페이지네이션 불릿기호 클릭가능? - 클릭하면 해당 슬라이드로 이동
    },
      navigation : { // 네비게이션
          nextEl : '.swiper-button-next', // 다음 버튼 클래스명
          prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
      },
  });
  
  
  
  /* type-4 tabmenu */
  $(document).ready(function() {
    $("#type-4 .type4_tab>ul>li").click(function() {
      var idx = $(this).index();
      $("#type-4 .type4_tab>ul>li>a").removeClass("on");
      $("#type-4 .type4_tab>ul>li>a").eq(idx).addClass("on");
      $("#type-4 .cont").removeClass("on");
      $("#type-4 .cont").eq(idx).addClass("on");
      $("#type-4 .cont").hide();
      $("#type-4 .cont").eq(idx).show();
    })
  });
  
  
  
//   보령해양머드박람회 영상 열기닫기클릭시 재생&멈춤

  $(document).ready(function(){
    var video = $('#br_video');
    $('#top_banner .open_btn').click(function(){
		video.get(0).play();
	});

    $('#top_banner .close_btn').click(function(){
		video.get(0).pause();
	});
  });

