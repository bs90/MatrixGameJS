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
