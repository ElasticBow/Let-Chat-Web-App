//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDjMyM9YzVcty2Rcf7rtkrJ3b0nAaYFFmY",
    authDomain: "lets-chat-web-app-9bfb7.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-9bfb7-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-9bfb7",
    storageBucket: "lets-chat-web-app-9bfb7.appspot.com",
    messagingSenderId: "50012822852",
    appId: "1:50012822852:web:92642f5950867e3792cb11",
    measurementId: "G-B8XZYQ3ZPQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

  user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}