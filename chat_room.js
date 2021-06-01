var firebaseConfig = {
      apiKey: "AIzaSyABqytHw0OesqCT5By4vcu4u2xxGgHXtRE",
      authDomain: "chat-website-c3cf9.firebaseapp.com",
      databaseURL: "https://chat-website-c3cf9-default-rtdb.firebaseio.com",
      projectId: "chat-website-c3cf9",
      storageBucket: "chat-website-c3cf9.appspot.com",
      messagingSenderId: "187897403662",
      appId: "1:187897403662:web:e7267c7ec7d0f3d5d45f5f",
      measurementId: "G-J4PBFZNT4F"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
            purpose: "adding user"
      });
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();