export default async function postUserInput() {

    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let photo = "photoURL";
    let description = document.getElementById("description").value;

    fetch('https://vacationapplication.herokuapp.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            location: location,
            photo: photo,
            description: description
        })
    })

}

