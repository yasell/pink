$(document).ready(function($) {
  $("body").on("click", ".page-header__trigger", function() {
    if ($("body").hasClass("menu-open")) {
      $("body").removeClass("menu-open");
      $("body").addClass("menu-closed");
    } else {
      $("body").removeClass("menu-closed");
      $("body").addClass("menu-open");
    }
  });
});
