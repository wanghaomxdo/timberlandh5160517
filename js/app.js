var app = app || {};

/*-- html5-template
====================================================== */
app.template = function(){};
/* loader */
app.template.loader = function(){};
app.template.loader.init= function(){
    // loader
    var getSource = function(){
        var res = [];
        res.push("img/bg01.jpg");
        res.push("img/bg02.jpg");
        res.push("img/bg03.jpg");
        res.push("img/bg04.jpg");
        res.push("img/btn01.png");
        res.push("img/btn02.png");
        res.push("img/share-icon.jpg");
        res.push("img/transparent.png");
        return res;
    }

    new mo.Loader(getSource(),{
        loadType : 1,
        minTime : 100,
        onLoading : function(count,total){
            //console.log('onloading:single loaded:',arguments)
            // $(".loader h1").html(' '+Math.round(count/total*100)+'%');
            // $(".loader .l-7").height(230-(Math.round(count/total*100)*2.3));
        },
        onComplete : function(time){
            console.log('oncomplete:all source loaded:',arguments);
            app.template.destory();
            app.template.loader.done_callback.call();
            app.template.loader.done_callback2.call();
        }
    });
    $(".audio-icon").hide();
};
app.template.loader.done_callback = function(){};
app.template.loader.done_callback2 = function(){};

app.template.destory = function(){
    $(".loader").remove();
};

/* Landscape */
app.template.Landscape = function(){};
app.template.Landscape.init= function(){
    var Landscape = new mo.Landscape({
        pic: 'js/motion/landscape.png',
        picZoom: 3,
        mode:'portrait',//portrait,landscape
        prefix:'Shine'
    });
};

/* pageslide swiper */
app.template.swiper = function(){};
app.template.swiper.mySwiper = {};
app.template.swiper.pageXY = [];
app.template.swiper.init = function(){
    app.template.loader.done_callback = this.bind;
};
app.template.swiper.bind = function(){
 $(".swiper-container").css("display", "block");
    app.template.swiper.mySwiper = new Swiper ('.swiper-container', {
        speed:500,
        lazyLoading : true,
        lazyLoadingInPrevNext : true,
         //nextButton: '.swiper-button-next',
         //prevButton: '.swiper-button-prev',
         //direction : 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画 
            app.template.swiper.on_pageslideend(0);
        }, 
        onSlideChangeStart: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            if (swiper.activeIndex == 2) {
                // setTimeout(function(){
                // $(".p3 .e3-1").show();
                // }, 1000);
            }else if (swiper.activeIndex == 1) {
                // setTimeout(function(){
                // $(".p2 .e2-8").show();
                // }, 2000);
            }
            app.template.swiper.on_pageslideend(swiper.activeIndex);
            //app.template.swiper.mySwiper.lockSwipes();
        },
        onSlideChangeEnd: function(swiper){
            },
        onSliderMove: function(swiper, event){}
    });

    //app.template.swiper.lock();
};
app.template.swiper.lock = function(){
    app.template.swiper.mySwiper.lockSwipes();
};
app.template.swiper.on_pageslideend = function(index){};

app.template.swiper.next = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideNext();
};

app.template.swiper.prev = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slidePrev();
};

app.template.swiper.to = function(index){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideTo(index);
};

app.template.touch = function(){};
app.template.touch.eventlistener_handler = function(e){

    //e.stopPropagation();  // 阻止事件传递
    e.preventDefault();     // 阻止浏览器默认动作(网页滚动)
};


app.template.touch.init = function(){

    // fastclick
    FastClick.attach(document.body);

    document.body.addEventListener("touchmove", function(e) {
        //e.stopPropagation();  // 阻止事件传递
        e.preventDefault();     // 阻止浏览器默认动作(网页滚动)
    });

    $("body").on("doubleTap longTap swipeLeft swipeRight", function(e){
        // e.stopPropagation();  // 阻止事件传递
        e.preventDefault();   // 阻止浏览器默认动作(网页滚动)
        return false;
    });
};


app.template.data = {};
app.template.data.add = function(key, value){
    app.template.data[key] = value;
};
app.template.data.get = function(key){
    return app.template.data[key];
};

/*-- tools
====================================================== */
app.tools = function(){};
app.tools.random = function(n, m){
    var c = m-n+1;  
    return Math.floor(Math.random() * c + n);
};

app.tools.getpageurlwithoutparam = function(){
    var url = window.location.href;
    return url.substring(0, url.indexOf("?"));
};

app.tools.getbaseurl = function(){
    var url = window.location.href;
    return url.substring(0, url.lastIndexOf("/") + 1);
};

app.tools.gotourl = function(url){
    window.location.href = url;
};

app.tools.geturlparam = function(param){
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) 
        return unescape(r[2]);
    else
        return undefined;
};

