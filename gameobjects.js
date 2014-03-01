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

// Table
(function() {
  Kinetic.Table = function(config) {
    this._initTable(config);
  };
  Kinetic.Table.prototype = {
    _initTable: function(config) {
      Kinetic.Group.call(this, config);
    },
    draw_table : function(){
      var size = this.attrs.basesize;
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
    draw_number : function(){
      array_number = this.attrs.numberarray;
      size = this.attrs.basesize;
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
    redraw_number : function(){
      this.removeChildren();
      this.draw_number();
    }
  };
  Kinetic.Util.extend(Kinetic.NumberGroup, Kinetic.Group);
})();

// PieceGroup
(function() {
  Kinetic.PieceGroup = function(config) {
    this._initPieceGroup(config);
    this.on("mouseover",function(){
      document.body.style.cursor = "pointer";
    });
    this.on("mouseout",function(){
      document.body.style.cursor = "default";
    });
  };
  Kinetic.PieceGroup.prototype = {
    _initPieceGroup: function(config) {
      Kinetic.Group.call(this, config);
    },
    draw_number : function(array){
      size = this.attrs.basesize;
      this.attrs.v1 = array[0];
      this.attrs.v2 = array[1];
      this.attrs.v3 = array[2];
      for (var i=0;i<3;i++){
        this.add(new Kinetic.Rect({
          x: 0,
          y: size*i,
          width: size,
          height: size,
          fill: this.attrs.g_id == 1 ? "red":"blue"
        }));
  　　　this.add(new Kinetic.Text({
          x: 12,
          y: 6+i*size,
          text: array[i],
          fontSize: 22,
          fontFamily: "Calibri",
          fill: "white"
        }));
      }
    }
  };
  Kinetic.Util.extend(Kinetic.PieceGroup, Kinetic.Group);
})();

