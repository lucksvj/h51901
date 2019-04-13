define(["jquery","fly"],()=>{
    // container  指的是包含加入购物车按钮的父级容器盒子
    // btnSelect  指的是容器里面谈及购物车按钮的选择器
    //islist 是否来自
    return function(container,btnselector,detail,islist){
       container.on("click",btnselector,function(e){
           if(islist){
               //detail 没有传递 那么从列表上的DOM 获取当前商品信息
              var $li=$(this).parent();
              detail={
                  id:$li.attr("data-id"),
                  img :[$li.find("img").attr("src")],
                  title:$li.find(".hot").html(),
                  price:$li.find(".price").html()
              }
           }
        let cart =localStorage.getItem("cart");
        //console.log(1);
        if(cart){

            cart =JSON.parse(cart)
         
          //购物车已经有数据
          //判断购物车里是否已 存在当前数据
          let index;
         if(cart.some((last,i) =>{
              index=i;
            return last.id == detail.id;
          })){
             //索引为index 的这条数据就是当前数据
             cart[index].num++;
          }else{
              //购物车里还没有加过当前数据
              cart.push({...detail,num : 1});
          }
          localStorage.setItem("cart",JSON.stringify(cart));
        }else{
          localStorage.setItem("cart",JSON.stringify([
              // 商品详情 默认值为1
             {...detail,num:1}
   
          ]));
        }
      
        //抛物线飞入购物车
        console.log(detail.img[0])
        $(`<div style="width:50px;height:50px;"><img style="width:50px;height:50px" src="${detail.img[0]}/></div>`).fly({
         
                start:{
                  left: e.clientX,  //开始位置（必填）#fly元素会被设置成position: fixed
                  top: e.clientY,  //开始位置（必填）
                },
                end:{
                  left: $(".cart").position().left, //结束位置（必填）
                  top:  $(".cart").position().top,  //结束位置（必填）
                  // width: 100, //结束时高度
                  // height: 100, //结束时高度
                },
                autoPlay: true, //是否直接运动,默认true
                speed: 1.1, //越大越快，默认1.2
               // vertex_Rtop:100, //运动轨迹最高点top值，默认20
                onEnd: function(){
                    this.destroy(); //把小方块销毁
             console.log(1)
                } //结束回调
              });
            //   $('#fly').play(); //autoPlay: false后，手动调用运动
            //   $('#fly').destroy();
        })
       }
    })
        

