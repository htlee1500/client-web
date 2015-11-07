$(document).ready(function () {
  // Redirect the user if they are not logged in
  if (API.GetToken() === '' &&
    location.pathname !== '/user/login/' &&
    location.pathname !== '/user/register/') {
    location.href = '/user/login/';
  }
});
