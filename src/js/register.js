require(["require.config"],function(){
    require(["jquery","header","footer",],function($){
       class connet{
           constructor(){
               this.init();
           }
           init(){
               var userInput =$("#Laccount"),
                   pwdInpt = $("#Lpassword"),
                   $btn =$("#btn"),
                   remember=$(".check");
              //注册功能
              $btn.on("click", function(){
                    var username=userInput.val();
                $.post("http://localhost/php/register.php",{username,password:$("#Lpassword").val()},function(res){
                    res=JSON.parse(res)
                    console.log(res)
                    if(res.res_code == 1){
                        if(confirm(res.res_message+",即将跳转登陆页面")){
                            location.href="/html/login.html"
                        }
                    }
                });
                // 阻止默认
                return false;
               })
           }    
       }
       new connet;
    })
})