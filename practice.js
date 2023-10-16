const firebaseConfig = {
    apiKey: "AIzaSyBYwah6ozD-pkTU0nHtSgeV0WU5BxhFk_s",
    authDomain: "kwitter-82019.firebaseapp.com",
    databaseURL: "https://kwitter-82019-default-rtdb.firebaseio.com",
    projectId: "kwitter-82019",
    storageBucket: "kwitter-82019.appspot.com",
    messagingSenderId: "844596089625",
    appId: "1:844596089625:web:f4e825902f3b2447072b88"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser() {
    username=document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        Get_Texty:"Tom"
    })
}