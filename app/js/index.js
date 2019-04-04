var $animation_elements = $(".reveal-animation");
var $window = $(window);

$(document).ready(function() {
  /*triggers a scroll event in case there are animated
    elements on initial viewport*/
  $window.trigger("scroll");
  $window.trigger("resize");

  //calls Slick plugin to generate popular items carousel
  $(".popular.carousel").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
});

function check_view() {
  //calculate current viewport
  console.log('hehe')
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  //runs function for each $animation_elements item
  $.each($animation_elements, function() {
    //sets the current element
    var $element = $(this);
    //calculates current element position in page
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    //check if $elem is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("in-view");
    }
    /*assign an 
      else{
        $element.removeClass('in-view')
      } to animate everytime it appears on display*/
  });
}

$window.on("scroll", check_view);

// toggle for mobile menu
$(".menu-toggle").click(function() {
  $(".nav-links").toggle("fast", "linear");
});
