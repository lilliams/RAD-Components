var dimmedStyle = 'body, main, #dialog-btn'

// include all interactive elements iwthin this variable 
var mainContent = '#dialog-btn, #footer-link'

$(document).ready(function(){ 

    // OPEN DIALOG BUTTON 
    $('#dialog-btn').click(function (){
        $('#dialog-window').removeClass('hidden');
        $(dimmedStyle).addClass('dimmed-background');
        $('#dialog-window').attr('tabindex', '0');
        $('#dialog-window').focus();
        $('main, footer').attr('aria-hidden', 'true');
        $(mainContent).attr('tabindex', '-1'); 
    });

    // CLOSE BUTTON
    $('#close-dialog').click (function (){
        $('#dialog-btn').focus();
        $(dimmedStyle).removeClass('dimmed-background');
        $('#dialog-window').addClass('hidden');
        $('#dialog-window').attr('tabindex', '-1');
        $('main, footer').removeAttr('aria-hidden');
        $(mainContent).attr('tabindex', '0');
    });
        
    // ESC KEY TO CLOSE DIALOG
    $(document).keydown(function(event){
        var escKeyDown = (event.keyCode === 27)
        var dialogVisible = $('#dialog-window').attr('tabindex') === '0'
        
        if ( escKeyDown && dialogVisible ) {
                $('#dialog-btn').focus();
                $(dimmedStyle).removeClass('dimmed-background');
                $('#dialog-window').addClass('hidden');
                $('#dialog-window').attr('tabindex', '-1');
                $('main, footer').removeAttr('aria-hidden');
                $(mainContent).attr('tabindex', '0');
            };
    });

    // MOUSE CLICK OUTSIDE DIALOG TO CLOSE
    $(document).mouseup(function(mouseEvent){
    var dialogContainer = $('#dialog-window, #dialog-name, #dialog-link, #dialog-content');
        if (!dialogContainer.is(mouseEvent.target) === true){
            $(dimmedStyle).removeClass('dimmed-background');
            $('#dialog-window').addClass('hidden');
            $('#dialog-window').attr('tabindex', '-1');
            $('main, footer').removeAttr('aria-hidden');
            $(mainContent).attr('tabindex', '0');
        };
    }); 
});