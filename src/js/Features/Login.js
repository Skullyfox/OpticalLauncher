const http = require('http'),
      loginButton = document.querySelector('.loginButton'),
      usernameField = document.querySelector('.usernameInput'),
      passwordField = document.querySelector('.passwordInput'),
      axios = require('axios');

let username = "";
let password = "";

loginButton.addEventListener('click',()=>{
  username = usernameField.value;
  password = passwordField.value;
 
  axios.get('http://gizeh.ddns.net/api/token?username='+username+'&password='+password)
    .then(response => {
      let token = response.data.token;
      axios.get('http://gizeh.ddns.net/api/user?token='+token)
        .then(response =>{
          console.log(response.data)
        })
    })
    .catch(error => {
      console.log(error);
    });

});