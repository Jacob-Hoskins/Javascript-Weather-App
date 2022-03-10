//get user geolocation if they accept the computer to do so.
//window will let you use events on the browser window
window.addEventListener('load', ()=>{
    let long;
    let lat;


    //navigator, geolocation, getCurrentPosition in if statement are built in javascript functions
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position =>{

            //pulls long and lat from position
            long = position.coords.longitude
            lat = position.coords.latitude
            console.log(long, lat)
            
            const apiKey = '46bed509c962ba30dd875de34143c309'
            const apiLink = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + lat + '&lon=' + long + '&appid=' + apiKey


            //will grab information from url 
            fetch(apiLink)
                //after you get information do something with data
                //take info and convert to json
                .then(websiteResponse =>{
                    return websiteResponse.json()
                })
                //do something with data recieved from fetch
                .then(websiteResponse =>{
                    console.log(websiteResponse)
                    updatePage(websiteResponse.name, websiteResponse.main.temp)
                })
        })

        
    }
});


//will update the html on your page by finding them through their ID
function updatePage(town, temp){
    const userTown = document.getElementById('town')
    const userTemp = document.getElementById('temperature')

    userTown.innerHTML = town
    userTemp.innerHTML = (temp + ' *f')

}


