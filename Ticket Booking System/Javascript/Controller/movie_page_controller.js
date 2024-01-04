import MovieServices from "../Services/MoviesServices.js";

$(document).ready(function(){
  
    MovieServices.getMovieDetails().then(response=>{
        
        let movies = response.data;
        

        for(let movie of movies)
        {

          let movie_card = `<div class="col" >
          <div class="card" movieId="${movie.id}">
              <img src="${movie.movie_img}" class="card-img-top card_img" id="card_img" alt="Movie 1">
              <div class="card-body">
                  <h5 class="card-title">Title : ${movie.title}</h5>
                  <p class="card-text">Language: ${movie.language}</p>
              </div>
          </div>
        </div>`;

          $(".movie-append").append(movie_card);
        }
        
    }).catch(error=>{
        console.log(error);
    });
})