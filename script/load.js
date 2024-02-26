$(document).ready(function(){ 
    $(function(){
        var path = window.location.pathname;
        var page = path.split("/").pop();

        $('#header').load("/header.html");
        $('#footer').load("/footer.html");
        
        if(page == "introduce.html" || page == "project.html"){
            $('#top_title').load("../top_title.html");
        }else{
            $('#top_title').load("../../top_title.html");
        }
        
    });
});