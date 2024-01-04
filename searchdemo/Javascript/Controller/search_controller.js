import SearchService from "../Services/SearchService.js";


$(document).ready(()=>{
    let searchbar=$("#searchbarid");
    let searchform=$("#searchform")
    searchform.on("submit",async(e)=>{
        console.log(searchbar);
        let query=searchbar.val().toLowerCase().trim();
        e.preventDefault();

        try{
            const eventdata = await SearchService.getEventSearch(query);
            console.log(eventdata);
            alert("Movie Found");
            alert(JSON.stringify(eventdata));

            for ( let data of eventdata){
                let searcheddata=`<div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${data.event_img}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${data.title}</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">${data.language}</small></p>
                </div>
              </div>
            </div>
          </div>`;

          $("#searcheddata").append(searcheddata);


         
            }

           
            



        }
        catch{

        }


    })
})