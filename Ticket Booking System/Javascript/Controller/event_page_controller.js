
import EventService from "../Services/EventService.js";

$(document).ready(function(){
  
    EventService.getEventDetails().then(response=>{
        
        let events = response.data;
        

        for(let event of events)
        {

          let event_card = `<div class="col" >
          <div class="card" movieId="${event.id}">
              <img src="${event.event_img}" class="card-img-top card_img imgheight" id="card_img" alt="Event 1">
              <div class="card-body">
                  <h5 class="card-title">${event.title}</h5>
                  <p class="card-text">${event.language}</p>
                  <p class="card-text">${event.genre}</p>
              </div>
          </div>
        </div>`;

          $("#event-append").append(event_card);
        }
        
    }).catch(error=>{
        console.log(error);
    });
})