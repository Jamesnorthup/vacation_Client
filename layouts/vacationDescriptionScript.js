



//document.getElementById("detailedImage").setAttribute("src", photo)
let destinationVar
let locationVar
let descriptionVar
let photoVar

let CityNameVar
let DescriptionVar
let TempVar
let windspeedVar


FetchCardDetails()




FetchCurrentWeather()



async function PhotoRequest(destinationVar, locationVar) {

    const API_KEY = "pSmm5fSlg_gm-Ie-eycYCUcrlFNoGPP6WbS41HvhZeI";

    let thumb = "";
    const url = `https://api.unsplash.com/search/photos?query=${locationVar} ${destinationVar}&client_id=${API_KEY}`

    return await fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            thumb = data.results[0].urls.thumb;
            return thumb;
        });
}
async function FetchCardDetails() {



    const res = await fetch('https://vacationapplication.herokuapp.com/CardDetails')
    const json = await res.json();
    let destinationsArray = json.data
    console.log(destinationsArray)
    destinationsArray.map(destination => {

        PhotoRequest(destination.location, destination.name).then(photo =>
            document.getElementById("image").setAttribute("src", photo))

        document.getElementById("destination").value += destination.name
        document.getElementById("location").value += destination.location
        document.getElementById("description").value += destination.description
    })
}
    async function FetchCurrentWeather() {

        const res = await fetch('https://vacationapplication.herokuapp.com/CurrentWeather')
        const json = await res.json();
        let destinationsArray = json.data
        console.log(destinationsArray)
        destinationsArray.map(destination => {



            document.getElementById("CityName").textContent += destination.CityName
            document.getElementById("Description").textContent += destination.Description
            document.getElementById("Temp").textContent += destination.Temp
            document.getElementById("windspeed").textContent += destination.windspeed
        })

    }


    async function PhotoRequest(destinationVar, locationVar) {

        const API_KEY = "pSmm5fSlg_gm-Ie-eycYCUcrlFNoGPP6WbS41HvhZeI";

        let thumb = "";
        const url = `https://api.unsplash.com/search/photos?query=${locationVar} ${destinationVar}&client_id=${API_KEY}`

        return await fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                thumb = data.results[0].urls.thumb;
                return thumb
            });
    }






