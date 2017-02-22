 /* collapse */
$.fn.collapse = function(slideTime) {
    'use strict';

    var uiName = $(this).attr('data-ui');
    var isExpandable = false;
    if(uiName == "gt-collapse-expandable") isExpandable = true;

    $(this).each(function() {

        //Variable
        var $acd, $acdHeader, $acdContent;

        //Save data-acd
        $acd = $(this);
        $acdHeader = $acd.find('[data-collapse="header"]');
        $acdContent = $acd.find('[data-collapse="content"]');

        $acdHeader.each(function(event) {

            //collapse header click
            $(this).click(function() {
                var $thisContent = $(this).parent().find('[data-collapse="content"]');

                if(!isExpandable) {
                   $acdContent.parent().removeClass('gt-active');
                   $acdContent.slideUp(slideTime);
                }

                if($thisContent.is(':hidden')) {
                    //Open collapse
                    $thisContent.slideDown(slideTime);
                    $(this).parent().addClass('gt-active');
                } else {
                    //Close collapse
                    $thisContent.slideUp(slideTime);
                    $(this).parent().removeClass('gt-active');
                }
            });
        });
    });
};
