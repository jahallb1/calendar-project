var toDo = ["", "", "", "", "", "", "", "", "", ""]

$("#currentDay").text(moment().format("MM DD YYYY hh:mm"));

$("#hover").click();

loadTasks();

$(".saveBtn").on("click", function() {
    var time = $(this).attr("data-time");
    var text =$("#toDo-" + time).val();
    console.log(time, text);
    toDo[parseInt(time)-9] = text;
    console.log(toDo);
    localStorage.setItem("todos", JSON.stringify(toDo));
    console.log(text);
    console.log(time);
});

function loadTasks() {
    var savedTasks = localStorage.getItem("todos");
    if (!savedTasks) {
        return false;
    };
    let times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    savedTasks = JSON.parse(savedTasks);
    console.log(savedTasks);
        var currentHour = moment().format("H");
        var timeblock ="#toDo-";
        for (var i = 0; i < savedTasks.length; i++){
            $(timeblock + (i + 9)).val(savedTasks[i]);
                 if (parseInt(currentHour) < parseInt(times[i]) ) { 
                    console.log(currentHour) 
                    $(timeblock + (i + 9)).addClass("future");
                 }
                 else if (currentHour == times[i]) {
                     $(timeblock + (i + 9)).addClass("present");
                 }
                 else {
                     $(timeblock + (i + 9)).addClass("past");
                 }
        }

}