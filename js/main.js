$(document).ready(function(){
    $('#btn').click(function(){
        var username = $('#username').val();
        var useremail = $('#useremail').val();
        
        /*$.post("process.php", {name:username, uemail:useremail}, function(data) {
            $("#msg").html(data);
        })*/

        $.ajax({
            type: "POST",
            url: "process.php",
            data: {
                name: username,
                uemail: useremail
            },

            success: function(data) {
                $("#msg").html(data);
                alert(data);
            }
        })
    })
})