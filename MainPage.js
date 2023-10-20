
var Flip = document.querySelectorAll(".Believer-Chapter");
for (let i = 0; i < Flip.length; i++) {
  Flip[i].addEventListener("click", function(){
      Flip[i].classList.toggle('Card-Flip');
});
}


var Funny = document.querySelectorAll(".Funny-Card");
for (let i = 0; i < Funny.length; i++) {
  Funny[i].addEventListener("click", function(){
      Funny[i].classList.toggle('Funny-Card-Flip');
});
}
