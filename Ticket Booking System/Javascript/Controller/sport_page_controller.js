
import SportService from "../Services/SportService.js";


$(document).ready(function(){
  
    SportService.getSportDetails().then(response=>{
        
        let sports = response.data;
        

        for(let sport of sports)
        {

          let sport_card = `<div class="col" >
          <div class="card" movieId="${sport.id}">
              <img src="${sport.sport_img}" class="card-img-top card_img imgheight" id="card_img" alt="Event 1">
              <div class="card-body">
                  <h5 class="card-title"> ${sport.title}</h5>
                  <p class="card-text"> ${sport.description}</p>
                  <p class="card-text">${sport.genre}</p>
                  <p class="card-text">${sport.price}</p>
              </div>
          </div>
        </div>`;

          $("#sport-append").append(sport_card);
        }
        
    }).catch(error=>{
        console.log(error);
    });
})