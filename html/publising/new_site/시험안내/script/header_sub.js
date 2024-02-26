
$(document).ready(function(){ 
    
    var path = window.location.pathname;
    var page = path.split("/").pop();
    
    let subToggle=true;
    let navLnb = $("#header .nav .lnb");
       
    navLnb.hover(function(){
        var i = navLnb.index(this);
        
        if(subToggle){
            navLnb.eq(i).children('a').css('border-bottom','4px solid #39C3F8');
            navLnb.eq(i).find('ul.dap2').css('display','block');
        }else{
            navLnb.eq(i).children('a').css('border-bottom','none');
            navLnb.eq(i).find('ul.dap2').css('display','none');
        }
        subToggle=!subToggle;
    });

    if(page == "index.html"){
        // 마우스 오버할때 다른 이미지 보이기
        $("#header .nav .lnb ul.dap2 li.lnb_cont ul.dap3>li").hover(
            function () { // mouseover
                $(this).find('img').attr("src", "images/header/bottom_bnt_on.svg");
                $(this).children('a').css('border', '1px solid #0065E8');
            },
            function () { // mouseout
                $(this).find('img').attr("src", "images/header/bottom_bnt_off.svg");
                $(this).children('a').css('border', '1px solid #C6C6C6');
            }
        );
    }else if(page == "firefighterPo.html" || page == "generaljobPo.html"){
        //이미지 경로 변경
        $('.cn_logo img').attr('src','../../../images/header/cn_logo.svg');
        $('.main_logo img').attr('src','../../../images/header/main_logo.svg');
        $('.lnb_tit img').attr('src','../../../images/header/menu_bg.png');
        $('.dap3 img').attr('src', '../../../images/header/bottom_bnt_off.svg');

        // 마우스 오버할때 다른 이미지 보이기
        $("#header .nav .lnb ul.dap2 li.lnb_cont ul.dap3>li").hover(
            function () { // mouseover
                $(this).find('img').attr("src", "../../../images/header/bottom_bnt_on.svg");
                $(this).children('a').css('border', '1px solid #0065E8');
            },
            function () { // mouseout
                $(this).find('img').attr("src", "../../../images/header/bottom_bnt_off.svg");
                $(this).children('a').css('border', '1px solid #C6C6C6');
            }
        );
    }else{
        //이미지 경로 변경
        $('.cn_logo img').attr('src','../../images/header/cn_logo.svg');
        $('.main_logo img').attr('src','../../images/header/main_logo.svg');
        $('.lnb_tit img').attr('src','../../images/header/menu_bg.png');
        $('.dap3 img').attr('src', '../../images/header/bottom_bnt_off.svg');
        // 마우스 오버할때 다른 이미지 보이기
        $("#header .nav .lnb ul.dap2 li.lnb_cont ul.dap3>li").hover(
            function () { // mouseover
                $(this).find('img').attr("src", "../../images/header/bottom_bnt_on.svg");
                $(this).children('a').css('border', '1px solid #0065E8');
            },
            function () { // mouseout
                $(this).find('img').attr("src", "../../images/header/bottom_bnt_off.svg");
                $(this).children('a').css('border', '1px solid #C6C6C6');
            }
        );
    }
    
})