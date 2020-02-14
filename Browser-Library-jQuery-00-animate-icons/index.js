$(document).ready(function () {
  $("img").each(function () {
    $(this).hover(
      function () {
        $(this).animate({
          top: "-=5px"
        });
      },
      function () {
        $(this).animate({
          top: "+=5px"
        });
      }
    );
  });
});
