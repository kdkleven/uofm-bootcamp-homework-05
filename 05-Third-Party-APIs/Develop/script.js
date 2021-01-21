// Psuedocode

//DESIGN
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

var currentTime = moment().format('LLLL');

$('#currentDay').text(currentTime);

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

//
function clearSchedule() {
    localStorage.clear();
    $('.activity').empty();
}

//
function displayTimes() {
    for (var t = 0; t < schedule.length; t++) {
        // if (hours > 0 && hours <= 12) {
        //     timeValue= "" + hours;
        //   } else if (hours > 12) {
        //     timeValue= "" + (hours - 12);
        //   } else if (hours == 0) {
        //     timeValue= "12";
        //   }
        //
        $('#time-' + t).text(schedule[t].time);
    }
}

//
function colorChanger() {

    //    
    for (var c = 0; c < schedule.length; c++) {
        //
        currentTime = moment().format('HH');
        var d = schedule[c].time;
        var a = $('#activity-' + c);

        //
        d = schedule[c].time / 100;

        //
        if (d < currentTime) {
            //
            a.addClass('past');
            a.removeClass('present');
            a.removeClass('future');
        }
        else if (d > currentTime) {
            //
            a.removeClass('past');
            a.removeClass('present');
            a.addClass('future');
        }
        else {
            //
            a.removeClass('past');
            a.addClass('present');
            a.removeClass('future');
        }
    }

}

//
function checkActivity(btnID) {
    
    console.log("This is the button ID: " + btnID);
    
    for (var a = 0; a < schedule.length; a++) {
        //
        var currentActivity = $('#activity-' + a).val().trim();   
        
     

        if (btnID === a) {
            schedule[a].activity = currentActivity;
            console.log("This was just saved" + currentActivity);
        }
    }
}

//
function saveSchedule() {
    //
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

// 
function renderSchedule() {
    //
    displayTimes();
    colorChanger();
    //
    var lastSchedule = JSON.parse(localStorage.getItem("schedule"));
    //
    for (var r = 0; r < schedule.length; r++) {
        //
        if (lastSchedule !== null) {
            //            
            document.querySelector('#activity-' + r).innerHTML = lastSchedule[r].activity;
        } else {
            return;
        }
    }
}

//
function init() {
    renderSchedule();
}

$('#clear').on('click', function () {
    clearSchedule();
});

//
$('.save').on('click', function (event) {
    event.preventDefault();
    var btnID = $(this).attr('id');
    btnID = parseInt(btnID.split("button-")[1]);
    
    //console.log(btnID);

    checkActivity(btnID);
    saveSchedule();
    renderSchedule();
});

//
init();