
var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click',function(){
   nav.classList.toggle('muestrate');
   console.log(nav.id);
})
var btnLink = document.getElementById('menus');
btnLink.addEventListener('click',function(){
   nav.classList.toggle('muestrate');
})

// scroll de vinculos
$('#inicio').click(function(){
   var coordenadas=$('#header').position().top;
   console.log(coordenadas);
   $('html,body').animate({scrollTop:coordenadas},2000);
});

$('#marcas').click(function(){
      var coordenadas=$('#info').position().top;
      console.log(coordenadas);
      $('html,body').animate({scrollTop:coordenadas},2000);
});
$('#nuevosModelos').click(function(){
   var coordenadas=$('#nuevosMod').position().top;
   console.log(coordenadas);
   $('html,body').animate({scrollTop:coordenadas},2000);
});
$('#contacto').click(function(){
   var coordenadas=$('#contactos').position().top;
   console.log(coordenadas);
   $('html,body').animate({scrollTop:coordenadas},2000);
});


//efecto barra al hacer el scroll
$(window).scroll(function(){
if($(this).scrollTop()>$('#info').position().top-20)
{    
   $('.logo').hide(1000);

   $('.menu__link').css({'background': 'rgba(5,5, 5,0.9)','transition': 'all 1s'});

}
//muestra el logo 
else
{
   $('.menu__link').css('background' ,'rgba(5,5, 5,0.2)');   
   $('.logo').show("slow");
}
});

