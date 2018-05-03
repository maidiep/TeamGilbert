
$(document).ready(function () {
    $(".form").show();
     $("#thankyou").hide();
  });

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB9Bbini1xCoCSVVCFe8IiibqekOJZ3eNI",
    authDomain: "teamprojectone-30a82.firebaseapp.com",
    databaseURL
: "https://teamprojectone-30a82.firebaseio.com",
    projectId: "teamprojectone-30a82",
    storageBucket: "teamprojectone-30a82.appspot.com",
    messagingSenderId: "982341792660"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //button for adding user subscription
  $("#add-user").on("click", function(event) {
      event.preventDefault();
       

    // gets user input from input box
    var userFirst = $("#first-name-input").val().trim();
    var userLast = $("#last-name-input").val().trim();
    var userEmail = $("#email-input").val().trim();

    // creates local temporary object for holding data
    var newUser = {
        firstname: userFirst,
        lastname: userLast,
        email: userEmail,
    };

    // uploads user to database
    database.ref().push(newUser);

    //log to console
    console.log(newUser.firstname);
    console.log(newUser.lastname);
    console.log(newUser.email);

    // clears input boxes
    $("#first-name-input").val("");
    $("#last-name-input").val("");
    $("#email-input").val("");

    // send user to homepage
    $(".form").hide();
    $("#thankyou").show();
  });

//  

