// Manipulating the DOM
function getMovies(movies) {
    //Ul
    let list = document.getElementById("movies")

    movies.forEach(film => {
        let listItem = document.createElement("li")
        listItem.classList = "group"
        listItem.innerText = film.title
        list.appendChild(listItem)

        //Event Listener
        listItem.addEventListener("click", function () {
            showFilmsDetails(film)
        })
    })
}
function showFilmsDetails(filmData) {
    const Details = document.querySelector("#movie-details")
    console.log(Object.values(filmData))
    const id = document.createElement("p")
    id.innerText = filmData.id
    const title = document.createElement("p")
    title.innerText = filmData.title
    const runtime = document.createElement("p")
    runtime.innerText = filmData.runtime
    const availableTickets = document.createElement("p")
    availableTickets.innerText = "Tickets available : " + (filmData.capacity - filmData.tickets_sold)
    const showtime = document.createElement("p")
    showtime.innerText = filmData.showtime
    const description = document.createElement("p")
    description.innerText = filmData.description
    const poster = document.createElement("img")
    poster.src = filmData.poster

    const button = document.createElement('button')
    button.innerText = "Buy Ticket"
    // Handle Buy Ticket
    button.addEventListener("click", (e) => {
        //if tickets are still available
        if (filmData.tickets_sold < filmData.capacity) {
            e.preventDefault()
            //Update when one ticket is bought
            filmData.tickets_sold = filmData.tickets_sold + 1
            //Update available tickets ui details
            availableTickets.innerText = "Tickets available : " + (filmData.capacity - filmData.tickets_sold)
            // Update the button text when tickets are sold out 
            if (filmData.tickets_sold === filmData.capacity) {
                button.innerText = "Sold Out"
            }
        }
    })


    Details.innerText = ""
    Details.appendChild(id)
    Details.appendChild(title)
    Details.appendChild(runtime)
    Details.appendChild(availableTickets)
    Details.appendChild(showtime)
    Details.appendChild(description)
    Details.appendChild(poster)
    Details.appendChild(button)

}

function getFilmsDetails() {
    fetch("http://localhost:3000/films")
        .then(res => res.json())
        .then(data => {
            getMovies(data)
        })
}

document.addEventListener('DOMContentLoaded', (e) => {
    getFilmsDetails()
})
