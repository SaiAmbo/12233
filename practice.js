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
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({
            purpose : "adding user"
        });
}