//沙箱
//点击滚动轮播
(function () {
    let that = null;

    function ClickCarousel() {
        //保存this
        that = this;
    }

    //改变指向
    ClickCarousel.prototype = new Focus();
    //动画函数
    ClickCarousel.prototype.animation = function (element, distance, everyDistance) {
        //获取当前ul的left
        let left = element.offsetLeft;
        //如果需要移动的距离大于当前距离左边的值，那么增加当前距离左边的left值，反之则需要去减小距离左边的值
        everyDistance = distance > left ? everyDistance : -everyDistance;
        //设置定时器
        element.timing = setInterval(function () {
            left += everyDistance;//改变left值
            //如果当前需要移动的距离减当前距离左边的距离大于每次移动的距离的绝对值的绝对值，那么让对应ul距离左边的值直接设置为当前距离左边的值
            if (Math.abs(Math.abs(distance) - Math.abs(left)) > Math.abs(everyDistance)) {
                element.style.left = left + "px";
            } else {
                //否则，使用每次移动的距离去更改距离左边的left值
                element.style.left = distance + "px";
                //避免同时点击多次，造成ul自动移动的情况
                clearInterval(element.timing)
            }
        }, 3);
    };
    //自动播放
    ClickCarousel.prototype.auto_play = function (elementUl,time) {
        let left = elementUl.offsetLeft;//获取当前距离左边的值
        let length = elementUl.children.length;//获取li元素的个数
        let width = that.getFirstElement(elementUl).offsetWidth;//获取每个li的宽度
        elementUl.timing = setInterval(function () {
            left -= width;
            //判断：当距离左边的值，大于所有li的的和宽度时，那么距离左边的值为当前距离左边的值，保证最后一个图片始终贴边
            if (left >= -width * (length - 1)) {
                elementUl.style.left = left + "px";
            } else {
                //判断：当距离左边的值，小于所有li的的和宽度时，那么距离左边的值为当前距离左边的值，保证ul回到第一张图片
                elementUl.style.left = 0 + "px";
                left = 0;
            }
        }, time);
    };
    //点击按钮滚动
    ClickCarousel.prototype.click_roll = function (elementSpan, elementUl,class_name,time) {
        let liObj = elementUl.firstElementChild;//获取第一个li
        let width = liObj.offsetWidth;//获取每个li的长度
        let spanObj = elementSpan.children;//获取所有按钮
        let length = spanObj.length;//获取按钮的个数
        let arr = [];//保存每个图片的自定义属性的index
        let index;
        //给每个按钮添加点击事件
        for (let i = 0; i < length; i++) {
            //给每个按钮的添加自定义属性index
            spanObj[i].setAttribute("index", i);
            //每个按钮的点击事件
            this.addEvent(spanObj[i], "click", function () {
                //改变透明度
                //移除所有按钮的class(去除所有css样式)
                for (let j = 0; j < length; j++) {
                    spanObj[j].className = "";
                }
                this.className = class_name;//给当前点击的按钮设置class(添加css样式)
                index = this.getAttribute("index");//获取每个按钮自定义属性的值
                //当数组中的index自定义属性大于2，先删除数组中最后的元素，再添加一个index属性值，添加位置数组索引为0
                if (arr.length > 2) {
                    arr.pop();
                    arr.unshift(index);
                } else {
                    //当数组中元素小于2，直接在索引为0的位置上添加自定义属性
                    arr.unshift(index);
                }
                //调用动画
                if (Math.abs(arr[0] - arr[1]) > 2) {
                    //如果移动的距离大于两个图片的宽度，那么每次移动的距离增加到100
                    that.animation(elementUl, -index * width, 100);
                } else if (Math.abs(arr[0] - arr[1]) > 1) {
                    //如果移动的距离大于一个图片的宽度，那么每次移动的距离为60
                    that.animation(elementUl, -index * width, 60);
                }
                else {
                    //如果移动的距离不大于一个图片的宽度，那么每次移动的距离为30
                    that.animation(elementUl, -index * width, 30);
                }
            });
        }
        //自动播放调用
        this.auto_play(elementUl,time);
    };
    window.ClickCarousel = ClickCarousel;
}());

