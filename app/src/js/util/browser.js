(function(gtris) {
    'use strict';
    if (!gtris) {
        gtris = window.gtris = {};
    }
    if (!gtris.util) {
        gtris.util = window.gtris.util = {};
    }

    var browser = function() {
        
        var browserPool = [
            {detectStr: "msie", name: "ie"},
            {detectStr: "trident", name: "ie"},
            {detectStr: "edge", name: "edge"},
            {detectStr: "firefox", name: "firefox"},
            {detectStr: "opr", name: "opera"},
            {detectStr: "opera mini", name: "opera mini"},
            {detectStr: "chrome", name: "chrome"},
            {detectStr: "crios", name: "chrome"},
            {detectStr: "safari", name: "safari"}
        ];

        var ua = navigator.userAgent.toLowerCase();
        var n, v, vOffset;
        for(var i=0; i<browserPool.length; i++) {
            if((vOffset = ua.indexOf(browserPool[i].detectStr)) > -1) {
                n = browserPool[i].name;
                if(browserPool[i].detectStr == 'trident') { //ie11
                    v = ua.substr(ua.indexOf('rv:') + 3);
                    v = parseFloat(v.split(')')[0]);
                }
                else if(browserPool[i].detectStr == 'safari') {
                    v = ua.substr(ua.indexOf('version/') + 8);
                    v = parseFloat(v.split('/')[0]);
                }
                else {
                    v = ua.substr(vOffset + browserPool[i].detectStr.length + 1);
                    v = parseFloat(v.split(' ')[0]);
                }
                break;
            }else{
                n = "unknown";
                v = 0;
            }
        }
        return {name: n, version: v};
    }

    gtris.util.browser = browser();

})(window.gtris);
