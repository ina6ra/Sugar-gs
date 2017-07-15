//var Array;
//var Date;
//var Number;
//var Object;
//var String;

function extend(options) {
  if(options == null) {
    options = {
      namespaces: [Array, Date, Number, Object, String]
    };
  }
  if(options.namespaces == null) return false;
  options.namespaces.forEach(function(func) {
    switch(func.name) {
      case 'Array': Array = Sugar.Array; break;
      case 'Date': Date = Sugar.Date; break;
      case 'Number': Number = Sugar.Number; break;
      case 'Object': Object = Sugar.Object; break;
      case 'String': String = Sugar.String; break;
    }
  });
}
