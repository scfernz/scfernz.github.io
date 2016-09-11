$(document).ready(function() {

  $("#planner-carousel").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      pagination: false,
      autoPlay: true,
      autoHeight: true,
      navigationText: [
      "<i class='fa fa-chevron-left fa-2x'></i>",
      "<i class='fa fa-chevron-right fa-2x'></i>"
      ],
      singleItem:true

  });

  $("#testimonial-carousel").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 1000,
      pagination: false,
      autoPlay: true,
      autoHeight: false,
      navigationText: [
      "<i class='fa fa-chevron-left white fa-2x'></i>",
      "<i class='fa fa-chevron-right white fa-2x'></i>"
      ],
      singleItem:true

  });
});
