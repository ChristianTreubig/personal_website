$(document).ready(function() {
    $(".category_label").click(function() {
        //alert("yes");
        $(".category_label").removeClass('category_label_selected');
        $(this).addClass('category_label_selected');
    })
    
    $("#id_problem").on("change keyup paste", function(){
        //alert($(this).attr("maxlength"));
        var len = $(this).val().length;
        //alert(len);
        $("#count").text(len);
    });
    
    $("#count").text($("#id_problem").val().length);
    $("#max").text($("#id_problem").attr("maxlength"));
});