export default async function PhotoRequest(destination, location) {

    const API_KEY = "pSmm5fSlg_gm-Ie-eycYCUcrlFNoGPP6WbS41HvhZeI";

    let thumb = "";
    const url = `https://api.unsplash.com/search/photos?query=${location} ${destination}&client_id=${API_KEY}`

    return await fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            thumb = data.results[0].urls.thumb;
            return thumb;
        });
}

