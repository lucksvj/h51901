require(["require.config"],  ()=> {
    require(["jquery","header","template", "footer"], function ($, header,template) {
    class cart{
        constructor(){
         this.init();
         
        }

        init(){
        this.cart = JSON.parse(localStorage.getItem("cart"));
        this.render();
        }

        render (){
         var html =template("commodity",{cart:this.cart})
         $(".cart-bom").html(html);
            this.bindEvent(); 
            this.delete();
        } 

        bindEvent(){
            $('#chebox').on('click',(e) => {
                const checked =  e.target.checked
                $(".checked").each(function(index,item) {
                    item.checked=$(".ckbox")[0].checked;
                  
                })
                this.calcMoney(); 
            })
        this.celet();
      } 
      celet(){
             $(".checked").on("click",(e)=>{
                var len = $('.checked').length
 
                let l = 0;

                $(".checked").each((index,item)=>{
                    if(item.checked) l++
                })
                var checked = len === l? true:false;
               
                $('#chebox')[0].checked = checked ;
                $(".amount").html(l);
                $(".num").html(l);
                this.calcMoney();
                
            })
            
        } 

       calcMoney(){
         //console.log(1)  
         let sum=0;
         for(let i=0;i<$(".cart-money").length;i++){
             if($(".checked")[i].checked){
                 sum+=parseInt($(".cart-money")[i].innerText);
             }
         }
         $("#moneys").html(sum);
            
        // $("#totalNum").html(this.n);
        
       }
      delete(){
       // console.log(localStorage.getItem)
          $(".cart-rem").on("click",(event)=>{
              
            let $li=$(event.target).parents("li");
            this.id=$li.attr("data-id");
            $li.remove();
            var data=JSON.parse(localStorage.getItem("cart"));  
          data.some((element,index)=>{
                this.index=index;
                return element.id=this.id
            })
            data.splice(this.index,1)//删除
            console.log(data)
            //data从新插入到缓存
            localStorage.setItem("cart",JSON.stringify(data));
           if(localStorage.getItem("key")===null){

            this.calcMoney();
            $('#chebox')[0].checked=false;
           }
         this.num();
      }) 
      }
      num(){
          $("body").on("click",()=>{

              var numa=JSON.parse(localStorage.getItem("cart")).length
              console.log(numa)
              $("#shop-num").html(numa)
          })
  
    }
    }
    new cart();
    })
})