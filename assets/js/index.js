$( document ).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()
});

window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
});

window.scrollBy({ 
    top: 100,
    left: 0, 
    behavior: 'smooth' 
});

document.querySelector('#description', '#my-experience', '#my-jobs').scrollIntoView({ 
    behavior: 'smooth' 
});