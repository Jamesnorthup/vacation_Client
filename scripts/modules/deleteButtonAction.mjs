export default function deleteThisCard(imageID) {

    fetch("https://vacationapplication.herokuapp.com/", {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: imageID
        })
    })

}