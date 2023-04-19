var eventsData;

function setHourColors(){
    var now = dayjs();

    for (var i = 9; i < 18; i++) {
        $('#hour-' + i + " textarea").removeClass("future");
        if (i < now.hour()){
            $("#hour-" + i + " textarea").addClass("past");
        }
        else if (i == now.hour()) {
            $("hour-" + i + " textarea").addClass("present");
        }
    }
}

function loadStoredData() {
    eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
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
            //ETC
        };
    }
}

function handleSaveClick(event) {
    // grab data from HTML
    var hourBlock = $(event.target).parent();
    var value = hourBlock.parent().children(" textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];

    //modify our data object
    eventsData["hour" + hour] = value;

    // store in local storage
    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

$(function(){
    loadStoredData();
    setHourColors();
});

$('.saveBtn').on('click', handleSaveClick);