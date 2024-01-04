import MovieServices from "../Services/MoviesServices.js";

$(document).ready(function(){

    let params = new URLSearchParams(window.location.search);
    let id = params.get("mid");
    
    console.log("Controller:"+id);

    MovieServices.getMovieDetailsById(id).then(response=>{
        console.log("controoleer",response);

        let movie = response.data;

        let select_movie = `<div class="row">
        <div class="col-md-6 movie_img_div" id="movie_img_div">
            <img src="${movie.movie_img}" class="movie_img" id="movie_img" alt="Movie Poster" class="img-fluid">
        </div>
        <div class="col-md-6">
            <h1 class="mb-4">${movie.title}</h1>
            <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="mb-2"><strong>Genre:</strong>${movie.genre}</p>
            <p class="mb-2"><strong>Language:</strong>${movie.language}</p>
            <p class="mb-2"><strong>Rating:</strong> 4.5/5</p>
            <p class="mb-4"><strong>Showtimes:</strong> 12:00 PM, 3:00 PM, 6:00 PM</p>
            <a href="booking.html" class="btn btn-primary">Book Now</a>
        </div>
    </div>`

    $("#append-movie").append(select_movie);

    }).catch(error=>{
        console.log(error);
    })
    
})