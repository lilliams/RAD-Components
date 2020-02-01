// document.addEventListener('DOMContentLoaded', )
$(document).ready(function(){ 

    // part 1
    // const = constant - i dont want this to change. 
    // let = this can change e.g an array;
    // get the variables you need first at the top of the file.
    // a) get elements as variables from the DOM
    // b) define event listeners;
    // part 2: an if check evaluates stuff as true or false by default
    // if you see === true / false, you probably dont need.
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