app.tools.substr = function(str, len){
    if(str.length > len)
        str = str.substring(0, len) + "...";

    return str;
};

app.tools.platform = function(){};
app.tools.platform.os = "";
app.tools.platform.debug = ""; // 强制开始指定os模式
app.tools.platform.init = function(){
    var u = navigator.userAgent;

    app.debug.console("userAgent:" + u);

    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)
        app.tools.platform.os = "android";
    else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
        app.tools.platform.os = "ios";

    if(app.tools.platform.debug == "ios")
        app.tools.platform.os = "ios";
    else if(app.tools.platform.debug == "android")
        app.tools.platform.os = "android";
};

/*-- debug
====================================================== */
app.debug = function(){};
app.debug.enable = false;
app.debug.maxline = 5;
app.debug.linecount = 0;
app.debug.console = function(str){
    if(app.debug.enable)
    {
        app.debug.linecount ++;

        if($("#debug").length > 0)
        {
            if(app.debug.linecount > app.debug.maxline)
            {
                app.debug.linecount = 0;
                $("#debug").html("<br/> #" + str);
            }
            else
                $("#debug").append("<br/> #" + str);
        }else
        {
            $("body").append("<div id='debug' class='debug'></div>");
            $("#debug").append("<br/> #" + str);
        }
    }
};

/*-- loading
====================================================== */
app.loading = function(){};
app.loading.init = function(){
  this.show_animation();
};

app.loading.show_animation = function(){
  $(".loader").show();
};


/*-- taobaourl
 ====================================================== */
$(".man").on("touchend",function(){
    //window.location.href="https://detail.m.tmall.com/item.htm?spm=a320p.7692363.0.0&id=22674956627";
    window.location.href="jump.php?sex=man";
});

$(".woman").on("touchend",function(){
    //window.location.href="https://detail.m.tmall.com/item.htm?spm=a320p.7692363.0.0&id=19051643793";
    window.location.href="jump.php?sex=woman";
});

/*-- p1
====================================================== */
app.p1 = function(){

};
 
app.p1.init = function(){
    $(".btnl").hide();
};


app.p1.bind_touch_event = function(){
    $(".p1 .e1-1").on("touchend",function(){
        tracking.click('man p1');
    });
    $(".p1 .e1-2").on("touchend",function(){
        tracking.click('woman p1');
    });
};

app.p1.destory = function(){  
};

/*-- p2
 ====================================================== */
app.p2 = function(){

};

app.p2.init = function(){
    $(".btnl").show();
};


app.p2.bind_touch_event = function(){
    $(".p2 .e2-1").on("touchend",function(){
        tracking.click('man p2');
    });
    $(".p2 .e2-2").on("touchend",function(){
        tracking.click('woman p2');
    });
};

app.p2.destory = function(){
};

/*-- p3
====================================================== */
app.p3 = function(){};
app.p3.init = function(){
    $(".btnr").show();
};

app.p3.bind_touch_event = function(){
    $(".p3 .e3-1").on("touchend",function(){
        tracking.click('man p3');
    });
    $(".p3 .e3-2").on("touchend",function(){
        tracking.click('woman p3');
    });
};

app.p3.destory = function(){};

/*-- p4
 ====================================================== */
app.p4 = function(){};
app.p4.init = function(){
    $(".btnr").hide();
};

app.p4.bind_touch_event = function(){
    $(".p4 .e4-1").on("touchend",function(){
        tracking.click('man p4');
    });
    $(".p4 .e4-2").on("touchend",function(){
        tracking.click('woman p4');
    });
};

/*-- for android
====================================================== */
var fuckandroid = {};
fuckandroid.app = function(){};
fuckandroid.app.p1 = function(){};
fuckandroid.app.p1.bind_touch_event = function(){
};

/*-- page init
====================================================== */
(function(){
    // 检测OS
    app.tools.platform.init();

    // 兼容android(如果开启android模式则重写响应函数用来)
    if(app.tools.platform.debug == "android"
     || app.tools.platform.os == "android")
    {
    }

    // 框架
    app.template.touch.init();
    app.template.loader.init();
    app.template.swiper.init();
    app.template.Landscape.init();

    /* loading */
    app.loading.init();
    
    /* page init */
    app.template.swiper.on_pageslideend = function(index){
        switch(index)
        {
            case 0:
                app.p1.init();
                break;
            case 1:
                app.p1.destory();
                app.p2.init();
                break;
            case 2:
                app.p2.destory();
                app.p3.init();
                break;
            case 3:
                app.p3.destory();
                app.p4.init();
                break;
            case 4:
                app.p5.init();
                break;
        }
    };
     app.p1.bind_touch_event();
     app.p2.bind_touch_event();
     app.p3.bind_touch_event();
     app.p4.bind_touch_event();
     app.debug.enable = false;
})();

