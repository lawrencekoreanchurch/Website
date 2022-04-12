$(function () {
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

/* window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll >= 0) {
    document.querySelector(".test").add("scroll");
  } else {
    document.querySelector(".test").remove("scroll");
  }
}); */

/* const checkpoint = 1000;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".main-overlay").style.opacity = opacity;
}); */
