//沙箱
(function(){
    let that = null;
    function ShowHide() {
        //保存this
        that = this;
    }
    //改变原型指向，获取绑定事件兼容
    ShowHide.prototype = new window.Focus();
    ShowHide.prototype.showHide = function (element1,element2) {
        //鼠标进入，显示元素事件
        this.addEvent(element1,"mouseover",function () {
            element2.style.display = "block";
        });
        //鼠标移出，隐藏元素事件
        this.addEvent(element1,"mouseout",function () {
            element2.style.display = "none";
        });
    };
    window.ShowHide = ShowHide;
}());