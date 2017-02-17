/* modal */
$.fn.gmodal = function() {
    'use strict';
    $(this).each(function() {

        //Variable
        var dimmed, modalWindow;

        //Save modal data-target
        modalWindow = '#' + $(this).attr('data-target');

        //Show modal
        function showModal() {
            //Move to the center
            $(modalWindow).css('marginLeft', -($(modalWindow).width() / 2));
            $(modalWindow).css('marginTop', -($(modalWindow).height() / 2));
            $(modalWindow).show();

            //Create div dimmed
            dimmed = $(document.createElement("div"));
            dimmed.attr("class", "_popDimmed").css({
                "position": "fixed",
                "top": "0",
                "left": "0",
                "width": "100%",
                "height": "100%",
                "background": "#000",
                "opacity": "0.5",
                "z-index": "1010"
            });

            //Append dimmed
            $(dimmed).appendTo('body');
            $(modalWindow).appendTo('body');

            //Add Event
            $(dimmed).on('click', hideModal);
        }

        //Hide modal
        function hideModal() {
            $(modalWindow).hide();
            $(dimmed).remove();
        }

        //Add Event
        $(this).on('click', showModal);
        $(modalWindow).find('[data-modal="hide"]').on('click', hideModal);
    });
};
