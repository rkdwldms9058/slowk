$('#header .gnb').mouseover(function(){
   $('.header_bg').stop().slideDown(); 
});
$('.gnb>li').mouseout(function(){
   $('.header_bg').stop().slideUp(); 
});

$('#header .gnb').mouseover(function(){
   $('#header .lnb').stop().slideDown(); 
});
$('.gnb>li').mouseout(function(){
   $('#header .lnb').stop().slideUp(); 
});











$(function(){
    var tabBtn = $('.tab_left>.tab_btn>li'); 
    var tabCont = $('.tab_left>.tab_cont'); 
    
    tabCont.hide().eq(0).show();
    
    tabBtn.click(function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        
        tabCont.css("display","none");
        tabCont.eq(index).css("display","block");
    });
    
    
    
});


$(function(){
    var tabBtn = $('.tab_right>.tab_btn>li'); 
    var tabCont = $('.tab_right>.tab_cont'); 
    
    tabCont.hide().eq(0).show();
    
    tabBtn.click(function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        
        tabCont.css("display","none");
        tabCont.eq(index).css("display","block");
    });
    
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    
});








