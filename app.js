$(function() {
  var searchField = $("#searchInput");
  var iconButton = $("#searchBtn");

  //focus event
  $(searchField).on("focus" , function() {
    $(this).animate({
      width: "100%"
    },400);
    $(iconButton).animate({
      right:"10px"
    },400);
  });
  //blur event
  $(searchField).on("blur", function(){
    if(searchField.val() === ""){
      $(searchField).animate({
        width: "45%"
      },400, function(){});
        $(iconButton).animate({
          right: "360px"
        }, 400 , function(){});
    }
  });
  $("#searchForm").submit(function(e){
    e.preventDefault();
  });
});

function search() {
  // clear results
  $("#results").html("");
  $("#buttons").html("");

  //get form inputs
  q = $("#searchInput").val();

  //run GET request on API
  $.ajax({
      url: "https://www.googleapis.com/youtube/v3/search",
      part: "snippet, id",
      q: q,
      type: "video",
      key: "AIzaSyDh-5HYrJ9SadH0n21qfwAlsduk_NogOys"},
      function(data){
        var nextPageToken = data.nextPageToken;
        var prevPageToken = data.prevPageToken;
        console.log(data);
      });

  };
