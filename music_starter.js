
var colour = 0;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
//Screen Resolution = 540px, 960px
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  // 1. ~~ The background will change in relation to the vocals with Map from Deep brown to a lighter brown
  // 2. ~~Change position of ripple in relation to value of vocal/drum/bass/other
  // 3. Animating multiples ripples/ rings on every ellipse that fade out the farther they get

  let BG_lightness;
    //1. Colour MAP
  BG_lightness = map(vocal, 0,100, 20, 30); //~~How do I make it change within a hue? = change colour mode into HSL + Callout L value and State WHAT BG_lightness and place it before the code execution + check numbers for any typos :/

  background(0, 100, BG_lightness);//(113,0,0,255); //deep brown red
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);
  
  colorMode(HSL)
  
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

   //VOCAL bar is deep orange 
   if(vocal>30){
     noFill();
     stroke(20, 93, 34);
     strokeWeight(5);
     circle(vocal_pos_x, vocal_pos_y, 4 * vocal, ellipse_height); //OG Variables = (ellipse_pos_x,ellipse_spacing, ellipse_height);
     fill(0);
     text("vocals", ellipse_pos_x, height / 2 + 1 * ellipse_spacing + 8);

      //+unanimated ripples js scaled up circles
      noFill();
      stroke(20, 93, 34);
      strokeWeight(6);
      circle(vocal_pos_x, vocal_pos_y, 5 * vocal, ellipse_height);
      noFill();

      noFill();
      stroke(20, 93, 34);
      strokeWeight(7);
      circle(vocal_pos_x, vocal_pos_y, 7 * vocal, ellipse_height);
      noFill();
   }

 
   // DRUM bar is dark pastel green + Appears if Drum Value is >30
   if(drum>30){
     noFill();
     stroke(78, 22, 55);
     circle(ellipse_pos_x,height / 2+3 * ellipse_spacing, 3*drum, ellipse_height);
     noFill();
   }

 
   // BASS bar is light yellow green + using IF statements for placement + using LOOPS to Animate

   if (bass<=25) { //if bass is less than or equal to 25 it will appear on the bottom left of screen
    noFill();
    stroke(76, 59, 70);
    circle(70, 750, 4 * bass, ellipse_height);
    noFill();
    text("bass", ellipse_pos_x, height / 2 + 3 * ellipse_spacing + 8);
   }

   if (bass>30) {
    noFill();
    stroke(76, 59, 70);
    circle(150, 500, 4 * bass, ellipse_height);
    noFill();
    text("bass", ellipse_pos_x, height / 2 + 3 * ellipse_spacing + 8);
   }

      if (bass>50) {
    noFill();
    stroke(76, 59, 70);
    circle(359, 150, 4 * bass, ellipse_height);
    noFill();
    text("bass", ellipse_pos_x, height / 2 + 3 * ellipse_spacing + 8);
   }
  
 
   // OTHER bar is bright orange
     noFill();
     stroke(33, 91, 40);
     strokeWeight(5);
     circle(ellipse_pos_x, height / 2 + 4 * ellipse_spacing, 4 * other, ellipse_height);
     noFill();
     text("other", ellipse_pos_x, height / 2 + 4 * ellipse_spacing + 8);
     fill(255, 255, 0);

}