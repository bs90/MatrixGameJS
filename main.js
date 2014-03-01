var STAGEWIDTH = 900;
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
var pieceLayer = new Kinetic.Layer();
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
var table_for_player1 = new Kinetic.Table({x:100,y:150,basesize:35});
table_for_player1.draw_table();
backgroundLayer.add(table_for_player1);
var table_for_player2 = new Kinetic.Table({x:485,y:150,basesize:35});
table_for_player2.draw_table();
backgroundLayer.add(table_for_player2);
stage.add(backgroundLayer);

// Init numberLayer
var numbergroup1 = new Kinetic.NumberGroup({x:100,y:150,numberarray:gameArray1,basesize:35});
var numbergroup2 = new Kinetic.NumberGroup({x:485,y:150,numberarray:gameArray2,basesize:35});
numberLayer.add(numbergroup1);
numberLayer.add(numbergroup2);
stage.add(numberLayer);

// Init pieceLayer
var piecegroup1 = new Kinetic.PieceGroup({x:30,y:150,basesize:35,draggable: true});
pieceLayer.add(piecegroup1);
var piecegroup2 = new Kinetic.PieceGroup({x:835,y:150,basesize:35,draggable: true});
pieceLayer.add(piecegroup2);
stage.add(pieceLayer);

array = [4,5,6];
piecegroup1.draw_number(array);
stage.redraw_layer(pieceLayer);
