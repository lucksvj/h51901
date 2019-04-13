require(["require.config"], function () {
	require(["jquery","header","swiper","url","template","addtocode", "footer"], function ($, header,swiper,url,template,addtocode) {
		
		//轮播图
		class Index {
			constructor (){
				this.syssearch=$("#syssearch");
				this.searchCont=$("#divSe");
				this.search(); 
				this.shop();
				this.caty();
				this.odds();
				this.culling();
				this.good();
				this.special();
			  this. addCart();
			}
		    //搜索功能
			search(){
				let _this=this;
				this.syssearch.on("keyup",function(){
					
				  // 获取input的value值；
					let keyWord =$(this).val();
					//getJson 可以完成jsonp 跨域 数据返回了自动调用后面的回复
					$.getJSON("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?&wd="+keyWord, res =>{
						let list =res.s;
						console.log(list);
						let ul =$("<ul>");
						list.forEach(function(item,index){
							$("<li>").html(item).appendTo(ul);
						});
						_this.searchCont.empty().show().append(ul);
						
					})
				
				 })
				 this.syssearch.on("blur",function(){
					 setInterval(()=>{
						_this.searchCont.hide();
					 },2000)
				
				})
				this.searchCont.on("click","li",function(e){
					_this.syssearch.val($(this).html());
					_this.searchCont.hide();
       
				})
				this.swiper();       
			}
			//轮播图
			swiper(){
			 new swiper ('.swiper-container', {
					direction: 'horizontal', // 垂直切换选项
					loop: true, // 循环模式选项
					
					// 如果需要分页器
					pagination: {
					  el: '.swiper-pagination',
					},
					
					// 如果需要前进后退按钮
					navigation: {
					  nextEl: '.swiper-button-next',
					  prevEl: '.swiper-button-prev',
					},
					autoplay: {
						delay: 2000,//1秒切换一次
					  },
				
					// 如果需要滚动条
				/*	scrollbar: {
					  el: '.swiper-scrollbar',
					},*/
				  }) 
			}
		   // 请求数据
			shop (){
				//请求分类的数据
				$.ajax({
					url:url.baseUrl+"/shop",
					method:"GET",
					dataType:"json",
					success: function(res){
					//	console.log(res);
						if(res.res_conde ===1){
						
							let list =res.res_body.list;
						//	console.log(list)
							var html =template("fristShop",{list});
							//console.log(html);
							$("#listHed").html(html);
						}
					}
				})
			
			}
			// 请求数据
			caty (){
				$.ajax({
					url:url.baseUrl+"/caty",
					method:"GET",
					dataType:"json",
					success: function(res){
		
						if(res.index ===1){
							let enty =res.obj_a.enty;
						//	console.log(enty)
							var aText =template("specialty",{ enty });
						//	console.log(aText);
							$("#taset").html(aText);
						}
					}
				})
			}
			// 请求数据
		odds (){
				$.ajax({
					url:url.baseUrl+"/caty",
					method:"GET",
					dataType:"json",
					success: function(res){
						if(res.index ===1){
							let enty =res.obj_a.enty;
							var aText =template("vouchsafe",{ enty });
							$("#preferential").html(aText);
						}
					}
				})
			}
		 culling(){
			$.ajax({
				url:url.baseUrl+"/caty",
				method:"GET",
				dataType:"json",
				success: function(res){
		
					if(res.index ===1){
						let enty =res.obj_a.enty;
						var aText =template("select",{ enty });
						$("#choice").html(aText);
					}
				}
			})
		 }
		 good(){
			$.ajax({
				url:url.baseUrl+"/caty",
				method:"GET",
				dataType:"json",
				success: function(res){
			
					if(res.index ===1){
						let enty =res.obj_a.enty;
						var aText =template("ware",{ enty });
						$("#trade").html(aText);
					}
				}
			})
		 }
		 special(){
			$.ajax({
				url:url.baseUrl+"/caty",
				method:"GET",
				dataType:"json",
				success: function(res){
				
					if(res.index ===1){
						let enty =res.obj_a.enty;
						var aText =template("local",{ enty });
						$("#native").html(aText);
					}
				}
			})
		 }
		 delay(){
			$(window).scroll(function() {
				var scroHei = $(window).scrollTop();//滚动的高度
				if (scroHei > 700) {
					$('#sider').hide();
				} else {
					$('#sider').fadeOut();
				}
			});
				/*点击返回顶部*/
			$('#scoopTop').click(function() {
				$('body,html').animate({
				scrollTop: 0
				}, 1000);
			})
	
		 }
		 addCart(){
			//加入购物车
			addtocode($(".wrapp"),".left-btn",null,true);
	}
		}

		new Index();

	})
})