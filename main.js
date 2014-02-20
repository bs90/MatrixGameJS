var STAGEWIDTH = 800;
var STAGEHEIGHT = 500;
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
//var table_for_player1 = Kinetic.Table();
//table_for_player1.set_position(100, 100);
//table_for_player1.draw_table(10);
//backgroundLayer.add(table_for_player1);

stage.add(backgroundLayer);
