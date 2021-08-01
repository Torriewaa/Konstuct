$("a.scroll").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $('.nav-wrapper').offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });