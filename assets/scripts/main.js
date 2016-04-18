$(document).ready(function () {
    $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
        e.preventDefault();
        $("body").toggleClass("nav-opened nav-closed menu-button-open");
        $(".menu-button").toggleClass("menu-button-open");
    });
    
    $(".post img").each(function () {
        $(this).addClass("img-responsive center-block"); //adds the bootstrap class
    });
});