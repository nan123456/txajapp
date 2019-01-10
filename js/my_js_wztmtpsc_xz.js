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
	var self = plus.webview.currentWebview(); //获取应用界面管理对象
	tzdbh=self.tzdbh; //获取通知单编号
	okwetm=self.okwetm; //获取已选择违章条目
	gcmc = self.gcmc; //获取工程名称
	gcid = self.gcid; //获取工程id
	sjc = self.sjc; //获取时间戳
	hehe = self.hehe;
	fenge(gcid,okwetm,hehe); //调用分割函数
				
	//将以获取的违章条目进行分割
	function fenge(id,wztm,hehe){
		var id=id;
		var wztm=wztm;
 		var wz=new Array;
 		var wz=wztm.split("||"); //split，将违章条目进行分割传给变量wz
 		var haha=hehe.split("||");
		for(i=0;i<wz.length-1;i++){
  			//alert(wz[i],"<br>");
  			id=id+1;
  			mywztm(id,wz[i],i,haha[i]);
  			mybsc(i);
 		}
	};
	function mybsc(i){
		var num=i;
		var li_id=document.getElementById("l"+num); //定位至点击的图片
		var img_id=li_id.getElementsByTagName("img")[0].getAttribute("id");
		var x = li_id.getElementsByTagName("img")[0].getAttribute("src");
		//alert(img_id);
		appendFile(x,img_id);
	}
	//动态获取已选违章条目列表
	function mywztm(id,wztm,i,hehe){
		var id=id;
		var wztm=wztm;
		var num=i;
		var wftmtpsc = document.getElementById("wftmtpsc");
		var ul = document.createElement("ul");
		ul.className = "mui-table-view";
		ul.innerHTML = '<li id="l'+num+'" class="mui-table-view-cell" onclick="tap(this)"><img id="t'+num+'" class="mui-media-object mui-pull-right" src="../images/null.jpg" style="width:50px;height:50px;"><div class="mui-media-body">'+wztm+'</div><p>部位：'+hehe+'</p></li>'
		wftmtpsc.appendChild(ul);

	};
	
}); 

var i=1,gentry=null,w=null;
var hl=null,le=null,de=null,ie=null;
var unv=true;

//无图片上传
function galleryImg(id){
	plus.gallery.pick(function(p){
		// 从相册返回的路径不需要转换可以直接使用
		//var pic=document.getElementById(id);
		//pic.src=p;
		//pic.realUrl=pic.src;
		//将本地路径传至压缩中
		var imgImg=document.getElementById(id).getAttribute("id");
		appendFile(p,imgImg);//处理图片的地方
		//createItem(p,'confirm');
    });
}
//将获取到的图片覆盖原来的图片
function galleryImg_1(id){
	plus.gallery.pick(function(p){
		// 从相册返回的路径不需要转换可以直接使用
		//var pic=document.getElementById(id);
		//pic.src=p;
		//pic.realUrl=pic.src;
		//将本地路径传至压缩中
		var imgImg=document.getElementById(id).getAttribute("id");
		appendFile_1(p,imgImg);//处理图片的地方
		//createItem(p,'confirm');
    });
}


//监听i（违章条目图片上传）
//mui('#wftmtpsc').on('tap', 'li', function() {
	function tap(a){
		var li_id=document.getElementById(a.id); //定位至点击的图片
		var img_id=li_id.getElementsByTagName("img")[0].getAttribute("id");
		//alert(img_id);
		num = img_id.replace("t","");
		//	alert(num);
	//	f1Base64.splice(num,1);
	//	alert(files_rwfj[2]);
		galleryImg_1(img_id);
	}
//});

