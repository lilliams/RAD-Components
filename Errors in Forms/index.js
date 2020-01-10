$(document).ready(function(){ 

    $(document).keyup(() => {

        var emptyInput = $('input').val().length == ""
        var populatedInput = $('input').val().length > "0"
        var submitFocus = $('button').is(':focus');

        if (emptyInput && submitFocus){
            $('#error-msg-1').text('Please complete all required fields: First Name.');
            $('input').attr('aria-invalid', 'true')
            $('.fa-exclamation').removeClass('hidden');
        } else if (populatedInput) {
            $('#error-msg-1').text('');
            $('.fa-exclamation').addClass('hidden');
            $('input').removeAttr('aria-invalid');
        };

    });

});