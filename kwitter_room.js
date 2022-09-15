const firebaseConfig = {
      apiKey: "AIzaSyCBbN7V6JIZqBObXeWL3vr0W3WR5_8Vs5U",
      authDomain: "coding-78a2f.firebaseapp.com",
      databaseURL: "https://coding-78a2f-default-rtdb.firebaseio.com",
      projectId: "coding-78a2f",
      storageBucket: "coding-78a2f.appspot.com",
      messagingSenderId: "272428798203",
      appId: "1:272428798203:web:d63444e2526191ab01605e"
    };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name-"+ Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function addRoom()
{
      console.log("hello");
      room_name=document.getElementById("room_name").value;
      console.log(room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}