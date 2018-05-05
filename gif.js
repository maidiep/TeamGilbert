
 
 
 // Initial array of desserts
 var items = ["cupcake", "cookie", "cake"];


   //********************* function for displaying items data
 function renderButtons() {

   // Deleting the item buttons prior to adding new item buttons
   // (this is necessary otherwise we will have repeat buttons)
   $("#items-view").empty();

   // Looping through the array of items
   for (var i = 0; i < items.length; i++) {

     // Then dynamicaly generating buttons for each item in the array.
     var a = $("<button>");
     // Adding a class
     a.addClass("item btn btn-default");
     // Adding a data-attribute with a value of the items at index i
     // a.addClass("btn btn-warning");
     a.attr("data-name", items[i]);
     // Providing the button's text with a value of the items at index i
     a.text(items[i]);
     // Adding the button to the HTML
     $("#items-view").append(a);
   }
 }

//********************** onclick to render gifs
 $("#gifs-appear-here").on("clilck", function() {
   var dessert = $("#item-input").val().trim();
   items.push(dessert);
   renderButtons();
 });

   //******************* function handles events where one button is clicked
   $("#add-item").on("click", function (event) {
     // prevent submit button from refreshing the page
     event.preventDefault();

     // Grab the text from the input box
     var item = $("#item-input").val().trim();
     // The item from the textbox is then added to the array
     items.push(item);
     console.log(items);

     // calling renderButtons which handles the processing of our item array
     renderButtons();

     $("#item-input").val("");
   });



 // Function for dumping the JSON content for each button into the div
 function displayItemGif() {

   var item = $(this).attr("data-name");
   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + item + "&api_key=H8A80HuaNbDokHUJ6pYNl7HnLiHB711M&limit=5";

   $.ajax({
     url: queryURL,
     method: "GET"
   }).then(function (response) {

     // Storing an array of results in the results variable
     var results = response.data;

     // Looping over every result item
     for (var i = 0; i < results.length; i++) {

       // Only taking action if the photo has an appropriate rating
       if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
         // Creating a div with the class "item"
         var gifDiv = $("<div class='gif'>");

         // Storing the result item's rating
         var rating = results[i].rating;

         // Creating a paragraph tag with the result item's rating
         var p = $("<p>").text("Rating: " + rating);

         // Creating an image tag
         var itemImage = $("<img>");

         // Giving the image tag an src attribute of a proprty pulled off the
         // result item
         itemImage.attr("src", results[i].images.fixed_height_still.url);
         itemImage.attr("data-still", results[i].images.fixed_height_still.url);
         itemImage.attr("data-state", "still");
         itemImage.addClass("gif");
         itemImage.attr("data-animate", results[i].images.fixed_height.url);

         console.log("still image" + results[i].images.fixed_height.url);
         console.log("still image" + results[i].images.fixed_height_still.url);

         // Appending the paragraph and itemImage we created to the "gifDiv" div we created
         gifDiv.append(p);
         gifDiv.append(itemImage);

         // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
         $("#gifs-appear-here").prepend(gifDiv);
       }
     }
   });
 }

//***********Animating and Pausing Gifs
$(document).on("click", ".gif", function(){
 console.log("hello world")
    var state = $(this).attr("data-state");
 
    if(state === "still"){
      var animate = $(this).attr("data-animate");
      $(this).attr("src", animate);
      // changing the current data-state to animate now
      $(this).attr("data-state", "animate");
 
    }
 
    if(state === "animate") {
        var still = $(this).attr("data-still");
        $(this).attr("src", still);
        // changing the current data-state to still now
        $(this).attr("data-state", "still");
    }
 
 });


   // Function for displaying the item info
   $(document).on("click", ".item", displayItemGif);

   //************* Calling the renderButtons function at least once to display the initial list of items
   renderButtons();

   //  $(document).on("click", ".item", alertItemName);


 