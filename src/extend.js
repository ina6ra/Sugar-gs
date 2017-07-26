//var Array;
//var Date;
//var Number;
//var Object;
//var String;

var GAS = {

  // extend method
  extend: function(options) {
    if(options == null) {
      options = {
        namespaces: [Array, Date, Number, Object, String]
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
      }
    });
  },

  // createGetUrl method
  createGetUrl: function(url, payload) {
    payload = Sugar.Object.clone(payload);
    payload = Sugar.Object.toQueryString(payload);
    return (payload == '') ? url : url+'?'+payload;
  },

  // fetch method
  fetch: function(url, options) {
    if(options == null) options = {};
    if(options['method'] == null || options['method'].match(/get/i) != null) {
      url = this.createGetUrl(url, options['payload']);
      delete(options['payload']);
    }
    return UrlFetchApp.fetch(url, options);
  }
}
