var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var awardUI=(function(_super){
		function awardUI(){
			
		    this.newTitle=null;
		    this.money=null;
		    this.unit=null;
		    this.closeBtn=null;
		    this.awardBtn=null;

			awardUI.__super.call(this);
		}

		CLASS$(awardUI,'ui.awardUI',_super);
		var __proto__=awardUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(awardUI.uiView);

		}

		awardUI.uiView={"type":"Dialog","props":{"width":750,"height":900},"child":[{"type":"Image","props":{"y":62,"x":15,"skin":"images/award/a.png"}},{"type":"Image","props":{"y":111,"x":220,"var":"newTitle","skin":"images/award/n.png"}},{"type":"Text","props":{"y":249,"x":0,"width":750,"var":"money","text":"0","height":167,"fontSize":100,"font":"Microsoft YaHei","color":"#bd2430","bold":true,"align":"center"}},{"type":"Text","props":{"y":320,"x":429,"width":114,"var":"unit","text":"元","height":70,"fontSize":30,"font":"Microsoft YaHei","color":"#bd2430","bold":true}},{"type":"Sprite","props":{"y":811,"x":316,"width":106,"var":"closeBtn","height":91}},{"type":"Sprite","props":{"y":444,"x":293,"width":166,"var":"awardBtn","height":158}}]};
		return awardUI;
	})(Dialog);
var catUI=(function(_super){
		function catUI(){
			
		    this.cat1=null;
		    this.cat2=null;
		    this.cat3=null;
		    this.cat4=null;

			catUI.__super.call(this);
		}

		CLASS$(catUI,'ui.catUI',_super);
		var __proto__=catUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(catUI.uiView);

		}

		catUI.uiView={"type":"View","props":{"width":600,"height":700},"child":[{"type":"Image","props":{"y":290,"x":32,"var":"cat1","skin":"images/cat/c1.png"}},{"type":"Image","props":{"y":310,"x":131,"var":"cat2","skin":"images/cat/c2/eye/_0000_010001.png.png"}},{"type":"Image","props":{"y":156,"x":103,"var":"cat3","skin":"images/cat/c3/eye/_0000_010001.png.png"}},{"type":"Image","props":{"y":78,"x":70,"var":"cat4","skin":"images/cat/c4/eye/_0000_010001.png.png"}}]};
		return catUI;
	})(View);
var illustratedUI=(function(_super){
		function illustratedUI(){
			
		    this.cat1=null;
		    this.cat2=null;
		    this.cat3=null;
		    this.closeBtn=null;
		    this.closeBtn2=null;

			illustratedUI.__super.call(this);
		}

		CLASS$(illustratedUI,'ui.illustratedUI',_super);
		var __proto__=illustratedUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(illustratedUI.uiView);

		}

		illustratedUI.uiView={"type":"Dialog","props":{"width":700,"height":600},"child":[{"type":"Image","props":{"y":2,"x":8,"skin":"images/illustrated/cont.png"}},{"type":"Image","props":{"y":170,"x":103,"var":"cat1","skin":"images/illustrated/mask.png","alpha":0}},{"type":"Image","props":{"y":170,"x":266,"var":"cat2","skin":"images/illustrated/mask.png","alpha":0}},{"type":"Image","props":{"y":170,"x":429,"var":"cat3","skin":"images/illustrated/mask.png","alpha":0}},{"type":"Sprite","props":{"y":0,"x":595,"width":98,"var":"closeBtn","height":75}},{"type":"Sprite","props":{"y":437,"x":141,"width":404,"var":"closeBtn2","height":86}}]};
		return illustratedUI;
	})(Dialog);
var intimacyUI=(function(_super){
		function intimacyUI(){
			
		    this.cont=null;
		    this.closeBtn=null;

			intimacyUI.__super.call(this);
		}

		CLASS$(intimacyUI,'ui.intimacyUI',_super);
		var __proto__=intimacyUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(intimacyUI.uiView);

		}

		intimacyUI.uiView={"type":"Dialog","props":{"width":683,"height":792},"child":[{"type":"Image","props":{"var":"cont","skin":"images/intimacy/0.png"}},{"type":"Sprite","props":{"y":-4,"x":585,"width":102,"var":"closeBtn","height":100}}]};
		return intimacyUI;
	})(Dialog);
