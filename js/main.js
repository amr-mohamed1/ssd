$(function() {
    $(".tm-work-name").on("click", function() {
        window.location.href = "edit-work.html";
    });
});

$(function() {
    $(".btn-hide").on("click", function() {
        var alert_delete= confirm("Are you sure to delete?");
        if(alert_delete==true){
            $(this).parents(".hide-section").hide();
        }
    });
});
$(function() {
    $(".hide-Task-btn").on("click", function() {
        var alert_delete= confirm("Are you sure to delete?");
        if(alert_delete==true){
            $(this).parents(".hide-Task-section").hide();
        }
    });
});