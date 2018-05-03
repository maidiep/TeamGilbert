console.log("kacie");
// Google api console clientID and apiKey 

var clientId = '413861687921-hbe918pligkpjblpd16lntg8qm5oh0f7.apps.googleusercontent.com';
var apiKey = 'AIzaSyASMBJjaHDc74pwrMHMVwtK-A1HJooI0xQ';

// enter the scope of current project (this API must be turned on in the Google console)
  var scopes = 'https://www.googleapis.com/auth/calendar';


// OAuth2 functions
    function handleClientLoad() {
          gapi.client.setApiKey(apiKey);
          window.setTimeout(checkAuth, 1);
       }

//To authenticate
 function checkAuth() {
   gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: true }, handleAuthResult);
       }

// This is the resource we will pass while calling api function
var resource = {
           "summary": "My Event",
           "start": {
               "dateTime": today
           },
           "end": {
               "dateTime": twoHoursLater
           },
           "description":"We are organizing events",
           "location":"US",
       };

function makeApiCall(){
gapi.client.load('calendar', 'v3', function () { // load the calendar api (version 3)
               var request = gapi.client.calendar.events.insert
               ({
                   'calendarId': 'e92tdjg4rf053q68upvbcqbrcc@group.calendar.google.com', 
// calendar ID which id of Google Calendar where you are creating events. this can be copied from your Google Calendar user view.

                   "resource": resource 	// above resource will be passed here
               });                
  })};



  
