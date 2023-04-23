var eventsData;

function setHourColors(){
    var now = dayjs();

    for (var i = 9; i < 18; i++) {
        if (i < now.hour()){
            $("#hour-" + i + " textarea").addClass("past");
        }
        else if (i == now.hour()) {
            $("#hour-" + i + " textarea").addClass("present");
        }
        else {
            $("#hour-" + i + " textarea").addClass("future");
        }
    }
}

function loadStoredData() {
    //Checks to see if data is in local storage
    eventsData = JSON.parse(localStorage.getItem("calendarEvents")); 
    //If no data in eventsData then leaves empty and we can write events
    if(!eventsData){
        eventsData = {
            hour9: "",
            hour10: "",
            hour11: "",
            hour12: "",
            hour13: "",
            hour14: "",
            hour15: "",
            hour16: "",
            hour17: "",
        };
    }
// This will display the value of the data
   $("#hour-9 textarea").val(eventsData.hour9);
   $("#hour-10 textarea").val(eventsData.hour10);
   $("#hour-11 textarea").val(eventsData.hour11);
   $("#hour-12 textarea").val(eventsData.hour12);
   $("#hour-13 textarea").val(eventsData.hour13);
   $("#hour-14 textarea").val(eventsData.hour14);
   $("#hour-15 textarea").val(eventsData.hour15);
   $("#hour-16 textarea").val(eventsData.hour16);
   $("#hour-17 textarea").val(eventsData.hour17);
}

function handleSaveClick(event) {
    // grab data from HTML
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1]; //takes the hour (ex. hour-11, takes 11)

    //modify our data object
    eventsData["hour" + hour] = value;

    // store in local storage
    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

//function handleSaveClick will activate on click of button
$('.saveBtn').on('click', handleSaveClick);

//these will be displayed on webpage
$(function(){
    loadStoredData();
    console.log(eventsData);
    setHourColors();
});