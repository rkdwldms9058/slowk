$(document).ready(function(){ 
    
    let subToggle=true;
    let navLnb = $("#header .nav .lnb");
    
    navLnb.hover(function(){
        var i = navLnb.index(this);
        
        if(subToggle){
            navLnb.eq(i).children('a').css('color','#00285c');
            navLnb.eq(i).find('ul.dap2').css('display','block');
        }else{
            navLnb.eq(i).children('a').css('color','');
            navLnb.eq(i).find('ul.dap2').css('display','none');
        }
        subToggle=!subToggle;
    });

    // 마우스 오버할때 다른 이미지 보이기
    $("#header .nav .lnb ul.dap2 li.lnb_cont ul.dap3>li").hover(
        function () { // mouseover
            $(this).find('img').attr("src", "/images/header/bottom_bnt_on.png");
            $(this).children('a').css('border', '1px solid #0065E8');
        },
        function () { // mouseout
            $(this).find('img').attr("src", "/images/header/bottom_bnt_off.png");
            $(this).children('a').css('border', '1px solid #C6C6C6');
        }
    );
    
    // 모바일 햄버거 메뉴
    $('#header .fa-bars').click(function(){
        $('#header .h_moblie').addClass('active');
        $('#header .fa-times').addClass('active');
        $('#header .fa-bars').addClass('active');
    });
    
    $('#header .fa-times').click(function(){
        $('#header .h_moblie').removeClass('active');
        $('#header .fa-times').removeClass('active');
        $('#header .fa-bars').removeClass('active');
    });
    
    //모바일 메뉴 아코디언
    $('.main_menu > li > a').click(function(){
        $(this).next($('.snd_menu')).slideToggle('fast');
    })
    $('.snd_menu > li > a').click(function(e){
        e.stopPropagation();
        $(this).next($('.trd_menu')).slideToggle('fast');
    })   

});