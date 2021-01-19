// Psuedocode

//DESIG
// Create a list of 9 time slots (9am-5pm) 
// Each row contains a text display, event entry field, and save button (9 rows 3 columns)
// Use insert row to build the schedule?
    

//ROWS
// Display hardcoded times/text in col 1
// text entry field needs to contains text
// text entry field background changes based on time of day:

//LOGIC
// create object for hours, text fields, and save buttons
// if now before moment().startOf('hour').fromNow(), style text fields grey
// if now between moment().startOf('hour').fromNow() and moment().endtOf('hour').fromNow(), style RED
// if now after moment().endOf('hour').fromNow() style text fields green

//create a save function to write eventdata to local storage

//SAVING
// create JSON parser to store object to local storage
// when save is clicked, save corresponding text field value to local storage

$('#currentDay').text((moment().format('LLLL')));

var scheduleText = "";
var activityInput = document.querySelector('#activity-9');
var saveButton = document.querySelector('#button-9');

$('#button-9').on('click', function() {
    console.log("save clicked");
    scheduleText = activityInput.value;
    
    if (scheduleText =="") {
        return;
    }

    console.log(scheduleText);

    localStorage.setItem("schedule", scheduleText);
    //ADD: push to array
    // saveToArray();
    // saveToStorage();
    loadSchedule();
});

function loadSchedule() {
    console.log("load schedule");

    var storedSchedule = localStorage.getItem("schedule");
   
    if (storedSchedule !== null) {
       scheduleText = storedSchedule;
    }
    $('#activity-9').append(storedSchedule);
}

loadSchedule();