//中国铁路旅游jQuery
// 选择城市显示
$(".traver_city_inner").on("click", "span", function () {
    $(".traver_city_city").show();
});
//选择城市隐藏
$(".search_crux").on("click", function () {
    $(".traver_city_city").hide();
});
//改变当前城市
$(".traver_city_city").find("dd.ke_xuan").on("click", function () {
    $(".traver_city_inner>span").text($(this).text());
    $(".traver_city_city").hide();
});
//每次大图移动的距离
let width = $(".huan_xi_bu_scenery_hd").width();
let numDistance = null;
//图片进入切换
$(".huanxi_bu_bd_anliu_ul").find("li").each(function (index, ele) {
    //遍历每个li，添加自定义属性index
    $(ele).attr("index", index + 1);
}).on("mouseenter", function () {
    //为当前li添加border
    $(this).addClass("huanxi_bu_bd_anliu_boder").nextAll("li").removeClass("huanxi_bu_bd_anliu_boder").end().prevAll("li").removeClass("huanxi_bu_bd_anliu_boder");
    //切换图片
    numDistance = parseInt($(this).attr("index")) - 1;
    $(".huan_xi_bu_scenery_hd>ul").css("left", numDistance * -width);
    //更改当前图片值
    $(".huan_xi_bu_scenery_bd").find("span").text($(this).attr("index"));
});
//右边小图按钮移动
$("#btn_right").on("click", function () {
    //更改当前border类名
    if ($(".huanxi_bu_bd_anliu_boder").attr("index") < $(".huan_xi_bu_scenery_hd").find("li").length) {
        $(".huanxi_bu_bd_anliu_boder").removeClass("huanxi_bu_bd_anliu_boder").next("li").addClass("huanxi_bu_bd_anliu_boder");
    } else {
        //清除所有li的边框
        $(".huanxi_bu_bd_anliu_ul").find("li").removeClass("huanxi_bu_bd_anliu_boder");
        //给第一个li添加边框
        $(".huanxi_bu_bd_anliu_ul>ul :eq(0)").addClass("huanxi_bu_bd_anliu_boder");
    }
    //切换图片
    $(".huan_xi_bu_scenery_hd>ul").css("left", ($(".huanxi_bu_bd_anliu_boder").attr("index") - 1) * -width);
    //更改当前图片值
    $(".huan_xi_bu_scenery_bd").find("span").text($(".huanxi_bu_bd_anliu_boder").attr("index"));
    if ($(".huanxi_bu_bd_anliu_boder").attr("index") > 5) {
        //设置距离多少，移动ul
        let distace = $(".huanxi_bu_bd_anliu_boder").attr("index") - 5;
        $(".huanxi_bu_bd_anliu_ul>ul").css("left", -85 * distace + "px");
    } else {
        $(".huanxi_bu_bd_anliu_ul>ul").css("left", 0);
    }
});
//左边小图按钮移动
$("#btn_left").on("click", function () {
    //更改当前border类名
    if ($(".huanxi_bu_bd_anliu_boder").attr("index") <= $(".huan_xi_bu_scenery_hd").find("li").length && parseInt($(".huanxi_bu_bd_anliu_boder").attr("index")) !== 1) {
        $(".huanxi_bu_bd_anliu_boder").removeClass("huanxi_bu_bd_anliu_boder").prev("li").addClass("huanxi_bu_bd_anliu_boder");
    } else {
        //清除所有li的边框
        $(".huanxi_bu_bd_anliu_ul").find("li").removeClass("huanxi_bu_bd_anliu_boder");
        //给第一个li添加边框
        $(".huanxi_bu_bd_anliu_ul>ul>li:last").addClass("huanxi_bu_bd_anliu_boder");
    }
    //切换图片
    $(".huan_xi_bu_scenery_hd>ul").css("left", ($(".huanxi_bu_bd_anliu_boder").attr("index") - 1) * -width);
    //更改当前图片值
    $(".huan_xi_bu_scenery_bd").find("span").text($(".huanxi_bu_bd_anliu_boder").attr("index"));
    if ($(".huanxi_bu_bd_anliu_boder").attr("index") >= 5) {
        //设置距离多少，移动ul
        let distace = $(".huanxi_bu_bd_anliu_boder").attr("index") - 5;
        $(".huanxi_bu_bd_anliu_ul>ul").css("left", -85 * distace + "px");
    } else {
        $(".huanxi_bu_bd_anliu_ul>ul").css("left", 0);
    }
});
//进入大图显示按钮
$(".huan_xi_bu_scenery").on("mouseenter", function () {
    $(".huan_xi_bu_scenery_bd_inner").fadeIn(120);
}).on("mouseleave", function () {
    $(".huan_xi_bu_scenery_bd_inner").fadeOut(120);
});

