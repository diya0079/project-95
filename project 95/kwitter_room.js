var firebaseConfig = {
    apiKey: "AIzaSyC7o_4eNGKFQHy6CrLt_Sj26ikfKWU6zAk",
    authDomain: "class-test-97bd0.firebaseapp.com",
    databaseURL: "https://class-test-97bd0-default-rtdb.firebaseio.com",
    projectId: "class-test-97bd0",
    storageBucket: "class-test-97bd0.appspot.com",
    messagingSenderId: "951510016815",
    appId: "1:951510016815:web:f3c60324522f70db3a37da"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
     room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row; }); });
     }

    

     getData(); 
     function redirectToRoomName(name) { console.log(name);
           localStorage.setItem("room_name", name);
           window.location = "kwitter_page.html";
           } function logout() { localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
             window.location = "kwitter.html";
           }
