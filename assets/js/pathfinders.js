(function( $ ){
    var $navbar = $('.navbar');
    var $logo = $('.brand img');
    $(window).scroll(function(){
        $navbar.toggleClass('scrolled', $(this).scrollTop() > 610 )
        if($(this).scrollTop() > 610){
            $logo.attr('src', 'assets/img/logos/pathfinder_logo_black.png');
        } if($(this).scrollTop() < 610 ) {
            $logo.attr('src', 'assets/img/logos/pathfinder_logo.png'); 
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

}( $ ));