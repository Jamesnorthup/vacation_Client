export default async function putDetailsChangePage(name, location, photo, description) {

    fetch("https://vacationapplication.herokuapp.com/CardDetails", {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            name: name,
            location: location,
            photo: photo,
            description: description
        })
    }).then(res => {
        if (res.ok) return res.json()
    })
}