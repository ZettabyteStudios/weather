window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.getElementsByTagName('.temperature-deree');
    let locationTimezone = document.querySelector('.location-timezone');
    
    if(navigator.onLine){
 } else {
  alert('offline');
 }

 if(navigator.geolocation){

 }else{
    alert('Location Unavailable');
 }
 navigator.geolocation.watchPosition(function(position) {
 
  },
  function(error) {
    if (error.code == error.PERMISSION_DENIED)
      alert("please reload the page and allow location Access");
  });


    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async position =>{
        long = position.coords.longitude;
        lat = position.coords.latitude;  
            
            console.log(position);
            let apiurl = 'https://api.weatherbit.io/v2.0/current?&key=3901ba3be32846e49f67ee17c3b3f482' ;
            let api = apiurl + '&lat='+lat + '&lon=' + long;
            console.log(api);
            const response = await fetch(api);
            const json = await response.json();
            
            console.log(json);
       
            
            const temdes = json.data["0"].weather.description ;
            const tem = json.data["0"].temp ;
            const time = json.data["0"].timezone;
             let icon = json.data["0"].weather.icon ;
            let cc = json.data["0"].country_code ;
            let city = json.data["0"].city_name;
            document.querySelector(".country-code").textContent = cc ;
            document.querySelector(".city").textContent = city ;
            document.querySelector(".temperature-description").textContent = temdes ;
            document.querySelector(".location-timezone").textContent = time ;
            document.getElementsByClassName('temperature-deree').textContent = tem ;
            temperatureDegree.textContent = tem ;
            document.getElementsByClassName(".temperature-degree").textContent= temperatureDegree ;
  
            var element = document.getElementById("temperature-degree");
            element.innerHTML = tem ;
            console.log(icon);

                    const skycons = new Skycons({"color": "white"});
             function CLEAR_DAY(){
                skycons.set("icon1", Skycons.CLEAR_DAY);
                
            }function CLEAR_NIGHT(){
                skycons.set("icon1", Skycons.CLEAR_NIGHT);
            }
            
             function PARTLY_CLOUDY_DAY(){
                skycons.set("icon1", Skycons.PARTLY_CLOUDY_DAY);
                
            }
            
            function PARTLY_CLOUDY_NIGHT(){
                skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
            }
            function SNOW(){
                skycons.set("icon1", Skycons.SNOW);
                
            }
            function RAIN(){
                skycons.set("icon1", Skycons.RAIN);
            
            }
            function SLEET(){
                skycons.set("icon1", Skycons.SLEET);
            }
            function WIND(){
                skycons.set("icon1", Skycons.WIND);
            }
            function CLOUDY(){
                skycons.set("icon1", Skycons.CLOUDY);
            }
            function FOG(){
                skycons.set("icon1", Skycons.FOG);
            }

            switch(icon){

     case 'c01d' :
                CLEAR_DAY();
                break;
     case 'c01n' :
             CLEAR_NIGHT();
             break;
            
           
     case  'a06d'|| 'a06n'|| 'a05n'|| 'a05d'||'a01d'||'a01n'||'a04n'||'a04d'||'a03n'||'a03d'||'a02n'||'a02d' :
                FOG();
                break;
            
     case 'c02d'||'c03d' :
                PARTLY_CLOUDY_DAY();
                break;
            
     case   'c02n'|| 'c03n' :
                PARTLY_CLOUDY_NIGHT();
                break;
            
      
            
      case  'c04d'||'c04n' || 'r02d' ||'r02n'||'r03dn'||'r03n'||'f01d'||'f01n'||'r04n'||'r04d'||'r04d'||'r04d' :
                RAIN();
                break;
            
       case 'r01d'||'r01n'||'u00d'||'u00n' :
                SLEET();
                break;
            
        case 's02d'||'s02n'||'s03d'||'s03n'||'s04n'||'s04d'||'s01d'||'s01n' :
                SNOW();
                break;
            
        case  's05d'||'s05n':
                  WIND();
                  break;
            
            default :
                PARTLY_CLOUDY_DAY();
                break;
            }
           
            skycons.play();
 


            
            
        });
}

    
  
        
            
    
});