//长按监听(长按编辑或删除条目)
mui('#wftmtpsc').on('longtap', 'li', function() {
	//获取li标签的文字
	var my_nome=document.getElementById(this.id);
	var liText=document.getElementById(this.id).getElementsByTagName("div")[0].innerText;
	var liTextid=document.getElementById(this.id).getAttribute("id");
	var hehe=document.getElementById(this.id).getElementsByTagName("p")[0].innerText; 
	var p = document.getElementById(this.id).getElementsByTagName("img")[0].getAttribute("src");
	var btnArray = [
		{title:"编辑"},
		{title:"删除"}
	];
	plus.nativeUI.actionSheet({
		title:"操作",
		cancel:"取消",
		buttons:btnArray
	}, function(e){
		var index = e.index;							
		switch (index){
			case 0:	//取消
				break;
			case 1:	//编辑
				my_nome.onclick="";
				mui.openWindow({
					url: "my_change_wztmbj2.html",
					id: "my_change_wztmbj2",
					extras:{
						liText:liText,
						liTextid:liTextid,
						p:p,
						hehe:hehe
					},
					show:{
						autoShow:true,//页面loaded事件发生后自动显示
						aniShow:'slide-in-right',//页面显示动画
						duration:'100'//页面动画持续时间
					},
					waiting:{
						autoShow:false,//自动显示等待框
					},
				});
				break;
			case 2:	//删除
				//删除条目(暂未完成)
				var wftmtpsc=document.getElementById("wftmtpsc"); 
				var liArrey=wftmtpsc.getElementsByTagName("li")[0];
				wftmtpsc.removeChild(liArrey);
				break;
		}
	} );
});

