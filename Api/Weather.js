//apikey : 0d2960cbffecf643d0fcfff22d3e2abf
// IDCity : Cochabamba 3919966
// IDBarcelona
//url: http://api.openweathermap.org/data/2.5/weather?id=3919966&units=metric&appid=0d2960cbffecf643d0fcfff22d3e2abf

const requestURL ="http://api.openweathermap.org/data/2.5/weather?id=3919966&units=metric&appid=0d2960cbffecf643d0fcfff22d3e2abf";
const request = new  XMLHttpRequest();
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
    document.getElementById('Value4').innerHTML=weather_json['main'].temp_min;
    document.getElementById('Value5').innerHTML=weather_json['main'].humidity;
    var hoy = new Date();
    console.log(hoy.getHours());
    if (hoy.getHours() >18 || hoy.getHours() <6)
    {
        document.getElementById('Fondo').className +='noche';
    }
    else
    {
        document.getElementById('Fondo').className -='noche';
    }

}