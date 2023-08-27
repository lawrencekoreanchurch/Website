$(function () {
  // Update Year
  document.getElementById("year").innerHTML = new Date().getFullYear();
  
  // Add scroll header
  var header = $(".test");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("scroll");
    } else {
      header.removeClass("scroll");
    }
  });
});
