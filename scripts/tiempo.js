/*jslint browser:true */
/*globals $ */

function convertirKelvinACelsius(kelvin){
    var resultado = kelvin - 273;
    
    return resultado.toFixed(2);
}
function obtenerElTiempo(){
    
    $("#weather").empty();
    
    $.get("http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&appid=b7f0918f466db477c7ba0fe9b9faede2", function( data ) {
        $("#weather")
        .append($("<p></p>").text("Descripcion:" + data.weather[0].temp_max))
        .append($("<p></p>").text("Humedad: " + data.main.humidity))
        .append($("<p></p>").text("Temperatura: " + convertirKelvinACelsius(data.main.temp)));
    });

}