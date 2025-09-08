
var colour = 0;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
//Screen Resolution = 540px, 960px
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  // 1. DONE - The background will change in relation to the vocals with Map from Deep brown to a lighter brown
  // 2. DONE - Change position of ripple in relation to value of vocal/drum/bass/other
  // 3. Animating multiples ripples/ rings on every ellipse that fade out the farther they get

    //1. Colour MAP
  let BG_lightness;
  BG_lightness = map(vocal, 0,100, 20, 30); 
    //~~How do I make it change within a hue? 
    // + change colour mode into HSL 
    // + Callout L value and State WHAT BG_lightness and place it before the code execution 
    // + check numbers for any typos :/

  background(0, 100, BG_lightness);//(113,0,0,255); //deep brown red
  colorMode(HSL)

//2. Randomise Ripples Position +  Animating multiples ripples/ rings on every ellipse that fade out the farther they get
  //RIPPLES

   //VOCAL bar is deep orange + reactive placement
   if(vocal<50){
     noFill();
     stroke(20, 93, 34);
     strokeWeight(5);
     circle(100, 200, 4 * vocal); 

      //Drawn on Ripples are just scaled up circles
      noFill();
      stroke(13, 88, 34);
      strokeWeight(6);
      circle(100, 200, 5 * vocal);
      noFill();

      noFill();
      stroke(13, 88, 31);
      strokeWeight(7);
      circle(100, 200, 7 * vocal);
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
     circle(350, 300, 5*drum);
     noFill();

    //Drawn on Ripples are just scaled up circles
    noFill();
    stroke(65, 20, 42);
    strokeWeight(5);
    circle(350, 300, 6*drum);
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

   if (bass>45) { 
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

   if (bass<40) { //~~bass is less than 75 but greater than 50 execute:
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
  
 
   // OTHER bar is bright orange = using IF statements for reactive placement
let other_posX = 350;
let other_posY = 500;

other_posY = other_posY +5
other_posX = other_posX +5

   if(other>80) {
     noFill();
     stroke(33, 91, 40);
     strokeWeight(2);
     line(0, other_posY, other_posX, 960);
    
     noFill();
     stroke(30, 86, 35);
     strokeWeight(4);
     line(0, 480, 370, 960);

     noFill();
     stroke(18, 83, 31);
     strokeWeight(7);
     line(0, 450, 400, 960);
   }

}