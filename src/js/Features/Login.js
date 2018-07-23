const http = require('http'),
      loginButton = document.querySelector('.loginButton'),
      usernameField = document.querySelector('.usernameInput'),
      passwordField = document.querySelector('.passwordInput'),
      usernamePlace = document.querySelector('#username'),
      form = document.querySelector('.form'),
      lobby = document.querySelector('.Lobby'),
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
          if(response.data.game_token){
            usernamePlace.innerText = username
            form.classList.add('off')
            lobby.classList.remove('off')
          }else{
            
          }

        })
    })

    .catch(error => {

      console.log(error);

    });

});