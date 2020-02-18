// document.addEventListener('DOMContentLoaded', )
$(document).ready(function(){ 

    
    const tooltipBtn = $('#tooltip-btn');
    const tooltipContent = $('.tooltip-content');
    const elementsWithinTooltip = $('.tooltip-content, .tooltip-msg');
    const closeBtn = $('#close-btn');

    tooltipBtn.click(function (){
        // remove hidden class from tooltip-content
        tooltipContent.toggleClass('hidden');
        // if aria-expanded=false, set to true. else change to false
        if (tooltipBtn.attr('aria-expanded') === 'false') {
            tooltipBtn.attr('aria-expanded', 'true')
        } else {
            tooltipBtn.attr('aria-expanded', 'false')
        };
    });

    closeBtn.click(function (){
        tooltipContent.addClass('hidden');
        tooltipBtn.attr('aria-expanded', 'false');
        tooltipBtn.focus();
    });
        
    // ESC KEY TO CLOSE DIALOG
    $(document).keydown(function(event){
        var escKeyDown = (event.keyCode === 27);
        var tooltipVisible = !tooltipContent.hasClass('hidden');
        if ( escKeyDown && tooltipVisible ) {
            tooltipContent.addClass('hidden');
            tooltipBtn.attr('aria-expanded', 'false');
            tooltipBtn.focus();
        };
    });
    
    // MOUSE CLICK OUTSIDE TOOLTIP TO CLOSE
    $(document).mouseup(function(mouseEvent){
        if (!elementsWithinTooltip.is(mouseEvent.target)){
            tooltipContent.addClass('hidden');
            tooltipBtn.attr('aria-expanded', 'false');  
        };
    });
    
});
