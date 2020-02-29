//会员服务jQuery
//获取当前时间
function getDates(dt) {
    let str1 = "";//存储时间的字符串
    let str2 = "";//存储时间的字符串
    //获取年
    let year = dt.getFullYear();
    //获取月
    let month = dt.getMonth() + 1;
    //获取日
    let day = dt.getDate();
    //获取小时
    let hour = dt.getHours();
    //获取分钟
    let min = dt.getMinutes();
    //获取秒
    let sec = dt.getSeconds();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    str1 = year + "-" + month + "-" + day;
    return str1;
}
//将日期更改为中文
jQuery(function($){
    $.datepicker.regional['zh-CN'] = {
        closeText: '关闭',
        prevText: '<上月',
        nextText: '下月>',
        currentText: '今天',
        monthNames: ['一月','二月','三月','四月','五月','六月',
            '七月','八月','九月','十月','十一月','十二月'],
        monthNamesShort: ['一','二','三','四','五','六',
            '七','八','九','十','十一','十二'],
        dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
        dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
        dayNamesMin: ['日','一','二','三','四','五','六'],
        weekHeader: '周',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '年'};
    $.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});
let dt = new Date();
//为div绑定点击事件
$(".search_date").on("click", function () {
    $(".jQ_ui_date").slideDown(600,function () {
        $("#datepicker").datepicker({
            altFormat: "DD, d MM, yy",//日期显示格式
            numberOfMonths:2,//每次显示的月份
            minDate:0,//可以选择今天前的多少天
            maxDate:30,//选择今天后的多少天
        });
    });
}).find("span").text(getDates(dt));
$(".item_num").on("click",function () {
    $(".jQ_ui_date").slideUp(600);
});
//乘车站焦点事件
$("#cheng_che_zhan").on("focus",function () {
    $(this).val("");
}).on("blur",function () {
    $(this).val("简码/汉字")
});
//到达站焦点事件
$("#dao_da_zhan").on("focus",function () {
    $(this).val("");
}).on("blur",function () {
    $(this).val("简码/汉字")
});