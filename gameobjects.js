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
              x: 14+(i-2)*size,
              y: 6+(j-2)*size,
              text: array_number[i][j],
              fontSize: 22,
              fontFamily: "Calibri",
              fill: "white"
          }));
          }
        }
      }
    }
  };
  Kinetic.Util.extend(Kinetic.NumberGroup, Kinetic.Group);
})();
