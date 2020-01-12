$(document).ready(function(){ 

    $('#tardigrade-btn').click(function() {
        if ($('#tardigrade-btn').attr('aria-expanded') == 'true') {
            $('#tardigrade-btn').attr('aria-expanded', 'false');
            $('#tardigrade-content').addClass('hidden');
            $('#tardigrade-btn > i').addClass('right');
        } else {
            $('#tardigrade-btn').attr('aria-expanded', 'true');
            $('#tardigrade-content').removeClass('hidden');
            $('#tardigrade-btn > i').removeClass('right');
        };
    });

});