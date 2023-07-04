# introduction

This is a web application for booking movie tickets. It fetches data from a local server running a JSON DB server. Users can view movie details, check available tickets, and buy tickets for movies. The project includes both core and bonus deliverables.

# Core Deliverables
Core Deliverables
When the page loads, the user can see the details of the first movie, including its poster, title, runtime, showtime, and available tickets. The number of available tickets is calculated by subtracting the tickets_sold count from the theater's capacity.

When the page loads, the user can see a menu of all movies on the left side of the page in the ul#films element. Each movie item in the list displays the movie title.

The user can buy a ticket for a movie. Clicking the "Buy Ticket" button will decrease the number of available tickets on the frontend. It is not possible to buy a ticket if the showing is sold out (0 tickets available).