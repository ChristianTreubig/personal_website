//$(document).ready(function() {
    /*function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }*/
    
/* https://github.com/sindresorhus/query-string/blob/master/query-string.js */
(function () {
'use strict';
var queryString = {};

queryString.parse = function (str) {
if (typeof str !== 'string') {
return {};
}

str = str.trim().replace(/^(\?|#)/, '');

if (!str) {
return {};
}

return str.trim().split('&').reduce(function (ret, param) {
var parts = param.replace(/\+/g, ' ').split('=');
var key = parts[0];
var val = parts[1];

key = decodeURIComponent(key);
// missing `=` should be `null`:
// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
val = val === undefined ? null : decodeURIComponent(val);

if (!ret.hasOwnProperty(key)) {
ret[key] = val;
} else if (Array.isArray(ret[key])) {
ret[key].push(val);
} else {
ret[key] = [ret[key], val];
}

return ret;
}, {});
};

queryString.stringify = function (obj) {
return obj ? Object.keys(obj).map(function (key) {
var val = obj[key];

if (Array.isArray(val)) {
return val.map(function (val2) {
return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
}).join('&');
}

return encodeURIComponent(key) + '=' + encodeURIComponent(val);
}).join('&') : '';
};

if (typeof define === 'function' && define.amd) {
define([], queryString);
} else if (typeof module !== 'undefined' && module.exports) {
module.exports = queryString;
} else {
window.queryString = queryString;
}
})();
/******************************/
//});

var fade_length = 300;
var load_delay = 100;

$(document).on("keypress", '#page_input', function(e) {
    if (e.which == 13) {
        var q = queryString.parse(location.search);
        q.page = $(this).val();
        //$("#problems_cont").fadeOut(fade_length).html("<img src='/static/ct_app/images/loading.gif' id='loading' alt='loading'>");
        $("#problems_cont").fadeOut(fade_length, function() { 
            $("#problems_cont").show().html("<img src='/static/ct_app/images/loading.gif' id='loading' alt='loading'>");
        });
        window.setTimeout(function(){
            $.get(
                "",
                {category: q["category"], page: q.page /*$("#page_input").val()*/},
                function(data) {
                    $("#problems_cont").hide().html(data).fadeIn(fade_length);
                    window.history.pushState(null, '', "?" + queryString.stringify(q));
                }
            )
        
        }, fade_length + load_delay);
        var category_radios_cont_top = $("#category_radios_cont").offset().top;
        window.scrollTo(0, category_radios_cont_top);
    }
});

$(document).on("click", '.category_radio', function() {
    var selection = $(this).val();
    var q = queryString.parse(location.search);
    $("#problems_cont").fadeOut(fade_length, function() { 
        $("#problems_cont").show().html("<img src='/static/ct_app/images/loading.gif' id='loading' alt='loading'>");
    });
    window.setTimeout(function(){
    
        $.get(
            "",
            {category: selection, page: "1"},
            function(data) {
                $("#problems_cont").hide().html(data).fadeIn(fade_length);
                q.category = selection;
                q.page = "1";
                $("#page_input").val("");
                window.history.pushState(null, '', "?" + queryString.stringify(q));
                //var category_radios_cont_top = $("#category_radios_cont").offset().top;
                //window.scrollTo(0, category_radios_cont_top);
            }
        )
    
    }, fade_length + load_delay);
});

$(window).on('popstate', function(event) {
    var q = queryString.parse(location.search);
    //$("#problems_cont").fadeOut(fade_length).html("<img src='/static/ct_app/images/loading.gif' id='loading' alt='loading'>");
    $("#problems_cont").fadeOut(fade_length, function() { 
        $("#problems_cont").show().html("<img src='/static/ct_app/images/loading.gif' id='loading' alt='loading'>");
    });
    window.setTimeout(function(){
    
        $.get(
            "",
            {category: q["category"], page: q["page"]},
            function(data) {
                $("#problems_cont").hide().html(data).fadeIn(fade_length);
                //$("#id_category").val(q["category"]);
                $(".category_label").removeClass('category_label_selected');   
                if (!q["category"] || q["category"] == "undefined") {
                    $(".all").addClass('category_label_selected');
                }
                else {
                    $(".category_radio").filter("[value='" + q["category"] + "']").prop("checked", true).parent().addClass('category_label_selected');
                }
                
            }
        )
    
    }, fade_length + load_delay);
});

$(document).on('click', ".page_link", function() {
    var q = queryString.parse(location.search);
    var current_page = parseInt(q["page"]);
    
    if (isNaN(current_page)) {
        var new_page = 2
    }
    else if ($(this).attr("id") === "next") {
        var new_page = current_page + 1
    }
    else if ($(this).attr("id") === "previous") {
        var new_page = current_page - 1;
    }
    var new_page_string = new_page.toString();
    //$("#problems_cont").fadeOut(fade_length).html("<img src='/static/ct_app/images/loading.gif' id='loading' alt='loading'>");
    $("#problems_cont").fadeOut(fade_length, function() { 
        $("#problems_cont").show().html("<img src='/static/ct_app/images/loading.gif' id='loading' alt='loading'>");
    });
    window.setTimeout(function(){
    
        $.get(
            "",
            {category: q["category"], page: new_page_string},
            function(data) {
                $("#problems_cont").hide().html(data).fadeIn(fade_length);
                q.category = q["category"];
                q.page = new_page_string;
                window.history.pushState(null, '', "?" + queryString.stringify(q));
                $(".category_label").removeClass('category_label_selected');
                //$(".category_radio").filter("[value='" + q["category"] + "']").prop("checked", true).parent().addClass('category_label_selected');
                if (!q["category"] || q["category"] == "undefined") {
                    $(".all").addClass('category_label_selected');
                }
                else {
                    $(".category_radio").filter("[value='" + q["category"] + "']").prop("checked", true).parent().addClass('category_label_selected');
                }
            }
        )
    
    }, fade_length + load_delay);
    
    var category_radios_cont_top = $("#category_radios_cont").offset().top;
    window.scrollTo(0, category_radios_cont_top);
});

$(document).ready(function() {
    //$(".category_radio").filter("[value='" + q["category"] + "']").prop("checked", true).parent().addClass('category_label_selected');
    $(".category_radio").each(function(index) {
        if ($(this).is(":checked")) {
            $(this).parent().addClass('category_label_selected');
        }
    });
    $(".category_label").click(function() {
        //alert("yes");
        $(".category_label").removeClass('category_label_selected');
        $(this).addClass('category_label_selected');
    })
    
    $.ajaxSetup({
      cache: false
    });
    
    //Animate Twitter sidebar:
    $("#twitter_link_cont").click(function() {
        var ANIMATION_LENGTH = 700;
        var $this = $(this);
        var $twitter_feed_cont = $("#twitter_feed_cont");
        if ($twitter_feed_cont.css("left") !== "0px"){
            $this.stop().animate({left: "18em"}, ANIMATION_LENGTH);
            $twitter_feed_cont.animate({left: 0}, ANIMATION_LENGTH);
        }
        else {
            $this.stop().animate({left: 0}, ANIMATION_LENGTH);
            $twitter_feed_cont.animate({left: "-18em"}, ANIMATION_LENGTH);
        }
    });
    
    //Twitter widget script:
    window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
     
      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };
     
      return t;
    }(document, "script", "twitter-wjs"));
});