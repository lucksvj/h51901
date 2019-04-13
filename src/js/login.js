require(["require.config"],function(){
    require(["jquery","header","footer",],function($){
       class land{
           constructor(){
                 this.init();
           }
           init(){
             var  btn =$("#dbtn"),
               remember =$("#remember");

          btn.on("click",function(){
              var username =$("#account").val();
              var password =$("#npassword").val();
              console.log(password)
              $.post("http://localhost/php/login.php",{username,password},function(res){
              console.log(res)
              res=JSON.parse(res)
                var option = remember.checked ? true:false;
                localStorage.setItem("username", username, option);
                alert(res.res_message);
                if(res.res_code == 1){
                    if(confirm(res.res_message + "，即将跳转首页")){
                        location.href = "../index.html";
                    }
                  
                }
				
          });
          // 阻止默认提交
		return false;
       })
    }
    
       }
       new land;
    })
})