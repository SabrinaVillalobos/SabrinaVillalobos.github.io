$(document).ready(function() {
  $('.button-collapse').sideNav({
    edge: 'left', 
    closeOnClick: true,
    draggable: true
  });

  $(".spark").sparkle({
    "color": "rainbow",
    count: 150,
    speed: 0
})
  $('.align').click(function(){
    $('.button-collapse').sideNav('hide');
})

  $(".spark1").sparkle({
    overlap: 20
});

  jakealbaughSignature("light");
  
});
