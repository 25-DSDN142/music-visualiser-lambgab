
var colour = 0;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

   let BG_lightness;
    //1. Colour MAP
   BG_lightness = map(vocal, 0,100, 20, 30); //~~How do I make it change within a hue? = change colour mode into HSL + State WHAT BG_lightness is before added into the coding + check numbers for any typos :/

  background(0, 100, BG_lightness);//(113,0,0,255); //deep brown red
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);
  
  colorMode(HSL)
  
   let ellipse_spacing = height / 10;
   let ellipse_height = width / 12;
   let ellipse_pos_x = width / 2;


// CHANGES 
  // 1. ~~ The background will change in relation to the vocals with Map from Deep brown to a lighter brown
  // 2. ~~Change position of ripple in relation to value of vocal/drum/bass/other
  // 3. Animating multiples ripples/ rings on every ellipse that fade out the farther they get



 //1. Colour MAP
   BG_lightness = map(vocal,0, 10, 22); //~~How do I make it change within a hue and not turn black and white?

 //RIPPLES

   // vocal bar is deep orange 
     noFill();
     stroke(20, 93, 34);
     strokeWeight(5);
     circle(ellipse_pos_x, height / 2 + 1 * ellipse_spacing, 4 * vocal, ellipse_height);
     fill(0);
     text("vocals", ellipse_pos_x, height / 2 + 1 * ellipse_spacing + 8);
 
   // drum bar is dark pastel green
     noFill();
     stroke(78, 22, 55);
     circle(ellipse_pos_x, height / 2 + 2 * ellipse_spacing, 4 * drum, ellipse_height);
     fill(0);
     text("drums", ellipse_pos_x, height / 2 + 2 * ellipse_spacing + 8);
 
   // bass bar is light yellow green
     noFill();
     stroke(76, 59, 70);
     circle(ellipse_pos_x, height / 2 + 3 * ellipse_spacing, 4 * bass, ellipse_height);
     fill(0);
     text("bass", ellipse_pos_x, height / 2 + 3 * ellipse_spacing + 8);
 
   // other bar is bright orange
     noFill();
     stroke(33, 91, 40);
     strokeWeight(5);
     circle(ellipse_pos_x, height / 2 + 4 * ellipse_spacing, 4 * other, ellipse_height);
     fill(0);
     text("other", ellipse_pos_x, height / 2 + 4 * ellipse_spacing + 8);
     fill(255, 255, 0);
 
   // display "words"
     fill(20, 93, 34);
     stroke(20, 93, 34);
     textAlign(CENTER);
     textSize(vocal);
     text(words, width/2, height/3);

}