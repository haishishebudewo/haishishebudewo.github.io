//沙箱
(function () {
    let that = null;

    function BgClick() {
        //保存this
        that = this;
    }

    //改变原型指向，调用绑定事件兼容
    BgClick.prototype = new window.Focus();
    //点击改变背景事件
    BgClick.prototype.bgClickCurrent = function (element, bgColor1, color1, bgColor2, color2, element1) {
        for (let i = 0; i < element.length; i++) {
            element[i].setAttribute("index", i);
            this.addEvent(element[i], "click", function () {
                for (let j = 0; j < element.length; j++) {
                    element[j].style.background = bgColor1;
                    that.getFirstElement(element[j]).style.color = color1;
                    element1[j].style.display = "none";
                }
                this.style.background = bgColor2;
                that.getFirstElement(this).style.color = color2;
                let index = this.getAttribute("index");
                element1[index].style.display = "block";
            });
        }
    };
    window.BgClick = BgClick;
}());