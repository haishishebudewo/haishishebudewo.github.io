//沙箱
(function () {
    let that = null;

    function ShowHideBB() {
        //保存this
        that = this;
    }

    ShowHideBB.prototype = new window.Focus();
    ShowHideBB.prototype.show_hide_border = function (element1, element2) {
        let length = element1.length;
        for (let i = 0; i < length; i++) {
            element1[i].setAttribute("index", i);
            this.addEvent(element1[i], "click", function () {
                for (let j = 0; j < length; j++) {
                    element1[j].style.borderColor = "#cccccc";
                    element2[j].style.display = "none";
                }
                this.style.borderColor = "#3399ff";
                let index = this.getAttribute("index");
                element2[index].style.display = "block";
            });
        }
    };
    window.ShowHideBB = ShowHideBB;
}());
