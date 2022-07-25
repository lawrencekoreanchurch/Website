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

function get_fileName() {
  var today = new Date();
  let day = today.getDay(); // 0(Sunday) to 6(Saturday)
  if (day != 0) {
    today.setDate(today.getDate() - day);
  }
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  // //current_year - 1987
  var nthYear = yyyy - 1987;
  // //# of weeks
  var oneJan = new Date(today.getFullYear(), 0, 1);
  var numberOfDays = Math.floor((today - oneJan) / (24 * 60 * 60 * 1000));
  var numberOfWeeks = Math.ceil((today.getDay() + 1 + numberOfDays) / 7);
  var fileName = "DOCs/program/" + yyyy + mm + dd + "_" + nthYear + "-" + numberOfWeeks + ".pdf";
  return fileName;
}
function updateLink (a) {
  a.setAttribute('href', get_fileName());
}