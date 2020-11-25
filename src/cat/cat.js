var catPage = function () {
    var _self = this;
    var page;

    /**
     * 初始化
     */
    _self.init = function () {
        uiInit();
    }

    /**
     * 销毁
     */
    _self.distroy = function () {
        page.removeSelf();
    }


    /**
     * ui初始化
     */
    function uiInit() {
        page = new catUI();
    }

}

catUi = new catPage();