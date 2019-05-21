$(document).ready(function() {
  /* Hero slider */

  $(".hero__slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    prevArrow: false,
    nextArrow: false
  });

  /* Tabs */

  $(".tabs-list li a").click(function(e) {
    e.preventDefault();
  });

  $(".tabs-list li").click(function() {
    var tabid = $(this)
      .find("a")
      .attr("href");
    $(".tabs-list li,.tabs div.tab").removeClass("active"); // removing active class from tab

    $(".tab").hide(); // hiding open tab
    $(tabid).show(); // show tab
    $(this).addClass("active"); //  adding active class to clicked tab
  });
});
