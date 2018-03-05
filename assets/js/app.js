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

//typing
$('.type').t('The<p class="coder">&lt;coder&gt;</p>Witch');

//glow
$('.forest2').addGlow({
  radius: 100,
  textColor: 'rgba(54,39,94,1)',
  haloColor: '#fff',
  duration: 200
});

$('.forest2').addGlow({
  radius: 100,
  textColor: 'rgba(54,39,94,1)',
  haloColor: '#fff',
  duration: 200
});


});
