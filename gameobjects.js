(function(){
  Array.prototype.check_same = function(){
    for(var i=1;i<this.length;i++){
      if(this[0]==-1 || this[i]!=this[0]) return false;
    }
    return true;
  }
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
      this.destroyChildren();
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
      this.destroyChildren();
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
      this.destroyChildren();
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
          fill: "#336600",
          stroke: "white"
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

// PointGroup
(function() {
  Kinetic.PointGroup = function(config) {
    this._initPointGroup(config);
  };
  Kinetic.PointGroup.prototype = {
    _initPointGroup: function(config) {
      Kinetic.Group.call(this, config);
    },
    draw_point : function(){
      this.destroyChildren();
      this.attrs.point = 0;
      array = this.attrs.gamearray;
      size = this.attrs.basesize;
      for (var i=2;i<=10;i++){
        for (j=2;j<=10;j++){
          // -
          if ([array[i][j],array[i-1][j],array[i-2][j]].check_same()
          ||[array[i][j],array[i+1][j],array[i+2][j]].check_same()
          ||[array[i][j],array[i-1][j],array[i+1][j]].check_same()){
            this.attrs.point += array[i][j]==0 ? 10:array[i][j];
            this.add(new Kinetic.Line({
              points: [(i-2)*size,(j-2)*size+size/2,(i-1)*size,(j-2)*size+size/2],
              stroke: "white",
              lineCap: "round",
              strokeWidth: 1
            }));
          }
          // |
          if ([array[i][j],array[i][j-1],array[i][j-2]].check_same()
          ||[array[i][j],array[i][j+1],array[i][j+2]].check_same()
          ||[array[i][j],array[i][j-1],array[i][j+1]].check_same()){
            this.attrs.point += array[i][j]==0 ? 10:array[i][j];
            this.add(new Kinetic.Line({
              points: [(i-2)*size+size/2,(j-2)*size,(i-2)*size+size/2,(j-1)*size],
              stroke: "white",
              lineCap: "round",
              strokeWidth: 1
            }));
          }
          // \
          if ([array[i][j],array[i-1][j-1],array[i-2][j-2]].check_same()
          ||[array[i][j],array[i+1][j+1],array[i+2][j+2]].check_same()
          ||[array[i][j],array[i-1][j-1],array[i+1][j+1]].check_same()){
            this.attrs.point += array[i][j]==0 ? 10:array[i][j];
            this.add(new Kinetic.Line({
              points: [(i-2)*size,(j-2)*size,(i-1)*size,(j-1)*size],
              stroke: "white",
              lineCap: "round",
              strokeWidth: 1
            }));
          } 
          // /
          if ([array[i][j],array[i+1][j-1],array[i+2][j-2]].check_same()
          ||[array[i][j],array[i-1][j+1],array[i-2][j+2]].check_same()
          ||[array[i][j],array[i-1][j+1],array[i+1][j-1]].check_same()){
            this.attrs.point += array[i][j]==0 ? 10:array[i][j];
            this.add(new Kinetic.Line({
              points: [(i-1)*size,(j-2)*size,(i-2)*size,(j-1)*size],
              stroke: "white",
              lineCap: "round",
              strokeWidth: 1
            }));
          }

        }
      }
      // Draw point
      this.add(new Kinetic.Text({
        x: 0,
        y: 320,
        text: this.attrs.point,
        fontSize: 50,
        fontFamily: "Calibri",
        fill: "white"
      }));
    }
  };
  Kinetic.Util.extend(Kinetic.PointGroup, Kinetic.Group);
})();

