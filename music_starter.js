
var colour = 0;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  background(113,0,0,255)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;

   let background_colour1 = (214, 126, 67)
   let background_colour2 = (232, 149, 94)

   //colour = map(vocal,0,100, background_colour1, background_colour2); //1st ever MAP code

// changes 
   // vocal bar is deep orange
   noFill();
   stroke(166,60,6,255);
   strokeWeight(5);
   circle(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is dark green
   noFill();
   stroke(149,164,114,255);
   circle(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is light green
   noFill();
   stroke(200,224,135,255);
   circle(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is eggshell white
   noFill();
   stroke(195,111,9,255);
   strokeWeight(5);
   circle(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);


   for(let i = 0; i<5; i++) { //i++ is equivelant to i + 1
 
      ellipse(100, bar_height + (10*i), drum)

   }
}