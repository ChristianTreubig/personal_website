/*var _throttleTimer = null;
var _throttleDelay = 50;
var $window = $(window);*/

$(document).ready(function() {
    $("#footer_dropdown").click(function() {
        $("footer").slideToggle({
            duration: 300,
            easing: "linear",
            complete: function() {
                if ($("#show_text").css("display") === "inline") {
                    $("#show_text").hide();
                    $("#hide_text").show();
                    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
                }
                else {
                    $("#show_text").show();
                    $("#hide_text").hide();
                }
            }
        });
    });
    
    /*$window
        .off('scroll', ScrollHandler)
        .on('scroll', ScrollHandler);*/
});

/*function ScrollHandler(e) {
    //throttle event:
    clearTimeout(_throttleTimer);
    _throttleTimer = setTimeout(function () {
        console.log('scroll');

        //do work
        if ($window.scrollTop() + $window.height() > $(document).height() - 200 && $window.scrollTop() != 0) {
            $("#top_link").css("display", "block");
        }
        else {
            $("#top_link").css("display", "none");
        }

    }, _throttleDelay);
}*/

$( window ).resize(function() {
   var width_in_em = $(window).width() / parseFloat($("html").css("font-size"));
   $("#show_text").show();
   $("#hide_text").hide();
   if (width_in_em > 45) {
       $("footer").show();
       $("#footer_dropdown").hide();
   }
   else {
       $("#footer_dropdown").show();
       $("footer").hide();
   }
});