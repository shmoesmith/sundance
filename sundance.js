$(document).ready(function(){
  // slider 
  
  $('.marketing-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    cssEase: 'linear'
  });
  
  // hide movie descriptions
   $('.tile p').hide();
   
  //set background size and fade in movie description
   $('.tile-image').on('mouseover click', function(){
     var pHeight = $(this).height();
     $('.tile p').css({
     'height': `${pHeight}`,
     });
     $(this).next().fadeIn(500);
     $(this).hide();
   })
   
   
 //get rid of movie descriptions and bring back the movie poster
   $('.tile p').on('mouseleave', function(){
     $('.tile p').hide();
     $('.tile-image').fadeIn(500);
   })
   
 //location tab system
 $('.tab-list').each(function(){
 var $this = $(this);
 var $tab = $this.find('li.active');
 var $link = $tab.find('a');
 var $panel = $($link.attr('href'));
 
 $this.on('click', '.tab-control', function(e) {
   e.preventDefault();
   var $link = $(this);
   var id = this.hash;
   
   if(id && !$link.is('.active')) {
    $panel.removeClass('active');
    $tab.removeClass('active');
    
    $panel = $(id).addClass('active');
    $tab = $link.parent().addClass('active');
     }
   });
  });
   
});
	