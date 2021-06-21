$(document).ready(function(){ 
    const dimmedStyleSelector = 'body, main, #dialog-btn';
    // include all interactive elements iwthin this variable 
    const mainContentSelector = '#dialog-btn, #footer-link';



    const dialogBtn = $$('#dialog-btn');
    const dialogWindow = $('#dialog-window');
    const dimmedStyle = $(dimmedStyleSelector);
    const mainContent = $(mainContentSelector);
    const mainFooter = $('main, footer');
    const closeDialog = $('#close-dialog');
    const dialogContainer = $('#dialog-window, #dialog-name, #dialog-link, #dialog-content');

    const openModal = () => {

        dialogWindow
            .removeClass('hidden')
            .attr('tabindex', '0')
            .focus()

        dimmedStyle.addClass('dimmed-background');
        mainFooter.attr('aria-hidden', 'true');
        mainContent.attr('tabindex', '-1'); 
    }

    const closeModal = () => {
        dialogBtn.focus();

        dialogWindow
            .addClass('hidden')
            .attr('tabindex', '-1');

        dimmedStyle.removeClass('dimmed-background');
        mainFooter.removeAttr('aria-hidden');
        mainContent.attr('tabindex', '0');
    };

    // OPEN DIALOG BUTTON 
    dialogBtn.click(function (){
        openModal();
    });


    // CLOSE BUTTON
    closeDialog.click(closeModal);
        
    // ESC KEY TO CLOSE DIALOG
    $(document).keydown(function(event){
        var escKeyDown = (event.keyCode === 27)
        var dialogVisible = dialogWindow.attr('tabindex') === '0';
        
        if ( escKeyDown && dialogVisible ) {
            closeModal();
        };
    });

    // MOUSE CLICK OUTSIDE DIALOG TO CLOSE
    $(document).mouseup(function(mouseEvent){
        if (!dialogContainer.is(mouseEvent.target)){
            closeModal();
        };
    }); 
});

