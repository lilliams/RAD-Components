$(document).ready(function(){ 

    $('#tooltip-btn').click(function (){
        // remove hidden class from tooltip-content
        $('.tooltip-content').toggleClass('hidden');
        // if aria-expanded=false, set to true. else change to false
        if ($('#tooltip-btn').attr('aria-expanded') === 'false') {
            $('#tooltip-btn').attr('aria-expanded', 'true')
        } else {
            $('#tooltip-btn').attr('aria-expanded', 'false')
        };
    });

    $('#close-btn').click(function (){
        $('.tooltip-content').addClass('hidden');

        $('#tooltip-btn').attr('aria-expanded', 'false');

        $('#tooltip-btn').focus();
    });
        
    // ESC KEY TO CLOSE DIALOG
    $(document).keydown(function(event){
    var escKeyDown = (event.keyCode === 27)
    var tooltipVisible = ($('#tooltip-content').hasClass('hidden') == false)
        if ( escKeyDown && tooltipVisible ) {
            $('.tooltip-content').addClass('hidden');

            $('#tooltip-btn').attr('aria-expanded', 'false');

            $('#tooltip-btn').focus();
        };
    });
    
    // MOUSE CLICK OUTSIDE TOOLTIP TO CLOSE
    $(document).mouseup(function(mouseEvent){
        var tooltipContent = $('.tooltip-content, .tooltip-msg');

        if (!tooltipContent.is(mouseEvent.target) === true){

            $('.tooltip-content').addClass('hidden');

            $('#tooltip-btn').attr('aria-expanded', 'false');  
        };
    });
    
});