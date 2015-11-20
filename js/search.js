$(document).ready(function () {
  var pageParams = API.PageParams();
  setSearchedAccount(pageParams['id']);
  $('#account_search').keyup(function (event) {
    window.location.hash = '#id=' + $('#account_search').val();
    var pageParams = API.PageParams();
    setSearchedAccount(pageParams['id']);
  });
});

var setSearchedAccount = function (id) {
  if (typeof id !== 'undefined') {
    API.GetAccount(id,
      function (data) {
        SetResult(data);
      },
      function (error) {
        ClearResult();
      }
    );
  }
};
