$(document).ready(function () {
  console.log("doc is ready");
});
const games = [

  {
    title: "Doge Game",
    link: "https://rish4863.github.io/doge-game/", 
    author: "Rishi Doreswamy"
  },
  {
    title: "Wes' Game",
    link: "https://westyler28.github.io/Echo-Lab/",
    author: "Wes Wallace"
    }
];
$.each(games, function (index, item) {
  console.log("Game Title: " + item.title);
  console.log("Game URL: " + item.link);
  console.log("Game Author: " + item.author);
  
  var el = `<div class='card'> \
  <button class='cardOpen2 btn btn-outline-info'> ${ item.title } </button> \
   <div class='cardHide mx-auto'> \
       <br> \
       <a class="btn btn-primary" href="${ item.link }" target="_blank" class="link-info" >GAME LINK</a>
       </div> \
       <p class="text-white">Created by: ${ item.author } </p> \
       <br> \
 </div>`; 

 console.log(el); 


 $('#gameCard').append(el);
});