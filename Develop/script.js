
var toDo = ["", "", "", "", "", "", "", "", "", ""]

$("#currentDay").text(moment().format("MM DD YYYY hh:mm"));

$("#hover").click();

loadTasks();

$(".saveBtn").on("click", function() {
    var time = $(this).attr("data-time");
    var text =$("#toDo-" + time).val();
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
    savedTasks = JSON.parse(savedTasks);
        var currentHour = moment().format("H");
        var timeblock ="#toDo-" + (i+9);
        for (var i = 0; i < savedTasks.length; i++){
            console.log(savedTasks[i]);
            $(timeblock).val(savedTasks[i]);
                 if ((i + 9) < currentHour) {
                     $(timeblock).addClass("past");
                 }
                 else if ((i + 9) == currentHour) {
                     $(timeblock).addClass("present");
                 }
                 else {
                     $(timeblock).addClass("future");
                 }
        }

}