var introUI=(function(_super){
		function introUI(){
			
		    this.closeBtn=null;
		    this.word2=null;
		    this.word1=null;

			introUI.__super.call(this);
		}

		CLASS$(introUI,'ui.introUI',_super);
		var __proto__=introUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(introUI.uiView);

		}

		introUI.uiView={"type":"Dialog","props":{"width":700,"height":1000},"child":[{"type":"Image","props":{"y":596,"x":131,"skin":"images/main/seat.png","name":"seat"}},{"type":"Image","props":{"y":364,"x":163,"skin":"images/cat/c2/eye/_0000_010001.png.png","name":"cat"}},{"type":"Image","props":{"y":27,"x":227,"skin":"images/intro/d.png","name":"dialog"}},{"type":"Image","props":{"y":861,"x":300,"var":"closeBtn","skin":"images/intro/close.png"}},{"type":"Text","props":{"y":133,"x":299,"wordWrap":true,"width":338,"var":"word2","leading":5,"height":145,"fontSize":25,"font":"Microsoft YaHei","color":"#fd5b5f","align":"center"}},{"type":"Text","props":{"y":131,"x":297,"wordWrap":true,"width":338,"var":"word1","leading":5,"height":145,"fontSize":25,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]};
		return introUI;
	})(Dialog);
var inviteUI=(function(_super){
		function inviteUI(){
			
		    this.codeBox=null;
		    this.codeImg=null;
		    this.closeBtn=null;
		    this.shareBtn=null;
		    this.inviteBox=null;
		    this.friendScroll=null;
		    this.friendBox=null;
		    this.block=null;
		    this.inviteBtn=null;
		    this.closeBtn2=null;

			inviteUI.__super.call(this);
		}

		CLASS$(inviteUI,'ui.inviteUI',_super);
		var __proto__=inviteUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(inviteUI.uiView);

		}

		inviteUI.uiView={"type":"Dialog","props":{"width":700,"height":1000},"child":[{"type":"Box","props":{"y":34,"x":13,"var":"codeBox"},"child":[{"type":"Image","props":{"skin":"images/invite/cont.png"}},{"type":"Image","props":{"y":463,"x":237,"width":190,"var":"codeImg","skin":"images/invite/c.png","height":190}},{"type":"Image","props":{"y":271,"x":192,"skin":"images/invite/cat.png","name":"cat"}},{"type":"Sprite","props":{"y":-6,"x":587,"width":96,"var":"closeBtn","height":86}},{"type":"Sprite","props":{"y":764,"x":123,"width":426,"var":"shareBtn","height":102}}]},{"type":"Box","props":{"y":27,"x":18,"var":"inviteBox"},"child":[{"type":"Image","props":{"skin":"images/invite/c.png"}},{"type":"Panel","props":{"y":394,"x":48,"width":605,"var":"friendScroll","vScrollBarSkin":"images/task/vscroll.png","renderType":"render","height":398},"child":[{"type":"Box","props":{"y":0,"x":0,"width":583,"var":"friendBox"},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":583,"var":"block","height":80},"child":[{"type":"Image","props":{"y":19,"x":0,"skin":"images/invite/block.png"}},{"type":"Image","props":{"y":7,"x":51,"skin":"images/invite/c1.png","name":"circle"}},{"type":"Text","props":{"y":28,"x":46,"width":72,"text":"TOP1","name":"index","height":21,"fontSize":18,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Text","props":{"y":23,"x":126,"width":256,"text":"x1111111","name":"name","height":37,"fontSize":26,"font":"Microsoft YaHei","color":"#343434","bold":false}},{"type":"Text","props":{"y":28,"x":454,"wordWrap":true,"width":78,"text":"102","name":"score","height":21,"fontSize":18,"font":"Microsoft YaHei","color":"#ffffff","bold":false}}]}]}]},{"type":"Sprite","props":{"y":172,"x":455,"width":175,"var":"inviteBtn","height":66}},{"type":"Sprite","props":{"y":780,"x":130,"width":406,"var":"closeBtn2","height":96}}]}]};
		return inviteUI;
	})(Dialog);
var levelupUI=(function(_super){
		function levelupUI(){
			
		    this.cont=null;
		    this.closeBtn=null;
		    this.awardBtn=null;

			levelupUI.__super.call(this);
		}

		CLASS$(levelupUI,'ui.levelupUI',_super);
		var __proto__=levelupUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(levelupUI.uiView);

		}

		levelupUI.uiView={"type":"Dialog","props":{"width":750,"height":867},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"cont","skin":"images/levelup/1.png"}},{"type":"Sprite","props":{"y":135,"x":642,"width":86,"var":"closeBtn","height":75}},{"type":"Sprite","props":{"y":517,"x":176,"width":410,"var":"awardBtn","height":118}}]};
		return levelupUI;
	})(Dialog);
var loadingUI=(function(_super){
		function loadingUI(){
			
		    this.ani1=null;
		    this.cont=null;
		    this.maskBox=null;
		    this.per=null;
		    this.cat=null;

			loadingUI.__super.call(this);
		}

		CLASS$(loadingUI,'ui.loadingUI',_super);
		var __proto__=loadingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loadingUI.uiView);

		}

		loadingUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Image","props":{"skin":"images/loading/bg.jpg"}},{"type":"Box","props":{"y":369,"x":2,"width":750,"var":"cont","height":500},"child":[{"type":"Image","props":{"y":296,"x":236,"skin":"images/loading/w.png","name":"word"},"compId":5},{"type":"Image","props":{"y":238,"x":144,"skin":"images/loading/bar.png"}},{"type":"Sprite","props":{"y":238,"x":144,"width":457,"var":"maskBox","height":19},"child":[{"type":"Image","props":{"x":0,"var":"per","skin":"images/loading/per.png","pivotX":457}}]},{"type":"Image","props":{"y":175,"x":0,"var":"cat","skin":"images/loading/cat.png","pivotX":-108}}]}],"animations":[{"nodes":[{"target":5,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
		return loadingUI;
	})(View);
