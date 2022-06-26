let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_slide');
const totalSlides = slides.length;

document.getElementById('carousel_button_next').addEventListener("click", function(){
   newSlideMove();
});
document.getElementById('carousel_button_prev').addEventListener("click", function(){
   prevSlideMove();
});

function updateSlidePosition(){
   for (let slide of slides){
      slide.classList.remove('carousel_item_visible');
      slide.classList.add('carousel_item_hidden');
   }
   slides[slidePosition].classList.add('carousel_item_visible');
}

function newSlideMove(){
   if(slidePosition == totalSlides - 1){
      slidePosition = 0;
   } else {
      slidePosition++;
   }
   updateSlidePosition();
}

function prevSlideMove(){
   if(slidePosition == 0){
      slidePosition = totalSlides - 1;
   } else {
      slidePosition--;
   }
   updateSlidePosition();
}