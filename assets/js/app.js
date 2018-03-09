$(document).ready(function() {
  $('.button-collapse').sideNav({
    edge: 'left',
    closeOnClick: true,
    draggable: true
  });

  $(".spark,footer").sparkle({
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
$('h1').addGlow({
  radius: 20,
  textColor: 'rgba(54,39,94,1)',
  haloColor: '#fff',
  duration: 200
});

$('.cod,.cat1,.sobre,.trab,.con,path').addGlow({
  radius: 20,
  textColor: 'rgba(54,39,94,1)',
  haloColor: '#fff',
  duration: 200
});

window.sr = ScrollReveal({ reset: true });

sr.reveal('#about', {
  origin: 'top',
  distance: '20px',
  duration: 900,
delay: 0,
});

sr.reveal('#works');
sr.reveal('.valign-wrapper');

});