var mainUI=(function(_super){
		function mainUI(){
			
		    this.cradleAni=null;
		    this.lightAni=null;
		    this.ballAni1=null;
		    this.ballAni2=null;
		    this.tipsAni=null;
		    this.heartAni=null;
		    this.cont=null;
		    this.bg=null;
		    this.cat1=null;
		    this.cat=null;
		    this.feedBtn=null;
		    this.feedAni=null;
		    this.feedText=null;
		    this.tips=null;
		    this.event1=null;
		    this.event2=null;
		    this.heartBox=null;
		    this.topPanel=null;
		    this.intimacyBtn=null;
		    this.rankBtn=null;
		    this.lotteryBtn=null;
		    this.signBtn=null;
		    this.viewBtn=null;
		    this.ruleBtn=null;
		    this.bottomPanel=null;
		    this.getCatBtn=null;
		    this.getFoodBtn=null;
		    this.inviteBtn=null;

			mainUI.__super.call(this);
		}

		CLASS$(mainUI,'ui.mainUI',_super);
		var __proto__=mainUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(mainUI.uiView);

		}

		mainUI.uiView={"type":"View","props":{"width":750,"height":1624},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"cont"},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"bg"},"child":[{"type":"Image","props":{"skin":"images/main/bg/bg.jpg"}},{"type":"Image","props":{"y":-22,"x":134,"width":244,"skin":"images/main/bg/dl.png","pivotY":-2,"pivotX":122,"name":"cradle","height":804},"compId":6},{"type":"Image","props":{"y":859,"x":158,"width":265,"skin":"images/main/bg/dls.png","pivotY":38,"pivotX":127,"name":"cradleShadow","height":83},"compId":8},{"type":"Image","props":{"y":155,"x":245,"skin":"images/main/bg/m.png","name":"mirror"}},{"type":"Sprite","props":{"y":155,"x":245,"width":146,"name":"mirrorMask","height":439},"child":[{"type":"Image","props":{"skin":"images/main/bg/light.png"},"compId":11}]},{"type":"Image","props":{"y":1370,"x":75,"skin":"images/main/bg/q1s.png","name":"q1shadow"},"compId":13},{"type":"Image","props":{"y":1327.375,"x":180.125,"skin":"images/main/bg/q1.png","rotation":135,"pivotY":58,"pivotX":57,"name":"q1","alpha":0.375},"compId":12},{"type":"Image","props":{"y":1026,"x":619,"skin":"images/main/bg/q2s.png","name":"q2shadow"},"compId":15},{"type":"Image","props":{"y":1015,"x":663,"skin":"images/main/bg/q2.png","pivotY":40,"pivotX":40,"name":"q2"},"compId":14},{"type":"Image","props":{"y":1192,"x":556,"skin":"images/main/bg/zys.png","name":"zys"}}]},{"type":"Image","props":{"y":924,"x":57,"var":"cat1","skin":"images/cat/c1.png"}},{"type":"Sprite","props":{"y":600,"x":70,"width":600,"var":"cat","height":700},"child":[{"type":"Image","props":{"y":540,"x":105,"skin":"images/main/seat.png","name":"seat"}}]},{"type":"Image","props":{"y":1300,"x":218,"var":"feedBtn","skin":"images/main/feed.png"}},{"type":"Animation","props":{"y":1300,"x":218,"var":"feedAni","source":"images/main/feed/001.png,images/main/feed/002.png,images/main/feed/003.png,images/main/feed/004.png,images/main/feed/005.png,images/main/feed/006.png,images/main/feed/007.png,images/main/feed/008.png,images/main/feed/009.png,images/main/feed/010.png,images/main/feed/011.png,images/main/feed/012.png,images/main/feed/013.png,images/main/feed/014.png,images/main/feed/015.png,images/main/feed/016.png,images/main/feed/017.png,images/main/feed/018.png,images/main/feed/019.png,images/main/feed/020.png,images/main/feed/021.png,images/main/feed/022.png,images/main/feed/023.png,images/main/feed/024.png,images/main/feed/025.png,images/main/feed/026.png"}},{"type":"Text","props":{"y":1454,"x":274,"width":169,"var":"feedText","text":"（0g）","height":48,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":809,"x":622,"visible":false,"var":"tips","skin":"images/main/tips.png","pivotY":34,"pivotX":107},"compId":50},{"type":"Image","props":{"y":542,"x":460,"visible":false,"var":"event1","skin":"images/main/events/e1.png"}},{"type":"Image","props":{"y":770,"x":347,"visible":false,"var":"event2","skin":"images/main/events/e2.png"}},{"type":"Box","props":{"y":166,"x":94,"width":361,"var":"heartBox","height":618},"child":[{"type":"Image","props":{"y":433,"x":168,"skin":"images/main/h2.png","alpha":1},"compId":56},{"type":"Image","props":{"y":501,"x":253,"skin":"images/main/heart.png","alpha":0.2},"compId":57},{"type":"Image","props":{"y":505.7692307692308,"x":194.30769230769232,"skin":"images/main/h2.png","alpha":0.4444444444444444},"compId":59},{"type":"Image","props":{"y":550,"x":263,"skin":"images/main/h2.png","alpha":0},"compId":60},{"type":"Image","props":{"y":514.4285714285714,"x":238.14285714285714,"skin":"images/main/heart.png","alpha":0},"compId":62},{"type":"Image","props":{"y":455.1818181818182,"x":282.8181818181818,"skin":"images/main/heart.png","alpha":0.7272727272727273},"compId":63},{"type":"Image","props":{"y":454.14285714285717,"x":180.57142857142856,"skin":"images/main/h2.png","alpha":0.25},"compId":64}]}]},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"topPanel","height":500},"child":[{"type":"Image","props":{"y":105,"x":25,"var":"intimacyBtn","skin":"images/main/btn/b1.png"}},{"type":"Image","props":{"y":245,"x":25,"var":"rankBtn","skin":"images/main/btn/b2.png"}},{"type":"Image","props":{"y":380,"x":25,"var":"lotteryBtn","skin":"images/main/btn/b3.png"}},{"type":"Image","props":{"y":220,"x":640,"var":"signBtn","skin":"images/main/btn/b4.png"}},{"type":"Image","props":{"y":360,"x":640,"var":"viewBtn","skin":"images/main/btn/b5.png"}},{"type":"Image","props":{"y":103,"x":559,"var":"ruleBtn","skin":"images/main/btn/b8.png"}},{"type":"Image","props":{"y":115,"x":109,"skin":"images/main/t.png","name":"title"}}]},{"type":"Box","props":{"y":1025,"x":0,"width":750,"var":"bottomPanel","height":310},"child":[{"type":"Image","props":{"y":126,"x":223,"var":"getCatBtn","skin":"images/main/btn/b10.png"}},{"type":"Image","props":{"y":130,"x":579,"var":"getFoodBtn","skin":"images/main/btn/b7.png"}},{"type":"Image","props":{"y":130,"x":0,"var":"inviteBtn","skin":"images/main/btn/b6.png"}}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":0},{"value":3,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":20},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":40}]}},{"target":8,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":20},{"value":1.05,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":40}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":20},{"value":1.05,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":40}]}}],"name":"cradleAni","id":1,"frameRate":24,"action":2},{"nodes":[{"target":11,"keyframes":{"y":[{"value":-320,"tweenMethod":"linearNone","tween":true,"target":11,"key":"y","index":0},{"value":400,"tweenMethod":"linearNone","tween":true,"target":11,"key":"y","index":50}],"name":[{"value":"light","tweenMethod":"linearNone","tween":false,"target":11,"key":"name","index":0}]}}],"name":"lightAni","id":2,"frameRate":24,"action":2},{"nodes":[{"target":12,"keyframes":{"y":[{"value":1317,"tweenMethod":"linearNone","tween":true,"target":12,"key":"y","index":0},{"value":1363,"tweenMethod":"linearNone","tween":true,"target":12,"key":"y","index":40}],"x":[{"value":-115,"tweenMethod":"linearNone","tween":true,"target":12,"key":"x","index":0},{"value":130,"tweenMethod":"linearNone","tween":true,"target":12,"key":"x","index":40}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":12,"key":"rotation","index":40}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":40}]}},{"target":13,"keyframes":{"y":[{"value":1330,"tweenMethod":"linearNone","tween":true,"target":13,"key":"y","index":0},{"value":1371,"tweenMethod":"linearNone","tween":true,"target":13,"key":"y","index":40}],"x":[{"value":-202,"tweenMethod":"linearNone","tween":true,"target":13,"key":"x","index":0},{"value":50,"tweenMethod":"linearNone","tween":true,"target":13,"key":"x","index":40}]}}],"name":"ballAni1","id":3,"frameRate":24,"action":0},{"nodes":[{"target":14,"keyframes":{"y":[{"value":1048,"tweenMethod":"linearNone","tween":true,"target":14,"key":"y","index":0},{"value":1017,"tweenMethod":"linearNone","tween":true,"target":14,"key":"y","index":30}],"x":[{"value":808,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":0},{"value":683,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":30}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"rotation","index":0},{"value":-360,"tweenMethod":"linearNone","tween":true,"target":14,"key":"rotation","index":30}]}},{"target":15,"keyframes":{"y":[{"value":1058,"tweenMethod":"linearNone","tween":true,"target":15,"key":"y","index":0},{"value":1031,"tweenMethod":"linearNone","tween":true,"target":15,"key":"y","index":30}],"x":[{"value":748,"tweenMethod":"linearNone","tween":true,"target":15,"key":"x","index":0},{"value":630,"tweenMethod":"linearNone","tween":true,"target":15,"key":"x","index":30}]}}],"name":"ballAni2","id":4,"frameRate":24,"action":0},{"nodes":[{"target":50,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":50,"key":"rotation","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":50,"key":"rotation","index":3},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":50,"key":"rotation","index":9},{"value":2,"tweenMethod":"linearNone","tween":true,"target":50,"key":"rotation","index":15},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":50,"key":"rotation","index":21},{"value":0,"tweenMethod":"linearNone","tween":true,"target":50,"key":"rotation","index":24},{"value":0,"tweenMethod":"linearNone","tween":true,"target":50,"key":"rotation","index":40}]}}],"name":"tipsAni","id":5,"frameRate":24,"action":2},{"nodes":[{"target":56,"keyframes":{"y":[{"value":515,"tweenMethod":"linearNone","tween":true,"target":56,"key":"y","index":0},{"value":433,"tweenMethod":"linearNone","tween":true,"target":56,"key":"y","index":8},{"value":324,"tweenMethod":"linearNone","tween":true,"target":56,"key":"y","index":18},{"value":170,"tweenMethod":"linearNone","tween":true,"target":56,"key":"y","index":30},{"value":66,"tweenMethod":"linearNone","tween":true,"target":56,"key":"y","index":42},{"value":-10,"tweenMethod":"linearNone","tween":true,"target":56,"key":"y","index":51}],"x":[{"value":240,"tweenMethod":"linearNone","tween":true,"target":56,"key":"x","index":0},{"value":168,"tweenMethod":"linearNone","tween":true,"target":56,"key":"x","index":8},{"value":228,"tweenMethod":"linearNone","tween":true,"target":56,"key":"x","index":18},{"value":71,"tweenMethod":"linearNone","tween":true,"target":56,"key":"x","index":30},{"value":137,"tweenMethod":"linearNone","tween":true,"target":56,"key":"x","index":42},{"value":21,"tweenMethod":"linearNone","tween":true,"target":56,"key":"x","index":51}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":56,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":56,"key":"alpha","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":56,"key":"alpha","index":42},{"value":0,"tweenMethod":"linearNone","tween":true,"target":56,"key":"alpha","index":51}]}},{"target":57,"keyframes":{"y":[{"value":538,"tweenMethod":"linearNone","tween":true,"target":57,"key":"y","index":0},{"value":464,"tweenMethod":"linearNone","tween":true,"target":57,"key":"y","index":16},{"value":412,"tweenMethod":"linearNone","tween":true,"target":57,"key":"y","index":24},{"value":266,"tweenMethod":"linearNone","tween":true,"target":57,"key":"y","index":35},{"value":192,"tweenMethod":"linearNone","tween":true,"target":57,"key":"y","index":46},{"value":99,"tweenMethod":"linearNone","tween":true,"target":57,"key":"y","index":52},{"value":5,"tweenMethod":"linearNone","tween":true,"target":57,"key":"y","index":58}],"x":[{"value":245,"tweenMethod":"linearNone","tween":true,"target":57,"key":"x","index":0},{"value":261,"tweenMethod":"linearNone","tween":true,"target":57,"key":"x","index":16},{"value":175,"tweenMethod":"linearNone","tween":true,"target":57,"key":"x","index":24},{"value":255,"tweenMethod":"linearNone","tween":true,"target":57,"key":"x","index":35},{"value":149,"tweenMethod":"linearNone","tween":true,"target":57,"key":"x","index":46},{"value":97,"tweenMethod":"linearNone","tween":true,"target":57,"key":"x","index":52},{"value":39,"tweenMethod":"linearNone","tween":true,"target":57,"key":"x","index":58}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":57,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":57,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":57,"key":"alpha","index":16},{"value":1,"tweenMethod":"linearNone","tween":true,"target":57,"key":"alpha","index":52},{"value":0,"tweenMethod":"linearNone","tween":true,"target":57,"key":"alpha","index":58}]}},{"target":59,"keyframes":{"y":[{"value":523,"tweenMethod":"linearNone","tween":true,"target":59,"key":"y","index":0},{"value":495,"tweenMethod":"linearNone","tween":true,"target":59,"key":"y","index":13},{"value":393,"tweenMethod":"linearNone","tween":true,"target":59,"key":"y","index":26},{"value":295,"tweenMethod":"linearNone","tween":true,"target":59,"key":"y","index":38},{"value":205,"tweenMethod":"linearNone","tween":true,"target":59,"key":"y","index":49},{"value":103,"tweenMethod":"linearNone","tween":true,"target":59,"key":"y","index":62},{"value":25,"tweenMethod":"linearNone","tween":true,"target":59,"key":"y","index":71}],"x":[{"value":230,"tweenMethod":"linearNone","tween":true,"target":59,"key":"x","index":0},{"value":172,"tweenMethod":"linearNone","tween":true,"target":59,"key":"x","index":13},{"value":78,"tweenMethod":"linearNone","tween":true,"target":59,"key":"x","index":26},{"value":106,"tweenMethod":"linearNone","tween":true,"target":59,"key":"x","index":38},{"value":48,"tweenMethod":"linearNone","tween":true,"target":59,"key":"x","index":49},{"value":133,"tweenMethod":"linearNone","tween":true,"target":59,"key":"x","index":62},{"value":49,"tweenMethod":"linearNone","tween":true,"target":59,"key":"x","index":71}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":59,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":59,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":59,"key":"alpha","index":13},{"value":1,"tweenMethod":"linearNone","tween":true,"target":59,"key":"alpha","index":62},{"value":0,"tweenMethod":"linearNone","tween":true,"target":59,"key":"alpha","index":71}]}},{"target":62,"keyframes":{"y":[{"value":535,"tweenMethod":"linearNone","tween":true,"target":62,"key":"y","index":0},{"value":463,"tweenMethod":"linearNone","tween":true,"target":62,"key":"y","index":28},{"value":395,"tweenMethod":"linearNone","tween":true,"target":62,"key":"y","index":43},{"value":277,"tweenMethod":"linearNone","tween":true,"target":62,"key":"y","index":59},{"value":53,"tweenMethod":"linearNone","tween":true,"target":62,"key":"y","index":83}],"x":[{"value":249,"tweenMethod":"linearNone","tween":true,"target":62,"key":"x","index":0},{"value":211,"tweenMethod":"linearNone","tween":true,"target":62,"key":"x","index":28},{"value":105,"tweenMethod":"linearNone","tween":true,"target":62,"key":"x","index":43},{"value":187,"tweenMethod":"linearNone","tween":true,"target":62,"key":"x","index":59},{"value":43,"tweenMethod":"linearNone","tween":true,"target":62,"key":"x","index":83}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":62,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":62,"key":"alpha","index":18},{"value":1,"tweenMethod":"linearNone","tween":true,"target":62,"key":"alpha","index":28},{"value":1,"tweenMethod":"linearNone","tween":true,"target":62,"key":"alpha","index":59},{"value":0,"tweenMethod":"linearNone","tween":true,"target":62,"key":"alpha","index":83}]}},{"target":63,"keyframes":{"y":[{"value":525,"tweenMethod":"linearNone","tween":true,"target":63,"key":"y","index":0},{"value":429,"tweenMethod":"linearNone","tween":true,"target":63,"key":"y","index":11},{"value":297,"tweenMethod":"linearNone","tween":true,"target":63,"key":"y","index":26},{"value":119,"tweenMethod":"linearNone","tween":true,"target":63,"key":"y","index":44},{"value":1,"tweenMethod":"linearNone","tween":true,"target":63,"key":"y","index":63}],"x":[{"value":245,"tweenMethod":"linearNone","tween":true,"target":63,"key":"x","index":0},{"value":297,"tweenMethod":"linearNone","tween":true,"target":63,"key":"x","index":11},{"value":201,"tweenMethod":"linearNone","tween":true,"target":63,"key":"x","index":26},{"value":219,"tweenMethod":"linearNone","tween":true,"target":63,"key":"x","index":44},{"value":63,"tweenMethod":"linearNone","tween":true,"target":63,"key":"x","index":63}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":63,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":63,"key":"alpha","index":11},{"value":0,"tweenMethod":"linearNone","tween":true,"target":63,"key":"alpha","index":63}]}},{"target":64,"keyframes":{"y":[{"value":517,"tweenMethod":"linearNone","tween":true,"target":64,"key":"y","index":0},{"value":407,"tweenMethod":"linearNone","tween":true,"target":64,"key":"y","index":14},{"value":279,"tweenMethod":"linearNone","tween":true,"target":64,"key":"y","index":30},{"value":179,"tweenMethod":"linearNone","tween":true,"target":64,"key":"y","index":45},{"value":85,"tweenMethod":"linearNone","tween":true,"target":64,"key":"y","index":62},{"value":-11,"tweenMethod":"linearNone","tween":true,"target":64,"key":"y","index":70}],"x":[{"value":224,"tweenMethod":"linearNone","tween":true,"target":64,"key":"x","index":0},{"value":148,"tweenMethod":"linearNone","tween":true,"target":64,"key":"x","index":14},{"value":140,"tweenMethod":"linearNone","tween":true,"target":64,"key":"x","index":30},{"value":214,"tweenMethod":"linearNone","tween":true,"target":64,"key":"x","index":45},{"value":72,"tweenMethod":"linearNone","tween":true,"target":64,"key":"x","index":62},{"value":28,"tweenMethod":"linearNone","tween":true,"target":64,"key":"x","index":70}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":64,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":64,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":64,"key":"alpha","index":14},{"value":1,"tweenMethod":"linearNone","tween":true,"target":64,"key":"alpha","index":62},{"value":0,"tweenMethod":"linearNone","tween":true,"target":64,"key":"alpha","index":70}]}},{"target":60,"keyframes":{"y":[{"value":531,"tweenMethod":"linearNone","tween":true,"target":60,"key":"y","index":0},{"value":550,"tweenMethod":"linearNone","tween":true,"target":60,"key":"y","index":8},{"value":437,"tweenMethod":"linearNone","tween":true,"target":60,"key":"y","index":18},{"value":327,"tweenMethod":"linearNone","tween":true,"target":60,"key":"y","index":29},{"value":279,"tweenMethod":"linearNone","tween":true,"target":60,"key":"y","index":44},{"value":175,"tweenMethod":"linearNone","tween":true,"target":60,"key":"y","index":57},{"value":27,"tweenMethod":"linearNone","tween":true,"target":60,"key":"y","index":74}],"x":[{"value":280,"tweenMethod":"linearNone","tween":true,"target":60,"key":"x","index":0},{"value":263,"tweenMethod":"linearNone","tween":true,"target":60,"key":"x","index":8},{"value":326,"tweenMethod":"linearNone","tween":true,"target":60,"key":"x","index":18},{"value":288,"tweenMethod":"linearNone","tween":true,"target":60,"key":"x","index":29},{"value":172,"tweenMethod":"linearNone","tween":true,"target":60,"key":"x","index":44},{"value":206,"tweenMethod":"linearNone","tween":true,"target":60,"key":"x","index":57},{"value":80,"tweenMethod":"linearNone","tween":true,"target":60,"key":"x","index":74}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":60,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":60,"key":"alpha","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":60,"key":"alpha","index":18},{"value":1,"tweenMethod":"linearNone","tween":true,"target":60,"key":"alpha","index":57},{"value":0,"tweenMethod":"linearNone","tween":true,"target":60,"key":"alpha","index":74}]}}],"name":"heartAni","id":6,"frameRate":24,"action":0}]};
		return mainUI;
	})(View);
