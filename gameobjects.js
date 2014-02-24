// Table
(function() {
  Kinetic.Table = function(config) {
    this._initTable(config);
  };
  Kinetic.Table.prototype = {
      _initTable: function(config) {
      Kinetic.Group.call(this, config);
    },
    set_position : function(x, y){
      this.attrs.x = x;
      this.attrs.y = y;
    },
    draw_table : function(size){
      for(var i=0;i<=9;i++){
       this.add(new Kinetic.Line({
         points: [0, size*i, size*9, size*i],
         stroke: "white",
         lineCap: "round",
         strokeWidth: (i%3 === 0 ? 3:1)
       }));
       this.add(new Kinetic.Line({
         points: [size*i, 0, size*i, size*9],
         stroke: "white",
         lineCap: "round",
         strokeWidth: (i%3 === 0 ? 3:1)
       }));
      }
    }
  };
  Kinetic.Util.extend(Kinetic.Table, Kinetic.Group);
})();
// NumberGroup
(function() {
  Kinetic.NumberGroup = function(config) {
    this._initNumberGroup(config);
  };
  Kinetic.NumberGroup.prototype = {
      _initNumberGroup: function(config) {
      Kinetic.Group.call(this, config);
    },
    set_position : function(x, y){
      this.attrs.x = x;
      this.attrs.y = y;
    },
    draw_number : function(array_number, size){
      for (var i=2;i<=10;i++){
        for (var j=2;j<=10;j++){
          if (array_number[i][j] != -1){
　　　　　  this.add(new Kinetic.Text({
              x: 12+(i-2)*size,
              y: 6+(j-2)*size,
              text: array_number[i][j],
              fontSize: 22,
              fontFamily: "Calibri",
              fill: "white"
          }));
          }
        }
      }
    },
    redraw_number : function(array_number, size){
      this.removeChildren();
      this.draw_number(array_number, size);
    }
  };
  Kinetic.Util.extend(Kinetic.NumberGroup, Kinetic.Group);
})();
// GameStage
(function() {
  Kinetic.MatrixStage = function(config) {
    this._initMatrixStage(config);
  };
  Kinetic.MatrixStage.prototype = {
      _initMatrixStage: function(config) {
      Kinetic.Stage.call(this, config);
    },
    redraw_layer : function(layer){
      this.remove(layer);
      this.add(layer);
    }
  };
  Kinetic.Util.extend(Kinetic.MatrixStage, Kinetic.Stage);
})();
