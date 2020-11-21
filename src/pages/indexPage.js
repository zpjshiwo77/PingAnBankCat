var indexPage = function () {
    var _self = this;
    var page;
    var showFlag = false;

    /**
     * 初始化
     */
    _self.init = function () {
        showFlag = true;
        uiInit();
        eventInit();
    }

    /**
     * 销毁
     */
    _self.distroy = function () {
        showFlag = false;
        page.removeSelf();
    }

    /**
     * 显示
     */
    _self.show = function(){
        showFlag = true;
        page.visible = true;
        page.alpha = 0;
        Laya.Tween.to(page, {
            alpha: 1
        }, TRF_TIME, Laya.Ease.linearIn);
    }

    /**
     * 隐藏
     */
    _self.hide = function(){
        hidePage();
    }

    /**
     * 事件初始化
     */
    function eventInit() {
        page.startBtn.on(Laya.Event.CLICK, this, function(){});
    }

    /**
     * 隐藏页面
     */
    function hidePage() {

        page.zOrder = 99;

        Laya.Tween.to(page, {
            alpha: 0
        }, TRF_TIME, Laya.Ease.linearIn);

        setTimeout(function () {
            showFlag = false;
            page.visible = false;
        }, TRF_TIME);
    }

    /**
     * ui初始化
     */
    function uiInit() {
        page = new indexUI();
        Laya.stage.addChild(page);
        page.cont.y = (WindowH - page.cont.height) / 2;
    }

}

var indexPage = new indexPage();