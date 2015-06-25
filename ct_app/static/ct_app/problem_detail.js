var _throttleTimer = null;
var _throttleDelay = 50;
var $window = $(window);

$(document).ready(function() {
    $("iframe").wrap("<div class='video_wrap'><div class='video'></div></div>");
    $(".video_wrap").unwrap(); //Removes the p that TinyMCE insists upon inserting.
    var $solution_img = $("#solution img");
    $solution_img.unwrap().wrap("<div class='image_wrap'>");
    $solution_img.removeAttr("width");
    $solution_img.removeAttr("height");
    
    $solution_img.each(function(index) {
        var $this = $(this);
        var caption = $this.attr("alt");
        $this.after(caption);
    });
    
    $("#solution a").addClass("inline_link");
    
    $window
        .off('scroll', ScrollHandler)
        .on('scroll', ScrollHandler);
        
    //Create links for share buttons:
    var current_url = window.location.href;
    var page_title = document.getElementsByTagName("title")[0].innerHTML;
    $("#twitter_share_link").attr("href", "https://twitter.com/share?url="+ current_url + "&text=" + page_title);
    $("#fb_share_link").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + current_url);
});

function ScrollHandler(e) {
    //Throttle event:
    clearTimeout(_throttleTimer);
    _throttleTimer = setTimeout(function () {
        console.log('scroll');

        //Show Top link if user is near bottom of page:
        if ($window.scrollTop() + $window.height() > $(document).height() - 200 && $window.scrollTop() != 0) {
            $("#top_link").css("display", "block");
        }
        else {
            $("#top_link").css("display", "none");
        }

    }, _throttleDelay);
}