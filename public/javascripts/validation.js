$(document).ready(function(){
    
    $("#username").on('blur',function(){
        var username =$("#username").val();
        if(username){
            $.ajax({
                method: 'POST',
                url:'/signup/check',
                data:{name: username}
                
            }).done(function(result){
                
                if(result){
                    $("#username").attr("placeholder", "Username is taken").val("");
                    $("#usernamemsg").text('').addClass('text-danger fa fa-times')
                }else{
                    $("#usernamemsg").text('').removeClass('fa fa-times text-danger').addClass('fa fa-check text-success');
                }
                
            });
        }else{
            $("#username").attr("placeholder", "Username is required").val("");
            $("#usernamemsg").text('').addClass('text-danger fa fa-times')
        }
    });
    $("#email").on('blur', function(){
        var email =$("#email").val();
        if(!isEmail(email)||!email){
            $("#email").attr("placeholder", "Email is not valid").val("");
            $("#emailmsg").text('').addClass('text-danger fa fa-times')
        }else{
            $("#emailmsg").text('').removeClass('fa fa-times text-danger').addClass('fa fa-check text-success');
        }

    });
    $("#password").on('blur', function(){

    });
    $("#repassword").on('blur', function(){

    });
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }
}); 