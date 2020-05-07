$( document ).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()

    $(function(){
        $("'#description', '#my-experience', '#my-jobs'").click(function(e){
          if (this.hash !== ""){
            e.preventDefault();
            var url = this.hash;
            $('html,body').animate({
              scrollTop: $(url).offset().top
            }, 500, function(){
              window.location.hash = url;
            });
          }
        });
    });
    
});

// window.scroll({
    //
   // top: 2500, 
   // left: 0, 
//  behavior: 'smooth'
//});

//window.scrollBy({ 
  //  top: 100,
   // left: 0, 
   // behavior: 'smooth' 
//});

///document.querySelector('#description', '#my-experience', '#my-jobs').scrollIntoView({ 
//    behavior: 'smooth' 
//});


