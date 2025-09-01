
var colour = 0;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  background(113,0,0,255); //deep brown red
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);
  
   let ellipse_spacing = height / 10;
   let ellipse_height = width / 12;
   let ellipse_pos_x = width / 2;

// CHANGES 
  // 1. ~~ The background will change with the vocals with Map from Deep brown to a lighter brown
  // 2. ~~Each ellipse is a ripple that appear on random spots on screen (depending on volume up or down the screen) to make it look like water ripples
  // 3. Animating multiples ripples/ rings on every ellipse that fade out the farther they get



 //1. Colour MAP
   colour = map(vocal,0,100, 0, 255); //1st ever MAP code

 //RIPPLES

   // vocal bar is deep orange 
     noFill();
     stroke(166,60,6,255);
     strokeWeight(5);
     circle(ellipse_pos_x, height / 2 + 1 * ellipse_spacing, 4 * vocal, ellipse_height);
     fill(0);
     text("vocals", ellipse_pos_x, height / 2 + 1 * ellipse_spacing + 8);
 
   // drum bar is dark pastel green
     noFill();
     stroke(149,164,114,255);
     circle(ellipse_pos_x, height / 2 + 2 * ellipse_spacing, 4 * drum, ellipse_height);
     fill(0);
     text("drums", ellipse_pos_x, height / 2 + 2 * ellipse_spacing + 8);
 
   // bass bar is light yellow green
     noFill();
     stroke(200,224,135,255);
     circle(ellipse_pos_x, height / 2 + 3 * ellipse_spacing, 4 * bass, ellipse_height);
     fill(0);
     text("bass", ellipse_pos_x, height / 2 + 3 * ellipse_spacing + 8);
 
   // other bar is bright orange
     noFill();
     stroke(195,111,9,255);
     strokeWeight(5);
     circle(ellipse_pos_x, height / 2 + 4 * ellipse_spacing, 4 * other, ellipse_height);
     fill(0);
     text("other", ellipse_pos_x, height / 2 + 4 * ellipse_spacing + 8);
     fill(255, 255, 0);
 
   // display "words"
     fill(166,60,6,255);
     stroke(166,60,6,255);
     textAlign(CENTER);
     textSize(vocal);
     text(words, width/2, height/3);


     //LOOPS
   for(let i = 0; i<5; i++) { //i++ is equivelant to i + 1
 
      noFill();
      ellipse(100, ellipse_height + (10*i), drum)

   }
}