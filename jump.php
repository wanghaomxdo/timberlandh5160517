<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Timberland</title>

    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=640, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" href="css/app.css">
    <script type="text/javascript">
        window.onload = function(){
            if(!isWeiXin()){
                console.log("性别："+GetQueryString("sex")+"");
                if(GetQueryString("sex") == "man"){
                    window.location.href="https://detail.m.tmall.com/item.htm?spm=a320p.7692363.0.0&id=22674956627";
                }else{
                    window.location.href="https://detail.m.tmall.com/item.htm?spm=a320p.7692363.0.0&id=19051643793";
                }
            }
        }
        function isWeiXin(){
            var ua = window.navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                return true;
            }else{
                return false;
            }
        }

        function GetQueryString(name)
        {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        }
    </script>
</head>
<body>
<!-- pagelist-->
<div class="swiper-container" style="display: block;">
    <div class="swiper-wrapper">
        <div class="swiper-slide p1" id="swiper-slide">
            <img class="e1-bg" src="img/jump.jpg" alt="">
        </div>
    </div>
</div>

<!--Script
====================================================== -->
<script src="js/zepto/zepto.min.js"></script>
</body>
</html>