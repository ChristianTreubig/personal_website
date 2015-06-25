$(document).ready(function() {
    $("#footer_dropdown").click(function() {
        $("footer").slideToggle({
            duration: 300,
            easing: "linear",
            complete: function() {
                var $show_text = $("#show_text");
                var $hide_text = $("#hide_text");
                if ($show_text.css("display") === "inline") {
                    $show_text.hide();
                    $hide_text.show();
                    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
                }
                else {
                    $show_text.show();
                    $hide_text.hide();
                }
            }
        });
    });
});

$( window ).resize(function() { //Resets the footer dropdown upon window resizing.
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