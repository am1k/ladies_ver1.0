$(function () {
    //script for popups
    $('.popup-reg').click(function () {
        $('div.'+$(this).attr("rel")).fadeIn(500);
        $("body").append("<div id='overlay'></div>");
        $('.popup-header-registration').show();
        $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
        return false;
    });
    $('.close-icon').click(function () {
        $(this).parent().fadeOut(100);
        $('#overlay').remove();
        $('.popup-registration').hide();
        return false;
    });
});
$(function () {
    //script for popups
    $('.license-popup').click(function () {
        $('div.'+$(this).attr("rel")).fadeIn(500);
        $("body").append("<div id='license'></div>");
        $('.popup-header-license-agreement').show();
        $('#license').show().css({'filter' : 'alpha(opacity=80)'});
        return false;
    });
    $('.license-close-icon').click(function () {
        $(this).parent().fadeOut(100);
        $('#license').remove();
        $('.popup-license-agreement').hide();
        return false;
    });
});
$(function () {
    //script for popups
    $('.license-popup-color').click(function () {
        $('div.'+$(this).attr("rel")).fadeIn(500);
        $('.popup-header-license-agreement').show();
        return false;
    });
    $('.license-close-icon').click(function () {
        $(this).parent().fadeOut(100);
        $('.popup-license-agreement').hide();
        return false;
    });
});
$(function () {
    //script for popups
    $('.registration-for-girl-button').click(function () {
        $('div.'+$(this).attr("rel")).fadeIn(500);
        $("body").append("<div id='overlay'></div>");
        $('.popup-header-registration-for-girl').show();
        $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
        return false;
    });
    $('.close-icon').click(function () {
        $(this).parent().fadeOut(100);
        $('#overlay').remove();
        $('.popup-registration-for-girl').hide();
        return false;
    });
});
