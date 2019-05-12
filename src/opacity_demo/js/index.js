(function(){
	var fontSizeMatchDeviceWidth = function(){
		var deviceWidth = document.documentElement.clientWidth || window.screen.width || 320,
			devicePixelRatio = window.devicePixelRatio || 1,
			fontSize = (Math.ceil(deviceWidth * 16 / 320)),
			scale = 1 / devicePixelRatio; // 默认的缩放
			
		document.documentElement.style.fontSize = fontSize + 'px';
		document.querySelector('meta[name="viewport"]').setAttribute('content','width=device-width,initial-scale='+'scale'+',maximum-scale='+scale+',minimum-scale='+scale+',user-scalable=no,viewport-fit=cover'); // 增加viewport-fit=cover适配iphone x
	};
	
	(function(){
		var ua = navigator.userAgent;
		if(/android/i.test(ua) || /ipad|itouch|iphone/i.test(ua)|| /tianqi/i.test(ua)){
			fontSizeMatchDeviceWidth();
		} else { // pc端优雅降级
			document.documentElement.style.fontSize = '24px';
		}
	})();
})();

// 以上的移动端的适配，详情请查考我在掘金上发表的文章[可爱的rem](https://juejin.im/post/5b9e225be51d450e452a8eeb)  原文请到我博客查看 [谈谈rem单位](http://reng99.cc/2018/09/16/talk-about-rem/)


// 以下是相关的截图工具代码，结合框架vue或者react更加顺手哦

(function(){
    // jquery加入元素的话要取[0],不然报错,要不你使用原生javascript进行获取dom对象
    // Uncaught (in promise) Provided element is not within a Document
    // 解决方案参考： https://stackoverflow.com/questions/48290987/uncaught-in-promise-provided-element-is-not-within-a-document
    var $shotarea = $('#shotarea')[0], 
        $resultPage = $('#shotresult'),
        $btnShot = $('.btn-shot'),
        $html2canvas = document.getElementById('html2canvas');

    $btnShot.click(function(){
        // toast提示
        $('#toast').css('display', 'block');

        // 如果你想所有版本高的浏览器支持promise对象，请使用bluebird 。官网: http://bluebirdjs.com/docs/getting-started.html
        // 处理canvas来处理截图的清晰度问题
        setCanvas('shotarea','canvas');

        html2canvas($shotarea , {
            canvas: canvas, 
            // scale: 2, // 这里canvas设置的时候控制
            useCORS: true, // 允许图片跨域,设置这个的同时这里已经在阿里云做了处理
        }).then(function(canvas){
            var dataUrl = canvas.toDataURL();
            // console.log(dataUrl);
            // 移除 canvas
            // $html2canvas.removeChild(canvas);
            // 追加图片
            $resultPage.html(`<img src=${dataUrl} alt="from canvas" style="width: 100%;height: auto;"/>`);
            $('#generate').css('display', 'block');
            $('#mask').css('display', 'block');
            $('#shotarea').addClass('active');
            $('#qrcode').css('display', 'none');
            $('#toast').css('display', 'none');
        });

    });

    /**
     * 设置canvas
     * 
     * @param {String} selector 截取内容div的id值
     * @param {String} canvasDom canvas的id值
     */
    function setCanvas(selector , canvasDom){
        let $sharePic = document.getElementById(selector),  // 获取想要转换的 DOM 节点        
        // DOM 节点计算后宽高
        width = Math.ceil($sharePic.offsetWidth),
        height = Math.ceil($sharePic.offsetHeight),
        // 获取自定义 canvas 元素
        canvas = document.getElementById(canvasDom),
        ctx = canvas.getContext('2d'),
        // 获取像素比
        ratio = getPixelRatio(ctx);
        // 设定 canvas 元素属性宽高为 DOM 节点宽高 * 像素比
        canvas.height = height * ratio;
        canvas.width = width * ratio;
        // 设定 canvas css宽高为 DOM 节点宽高
        canvas.style.height = height + 'px';
        canvas.style.width = width + 'px';
        // 将所有绘制内容放大像素比倍
        ctx.scale(ratio, ratio);
    }

    /**
     * 获取屏幕的像素比
     * 
     * @param {Object} context 
     */
    function getPixelRatio(context) {
        let backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }
})();

(function(){
    $('#mask').click(function(){
        $('#generate').css('display', 'none');
        $('#mask').css('display', 'none');
        $('#shotarea').removeClass('active');
        $('#qrcode').css('display', 'block')
    })
})();