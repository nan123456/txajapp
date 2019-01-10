/*!
 * =====================================================
 * APPTEAM_lin_he_zhang_shao 
 * =====================================================
 */
mui.init({
	swipeBack:true //启用右滑关闭功能
	});
	(function($) {
		$('#scroll').scroll({
			indicators: true //是否显示滚动条
			});
	})(mui);
	
// H5 plus事件处理
mui.plusReady(function(){
	var self = plus.webview.currentWebview();
	tzdbh=self.tzdbh;
	okwetm=self.okwetm;
	gcmc = self.gcmc;
	gcid = self.gcid;
	sjc = self.sjc;
	//alert(tzdbh+"   "+okwetm+"    "+gcmc+"   "+gcid+"  "+sjc);
	
	//右上角点击保存回复选项
	var my_popover = document.getElementById("my_popover");
	
});
	
//var i=1,gentry=null,w=null;
//var hl=null,le=null,de=null,ie=null;
//var unv=true;
//
//function galleryImg(id){
//	plus.gallery.pick(function(p){
//		// 从相册返回的路径不需要转换可以直接使用
//		
//		var pic=document.getElementById(id);
//		//pic.setAttribute("src",'"'+p+'"');
//		pic.src=p;
//		pic.realUrl=pic.src;
//		createItem(p,'confirm');
//  });
//}
//
////监听i
//mui('#wftmtpsc').on('tap', 'li', function() {
//	var li_id=document.getElementById(this.id);
//	var img_id=li_id.getElementsByTagName("img")[0].getAttribute("id");
//	//alert(img_id);
//	galleryImg(img_id);
//});
//
////长按监听
//mui('#wftmtpsc').on('longtap', 'li', function() {
//	//获取li标签的文字
//	var liText=document.getElementById(this.id).getElementsByTagName("div")[0].innerText;
//	var liTextid=document.getElementById(this.id).getAttribute("id");
//	//alert(liTextid);
//	
//	var btnArray = [
//		{title:"编辑"},
//		{title:"删除"}
//	];
//	plus.nativeUI.actionSheet( {
//		title:"操作",
//		cancel:"取消",
//		buttons:btnArray
//	}, function(e){
//		var index = e.index;							
//		switch (index){
//			case 0:	//取消
//				break;
//			case 1:	//编辑
//				mui.openWindow({
//					url: "my_change_wztmbj.html",
//					id: "my_change_wztmbj",
//					extras:{
//						liText:liText
//					},
//					show:{
//						autoShow:true,//页面loaded事件发生后自动显示
//						aniShow:'slide-in-right',//页面显示动画
//						duration:'100'//页面动画持续时间
//					},
//					waiting:{
//						autoShow:false,//自动显示等待框
//					},
//				});				
//				break;
//			case 2:	//删除
//				var wftmtpsc=document.getElementById("wftmtpsc");
//				var liThisid=document.getElementById(liTextid);
//				wftmtpsc.removeChild(liThisid);
//				//alert(liThisid);
//				break;
//		}
//	} );
//});
//
//// 创建上传数组
//var index;
//var index_rwfj=1;
//function createItem( p,lx ) {
//	if (lx=='confirm') {
//		files_rwfj.push({name:"upfile"+index_rwfj,path:p});
//		index_rwfj++;
//	}else{
//		
//	}
//}
//
//////////////上传文件/////////////////////////////////////////////
var server=url+"my_plus/fileupload.php";
var files=[];
var files_rwfj=[];
function upload(lx,clean){	
	//alert("confirm："+lx+"   clean："+clean);
	if (lx=='confirm') {		
		files=files_rwfj;
	}else{
		
	}
//	if(files.length<=0){
//		//plus.nativeUI.alert("没有添加上传文件！");
//		weztm(okwetm);
//		var button_lx=document.getElementById(lx);
//		button_lx.disabled=true;
//		button_lx.innerText="上传成功";
//		return;
//	}

//	var wt=plus.nativeUI.showWaiting();
//	var task=plus.uploader.createUpload(server,{method:"POST"},	function(t,status){ 
//		//上传完成
//		if(status==200){
//			wt.close();
//			var button_lx=document.getElementById(lx);
//			button_lx.disabled=true;
//			button_lx.innerText="上传成功";
//			//上传违章条目
//			weztm(okwetm);
////			var target=plus.webview.getWebviewById('my_change_cgxz.html');
////			mui.fire(target,'weztm',{
////				flag:sjc.value
////			});
////			
////			mui.back();
//		}else{
//			outLine("上传失败："+status);
//			wt.close();
//		}
//	});
//	task.addData("lx",lx);
//	task.addData("tzdbh",tzdbh);
//	task.addData("gcmc",gcmc);
//	task.addData("gcid",gcid);
//	task.addData("sjc",sjc);
//	task.addData("uid",getUid());	
//	nub=files.length.toString();	
//	task.addData("nub",nub);
//	task.addData("mchen",mchen());
//	for(var i=0;i<files.length;i++){
//		var f=files[i];
//		task.addFile(f.path,{key:f.name});
//	}
//	task.start();
//	files=[];
}
//
//// 产生一个随机数
//function getUid(){
//	return Math.floor(Math.random()*100000000+10000000).toString();
//}
//// 获取时间戳
//function mchen(){	
//	var sjc=document.getElementById('sjc').value;
//	return sjc;
//}
////违章条目上传
//function weztm(okwetm){
//	mui.ajax(url+'my_plus/my_change_wztm.php',{
//		data:{
//			s:okwetm,
//			sjc:sjc,
//			gcmc:gcmc,
//			gcid:gcid,
//			tzdbh:tzdbh
//		},
//		dataType:'json',
//		type:'POST', 
//		timeout:10000,
//		success:function(data){
//			//alert("提交成功");
//		}, 
//		error:function(xhr,type,errorThrown){
//			alert('ajax错误'+type+'---'+errorThrown);
//		}
//	});
//}
//////////////上传文件/////////////////////////////////////////////
	