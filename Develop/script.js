
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
    let x = "";
    savedTasks = JSON.parse(savedTasks);
    console.log(savedTasks);
        var currentHour = moment().format("H");
        var timeblock ="#toDo-";
        for (var i = 0; i < savedTasks.length; i++){
            //debugger;
            $(timeblock + (i + 9)).val(savedTasks[i]);

          

                        


                 if ((i + 9) < $(this).attr("data-time")) { 
                     $(timeblock + (i + 9)).addClass("future");
                 }
                 else if ((i + 9) == $(this).attr("data-time")) {
                     $(timeblock + (i + 9)).addClass("present");
                 }
                 else {
                     $(timeblock + (i + 9)).addClass("past");
                 }
        }

}