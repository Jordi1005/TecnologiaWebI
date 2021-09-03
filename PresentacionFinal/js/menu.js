
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

   $('.menu__link').css({'background': 'rgba(255,255,255,0.9)','transition': 'all 1s'});

}
//muestra el logo 
else
{
   $('.menu__link').css('background' ,'rgba(255,255,255,0.4)'); 
     
   $('.logo').show("slow");
}
});

const requestURL ="http://api.openweathermap.org/data/2.5/weather?id=3919966&units=metric&appid=0d2960cbffecf643d0fcfff22d3e2abf";
const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();


request.onload = function()
{
    const weather_json= request.response; 
    console.log(weather_json);
    document.getElementById('Value1').innerHTML=weather_json.name;
    document.getElementById('Value2').innerHTML=weather_json['main'].temp;
    document.getElementById('Value3').innerHTML=weather_json['main'].temp_max;
    
    

}

