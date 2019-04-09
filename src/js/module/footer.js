define(["jquery"], function ($) {
	class Footer {
		constructor () {
			this.init().then(() => {

			})
		}
		init () {
			return new Promise((resolve, reject) => {
				// 可以在加载路径后面写上空格加选择器，只加载一部分html
				$("#footer-tail").load("/html/module/footer.html",  () => {
					// 回调函数，指的是load加载结束以后执行的代码
					resolve();
				});
			})
		}   
	}

	return new Footer();
})