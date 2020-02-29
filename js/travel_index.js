//旅游专列展示模块
let timing;
$(".travel_special_train_bd_inner li").on("mouseenter", function () {
    $(this).nextAll("li").find("a").removeClass("current_width");
    $(this).prevAll("li").find("a").removeClass("current_width");
    $(this).find("a").addClass("current_width");
    clearInterval(timing)
}).on("mouseleave", function () {
    let that = this;
    clearInterval(timing);
    timing = setInterval(function () {
        $(that).next("li").prevAll("li").find("a").removeClass("current_width");
        $(that).next("li").nextAll("li").find("a").removeClass("current_width");
        $(that).next("li").find("a").addClass("current_width");
    }, 100);
});
