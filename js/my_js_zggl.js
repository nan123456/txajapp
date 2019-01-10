mui.init({
	swipeBack: true //启用右滑关闭功能
});
(function($) {
	$('#scroll').scroll({
		indicators: true //是否显示滚动条
	});
})(mui);

mui.plusReady(function() {
	//接收上一个页面传值
	function geturl(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	}
	sjc = geturl("sjcCgao");
	id = geturl("id");
	//alert(sjc);

	//动态创建整改管理中的整改中的图片
	var createimg = function(tpmc, wztm, i, duixiang) {
		var wztm = wztm;
		var tpmc = tpmc;
		var num = i;
		var duix = duixiang;
//		alert(tpmc);
		if(tpmc == ''||tpmc == undefined) {
			var mysrc = "../images/add.png";
		} else {
			var mysrc = url + "upload/" + tpmc;
		}
		//var total=Math.floor(Math.random()*100000000+10000000).toString().slice(2,5);
		var zgwztmtp = document.getElementById("zgwztmtp");
		var li = document.createElement('li');
		li.id = "fw" + num;
		li.className = "mui-table-view-cell mui-media mui-col-xs-6";
		li.innerHTML = '<a id="fwzg' + num + '" href="#" onclick=""><img style="width:200px;height:200px" id="fwimgli2' + num + '" class="mui-media-object" src="' + mysrc + '"><div id="divzg' + num + '" class="mui-media-body">' + wztm + '</div><div id="divduiXzg' + num + '" class="mui-media-body my_none">' + duix + '</div></a>';
		zgwztmtp.appendChild(li);
	};
	var createimg1 = function(id) {
		var id = id;
		var zgwztmtp = document.getElementById("zgwztmtp");
		var li2 = document.createElement('li');
		li2.id = "zpt";
		li2.className = "mui-table-view-cell mui-media mui-col-xs-6";
		li2.innerHTML = '<a id="zg" href="#" onclick=""><img id="imgli2' + id + '" class="mui-media-object" src="../images/zpxz.jpg"><div class="mui-media-body">&nbsp&nbsp&nbsp</div></a>';
		//li2.innerHTML='<a id="zg" href="#" onclick="getImage(this.id);"><img id="imgli2'+id+'" class="mui-media-object" src="../images/zpxz.jpg"><div class="mui-media-body">&nbsp&nbsp&nbsp</div></a>';
		zgwztmtp.appendChild(li2);
	}

	//动态创建整改管理中的回复照片信息
	var createimg_hf = function(wztm, tpmc, i, duixiang) {
		var wztm = wztm;
		var tpmc = tpmc;
		var num = i;
		if(tpmc == ''||tpmc == undefined) {
			var mysrc = "../images/add.png";
		} else {
			var mysrc = url + "upload/" + tpmc;
		}
		//隐患缺陷
		var yhqx = document.getElementById("yhqx");
		var li = document.createElement('li');
		li.className = "mui-table-view-cell";
		li.innerHTML = '<img style="width:200px;height:200px" id="imgli3' + num + '" class="mui-media-object" data-preview-src="" data-preview-group="1" src="' + mysrc + '"><div id="divhf' + num + '" class="mui-media-body my_none">' + wztm + '</div><div id="divduiXhf' + num + '" class="mui-media-body my_none">' + duixiang + '</div>';
		yhqx.appendChild(li);
	};
	
	var sum = function(){
		var num = 0 ;
		var count = cgnum.length-1;
//		alert(count);
		for(var i = 0; i < count; i++){
			createimgHf(num);
			num++;
//			alert(typeof(num)+'|'+num);
		}
	}
	var createimgHf = function(num) {
		var Num = num;
		var longtap=""
//		alert(typeof(Num)+'|'+Num);
		var imgImg="imgli2" + Num;
		var hftpSc = document.getElementById("hftpSc");
		var li2 = document.createElement('li');
		li2.id = "li" + Num;
		li2.className = "mui-table-view-cell";
		li2.innerHTML =  '<a id="hu' + Num + '" href="#" onclick="getImageHf(this.id);"><img id="imgli2' + Num + '" style="width:200px;height:200px" class="mui-media-object" src="../images/null.jpg"></a>';
		hftpSc.appendChild(li2);
//		getImageHf(li2.id);
		var li_id=document.getElementById(li2.id);
		var img_id=li_id.getElementsByTagName("img")[0].getAttribute("id");
		var x = li_id.getElementsByTagName("img")[0].getAttribute("src");
		//alert(img_id);
		appendFile(x,img_id);
	}

	//动态创建整改管理中的批复照片信息 yhqxpf
	var createimg_pf = function(wztm, tpmc, i, duixiang) {
		var wztm = wztm;
		var tpmc = tpmc;
		var num = i;
		if(tpmc == ''||tpmc == undefined) {
			var mysrc = "../images/null.jpg";
		} else {
			var mysrc = url + "upload/" + tpmc;
		}
		//var total=Math.floor(Math.random()*100000000+10000000).toString().slice(2,5);
		//隐患缺陷
		var yhqxpf = document.getElementById("yhqxpf");
		var li = document.createElement('li');
		li.className = "mui-table-view-cell";
		li.innerHTML = '<img style="width:200px;height:200px" id="imgli4' + num + '" class="mui-media-object" data-preview-src="" data-preview-group="1" src="' + mysrc + '"><div id="divpf' + num + '" class="mui-media-body my_none">' + wztm + '</div><div id="divduiXpf' + num + '" class="mui-media-body my_none">' + duixiang + '</div>';
		yhqxpf.appendChild(li);
	};

	//	var createimgPf=function(id) {
	//		var id=id;
	//		var pftpsc=document.getElementById("pftpsc");
	//		var li2=document.createElement('li');
	//		li2.id="pftxz";
	//		li2.className="mui-table-view-cell";
	//		li2.innerHTML='<a id="pifu" href="#" onclick=""><img id="pfImg" class="mui-media-object" src="../images/zpxz.jpg"></a>';
	//		pftpsc.appendChild(li2);
	//	}

	//获取处罚条目以及照片信息信息
	var cgfj = [];
	mui.ajax(url + 'my_plus/my_chang_manage.php', {
		data: {
			flag: '',
			sjc: sjc,
			liid: '',
			zggllx: 'chufa'
		},
		dataType: 'json',
		type: 'post',
		timeout: 10000,
		success: function(data) {
			//alert(data);
			var length = data.length;
			for(var i = 0; i < length - 1; i++) {
				id = data[i].id;
				wztmnr = data[i].内容.split("||");
				duixiang = data[i].对象.split("||");
				cgfj = data[i].草稿附件.length;
				
				//				if(cgfj!=0){
				//					cgfj=data[i].草稿附件.split("~*^*~");
				//					for (var i=0;i<wztmnr.length-1;i++) {
				//						i+=0;
				//						createimg(cgfj[i],wztmnr[i],i,duixiang[i]);
				//						createimg_hf(wztmnr[i],cgfj[i],i,duixiang[i]);
				//						createimg_pf(wztmnr[i],cgfj[i],i,duixiang[i]);
				//					}
				//					//createimg1(id);
				//					//createimgHf(id);
				//					//createimgPf(id);
				//				}else{
				//					for (var i=0;i<wztmnr.length-1;i++) {
				//						createimg('',wztmnr[i],i,duixiang[i]);
				//						createimg_hf(wztmnr[i],'',i,duixiang[i]);
				//						createimg_pf(wztmnr[i],'',i,duixiang[i]);
				//					}
				//					//createimg1(id);
				//					//createimgHf(id);
				//					//createimgPf(id);
				//					//console.log("我叫李德戈景");
				//				}
				cgfj = data[i].草稿附件.split("~*^*~");
				for(var i = 0; i < wztmnr.length - 1; i++) {
					i += 0;
					if(cgfj != 0) {
						createimg(cgfj[i], wztmnr[i], i, duixiang[i]);
						createimg_hf(wztmnr[i], cgfj[i], i, duixiang[i]);
						createimg_pf(wztmnr[i], cgfj[i], i, duixiang[i]);
					} else {
						createimg('', wztmnr[i], i, duixiang[i]);
						createimg_hf(wztmnr[i], '', i, duixiang[i]);
						createimg_pf(wztmnr[i], '', i, duixiang[i]);
					}

				}
			}
		},
		error: function(xhr, type, errorThrown) {
			//return callback('ajax错误'+type+errorThrown);
		}
	});

	//////////////////////////////////////////////////////  整改管理中的回复栏目 照片加载  //////////////////////////////////////////
	//创建整改管理中的回复照片
	var createimg_zggl_hf = function(tpmc, i) {
		var tpmc = tpmc;
		var num = i;
		//alert(tpmc);
		var mysrc = url + "upload/" + tpmc;
		//整改回复
		var hftpSc = document.getElementById("hftpSc");
		var li1 = document.createElement('li');
		li1.id = "tzh" + num;
		li1.className = "mui-table-view-cell";
		li1.innerHTML = '<a id="hu' + num + '" href="#" onclick=""><img style="width:200px;height:200px" id="imgli2' + num + '" class="mui-media-object" src="' + mysrc + '"></a>';
		hftpSc.appendChild(li1);
	};
	//创建整改管理中的批复照片
	var createimg_zggl_pf = function(tpmc, i, pfzt) {
		var pfzt = pfzt;
		var tpmc = tpmc;
		var num = i;
		var mysrc = url + "upload/" + tpmc;
		//alert(pfzt);
		var pfztPanduan = "panduan" + pfzt;
		if(pfztPanduan == "panduan1") {
			var color = "borderStylegreen";
		} else if(pfztPanduan == "panduan0") {
			var color = "borderStylered";
		} else if(pfztPanduan == "panduan ") {
			var color = "";
		} else {

		}
		//整改回复
		var pftpsc = document.getElementById("pftpsc");
		var li1 = document.createElement('li');
		li1.id = "tzp" + num;
		li1.className = "mui-table-view-cell " + color;
		li1.innerHTML = '<a id="pi' + num + '" href="#" onclick=""><img style="width:200px;height:200px" id="imgli4' + num + '" class="mui-media-object" src="' + mysrc + '"><div id="div' + num + '" class="mui-media-body my_none">' + pfzt + '</div></a>';
		pftpsc.appendChild(li1);
	};

	//获取处罚条目以及照片信息信息
	var cgfj = [];
	var cgnum = [];
	mui.ajax(url + 'my_plus/my_chang_manage.php', {
		data: {
			flag: '',
			sjc: sjc,
			liid: '',
			zggllx: 'zgglHf'
		},
		dataType: 'json',
		type: 'post',
		timeout: 10000,
		success: function(data) {
			//console.log(data);
			var length = data.length;
//			alert(data+"|"+length);
			for(var i = 0; i < length - 1; i++) {
				cgfj = data[i].回复附件.length;
				pfzt = data[i].批复状态.length;
				cgnum = data[i].草稿附件.length;
				if(cgnum != 0){
					cgnum = data[i].草稿附件.split("~*^*~");
//					alert(cgnum);
				}
				if(cgfj != 0) {
					cgfj = data[i].回复附件.split("~*^*~");
					for(var i = 0; i < cgfj.length - 1; i++) {
						if(pfzt != 0) {
							pfzt = data[i].批复状态.split("||");
							for(var i = 0; i < pfzt.length - 1; i++) {
								//console.log(pfzt[i]);
								createimg_zggl_pf(cgfj[i], i, pfzt[i]);
								createimg_zggl_hf(cgfj[i], i);
							}
						} else {
							//console.log("222");
							createimg_zggl_pf(cgfj[i], i, '');
							createimg_zggl_hf(cgfj[i], i);
						}
						//createimg_zggl_hf(cgfj[i],i);
					}
					//					//整改添加按钮
					//					var zgwztmtp=document.getElementById("zgwztmtp");
					//					var zpt=document.getElementById("zpt");
					//					zgwztmtp.removeChild(zpt);
					//回复添加按钮
					//					var hftpSc=document.getElementById("hftpSc");
					//					var liH=document.getElementById("liH");
					//					hftpSc.removeChild(liH);
					//					//批复添加图片按钮
					//					var pftpsc=document.getElementById("pftpsc");
					//					var pftxz=document.getElementById("pftxz");
					//					pftpsc.removeChild(pftxz);
				} else {
					alert("没有对相应违章条目进行回复！");
//					createimgHf("do_not_have_id");
						sum(cgnum.length);
				}
			}
		},
		error: function(xhr, type, errorThrown) {
			//return callback('ajax错误'+type+errorThrown);
		}
	});

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

});