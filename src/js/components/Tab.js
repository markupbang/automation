 /* tab */
$.fn.tab = function(option) {
    'use strict';
    //Decide event trigger
    var eventTrigger;
    switch(option) {
        case "click":
        eventTrigger = "click";
        break;

        case "mouseover":
        eventTrigger = "mouseover";
        break;

        default:
        eventTrigger = "click";
    }

    $(this).each(function() {

        //Variable
        var $tab_head, targetId;

        $tab_head = $(this);
        targetId = [];

        $tab_head.find('[data-id]').each(function() {

            var $tab_nav = $(this);
            var thisId = "#" + $(this).attr('data-id');

            //Event handler
            function eventHandler(event) {
                event.preventDefault();
                $tab_head.find("li.gt-active").removeClass("gt-active");
                $tab_nav.parents("li").addClass("gt-active");
                $(targetId.join(", ")).not(thisId).hide();
                $(thisId).show();
            }
            targetId.push(thisId);

            //Add event
            $(this).bind(eventTrigger, eventHandler);
        });
    });
};
