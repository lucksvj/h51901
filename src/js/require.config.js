require.config({
    baseUrl:"/",
    paths : {
        "jquery" :"lib/jquery/jquery-3.2.1",
        "header" : "js/module/header",
        "footer" :"js/module/footer",
        "login" : "js/login",
        "swiper": "lib/swiper/js/swiper",
        "url": "js/url",
        "template": "lib/art-template/template-web",
        "zoom" : "lib/jquery-plugins/jquery.elevateZoom-3.0.8.min",
    },
   // 垫片，不满足AMD规范的模块，但是又依赖于另外的模块
	shim : {
		"zoom" : {
			deps: ["jquery"]
		}
    }
})
