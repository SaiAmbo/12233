//YOUR FIREBASE LINKS
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

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      messang:msg,
      like:0
});
document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="span class='glyphicon-thumbs-up'>Like: "+Like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes      
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}