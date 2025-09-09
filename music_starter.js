
var colour = 0;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
//Screen Resolution = 540px, 960px
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  let BG_lightness;
  BG_lightness = map(vocal, 0,100, 20, 30); 

  background(0, 100, BG_lightness);//(113,0,0,255); //deep brown red
  colorMode(HSL)



   //VOCAL bar is deep orange + reactive placement
   if(vocal<50){
     noFill();
     stroke(20, 93, 34);
     strokeWeight(5);
     circle(100, 125, 4 * vocal); 

      //Drawn on Ripples are just scaled up circles
      noFill();
      stroke(13, 88, 34);
      strokeWeight(6);
      circle(100, 125, 5 * vocal);
      noFill();

      noFill();
      stroke(13, 88, 31);
      strokeWeight(7);
      circle(100, 125, 8 * vocal);
      noFill();
   }

    if(vocal>50){
     noFill();
     stroke(20, 93, 34);
     strokeWeight(5);
     circle(300, 500, 4 * vocal); 

      //Drawn on Ripples are just scaled up circles
      noFill();
      stroke(13, 88, 34);
      strokeWeight(6);
      circle(300, 500, 5 * vocal);
      noFill();

      noFill();
      stroke(13, 88, 31);
      strokeWeight(7);
      circle(300, 500, 7 * vocal);
      noFill();
   }
 

   // DRUM bar is dark pastel green 
   if(drum>30){
     noFill();
     stroke(78, 22, 55);
     strokeWeight(3);
     circle(350, 200, 5*drum);
     noFill();

    //Drawn on Ripples are just scaled up circles
    noFill();
    stroke(65, 20, 42);
    strokeWeight(5);
    circle(350, 200, 6*drum);
    noFill();
   }

      if(drum<30){
     noFill();
     stroke(78, 22, 55);
     strokeWeight(3);
     circle(540, 900, 7*drum);
     noFill();

    //Drawn on Ripples are just scaled up circles
    noFill();
    stroke(65, 20, 42);
    strokeWeight(5);
    circle(540, 900, 10*drum);
    noFill();
   }
   

 
   // BASS bar is light yellow green + using IF statements for reactive placement 

   if (bass>50) { 
    noFill();
    stroke(76, 59, 70);
    circle(70, 750, 4 * bass);
    noFill();
          
    //Drawn on Ripples are just scaled up circles
      noFill();
      stroke(57, 44, 62);
      strokeWeight(6);
      circle(70, 750, 5 * bass);
      noFill();

      noFill();
      stroke(38, 30, 48);
      strokeWeight(7);
      circle(70, 750, 7 * bass);
      noFill();
   }

   if (bass<50) {
    noFill();
    stroke(57, 44, 62);
    strokeWeight(3);
    circle(370, 25, 4 * bass);
    noFill();

    noFill();
    stroke(38, 30, 48);
    strokeWeight(5);
    circle(370, 25, 6 * bass);
    noFill();
   }
  
 
   // OTHER bar is bright orange + using IF statements for reactive placement

    noFill();
    stroke(33, 91, 40);
    strokeWeight(2);
    circle(0, 960, 15 * other);

    noFill();
    stroke(33, 91, 40);
    strokeWeight(5);
    circle(0, 960, 20 * other);
}