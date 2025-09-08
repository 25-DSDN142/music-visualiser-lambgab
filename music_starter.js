
var colour = 0;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
//Screen Resolution = 540px, 960px
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  // 1. DONE - The background will change in relation to the vocals with Map from Deep brown to a lighter brown
  // 2. ~Change position of ripple in relation to value of vocal/drum/bass/other
  // 3. Animating multiples ripples/ rings on every ellipse that fade out the farther they get

    //1. Colour MAP
  let BG_lightness;
  BG_lightness = map(vocal, 0,100, 20, 30); 
  //~~How do I make it change within a hue? 
  // + change colour mode into HSL 
  // + Callout L value and State WHAT BG_lightness and place it before the code execution 
  // + check numbers for any typos :/

  background(0, 100, BG_lightness);//(113,0,0,255); //deep brown red
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);
  
  colorMode(HSL)
  
  //OG Variables = (ellipse_pos_x,ellipse_spacing, ellipse_height);
   let ellipse_spacing = height / 10;
   let ellipse_height = width / 12;
   let ellipse_pos_x = width / 2;

//2. Randomise Ripples Position / Leave alone for now until Animation is sorted.

   let vocal_pos_x;
   let vocal_pos_y;

   let drum_pos_x;
   let drum_pos_y;
   
   let bass_size = 50;
   //let bass_pos_x;
   //let bass_pos_y;

   //let other_pos_x;
   //let other_pos_y;
   
//Vocal Ripple Position
   vocal_pos_x = map(vocal, 0, 100, 0, 540);
   vocal_pos_y = map(vocal, 0, 100, 0, 480);
//Drum Ripple Position
  drum_pos_x = map(drum, 0,100, 540, 0);
  drum_pos_y = map(drum, 0, 100, 960, 500);
//Bass Ripple Position
//Other Ripple Position

// CHANGES/Trialing different ripple styles
 //RIPPLES

   //VOCAL bar is deep orange + reactive placement
   if(vocal<50){
     noFill();
     stroke(20, 93, 34);
     strokeWeight(5);
     circle(100, 200, 4 * vocal, ellipse_height); 

      //Drawn on Ripples are just scaled up circles
      noFill();
      stroke(20, 93, 34);
      strokeWeight(6);
      circle(100, 200, 5 * vocal, ellipse_height);
      noFill();

      noFill();
      stroke(20, 93, 34);
      strokeWeight(7);
      circle(100, 200, 7 * vocal, ellipse_height);
      noFill();
   }

    if(vocal>50){
     noFill();
     stroke(20, 93, 34);
     strokeWeight(5);
     circle(300, 500, 4 * vocal, ellipse_height); 

      //Drawn on Ripples are just scaled up circles
      noFill();
      stroke(20, 93, 34);
      strokeWeight(6);
      circle(300, 500, 5 * vocal, ellipse_height);
      noFill();

      noFill();
      stroke(20, 93, 34);
      strokeWeight(7);
      circle(300, 500, 7 * vocal, ellipse_height);
      noFill();
   }
 

   // DRUM bar is dark pastel green 
   if(drum>30){
     noFill();
     stroke(78, 22, 55);
     strokeWeight(3);
     circle(540, 900, 7*drum, ellipse_height);
     noFill();

    //Drawn on Ripples are just scaled up circles
    noFill();
    stroke(78, 22, 55);
    strokeWeight(5);
    circle(540, 900, 10*drum, ellipse_height);
    noFill();
   }

      if(drum<30){
     noFill();
     stroke(78, 22, 55);
     strokeWeight(3);
     circle(350, 300, 5*drum, ellipse_height);
     noFill();

    //Drawn on Ripples are just scaled up circles
    noFill();
    stroke(78, 22, 55);
    strokeWeight(5);
    circle(350, 300, 6*drum, ellipse_height);
    noFill();
   }
   

 
   // BASS bar is light yellow green + using IF statements for reactive placement 

   if (bass>45) { 
    noFill();
    stroke(76, 59, 70);
    circle(70, 750, 4 * bass, ellipse_height);
    noFill();
          
    //Drawn on Ripples are just scaled up circles
      noFill();
      stroke(76, 59, 70);
      strokeWeight(6);
      circle(70, 750, 5 * bass, ellipse_height);
      noFill();

      noFill();
      stroke(76, 59, 70);
      strokeWeight(7);
      circle(70, 750, 7 * bass, ellipse_height);
      noFill();
   }

   if (bass<40) { //~~bass is less than 75 but greater than 50 execute:
    noFill();
    stroke(76, 59, 70);
    strokeWeight(3);
    circle(370, 25, 4 * bass, ellipse_height);
    noFill();

    noFill();
    stroke(76, 59, 70);
    strokeWeight(5);
    circle(370, 25, 6 * bass, ellipse_height);
    noFill();
   }
  
 
   // OTHER bar is bright orange = using IF statements for reactive placement

   if(other>80) {
     noFill();
     stroke(33, 91, 40);
     strokeWeight(2);
     line(0, 500, 350, 960);
   }

}