(function(gtris) {
    'use strict';
    if (!gtris) {
        gtris = window.gtris = {};
    }
    if (!gtris.util) {
        gtris.util = window.gtris.util = {};
    }

    var isMobile = function() {
        var ua = navigator.userAgent.toLowerCase();
        var detectStr = /mobile|ip(hone|od|ad)|android|blackberry|iemobile|kindle|netfront|silk-accelerated|(hpw|web)os|fennec|minimo|opera m(obi|ini)|blazer|dolfin|dolphin|skyfire|zune/;
        return detectStr.test(ua);
    }

    gtris.util.isMobile = isMobile();

})(window.gtris);
