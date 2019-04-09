require(["require.config"],  ()=> {
    require(["jquery","header","template", "footer"], function ($, header,template) {
    class cart{
        constructor(){
         this.init();
         this.seek();
        }
        init(){
        this.cart = JSON.parse(localStorage.getItem("cart"));
         //console.log(this.cart)
         this.render();
        }
        render (){
            
         var html =template("commodity",{cart:this.cart})
        // console.log(html)
         $(".cart-bom").html(html);
        
        }
        seek (){
            // 单选数量
            this.single=0;
            this.allMoner =0;//购物车总价为0
            //查找Dom元素
            this.cart=$(".cart")
            this.allWords=$(".allwords");
            console.log( this.allWords)
            this.num =$(".money");
            this.balance=$(".balance");
            this.delete =$(".delete");
            this.checked=$(".checked")
            this.event();
        }
        event(){
            var _this=this
            this.cart.on("click",function(e){
             e=e||window.event;
             let target=e.target ||e.srcElement;
             let li =target.parenNode.parenNode;
            switch(target.className){
                

                
            }

			}).bind(this);
        }
    }
    new cart();
    })
})