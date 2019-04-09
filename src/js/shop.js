require(["require.config"],()=>{
    require(["jquery","url","template","zoom","header","footer"],($,url,template,)=>{
        class shop{
           constructor(){
              //this.init();
              this.render();
           }
       
           render () {
               let promise = new Promise((resolve, reject) =>{
                    //  console.log(data)
                    var id =location.search.slice(4);
                $.ajax({
                    url:url.baseUrl+"detail?id="+id,
                    method:"GET",
                    dataType:"json",
                    success:res=>{ 
                  //  console.log(res)
                        if(res.res_conde ===1){
                             this.detail = res.res_body.data.detail;
                            //由于rap2返回的ID都一样，所以手动的修改ID，真实开发中不用这行
                         this.detail.id = id;
                            // this.render(res.res_body.data);
                        }
                        var html =template("page",{...res.res_body.data.detail});
                        $("#circum").html(html);
                        this. addCart();
                        resolve()
                    }
               
                })
                  
                        
               })
               promise.then(()=>{
            $(".zoom-img").elevateZoom({
                gallery:'gal1',
                cursor: 'pointer',
                galleryActiveClass: 'active',
               // zoomWindowWidth:100,
                //zoomWindowHeight:100
                // borderSize:'1',    
                // borderColor:'#888'
            });
               })
           }
           
            // 放大镜插件
            
          addCart(){
              //加入购物车
              $("#shopCart").on("click",()=>{
                  let cart =localStorage.getItem("cart");
                  //console.log(1);
                  if(cart){

                      cart =JSON.parse(cart)
                    //购物车已经有数据
                    //判断购物车里是否已 存在当前数据
                    let index;
                   if(cart.some((last,i) =>{
                        index=i;
                      return last.id == this.detail.id;
                    })){
                       //索引为index 的这条数据就是当前数据
                       cart[index].num++;
                    }else{
                        //购物车里还没有加过当前数据
                        cart.push({...this.detail,num : 1});
                    }
                    localStorage.setItem("cart",JSON.stringify(cart));
                  }else{
                    localStorage.setItem("cart",JSON.stringify([
                        // 商品详情 默认值为1
                       {...this.detail,num:1}
             
                    ]));
                  }
             console.log(localStorage.getItem("cart"))
              })
          }
        }
        new shop();
    })
})