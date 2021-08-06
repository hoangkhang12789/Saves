$(document).ready(function () {
   
    $("button").click(function () {
        $(".mailErr").css("color", "red");
        $(".fErr").css("color", "red");
        var email = $("#email").val();
        var feedback = $("#feedback").val();
        var err = 0;
        const checkMail = new RegExp("[a-zA-Z]+([\.\-_]\w+)*\@[a-zA-Z]+([\.\-_]\w+)*(\.\w{3})?(\.\w{2})?");
        const checkEmpty = new RegExp("([^\s]*)");
        if (email.length === 0) {
            $(".mailErr").html("Error！Email can't be empty.");
            $(".mailErr").show();
            err++;
        }
        else if (!checkMail.test(email) && checkEmpty.test(email)) {
            $(".mailErr").html("Error！You must enter valld email. Ex：address@domain.com");
            $(".mailErr").show();
            err++;
        } else {
            $(".mailErr").hide();
        }
        if (feedback.length === 0) {
            $(".fErr").html("Error！Feedback can not be empty.");
            $(".fErr").show();
            err++;
        } else {
            $(".fErr").hide();
        }
        if (err == 0) {
            return true;
        } else {
            return false;
        }

    });
});
$(document).ready(function () {
    $(".mailErr").hide();
    $(".fErr").hide();
    $("#email").blur(function () {
        const checkMail = new RegExp("[a-zA-Z]+([\.\-_]\w+)*\@[a-zA-Z]+([\.\-_]\w+)*(\.\w{3})?(\.\w{2})?");
       
        var email = $("#email").val();
        $(".mailErr").css("color", "red");
        if (email.trim()==="") {
            $(".mailErr").html("Error！Email can't be empty.");
            $(".mailErr").show();
        }
        else if (!checkMail.test(email) ) {
            $(".mailErr").html("Error！You must enter valld email. Ex：address@domain.com");
            $(".mailErr").show();
        } else {
            $(".mailErr").hide();
        }
    });
    $("#feedback").blur(function () {
        $(".fErr").css("color", "red");

        var feedback = $("#feedback").val();

        if (feedback.length === 0) {
            $(".fErr").html("Error！Feedback can not be empty.");
            $(".fErr").show();
        } else {
            $(".fErr").hide();
        }
    });
});