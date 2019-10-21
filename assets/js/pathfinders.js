(function( $ ){
    var $navbar = $('.navbar');
    var $logo = $('.brand img');
    $(window).scroll(function(){
        $navbar.toggleClass('scrolled', $(this).scrollTop() > 610 )
    });
    
}( $ ));