var mySongRain = document.getElementById("myAudio1");
var iconRain = document.getElementById("rain_rec");

var mySongCafe = document.getElementById("myAudio2");
var iconCafe = document.getElementById("cafe_rec");

var mySongWind = document.getElementById("myAudio3");
var iconWind = document.getElementById("wind_rec");

iconRain.onclick = function(){
    if(mySongRain.paused){
        mySongRain.play();
    }else{
        mySongRain.pause();
    }
}

iconCafe.onclick = function(){
    if(mySongCafe.paused){
        mySongCafe.play();
    }else{
        mySongCafe.pause();
    }
}

iconWind.onclick = function(){
    if(mySongWind.paused){
        mySongWind.play();
    }else{
        mySongWind.pause();
    }
}


