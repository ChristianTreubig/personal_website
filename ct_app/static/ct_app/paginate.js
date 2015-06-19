$(document).ready(function() {
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
   
    $('#page_input').keypress(function (e) {
        if (e.which == 13) {
            var q = queryString.parse(location.search);
            q.page = $(this).val();
            location.search = queryString.stringify(q);
            window.history.pushState(null, '', queryString.stringify(q));
        }
    });
});
