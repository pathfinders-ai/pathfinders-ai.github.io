$(function() {
  $(".burger").click(function(e) {
    e.preventDefault();
    $('nav').slideToggle(500);
  });
});
