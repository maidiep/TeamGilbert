var vanillaJavaTotal;
var caramelCaseTotal;
var cookiesAndCreamTotal;
var rainbowUnicodeTotal;
var customerEmail;
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

var customerName;
console.log(customerName);
var total;
var newOrder;
//<h4>Your Order</h4>
//<h3 id="customer-name"></h3>
//<h2 id="vanillaJava-total"></h2>
//<h2 id="caramelCase-total"></h2>
//<h2 id="cookiesAndCream-total"></h2>
//<h2 id="rainbowUnicode-total"></h2>
//<h1 id="total"></h1>
$(".btn").on("click", function() {
	console.log("monkey");
	$(".form-box").css({
		display: "inline-block",
		transition: "opacity .3s ease-in"
	});
	$(".order-receipt").css({
		opacity: "1",
		transition: "opacity .3 ease-in"
	})
});

  $("#submit").on("click", function(event) {
	event.preventDefault();
	vanillaJavaTotal = parseInt($("#vanillaJava-amount").val());
	caramelCaseTotal = parseInt($("#caramelCase-amount").val());
	cookiesAndCreamTotal = parseInt($("#cookiesAndCream-amount").val());
	rainbowUnicodeTotal = parseInt($("#rainbowUnicode-amount").val());
	customerEmail = $("#email-input").val();
	total = (vanillaJavaTotal + caramelCaseTotal + cookiesAndCreamTotal + rainbowUnicodeTotal);
	customerName = $("#name-input").val();
	$("#customer-name").text(customerName);
	$("#email").text(customerEmail);
	$("#vanillaJava-total").text("vanillaJava Total: " + vanillaJavaTotal);
	$("#caramelCase-total").text("caramelCase Total: " + caramelCaseTotal);
	$("#cookiesAndCream-total").text("cookiesAndCream Total: " + cookiesAndCreamTotal);
	$("#rainbowUnicode-total").text("rainbowUnicode Total: " + rainbowUnicodeTotal);
	$("#total").text("Total: " + total);
	newOrder = { 
		Name: customerName,
		Email: customerEmail,
		vanillaJava: vanillaJavaTotal,
		caramelCase: caramelCaseTotal,
		cookiesAndCream: cookiesAndCreamTotal,
		rainbowUnicode: rainbowUnicodeTotal,
	}
	var database = firebase.database();
	database.ref().push(newOrder);
});


$(".btn").on("click", function() {
	$(".form-box").css({
		display: "inline-block",
		transition: "opacity .3s ease-in"
	});
	$(".order-receipt").css({
		opacity: "1",
		transition: "opacity .3 ease-in"
	})
});