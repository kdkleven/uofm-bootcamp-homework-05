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

var s = {["9AM": "",  

]}
        9: "",
        10: "",
        11: "",
        12: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: ""

function createTable () {
    var i;
    for (var key in s) {
        if (s.hasOwnProperty(key)) {
            i = document.getElementByID('#schedule').insertRow(key);    
        }
        var y = i.insertCell(key);
        y.innerHTML = key;
    }
}

createTable();
