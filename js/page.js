//沙箱
(function(){
    //实例化各功能的对象
    function Page() {
        this.Focus = new window.Focus();
        this.ShowHide = new window.ShowHide();
        this.BgClick = new window.BgClick();
        this.ClickCarousel = new window.ClickCarousel();
        this.ShowHideBB = new window.ShowHideBB();
    }
    //获取id名
    Page.prototype.getId = function(id){
          return document.getElementById(id);
    };
    //获取类名
    Page.prototype.getClassName = function(element){
         return document.getElementsByClassName(element);
    };
    //鼠标获取焦点以及失去边框颜色事件
    Page.prototype.focus_event = function (element) {
        this.Focus.focus(element);
    };
    //鼠标失去焦点以及获取焦点时按钮的背景颜色
    Page.prototype.focus_event_bg = function(element){
        this.Focus.bg_focus(element);
    };
    //鼠标失去焦点以及获取焦点字体图标旋转
    Page.prototype.focus_rotate = function(element){
        this.Focus.rotate180(element);
    };
    //显示和隐藏功能推荐事件
    Page.prototype.show_hide_event = function(element1,element2){
        this.ShowHide.showHide(element1,element2);
    };
    //点击改变背景事件
    Page.prototype.bg_click_current_event = function(element,bgColor1,color1,bgColor2,color2,element1){
        this.BgClick.bgClickCurrent(element,bgColor1,color1,bgColor2,color2,element1);
    };
    //轮播
    Page.prototype.click_carousel_event = function(elementSpan,elementUl,class_name,time){
        this.ClickCarousel.click_roll(elementSpan,elementUl,class_name,time);
    };
    //点击切换
    Page.prototype.show_hide_bb = function(element1,element2){
        this.ShowHideBB.show_hide_border(element1,element2);
    };
    window.Page = Page;
}());