function getClima() {
    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=f12447cbfe551796eb378f4ccf3757de',
        dataType: 'json',
        success: function (data) {
            temperatura = data.main.temp - 273;
            var tempFormatada = temperatura.toFixed(2).split('.');
            $('#temperatura').html(tempFormatada+"°");
            $('#umidadeDoAr').html(data.main.humidity+"%");
            $('#pressaoDoAr').html(data.main.pressure);
             $('#velocidadeDoVento').html(data.wind.speed);
              $('#temperaturaMaxima').html(data.main.temp_max+"°");
              
            var dataAmanhecer = new Date(data.sys.sunrise*1000);
            var descDataAmanhecer = dataAmanhecer.getHours()+':'+dataAmanhecer.getMinutes();
            nascer = data.sys.sunrise;
            $('#nascerDoSol').html(descDataAmanhecer);
            
            var dataPor = new Date(data.sys.sunset*1000);
            var descDataPor = dataPor.getHours()+':'+dataPor.getMinutes();
            por= data.sys.sunset;
            $('#porDoSol').html(descDataPor);
            
            
            descricao = traduzirDescricao(data.weather[0].description) ;
            $('#situacao').html(descricao)
            
            var icone = data.weather[0].icon;
            var caminhoIcone = 'img/icones/'+icone+'.png';
            $('#icone').attr('src', caminhoIcone);
            

        },
        error: function (argument) {

        }

    });
}

function traduzirDescricao(descricao){
    descricaoTraduzida = "";
    
    if(descricao == "clear sky"){
        descricaoTraduzida = "céu limpo";
    } else if (descricao == "few clouds"){
        descricaoTraduzida = "poucas nuvens";
    }
    if(descricao == "scattered clouds"){
        descricaoTraduzida = "nuvens dispersas";
    } else if (descricao == "broken clouds"){
        descricaoTraduzida = "nuvens quebradas";
    }
        if(descricao == "shower rain"){
        descricaoTraduzida = "chuva de banho";
    } else if (descricao == "rain"){
        descricaoTraduzida = "chuva";
    }
        if(descricao == "thunderstorm"){
        descricaoTraduzida = "trovoada";
    } else if (descricao == "snow"){
        descricaoTraduzida = "neve";
    }
        if(descricao == "mist"){
        descricaoTraduzida = "névoa";
        
}

 return descricaoTraduzida;
}
   

    window.onload = function () {
    getClima();
};
