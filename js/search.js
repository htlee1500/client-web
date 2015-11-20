$(document).ready(function () {
  displaySearch();
  var user = API.User();
  $('#myAccount').html(user['id']);
  $('#myAccount').click(function (event) {
    window.location.hash = '#id=' + user['id'];
    displaySearch();
  });
  $('#account_search').keyup(function (event) {
    window.location.hash = '#id=' + $('#account_search').val();
    displaySearch();
  });
  $('#homeLink').click(function (event) {
    $('#account_search').val('');
    displayAccount(undefined);
    lastSearch = '';
  });
});

// Without lastSearch functionality Ctrl-a does not work
var lastSearch = '';
var displaySearch = function () {
  var id = API.PageParams()['id'];
  if (lastSearch === id) {
    return;
  }
  displayAccount(id);
  $('#account_search').val(id);
  lastSearch = id;
};
