const firebaseConfig = {
      apiKey: "AIzaSyCEhRNyElqlLG8DYJG0v-Ibjqhohpxvva4",
      authDomain: "kwitter-c93-71dee.firebaseapp.com",
      databaseURL: "https://kwitter-c93-71dee-default-rtdb.firebaseio.com",
      projectId: "kwitter-c93-71dee",
      storageBucket: "kwitter-c93-71dee.appspot.com",
      messagingSenderId: "636670213553",
      appId: "1:636670213553:web:d2b3b329b1d34dbe4b1190"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

 function addRoom()
 {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });

       localStorage.setItem("room_name" , room_name);

       window.location = "kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });
});

}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
