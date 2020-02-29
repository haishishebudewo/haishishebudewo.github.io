//沙箱
(function () {
    let that = null;

    function Focus(obtain_borderColor, lose_borderColor) {
        //获取焦点边框颜色
        this.obtain_borderColor = obtain_borderColor || "#3B99FC";
        //失去焦点边框颜色
        this.lose_borderColor = lose_borderColor || "#cccccc";
        //保存this
        that = this;
    }

    //绑定事件兼容
    Focus.prototype.addEvent = function (element, event, fn) {
        if (element.addEventListener) {
            return element.addEventListener(event, fn, false);//IE8不支持，谷歌和火狐支持
        } else if (element.attachEvent) {
            return element.attachEvent("on" + event, fn);      //谷歌和火狐支持，IE8不支持
        } else {
            return element["on" + event];                     //三者都不支持
        }
    };
    //获取第一个子元素
    Focus.prototype.getFirstElement = function (element) {
        if (element.firstElementChild) {
            return element.firstElementChild;
        } else {
            let node = element.firstChild;
            while (node && node.nodeType !== 1) {
                node = node.nextSibling;
            }
            return node;
        }
    };
    //获取最后一个子元素
    Focus.prototype.getLasrElemeent = function (element) {
        if (element.lastElementChild) {
            return element.lastElementChild;
        } else {
            let node = element.lastChild;
            while (node && node.nodeType !== 1) {
                node = node.previousSibling;
            }
            return node;
        }
    };
    //获取某元素的前一个兄弟元素
    Focus.prototype.getPreviousElement = function (element) {
        if (element.previousElementSibling) {
            return element.previousElementSibling;
        } else {
            let node = element.previousSibling;
            while (node && node.nodeType !== 1) {
                node = node.previousSibling;
            }
            return node;
        }
    };
    //获取某元素的后一个兄弟元素
    Focus.prototype.getNextElement = function (element) {
        if (element.nextElementSibling) {
            return element.nextElementSibling;
        } else {
            let node = node.nextSibling;
            while (node && node.nodeType !== 1) {
                node = node.nextSibling;
            }
            return node;
        }
    };
    //焦点
    Focus.prototype.bg_focus = function(element){
        //获取焦点,搜索按钮的背景
        this.addEvent(element, "focus", function () {
           that.getNextElement(element).style.opacity = 0.6;
        });
        //失去焦点,搜索按钮的背景
        this.addEvent(element, "blur", function () {
            that.getNextElement(element).style.opacity = 1;
        });
    };
    //焦点
    Focus.prototype.focus = function (element) {
        //获取到焦点的边框颜色状态以及阴影
        this.addEvent(element, "focus", function () {
            element.style.borderColor = that.obtain_borderColor;
            element.className = "shadow";
        });
        //失去焦点的边框颜色状态以及阴影
        this.addEvent(element, "blur", function () {
            element.style.borderColor = that.lose_borderColor;
            element.className = "";
        });
    };
    //焦点
    Focus.prototype.rotate180 = function(element){
        //获取焦点后，旋转180
        this.addEvent(element,"focus",function () {
            that.getNextElement(element).className = "down_arrow rotate_base";
            console.log(that.getNextElement(element));
        });
        //失去焦点后，恢复
        this.addEvent(element,"blur",function () {
            that.getNextElement(element).className = "down_arrow";
        });
    };
    window.Focus = Focus;
}());