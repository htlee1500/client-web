$(document).ready(function () {
  sendToLogin();
  API.OnError(401, function (error) {
    sendToLogin(true);
  });
});

var sendToLogin = function (badToken) {
  // Redirect the user if they are not logged in
  if ((badToken === true || API.GetToken() === '') &&
    location.pathname !== '/user/login/' &&
    location.pathname !== '/user/register/') {
    location.href = '/user/login/';
  }
}