//////////////////////////////////////////////////////////////////////////////
//添加文件
var f1Base64=[];
function appendFile(path,id){
	var img = new Image();
	img.src = path; // 传过来的图片路径在这里用。                                              ///////////// 用canvas画布对照片像素进行处理
	img.onload = function () {
		var that = this;
		//生成比例 
		var w = that.width,
			h = that.height,
			scale = w / h;
			w = 480 || w; //480  你想压缩到多大，改这里
			h = w / scale;
		//生成canvas
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		canvas.setAttribute("width",w);
		canvas.setAttribute("height",h);
		ctx.drawImage(that, 0, 0, w, h);
		var base64 = canvas.toDataURL('image/jpeg', 1 || 0.8 );
		f1Base64.push(base64+"︴");
		var pic = document.getElementById(id);
		pic.src = base64; //这里丢到img 的 src 里面就能看到效果了
		createItem(base64);
	}
}
//文件替换
function appendFile_1(path,id){
	var img = new Image();
	img.src = path; // 传过来的图片路径在这里用。                                              ///////////// 用canvas画布对照片像素进行处理
	var	num = id.replace("t","");
//	alert(num);
	img.onload = function () {
		var that = this;
		//生成比例 
		var w = that.width,
			h = that.height,
			scale = w / h;
			w = 480 || w; //480  你想压缩到多大，改这里
			h = w / scale;
		//生成canvas
	
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		canvas.setAttribute("width",w);
		canvas.setAttribute("height",h);
		ctx.drawImage(that, 0, 0, w, h);
		var base64 = canvas.toDataURL('image/jpeg', 1 || 0.8 );
		f1Base64.splice(num,1,base64+"︴");
		var pic = document.getElementById(id);
		pic.src = base64; //这里丢到img 的 src 里面就能看到效果了
		createItem(base64);
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
var index_rwfj=1;
function createItem(p) {
	files_rwfj.push({name:"upfile"+index_rwfj,path:p});              ////////////创建上传数组
	index_rwfj++;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//上传文件
var server=url+"my_plus/fileupload.php";
var files=[]; //定义文件变量
var files_rwfj=[]; //定义任务附件(图片)
function upload(lx,clean){
	var strs=","+f1Base64.join();
	if (lx=='confirm') {
		files=files_rwfj; //将任务附件赋值给文件变量
	}else{
		
	} 
	if(files.length<=0){
		
		//plus.nativeUI.alert("没有添加上传文件！");
		var flagPicture="wuPicture";
		var wftmtpsc=document.getElementById("wftmtpsc"); //定位至违章条目卡片
		var lishuzu=wftmtpsc.getElementsByTagName("div"); //定位至卡片内每条数组
		var pshuzu=wftmtpsc.getElementsByTagName("p");
		li_text="";  
		p_text="";
		for(var i=0;i<lishuzu.length;i++){
			var liText=lishuzu[i].innerText+'||'; //将每条违章条目值传给liText，以||进行分割
			li_text+=liText; //liText自加，效果如下：违章条目1||违章条目2||违章条目3||
			var pText=pshuzu[i].innerText.replace('部位：','')+'||';
			p_text+=pText; //部位
		}  
		//alert(li_text+"###"+p_text)
		weztm(li_text,p_text,flagPicture); //调用异步上传 
		var button_lx=document.getElementById(lx); //定位上传按钮
		button_lx.disabled=true; //上传后不可点击上传按钮
		button_lx.innerText="上传成功"; //按钮重写，上传成功  
		//上传成功了隐藏返回键，显示完成按钮
		var returnUppage=document.getElementById("returnUppage");
		var wchen=document.getElementById("wchen");
		returnUppage.classList.add('my_none');
		wchen.classList.remove('my_none');
		return;
	}
	var wt=plus.nativeUI.showWaiting();
	var task=plus.uploader.createUpload(server,{method:"POST"},	function(t,status){
		var wftmtpsc=document.getElementById("wftmtpsc"); //定位至违章条目卡片
		var pshuzu=wftmtpsc.getElementsByTagName("p");
		var myWztmDiv = wftmtpsc.getElementsByTagName('div');
		my_text = "";
		p_text="";
		for(var i=0;i<pshuzu.length;i++){
			var myWztmText = myWztmDiv[i].innerText+'||';
			my_text+=myWztmText;
			var pText=pshuzu[i].innerText.replace('部位：','')+'||';
			p_text+=pText;
		}
		//上传完成 
		if(status==200){ //固定值200
			wt.close();
			//plus.nativeUI.alert("上传成功！");
			var button_lx=document.getElementById(lx);
			button_lx.disabled=true;
			button_lx.innerText="上传成功";
			//上传违章条目
			var flagPicture="youPicture";
			weztm(my_text,p_text,flagPicture); //调用异步上传
			//上传成功了隐藏返回键，显示完成按钮
			var returnUppage=document.getElementById("returnUppage");
			var wchen=document.getElementById("wchen");
			returnUppage.classList.add('my_none');
			wchen.classList.remove('my_none');
		}else{
			plus.nativeUI.alert("上传失败！");
			//outLine("上传失败："+status);
			t.close();
		}
	});
	//在日期中添加或减去指定的时间间隔
	nub=files.length.toString();
	task.addData("nub",nub);
	task.addData("files1",strs);
	task.addData("lx",lx);
	task.addData("tzdbh",tzdbh);
	task.addData("gcmc",gcmc);
	task.addData("gcid",gcid);
	task.addData("sjc",sjc);
	task.addData("uid",getUid());	
	task.addData("mchen",mchen());
	for(var i=0;i<files.length;i++){
		var f=files[i];
		task.addFile(f.path,{key:f.name});
	}
	task.start();
	files=[];
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 产生一个随机数
function getUid(){
	return Math.floor(Math.random()*100000000+10000000).toString();
}
// 获取时间戳
function mchen(){
	var sjc=document.getElementById('sjc').value;
	return sjc;
}
//违章条目上传
function weztm(okwetm,p_text,flagPicture){
//	alert("uhyguhgu\n"+okwetm) 
	mui.ajax(url+'my_plus/my_change_wztm.php',{
		data:{
			q:p_text,
			s:okwetm,
			sjc:sjc,
			gcmc:gcmc,
			gcid:gcid,
			tzdbh:tzdbh,
			flagPicture:flagPicture
		},
		dataType:'json',
		type:'POST', 
		timeout:10000,
		success:function(data){
			//alert("提交成功");
		}, 
		error:function(xhr,type,errorThrown){
			alert('ajax错误'+type+'---'+errorThrown);
		}
	});
}
