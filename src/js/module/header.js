define(["jquery"], function ($) {
	class Header {
		constructor () {
			this.init().then(() => {
			this.num();
			})
		}
		init () {
			return new Promise((resolve, reject) => {
				// 可以在加载路径后面写上空格加选择器，只加载一部分html
				$("#header-con").load("/html/module/header.html",  () => {
					// 回调函数，指的是load加载结束以后执行的代码
					resolve();
				});
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

	return new Header();
})