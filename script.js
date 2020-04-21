window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.getElementsByTagName('.temperature-deree');
    let locationTimezone = document.querySelector('.location-timezone');
    

    
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
    
               if(icon == 'c01d'){
                   CLEAR_DAY();
               }
           else if(icon == 'c01n'){
                CLEAR_NIGHT();
            }
           
            else if(icon == 'a06d'||icon == 'a06n'||icon == 'a05n'||icon == 'a05d'){
                FOG();
            }
            else if(icon == 'c02d'||icon == 'c03d'||icon == 'c04d'){
                PARTLY_CLOUDY_DAY();
            }
            else if(icon == "c02n"||icon == 'c03n'||icon == 'c04n'){
                PARTLY_CLOUDY_NIGHT();
            }
            else if(icon == 'c04d'||icon == 'c04d'){
                CLOUDY();
            }
           else if(icon == "r02d"||icon == "r02n"||icon == "r03dn"||icon == "r03n"||icon == "f01d"||icon == "f01n"||icon == "r04n"||icon == "r04d"||icon == "r04d"||icon == "r04d"){
                RAIN();
            }
            else if(icon == "r01d"||icon == "r01n"||icon == "a01d"||icon == "a01n"||icon == "u00d"||icon == "u00n"){
                SLEET();
            }
            else if(icon == "s02d"||icon == "s02n"||icon == "s03d"||icon == "s03n"||icon == "s04n"||icon == "s04d"||icon == "s01d"||icon == "s01n"){
                SNOW();
            }
            else    if(json.data["0"].weather.icon = "a04n","a04d","a03n","a03d","a02n","a02d"){

                  WIND();
   

            }
            else{
                PARTLY_CLOUDY_DAY();
            }

           
            skycons.play();
 


            
            
        });
}
    
  
        
            
    
});