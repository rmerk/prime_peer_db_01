/**
 * Created by m3rkz0r on 10/7/15.
 */
$(function(){

    var posted = false;

    $("#inputForm").submit(function(event){
       event.preventDefault();
        var formData = $("#inputForm").serialize();
        $.ajax({
            type: "POST",
            url: "/assignmentRouter/postAssignments",
            data: formData,
            success: function(response){
                console.log("Success!");

                getData();
                posted = true;
            }
        })
    });

    function getData(id){

        var url = "/assignmentRouter/getAssignments";

        if(id) url += id;

            $.ajax({
                type:"GET",
                url: url,
                success: function(data){
                    console.log(data);
                    var html;
                    for (var i = 0; i < data.length; i++) {
                        html = "assignment_number = " + data[i].assignment_number + " student_name = " + data[i].student_name + " score = " + data[i].score + " date_completed = " + data[i].date_completed;
                        $(".assignmentData").append("<li>" + html + "</li>");
                    }
                }
            })
        }//end getData()

    $("#date_completed").val(Date());

    if (!posted) getData();


});//end function()


