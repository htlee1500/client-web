var NumappAPI = function () {
  this.server = location.origin;
  this.URLMaping = {
    'account': '/api/account/:id'
  };
  return this;
};

NumappAPI.prototype.Params = function () {
  var pairs = location.hash.substr(1).split('&').map(function (pair) {
    var kv = pair.split('=', 2);
    return [decodeURIComponent(kv[0]), kv.length === 2 ? decodeURIComponent(kv[1]) : null];
  });
  var asObject = {};
  for (var i = 0; i < pairs.length; i++) {
    asObject[pairs[i][0]] = pairs[i][1]
  }
  return asObject;
};

NumappAPI.prototype.GetCookie = function (cookieName) {
  var name = cookieName + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
};

NumappAPI.prototype.GenericRequest = function (url, object, callback) {
  var request = {
    type: 'GET',
    url: this.server + url,
    success: function (data) {
      if (typeof callback === 'function') {
        callback(data);
      }
    }
  };
  if (object !== null) {
    request['type'] = 'POST';
    request['contentType'] = 'application/json';
    request['data'] = JSON.stringify(object);
  }
  $.ajax(request);
};

NumappAPI.prototype.GetAccount = function (id, callback) {
  var url = this.URLMaping['account'];
  url = url.replace(/:id/g, id);
  this.GenericRequest(url, null, callback);
};

NumappAPI.prototype.SaveAccount = function (id, data, callback) {
  var url = this.URLMaping['account'];
  url = url.replace(/:id/g, id);
  this.GenericRequest(url, data, callback);
};

API = new NumappAPI();
