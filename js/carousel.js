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

});
