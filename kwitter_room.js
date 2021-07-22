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

  function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() 
{firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id= " + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML +=row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}