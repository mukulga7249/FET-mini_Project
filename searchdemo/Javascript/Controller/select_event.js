$(document).ready(function(){

    $(document).on('click','.card',function(){

        let mid=$(this).attr("eventid");

        alert("div clicked");

        console.log(mid);

        window.location.href="../../Html/SelectedMovie.html?mid="+mid;
        
    })

});