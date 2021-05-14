(function ($) {
  $(document).on('ready', function () {
    var db = new Object();
    db.preLoad = function () {
      $('.page-loader').delay(900).fadeOut(700, function () {
        $('body').fadeIn();
      });
    }
    db.menu = function () {
      $('.menu-icon').click(function () {
        $('body').toggleClass("open-menu");
      });
      $('.menu-mobile li.has-child a').click(function () {
        var content = $(this).parent().find("ul");
        if ($(content).is(":visible")) {
          $(content).slideUp();
          $(content).removeClass("active");
          $(this).removeClass("active");
        } else {
          $(content).slideDown();
          $(content).addClass("active");
          $(this).addClass("active");
        }
        return false;
      });
    }




    db.preLoad();
    db.menu();

    new WOW({
      offset: 100,
      mobile: true
    }).init()
  });
})(jQuery);
