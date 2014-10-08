(function($){
  "use strict";
  /**
   * A tiny plugin to transform on or more links into Foundation's fancy ajax
   * reveal modals.
   */
  $.fn.ajaxRevealLinks = function (dataRevealId, source) {
    return this.each(function () {
      var $current = $(this),
          $modal = $('#' + dataRevealId).attr({'data-reveal': ''});
      if (window.location.pathname !== $current.attr('href')) {
        $current
          .attr({
            'data-reveal-ajax': true,
            'data-reveal-id': dataRevealId,
            'href': source
          });
        }
      });
  }; /* $.fn.ajaxRevealLinks */
})(jQuery);
