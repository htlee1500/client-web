var NumappAPI = function () {
  this.server = location.origin;
  this.URLMaping = {
    'account': '/api/account/:id'
  };
  return this;
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