var rankUI=(function(_super){
		function rankUI(){
			
		    this.ani1=null;
		    this.rankScroll=null;
		    this.ranks=null;
		    this.block=null;
		    this.myIndex=null;
		    this.myName=null;
		    this.myScore=null;
		    this.myHead=null;
		    this.award=null;

			rankUI.__super.call(this);
		}

		CLASS$(rankUI,'ui.rankUI',_super);
		var __proto__=rankUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(rankUI.uiView);

		}

		rankUI.uiView={"type":"Dialog","props":{"width":750,"height":1200},"child":[{"type":"Image","props":{"y":21,"x":37,"skin":"images/rank/cont.png","name":"bg"}},{"type":"Panel","props":{"y":200,"x":125,"width":544,"var":"rankScroll","vScrollBarSkin":"images/task/vscroll.png","renderType":"render","height":697},"child":[{"type":"Box","props":{"y":0,"x":0,"width":518,"var":"ranks"},"child":[{"type":"Sprite","props":{"width":518,"var":"block","height":86},"child":[{"type":"Image","props":{"skin":"images/rank/a.png"}},{"type":"Text","props":{"y":22,"x":15,"width":35,"text":"1","name":"index","height":34,"fontSize":30,"color":"#5b5859","align":"center"}},{"type":"Text","props":{"y":27,"x":131,"width":207,"text":"name","name":"name","height":33,"fontSize":24,"color":"#5b5859"}},{"type":"Text","props":{"y":32,"x":431,"width":70,"text":"0","name":"score","height":23,"fontSize":20,"color":"#ffffff"}},{"type":"Sprite","props":{"y":7,"x":62,"width":63,"name":"head","height":61}}]}]}]},{"type":"Text","props":{"y":983,"x":70,"width":59,"var":"myIndex","text":"1","height":46,"fontSize":45,"color":"#396599","align":"center"}},{"type":"Text","props":{"y":991,"x":239,"width":255,"var":"myName","text":"name","height":33,"fontSize":30,"color":"#5b5859"}},{"type":"Text","props":{"y":998,"x":589,"width":70,"var":"myScore","text":"0","name":"score","height":23,"fontSize":25,"color":"#ffffff"}},{"type":"Sprite","props":{"y":966,"x":146,"width":80,"var":"myHead","height":78}},{"type":"Sprite","props":{"y":127,"x":93,"width":560,"var":"award","height":30},"child":[{"type":"Text","props":{"text":"第一名可获得Apple iPhone11（A2223) 64GB 绿色1台、第二名可获得戴森(Dyson) 新一代吹风机*1、第三名可获得360扫地机器人C50*1","fontSize":20,"font":"Microsoft YaHei","color":"#fff"},"compId":21}]}],"animations":[{"nodes":[{"target":21,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":21,"key":"y","index":0}],"x":[{"value":600,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":0},{"value":-1300,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":440}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
		return rankUI;
	})(Dialog);
var ruleUI=(function(_super){
		function ruleUI(){
			
		    this.closeBtn=null;

			ruleUI.__super.call(this);
		}

		CLASS$(ruleUI,'ui.ruleUI',_super);
		var __proto__=ruleUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ruleUI.uiView);

		}

		ruleUI.uiView={"type":"Dialog","props":{"width":700,"height":1135},"child":[{"type":"Image","props":{"y":0,"x":9,"skin":"images/rule/rule.png"}},{"type":"Sprite","props":{"y":1006,"x":135,"width":419,"var":"closeBtn","height":102}}]};
		return ruleUI;
	})(Dialog);
var signinUI=(function(_super){
		function signinUI(){
			
		    this.day1=null;
		    this.day2=null;
		    this.day3=null;
		    this.day4=null;
		    this.day5=null;
		    this.day6=null;
		    this.day7=null;
		    this.closeBtn=null;
		    this.signBtn=null;

			signinUI.__super.call(this);
		}

		CLASS$(signinUI,'ui.signinUI',_super);
		var __proto__=signinUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(signinUI.uiView);

		}

		signinUI.uiView={"type":"Dialog","props":{"width":700,"height":1000},"child":[{"type":"Image","props":{"y":41,"x":10,"skin":"images/signin/cont.png"}},{"type":"Image","props":{"y":190,"x":89,"var":"day1","skin":"images/signin/sign.png","alpha":0}},{"type":"Image","props":{"y":190,"x":268,"var":"day2","skin":"images/signin/sign.png","alpha":0}},{"type":"Image","props":{"y":190,"x":448,"var":"day3","skin":"images/signin/sign.png","alpha":0}},{"type":"Image","props":{"y":400,"x":89,"var":"day4","skin":"images/signin/sign.png","alpha":0}},{"type":"Image","props":{"y":400,"x":268,"var":"day5","skin":"images/signin/sign.png","alpha":0}},{"type":"Image","props":{"y":400,"x":448,"var":"day6","skin":"images/signin/sign.png","alpha":0}},{"type":"Image","props":{"y":612,"x":90,"var":"day7","skin":"images/signin/sign2.png","alpha":0}},{"type":"Sprite","props":{"y":30,"x":586,"width":106,"var":"closeBtn","height":88}},{"type":"Sprite","props":{"y":798,"x":136,"width":420,"var":"signBtn","height":106}}]};
		return signinUI;
	})(Dialog);
var taskUI=(function(_super){
		function taskUI(){
			
		    this.tipsBox=null;
		    this.closeBtn=null;
		    this.gotoBtn=null;
		    this.taskBox=null;
		    this.taskScroll=null;
		    this.tasks=null;
		    this.block=null;
		    this.backBtn=null;

			taskUI.__super.call(this);
		}

		CLASS$(taskUI,'ui.taskUI',_super);
		var __proto__=taskUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(taskUI.uiView);

		}

		taskUI.uiView={"type":"Dialog","props":{"width":750,"height":1200},"child":[{"type":"Box","props":{"y":396,"x":31,"var":"tipsBox"},"child":[{"type":"Image","props":{"skin":"images/task/tips.png"}},{"type":"Sprite","props":{"y":-11,"x":595,"width":93,"var":"closeBtn","height":90}},{"type":"Sprite","props":{"y":311,"x":131,"width":408,"var":"gotoBtn","height":85}}]},{"type":"Box","props":{"y":111,"x":46,"var":"taskBox"},"child":[{"type":"Image","props":{"skin":"images/task/cont.png","name":"bg"}},{"type":"Panel","props":{"y":185,"x":75,"width":541,"var":"taskScroll","vScrollBarSkin":"images/task/vscroll.png","renderType":"render","height":622},"child":[{"type":"Box","props":{"y":0,"x":0,"width":541,"var":"tasks"},"child":[{"type":"Sprite","props":{"y":0,"x":15,"var":"block"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"images/task/b.png"}},{"type":"Image","props":{"y":32,"x":385,"skin":"images/task/n.png","name":"gotoBtn"}},{"type":"Text","props":{"y":24,"x":22,"width":332,"text":"x1111111","name":"title","height":21,"fontSize":22,"font":"Microsoft YaHei","color":"#ea6e7f","bold":true}},{"type":"Text","props":{"y":53,"x":22,"wordWrap":true,"width":332,"text":"x1111111","name":"cont","height":21,"fontSize":18,"font":"Microsoft YaHei","color":"#303030","bold":false}}]}]}]},{"type":"Sprite","props":{"y":825,"x":115,"width":435,"var":"backBtn","height":81}}]}]};
		return taskUI;
	})(Dialog);