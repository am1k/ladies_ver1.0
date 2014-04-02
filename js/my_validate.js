$(document).ready(function() {
    $('.validate').validationEngine({
        promptPosition: "centerRight",
        scroll: false,
        onFieldFailure: function(field){
            field.addClass('error');
        },
        onFieldSuccess: function(field){
            if( field.hasClass('error') ) {
                field.removeClass('error');
            }
        }
    });

    $('body').click(function() {
        $('.validate').validationEngine('hide');
        $('.validate input.error').each(function() {
            $(this).removeClass('error');
        });
    });
    $('.validate input[type!=checkbox]').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
    });
});
