$(document).ready(function() {

  $("#planner-carousel").owlCarousel({

      // navigation : true, // Show next and prev buttons
      // slideSpeed : 300,
      pagination: true,
      autoPlay: true,
      autoHeight: true,
      navigationText: [
      "<i class='fa fa-chevron-left fa-2x'></i>",
      "<i class='fa fa-chevron-right fa-2x'></i>"
      ],
      singleItem:true

  });

  $("#testimonial-carousel").owlCarousel({

      // navigation : true, // Show next and prev buttons
      // slideSpeed : 500,
      pagination: true,
      paginationSpeed: 800,
      autoPlay: 10000,
      autoHeight: false,
      stopOnHover: true,
      navigationText: [
      "<i class='fa fa-chevron-left white fa-2x'></i>",
      "<i class='fa fa-chevron-right white fa-2x'></i>"
      ],
      singleItem:true

  });
});
