//当前位置
$("#current_potion").text(travel_data[6].current_potion);
//旅游推荐标题
$(".huan_xi_bu_price h2:first").text(travel_data[6].travel_text);
//旅游推荐编号
$("#travel_number").html(travel_data[6].number);
//出发地
$("#travel_place").html(travel_data[6].place);
//价格
$(".buy-box>i").html(travel_data[6].price);
//旅游类型
$("#group_tour>").html(travel_data[6].price_type);
//目的地
$("#travel_end").html(travel_data[6].end);
//行程天数
$("#travel_days").html(travel_data[6].days);
//获取特色中数组的长度
let itemLength = travel_data[6].item.length;
for (let i = 0; i < itemLength; i++) {
    $("<h5>" + travel_data[6].item[i].items + "</h5>").appendTo($(".txt_item_one"));
}
//创建元素，填充行程介绍
let tripLength = travel_data[6].trip.length;
for (let i = 0; i < tripLength; i++) {
    $(".info-xcjs").append("<h6>" + travel_data[6].trip[i].trips_number + "</h6>").append("<i>" + travel_data[6].trip[i].trips + "</i>").append("<p>" + travel_data[6].trip[i].trips_text + "</p>");
}
//更改大图的轮播图片
//获取当前轮播图的个数
let imgLength = travel_data[6].product_img.length;
for (let i = 0; i < imgLength; i++) {
    //更改大图的所有图片
    $(".huan_xi_bu_scenery_hd>ul").append("<li><img src='"+travel_data[6].product_img[i].img+"'></li>");
    //更改小图的所有图片
    $(".huanxi_bu_bd_anliu_ul > ul").append("<li><img src='"+travel_data[6].product_img[i].img+"'></li>");
}
//给第一个li添加边框
$(".huanxi_bu_bd_anliu_ul>ul>li:first").addClass("huanxi_bu_bd_anliu_boder");
//更改图片个数
$("#img_number").html(imgLength);