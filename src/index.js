/**
 * laya初始化
 */
function LayaInit() {
    Laya.init(750, 1624, WebGL);
    Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
    Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
    Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;
    Laya.stage.bgColor = "#ffffff";
    Laya.UIConfig.closeDialogOnSide = false;
    // Laya.URL.basePath = "https://cdn2.dhteam.net/osm/";
    Laya.loader.load(PreResources, laya.utils.Handler.create(this, loadUIInit), null);
}
LayaInit();

/**
 * 加载ui初始化
 */
function loadUIInit() {
    CountPageSize();
    remUnitConverter(750);

    iBgm.init();

    for (var i = 0; i < unpackImg.length; i++) {
        var item = { url: unpackImg[i], type: Loader.IMAGE };
        Resources.push(item);
    }

    Laya.loader.load(Resources, laya.utils.Handler.create(this, loadComplete), laya.utils.Handler.create(this, loadPerUpdate, null, false));
}

/**
 * 加载进度
 */
function loadPerUpdate(num) {
    iOutPage.setPer(num);
}

/**
 * 加载结束
 */
function loadComplete() {
    
    // DevelopTest();

    if (typeof wx) {
        wxUser.init({
            shareInfo: {
                title: "欧诗漫",
                friend: "欢迎光临欧诗漫博物馆",
                timeline: "欢迎光临欧诗漫博物馆",
                link: "https://wechat.dhteam.net/osm/index.html",
                image: "https://wechat.dhteam.net/osm/share.jpg",
            }
        });
    }
}

/**
 *  开发测试用
 */
function DevelopTest() {
    
}

/**
 * 计算页面size
 */
function CountPageSize() {
    if (Browser.clientWidth < Browser.clientHeight) WindowW = (750 / Browser.clientWidth) * Browser.clientHeight;
    else WindowW = (750 / Browser.clientHeight) * Browser.clientWidth;
    BgPageX = (WindowW - 1624) / 2;
}

/**
 * rem单位转换
 * @param {*} width			转换的宽度
 */
function remUnitConverter(width) {
    var scale = width / 100;
    var unit = $(window).width() / scale;
    $("html").css('font-size', unit);
}
