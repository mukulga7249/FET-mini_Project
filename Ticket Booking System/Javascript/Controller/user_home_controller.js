import MovieServices from "../Services/MoviesServices.js";
import UserServices from "../Services/UserServices.js";

$(document).ready(function () {

    let id = 1;

    let userInterest = null;

    UserServices.getUserDetailsById(id).then((response)=>{
      console.log(response);
      userInterest = response._favGener;
    }).catch((error)=>{
      console.log(error);
    })

    MovieServices.getMovieDetails().then(response=>{
        
        let movies = response.data;
        console.log(userInterest);

        for(let movie of movies)
        {

            let movie_card = `<div class="card">
            <img class="card-img-top movie_img" src=${movie.movie_img} alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Movie title</h5>
              <p class="card-text">${movie.title}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">${movie.language}</small>
            </div>
          </div> `;

          let gener = movie.genre;
          let flag = true;

          for(let g of userInterest)
          {
              if(gener == g)
              {
                $(".movie-card").append(movie_card);
                flag =false;
                break;
              }
          }

          
        }
        

    }).catch(error=>{
        console.log(error);
    })

});