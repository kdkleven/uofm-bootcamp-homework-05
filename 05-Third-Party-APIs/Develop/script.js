// Psuedocode

//DESIGN
// Create a list of 9 time slots (9am-5pm) 
// Each row contains a text display, text entry field, and save button (1 row 3 columns)
// Use insert row to build the schedule
    

//ROWS
// Display hardcoded times/text in col 1
// text entry field needs to contains text
// text entry field background changes based on time of day:

//LOGIC
// create object for hours, text fields, and save buttons
// if now before moment().startOf('hour').fromNow(), style text fields grey
// if now between moment().startOf('hour').fromNow() and moment().endtOf('hour').fromNow(), style RED
// if now after moment().endOf('hour').fromNow() style text fields green

//SAVING
// create JSON parser to store object to local storage
// when save is clicked, save corresponding text field value to local storage

$('#currentDay').text((moment().format('LLLL')));

var schedule = [
    {
        time: "9 AM",
        activity: "",
        saved: false
    },
    {
        time: "10 AM",
        activity: "",
        saved: false
    },
    {
        time: "11 AM",
        activity: "",
        saved: false
    },
    {
        time: "12 PM",
        activity: "",
        saved: false
    },
    {
        time: "1 PM",
        activity: "",
        saved: false
    },
    {
        time: "2 PM",
        activity: "",
        saved: false
    },
    {
        time: "3 PM",
        activity: "",
        saved: false
    },
    {
        time: "4 PM",
        activity: "",
        saved: false
    },
    {
        time: "5 PM",
        activity: "",
        saved: false
    }
]





$('.save').on("click", function() {
    
});