//左边大图按钮点击
//当前移动的参数值
$("#huan_xi_bu_da_img1").on("click", function () {
    if (numDistance === 0) {
        //最大的移动距离
        numDistance = $(".huan_xi_bu_scenery_hd").find("li").length - 1;
    } else {
        //改变每次移动的距离
        numDistance--;
    }
    //每次点击需要移动的距离
    $(".huan_xi_bu_scenery_hd>ul").css("left", -numDistance * width);
    //更改当前文本
    $(".huan_xi_bu_scenery_bd").find("span").text(numDistance + 1);
    //更改当前border类名
    if ($(".huanxi_bu_bd_anliu_boder").attr("index") <= $(".huan_xi_bu_scenery_hd").find("li").length && parseInt($(".huanxi_bu_bd_anliu_boder").attr("index")) !== 1) {
        $(".huanxi_bu_bd_anliu_boder").removeClass("huanxi_bu_bd_anliu_boder").prev("li").addClass("huanxi_bu_bd_anliu_boder");
    } else {
        //清除所有li的边框
        $(".huanxi_bu_bd_anliu_ul").find("li").removeClass("huanxi_bu_bd_anliu_boder");
        //给第一个li添加边框
        $(".huanxi_bu_bd_anliu_ul>ul>li:last").addClass("huanxi_bu_bd_anliu_boder");
    }
    //切换图片
    $(".huan_xi_bu_scenery_hd>ul").css("left", ($(".huanxi_bu_bd_anliu_boder").attr("index") - 1) * -width);
    //更改当前图片值
    $(".huan_xi_bu_scenery_bd").find("span").text($(".huanxi_bu_bd_anliu_boder").attr("index"));
    if ($(".huanxi_bu_bd_anliu_boder").attr("index") >= 5) {
        //设置距离多少，移动ul
        let distace = $(".huanxi_bu_bd_anliu_boder").attr("index") - 5;
        $(".huanxi_bu_bd_anliu_ul>ul").css("left", -85 * distace + "px");
    } else {
        $(".huanxi_bu_bd_anliu_ul>ul").css("left", 0);
    }
});
//右边大图按钮点击
$("#huan_xi_bu_da_img2").on("click", function () {
    //最大的移动距离
    if (numDistance === $(".huan_xi_bu_scenery_hd").find("li").length - 1) {
        //最小的移动距离
        numDistance = 0;
    } else {
        //改变每次移动的距离
        numDistance++;
    }
    //每次点击需要移动的距离
    $(".huan_xi_bu_scenery_hd>ul").css("left", -numDistance * width);
    //给第一个li添加边框
    //更改当前border类名
    if ($(".huanxi_bu_bd_anliu_boder").attr("index") < $(".huan_xi_bu_scenery_hd").find("li").length) {
        $(".huanxi_bu_bd_anliu_boder").removeClass("huanxi_bu_bd_anliu_boder").next("li").addClass("huanxi_bu_bd_anliu_boder");
    } else {
        //清除所有li的边框
        $(".huanxi_bu_bd_anliu_ul").find("li").removeClass("huanxi_bu_bd_anliu_boder");
        //给第一个li添加边框
        $(".huanxi_bu_bd_anliu_ul>ul :eq(0)").addClass("huanxi_bu_bd_anliu_boder");
    }
    //更改当前图片值
    $(".huan_xi_bu_scenery_bd").find("span").text($(".huanxi_bu_bd_anliu_boder").attr("index"));
    if ($(".huanxi_bu_bd_anliu_boder").attr("index") > 5) {
        //设置距离多少，移动ul
        let distace = $(".huanxi_bu_bd_anliu_boder").attr("index") - 5;
        $(".huanxi_bu_bd_anliu_ul>ul").css("left", -85 * distace + "px");
    } else {
        $(".huanxi_bu_bd_anliu_ul>ul").css("left", 0);
    }
    //更改当前文本
    $(".huan_xi_bu_scenery_bd").find("span").text(numDistance + 1);
});

