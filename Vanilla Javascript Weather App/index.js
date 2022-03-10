//get user geolocation if they accept the computer to do so.
window.addEventListener('load', ()=>{
    let long;
    let lat;


    //navigator and the rest in if are built in javascript functions
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

function updatePage(town, temp){
    const userTown = document.getElementById('town')
    const userTemp = document.getElementById('temperature')

    userTown.innerHTML = town
    userTemp.innerHTML = (temp + ' *f')

}



// const apiKey = '46bed509c962ba30dd875de34143c309'
// 'https://api.openweathermap.org/data/2.5/weather?q=Dover&units=imperial&appid=' + apiKey