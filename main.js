var STAGEWIDTH = 1000;
var STAGEHEIGHT = 600;
var SIZE = 30;
var gameArray1 = new Array;
for (var i=0;i<=12;i++){
  gameArray1[i]=new Array();
  for (j=0;j<=12;j++) gameArray1[i][j]=-1;
}
var gameArray2 = new Array;
for (var i=0;i<=12;i++){
  gameArray2[i]=new Array();
  for (j=0;j<=12;j++) gameArray2[i][j]=-1;
}
// Init stage, layers and varibles
var stage = new Kinetic.MatrixStage({
  container: "container",
  width: STAGEWIDTH,
  height: STAGEHEIGHT
});
var backgroundLayer = new Kinetic.Layer();
var numberLayer = new Kinetic.Layer();
//Draw background layer
var background_rect = new Kinetic.Rect({
  x: 0,
  y: 0,
  width: STAGEWIDTH,
  height: STAGEHEIGHT,
  fill: "green",
  stroke: "black",
  strokeWidth: 10
});
backgroundLayer.add(background_rect);

// Draw tables
gameArray1[3][4] = 0;
var table_for_player1 = new Kinetic.Table({x:100,y:150,size:35});
table_for_player1.draw_table();
backgroundLayer.add(table_for_player1);
stage.add(backgroundLayer);

// Try to print number
var numbergroup1 = new Kinetic.NumberGroup();
numbergroup1.set_position(100, 150);
numbergroup1.draw_number(gameArray1, 35);
numberLayer.add(numbergroup1);
stage.add(numberLayer);
