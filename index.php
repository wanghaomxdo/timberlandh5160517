<?php $id = $_GET["id"] ?>
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
    <link rel="stylesheet" href="js/swiper/swiper.min.css">
    <link rel="stylesheet" href="js/swiper/animate.min.css">
    <!--    百度统计-->
    <script>
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?bce8abfe60f3581d053767122950fd99";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
    <!--    百度统计END-->

</head>
<body>
<!-- loading -->
<!--<div class="loader">-->
    <!--<div class="l-7 ani"></div>-->
    <!--<img class="l-6 ani" src="img/loading/e-1.jpg" alt="">-->
    <!--<h1 class="l-5 in-1"></h1>-->
<!--</div>-->
<!-- pagelist-->
<div class="swiper-container" id="swiper-container">
    <img class="btnl hide" src="img/btn02.png">
    <img class="btnr" src="img/btn01.png">
    <div class="swiper-wrapper">
        <div class="swiper-slide p1" id="swiper-slide">
            <img class="e1-bg" src="img/bg01.jpg" alt="">
            <img class="e1-1 man" src="img/transparent.png">
            <img class="e1-2 woman" src="img/transparent.png">
        </div>

        <div class="swiper-slide p2">
            <img class="e2-bg" src="img/bg02.jpg" alt="">
            <img class="e2-1 man" src="img/transparent.png">
            <img class="e2-2 woman" src="img/transparent.png">
        </div>

        <div class="swiper-slide p3">
            <img class="e3-bg" src="img/bg03.jpg" alt="">
            <img class="e3-1 man" src="img/transparent.png">
            <img class="e3-2 woman" src="img/transparent.png">
        </div>

        <div class="swiper-slide p4">
            <img class="e4-bg" src="img/bg04.jpg" alt="">
            <img class="e4-1 man" src="img/transparent.png">
            <img class="e4-2 woman" src="img/transparent.png">
        </div>
    </div>
</div>


<!--Script
====================================================== -->
<script src="js/zepto/zepto.min.js"></script>
<script src="js/motion/loader.min.js"></script>
<script src="js/swiper/swiper.min.js"></script>
<script src="js/swiper/swiper.animate1.0.2.min.js"></script>
<script src="js/fastclick/fastclick.js"></script>
<script src="js/motion/landscape.min.js"></script>
<script src="js/motion/overlay.min.js"></script>
<script src="js/motion/film.min.js"></script>
<script src="js/app.js"></script>
<script src="js/tracking/tracking.js"></script>
<?php include_once 'weChat/weChatShareJS.php';?>
<script>
    $ID = <?php echo $id?>;
    app.wechat.sharecontent.url = "http://www.createcdigital.com/timberlandh5160517/index.php?id="+$ID+"";
</script>
</body>
</html>