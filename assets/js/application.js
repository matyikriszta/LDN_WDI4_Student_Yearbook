$(document).ready(function() {
  $('#aboutlink').click(function() {
    $('html, body').animate({
    scrollTop: $("#about").offset().top
    }, 500);
  });

  $('#studentslink').click(function() {
    $('html, body').animate({
    scrollTop: $("#students").offset().top
    }, 500);
  });

  $('#projectslink').click(function() {
    $('html, body').animate({
    scrollTop: $("#projects").offset().top
    }, 500);
  });
})
