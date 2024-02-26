  
$(document).ready(function(){ 
    $(function(){

        var path = window.location.pathname;
        var page = path.split("/").pop();

        if(page == "index.html"){
            $('#header').load('./testGuide_header.html');
            $('#footer_warp').load('./testGuide_footer.html');
        }else if(page == "firefighterPo.html" || page == "generaljobPo.html"){
            $('#header').load('../../../testGuide_header.html');
        }else{
            $('#header').load('../../testGuide_header.html');
        }
        
    })
})

