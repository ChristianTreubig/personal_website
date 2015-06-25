$(document).ready(function() {
    $(".category_label").click(function() {
        $(".category_label").removeClass('category_label_selected');
        $(this).addClass('category_label_selected');
    })
    
    //Character counter:
    $("#id_problem").on("change keyup paste", function(){
        var len = $(this).val().length;
        $("#count").text(len);
    });
    $("#count").text($("#id_problem").val().length);
    $("#max").text($("#id_problem").attr("maxlength"));
});