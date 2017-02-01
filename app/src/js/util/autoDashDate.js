(function(gtris) {
    'use strict';
    if (!gtris) {
        gtris = window.gtris = {};
    }
    if (!gtris.util) {
        gtris.util = window.gtris.util = {};
    }

    var autoDashDate = function(str) {
        var str = str.replace(/[^0-9]/g, '');
        var tmp = '';
        if(str.length < 5) {
           return str;
        }else if(str.length < 7) {
            tmp += str.substr(0, 4);
            tmp += '-';
            tmp += str.substr(4, 5);
            return tmp;
        }else{
            tmp += str.substr(0, 4);
            tmp += '-';
            tmp += str.substr(4, 2);
            tmp += '-';
            tmp += str.substr(6, 2);
            return tmp;
        }
    }

    gtris.util.autoDashDate = autoDashDate;

})(window.gtris);
