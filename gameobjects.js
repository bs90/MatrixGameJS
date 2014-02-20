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
        for(var j=0;j<=9;j++){
         this.add(new Kinetic.Line({
           points: [this.attrs.x, this.attrs.y + size*i, this.attrs.x + size*9, this.attrs.y + size*i],
           stroke: "white",
           lineCap: "round",
           strokeWidth: (i%3 === 0 ? 3:1)
         }));
        }
      }
    }
  };
  Kinetic.Util.extend(Kinetic.Table, Kinetic.Group);
})();
