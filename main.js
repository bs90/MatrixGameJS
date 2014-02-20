var STAGEWIDTH = 1000;
var STAGEHEIGHT = 600;
var SIZE = 30;
// Init stage, layers and varibles
var stage = new Kinetic.Stage({
  container: "container",
  width: STAGEWIDTH,
  height: STAGEHEIGHT
});
var backgroundLayer = new Kinetic.Layer();
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
var table_for_player1 = new Kinetic.Table();
table_for_player1.set_position(100,150);
table_for_player1.draw_table(35);
backgroundLayer.add(table_for_player1);
var table_for_player2 = new Kinetic.Table();
table_for_player2.set_position(585,150);
table_for_player2.draw_table(35);
backgroundLayer.add(table_for_player2);
stage.add(backgroundLayer);
