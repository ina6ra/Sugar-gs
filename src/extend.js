//var Array;
//var Date;
//var Number;
//var Object;
//var String;

var GAS = {
  extend: function(options) {
    if(options == null) {
      options = {
        namespaces: [Array, Date, Number, Object, String, 'GAS']
      };
    }
    if(options.namespaces == null) return false;
    var name = '';
    options.namespaces.forEach(function(func) {
      name = (typeof(func) == 'string') ? func : func.name;
      switch(name) {
        case 'Array': Array = Sugar.Array; break;
        case 'Date': Date = Sugar.Date; break;
        case 'Number': Number = Sugar.Number; break;
        case 'Object': Object = Sugar.Object; break;
        case 'String': String = Sugar.String; break;
        case 'GAS': Sugar.GAS = GAS; break;
      }
    });
  }
}
