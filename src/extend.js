var Object;
var Array;

function extend(options) {
  if(options == null) {
    options = {
      namespaces: [Array, Object]
    };
  }
  if(options.namespaces == null) return false;
  options.namespaces.forEach(function(func) {
    switch(func.name) {
      case 'Object': Object = Sugar.Object; break;
      case 'Array': Array = Sugar.Array; break;
    }
  });
}
