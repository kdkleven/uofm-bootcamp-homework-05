// ------------------------------------
//
// Welcome to my Work Day Scheduler
//
// ------------------------------------


//Display the current date and time
var currentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

// Update the time every minute
function dayTime() {

    // set the current time format
    currentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

    // Empty the curent day element
    $('#currentDay').empty();

    // Display the current time
    $('#currentDay').text(currentTime);

}

// invoke the function to eliminate a 1s gap when the page loads
dayTime();

// call dayTime every second
setInterval(dayTime, 1000);

// Declare an object to store the time and user's activities
var schedule = [
    {
        time: "0900",
        activity: ""
    },
    {
        time: "1000",
        activity: ""
    },
    {
        time: "1100",
        activity: ""
    },
    {
        time: "1200",
        activity: ""
    },
    {
        time: "1300",
        activity: ""
    },
    {
        time: "1400",
        activity: ""
    },
    {
        time: "1500",
        activity: ""
    },
    {
        time: "1600",
        activity: ""
    },
    {
        time: "1700",
        activity: ""
    }
];

// Clear the time slots of all activity slots and local storage
function clearSchedule() {

    localStorage.clear();
    $('.activity').empty();

}

// display the time properties from the schedule object in the corresponding elements
function displayTimes() {

    // iterate through the schedule object and display the corresponding value in the time slot on the page
    for (var t = 0; t < schedule.length; t++) {

        // set the format for the currentTime
        $('#time-' + t).text(moment(schedule[t].time, "HH").format("h A"));

    }
}

// determine the color of each activity slot based on the current time
function colorChanger() {

    // iterate through the schedule object 
    for (var c = 0; c < schedule.length; c++) {

        // set the currentTime variable's format to military hours
        currentTime = moment().format('HH');

        // declare a variable to represent each time property within the schedule object
        var d = schedule[c].time;

        // declare a variable to represent each iteration of the activity elements
        var a = $('#activity-' + c);

        // divide the object's time value by 100 to get two digits (representing hours)
        d = schedule[c].time / 100;

        // determine if the time value in the object is less than, greater than, or equal to the current time
        if (d < currentTime) {

            // apply grey background coloring to activity slots for previous hours
            a.addClass('past');
            a.removeClass('present');
            a.removeClass('future');

        }
        else if (d > currentTime) {

            // apply green background coloring to activity slots for future hours
            a.removeClass('past');
            a.removeClass('present');
            a.addClass('future');

        }
        else {

            // apply red background coloring to activity slots for the current hour
            a.removeClass('past');
            a.addClass('present');
            a.removeClass('future');

        }
    }
}

// check if the activity entered has already been written to local storage
function checkActivity(btnID) {

    // declare variable containing the user's activity associated with the save button they clicked
    var currentActivity = $('#activity-' + btnID).val().trim();

    // determine what to do if there is existing schedule data in local storage
    if (localStorage.getItem("schedule") !== null) {

        // data is present, so capture what's in local storage
        var scheduleCheck = JSON.parse(localStorage.getItem("schedule"));

        // assign a copy of the activity value from local storage to the currentActivity
        scheduleCheck[btnID].activity = currentActivity;

        // save the copy of existing local storage data back into local storage
        saveSchedule(scheduleCheck);

    } else {

        // data is not present, so write the user's activity to the object
        schedule[btnID].activity = currentActivity;

        // write the object to local storage
        saveSchedule(schedule);

    }

    // render the schedule to the page
    renderSchedule();

}

// save the schedule to local storage
function saveSchedule(scheduleJSON) {

    // set the variable passed in from scheduleCheck to local storage
    localStorage.setItem("schedule", JSON.stringify(scheduleJSON));

}

// render the schedul to the page
function renderSchedule() {

    // display times and apply colorchanging logic to each slot
    displayTimes();
    colorChanger();

    // declare variable containing the data from local storage
    var lastSchedule = JSON.parse(localStorage.getItem("schedule"));

    // iterate through the schedule object
    for (var r = 0; r < schedule.length; r++) {

        // determine whether data exists in the copy of local storage data
        if (lastSchedule !== null) {

            // data exists, so render the data from local storage to each activity slot on the page
            document.querySelector('#activity-' + r).innerHTML = lastSchedule[r].activity;

        } else {

            return;

        }
    }
}

// clear the schedule when clicked
$('#clear').on('click', function () {

    // call the function to clear storage and the activity slots
    clearSchedule();

});

// save the activity when the save button is clicked
$('.save').on('click', function (event) {

    // prevent the save button from clicking more than once
    event.preventDefault();

    // declare variable to contain the id of the specific button clicked
    var btnID = $(this).attr('id');

    // parse the variable as an integer and split the unnecessary characters from the string, use [1] to extract just the integer
    btnID = parseInt(btnID.split("button-")[1]);

    // invoke the function to begin checking whether the selected button is associated with activity data
    checkActivity(btnID);

    // rerender the schedule to the page
    renderSchedule();

});

// render the schedule on page load
renderSchedule();
