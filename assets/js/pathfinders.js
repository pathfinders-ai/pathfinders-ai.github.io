(function( $ ){
    var $navbar = $('.navbar');
    var $logo = $('.brand img');
    $(window).scroll(function(){
        $navbar.toggleClass('scrolled', $(this).scrollTop() > 610 )
        // if($(this).scrollTop() > 610){
        //     $logo.attr('src', 'assets/img/logos/pathfinder_logo_black.png');
        // } if($(this).scrollTop() < 610 ) {
        //     $logo.attr('src', 'assets/img/logos/pathfinder_logo.png'); 
        // }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Validation
    var $form = document.forms[0];
    $form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log(event);
        var name = $form['name'];
        console.log(name);
        var email = $form['email'];
        var phone = $form['phone'];
        var message = $form['message'];

        if(name.value == "" ){    
            name.focus();
            return;
        }

        if(email.value == "" ){

            email.focus();
            return;
        }
        if(!validateEmail(email.value)){
            console.log(email.value);
            email.focus();
            return;
        }
        

        if(phone.value == "" ){
            
            phone.focus();
            return;
        }
        // Sydney phone validation
        if(message.value == "" ){
            
            message.focus();
            return;
        }

        //Call Api to email: paul.steven.conyngham@gmail.com

        $form.reset();
        
    });
    
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

}( $ ));