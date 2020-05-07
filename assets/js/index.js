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

