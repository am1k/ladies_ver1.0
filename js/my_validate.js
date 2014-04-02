$(document).ready(function() {
    $('.validate').validationEngine({
        promptPosition: "centerRight",
        scroll: false,
        autoHidePrompt: true,
        autoHideDelay: 3000,
        fadeDuration: 0.3
    });
    $('form .validate').submit(function() {
        $(this).validationEngine('validate');
    });
    $('body').click(function() {
        $('.validate').validationEngine('hide');
    });
    $('.validate input[type!=checkbox]').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
    });
});
