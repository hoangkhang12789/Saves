$(document).ready(function () {
    $(".error").hide();
    $("button").click(function () {
        var phone = $("#phone").val();
        var feedback = $("#feedback").val();
        var err = 0;
        var errM = "";
        const checkPhone = new RegExp("0[1-9]{8,10}");
        if (phone.trim() === "") {
            errM += "<li>Phone number can not be empty.</li>"
            err++;
        }
        else if (!checkPhone.test(phone)) {
            errM += "<li>You must enter valid phone number. Ex: 0955333444</li>";
            err++;
        }
        if (feedback.trim() === "") {
            errM += "<li>Feedback can not be empty.</li>";
            err++;
        }
        if (err == 0) {
            return true;
        } else {
            $(".error").show();
            $(".error").html("<p><b>Error!</b></p><ul>" + errM + "</ul>");
            return false;
        }

    });
});
