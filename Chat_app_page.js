// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBuykrU6zuK_PAAqdK0suPL5pSApoi-6JU",
    authDomain: "chat-app-5dc7b.firebaseapp.com",
    databaseURL: "https://chat-app-5dc7b-default-rtdb.firebaseio.com",
    projectId: "chat-app-5dc7b",
    storageBucket: "chat-app-5dc7b.appspot.com",
    messagingSenderId: "173554177331",
    appId: "1:173554177331:web:6ed79dd27975eb60f15a46"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("username");
  room_name =localStorage.getItem("room_name");
  
  function send(){
      var message =document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name:username,
         message:msg, 
         like:0
      }) 
  }