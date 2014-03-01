var STAGEWIDTH = 900;
var STAGEHEIGHT = 600;
var user1 = true;
var user2 = true;
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
var piecegroup1 = new Kinetic.PieceGroup({name:"piece",x:30,y:150,target_x:100,target_y:150,basesize:35,g_id:1,gamearray:gameArray1,numberGroup: numbergroup1,draggable: user1 ? true:false});
var piecegroup2 = new Kinetic.PieceGroup({name:"piece",x:835,y:150,target_x:485,target_y:150,basesize:35,g_id:2,gamearray:gameArray2,numberGroup: numbergroup2,draggable: user2 ? true:false});
pieceLayer.add(piecegroup1);
pieceLayer.add(piecegroup2);
stage.add(pieceLayer);

// Functions
stage.find(".piece").each(function(p){
  p.on('dragend', function() {
    this.parent.draw();
    x = this.attrs.x;
    y = this.attrs.y;
    target_x = this.attrs.target_x;
    target_y = this.attrs.target_y;
    find_position:
    for (var i=0;i<9;i++){
      for(var j=0;j<9;j+=3){
        xtarget = target_x + i*this.attrs.basesize;
        ytarget = target_y + j*this.attrs.basesize;
        if (x<xtarget+5 && x>xtarget-5 && y<ytarget+5 && y>ytarget-5 && this.attrs.gamearray[i+2][j+2]==-1 ){
          this.attrs.gamearray[i+2][j+2] = this.attrs.v1;
          this.attrs.gamearray[i+2][j+3] = this.attrs.v2;
          this.attrs.gamearray[i+2][j+4] = this.attrs.v3;
          this.attrs.numberGroup.redraw_number();
          stage.redraw_layer(numberLayer);
          this.destroyChildren();
          stage.redraw_layer(pieceLayer);
          if (this.attrs.g_id == 1){
            p1done = true;
          }else{
            p2done = true;
          }
          if (p1done && p2done){
            next_turn();
          }
          break find_position;
        }
      }
    }
    this.setX(this.attrs.g_id ==1 ? 30:835);
    this.setY(150);
    this.parent.draw();
  });
});

function run_from_socket(g_id,i,j){
  p = g_id==1 ? piecegroup1:piecegroup2;
  p.attrs.gamearray[i+2][j+2] = p.attrs.v1;
  p.attrs.gamearray[i+2][j+3] = p.attrs.v2;
  p.attrs.gamearray[i+2][j+4] = p.attrs.v3;
  p.attrs.numberGroup.redraw_number();
  stage.redraw_layer(numberLayer);
  p.destroyChildren();
  stage.redraw_layer(pieceLayer);
  if (p.attrs.g_id == 1){
    p1done = true;
  }else{
    p2done = true;
  }
  if (p1done && p2done){
    next_turn();
  }
}
function init_game(){
  turn = 0;
}
function next_turn(){
  turn ++;
  if(turn==28){
    alert("DONE!");
  }
  p1done = false;
  p2done = false;
  array = [Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)];
  piecegroup1.draw_number(array);
  piecegroup2.draw_number(array);
  stage.redraw_layer(pieceLayer);
}
// GAME PROCESS
var turn,array,p1done,p2done;
init_game();
next_turn();

