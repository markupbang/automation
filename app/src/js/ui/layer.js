(function(gtris) {
	'use strict';
    if (!gtris) {
        gtris = window.gtris = {};
    }
    if (!gtris.ui) {
        gtris.ui = window.gtris.ui = {};
    }

    var layer = {

        init: function(obj) {

            self = this; //this is layer object

            self.$layer = _obj.target;

            //addEvent
            console.log('44444...');
            self.addEvent();
        },

        loadLayer: function() {
            
        },

        toggleLayer: function() {

        },

        addEvent: function() {
            $layer.find('[data-layer="button"]').on('click', loadLayer);
        }
            
    }

    gtris.ui.layer = layer;

})(window.gtris);
