mui.init({
	swipeBack:true //启用右滑关闭功能
	});
(function($) {
	$('#scroll').scroll({
		indicators: true //是否显示滚动条
		});
})(mui);
	
mui.plusReady(function(){
	var self = plus.webview.currentWebview();
	flag = self.flag;
	zp = self.zp;
	var imgId = self.imgId;
	var imgSrc = self.imgSrc;
	var div_text = self.div_text;
	var sjc = self.sjc;
	var liId = self.liId;
	var signIn = self.signIn;
	//alert(signIn);
	
	//alert(flag.slice(5));
	//console.log(liId);
	
	//var anniuHf=document.getElementById("anniuHf");
	//var anniuPf=document.getElementById("anniuPf");
	var wztm=document.getElementById("wztm");  //违章现象
	var wzbw=document.getElementById("wzbw");  //违章部位
	var wzzt=document.getElementById("wzzt");  //违章状态
	var sjcYl=document.getElementById("sjcYl");  //时间戳
	var sjcTzd=document.getElementById("sjcTzd");  //通知单时间戳
	var tzdbhFw=document.getElementById("tzdbhFw");  //通知单编号
	var gcmc=document.getElementById("gcmc");  //工程名称
	var gcid=document.getElementById("gcid");  //工程id
	var liid=document.getElementById("liid");  //Li的id
	var textareaBianji=document.getElementById("textareaBianji");  //项目部回复
	var zgshf=document.getElementById("zgshf");  //总公司批复
	var fgshf=document.getElementById("fgshf");  //分公司批复
	
	//判断是回复还是批复
	if(zp==1){
		//alert("整改");
	}else if(zp==2){
		//alert("回复");
	}else{
		//alert("批复");
	}
	
	//监听回复或者取消
	mui('#anniuHf').on('tap', 'button', function() {
		var panduan="";
		
		var btnId=this.id;
		if(btnId=="huifu"){
			var mydata = {
				sjc:sjc,
				flag:flag,
				panduan:"huifu",
				wzxxZggl:wztm.value, //违章现象
				wzbwZggl:wzbw.value, //违章部位
				wzztZggl:wzzt.value, //违章状态
				sjcYlZggl:sjcYl.value, //时间戳
				sjcTzdZggl:sjcTzd.value, //通知单时间戳
				tzdbhFwZggl:tzdbhFw.value, //通知单编号
				gcmcZggl:gcmc.value, //工程名称
				gcidZggl:gcid.value, //工程id
				liidZggl:liid.value, //Li的ID
				textareaBianjiZggl:textareaBianji.value, //项目部回复
				zgshfZggl:zgshf.value, //总公司批复
				fgshfZggl:fgshf.value //分公司批复
			};
			if(signIn=="NO"){
				mui.alert('您尚未签到，请先签到！', '同欣巡检', function() {
					
				});
			}else{
				ajaxformHuifu(mydata, function(err) {
					if (err) {
						plus.nativeUI.toast(err);
						return;
					}
					alert("此回复信息已同步云端！");
					var target=plus.webview.currentWebview().opener();
					mui.fire(target,'zgglHf',{
						tbtg:'',
						flag:1 //回复通过为1
					});
					mui.back();
				});
			}
		}else{
			
		}
	});
	
	//批复中的通过和不通过
	mui('#anniuPf').on('tap', 'button', function() {
		var panduan="";
		//alert(this.id);
		var btnId=this.id;
		//分割分公司和总公司
		var textareaBianjiValue=textareaBianji.value;
		var zgshfValueWfg=zgshf.value; //总公司批复
		var fgshfValueWfg=fgshf.value; //分公司批复
		var strs=new Array();
		strs=textareaBianjiValue.split("：");
		var textareaBjiValue=strs[1];
		var strs=new Array();
		strs=zgshfValueWfg.split("：");
		var zgshfValue=strs[1];
		var strs=new Array();
		strs1=fgshfValueWfg.split("：");
		var fgshfValue=strs1[1];
		var divValue=liId;
		//alert(fgshfValue);
		
		if(btnId=="tongguo"){
			var tbtg=1;
			var mydata = {
				sjc:sjc,
				flag:flag,
				panduan:"tongguo",
				wzxxZggl:wztm.value, //违章现象
				wzbwZggl:wzbw.value, //违章部位
				wzztZggl:wzzt.value, //违章状态
				sjcYlZggl:sjcYl.value, //时间戳
				sjcTzdZggl:sjcTzd.value, //通知单时间戳
				tzdbhFwZggl:tzdbhFw.value, //通知单编号
				gcmcZggl:gcmc.value, //工程名称
				gcidZggl:gcid.value, //工程id
				liidZggl:liid.value, //Li的ID
				textareaBianjiZggl:textareaBjiValue, //项目部回复
				zgshfZggl:zgshfValue, //总公司批复
				fgshfZggl:fgshfValue //分公司批复
			};
			if(signIn=="NO"){
				mui.alert('您尚未签到，请先签到！', '同欣巡检', function() {
					
				});
			}else{
				ajaxformHuifu(mydata, function(err) {
					if (err) {
						plus.nativeUI.toast(err);
						return;
					}
					alert("此回复信息已同步云端！");
					var target=plus.webview.currentWebview().opener();
					mui.fire(target,'zggl',{
						tbtg:tbtg,
						flag:flag
					});
					mui.back();
				});
			}
			
		}else{
			var tbtg=0;
			var mydata = {
				sjc:sjc,
				flag:flag,
				panduan:"butongguo",
				wzxxZggl:wztm.value, //违章现象
				wzbwZggl:wzbw.value, //违章部位
				wzztZggl:wzzt.value, //违章状态
				sjcYlZggl:sjcYl.value, //时间戳
				sjcTzdZggl:sjcTzd.value, //通知单时间戳
				tzdbhFwZggl:tzdbhFw.value, //通知单编号
				gcmcZggl:gcmc.value, //工程名称
				gcidZggl:gcid.value, //工程id
				liidZggl:liid.value, //Li的ID
				textareaBianjiZggl:textareaBjiValue, //项目部回复
				zgshfZggl:zgshfValue, //总公司批复
				fgshfZggl:fgshfValue //分公司批复
			};
			if(signIn=="NO"){
				mui.alert('您尚未签到，请先签到！', '同欣巡检', function() {
					
				});
			}else{
				ajaxformHuifu(mydata, function(err) {
					if (err) {
						plus.nativeUI.toast(err);
						return;
					}
					alert("此回复信息已同步云端！");
					var target=plus.webview.currentWebview().opener();
					mui.fire(target,'zggl',{
						tbtg:tbtg,
						flag:flag
					});
					mui.back();
				});
			}
			
		}
	});
});	

//异步上传数据
//异步传值
var ajaxformHuifu = function(mydata, callback) {
	callback = callback || $.noop;
	mydata = mydata || {};
	
	mydata.sjc = mydata.sjc || '';
	mydata.flag = mydata.flag || '';
	mydata.panduan = mydata.panduan || '';
	mydata.wzxxZggl = mydata.wzxxZggl || '';
	mydata.wzbwZggl = mydata.wzbwZggl || '';
	mydata.wzztZggl = mydata.wzztZggl || '';
	mydata.sjcYlZggl = mydata.sjcYlZggl || '';
	mydata.sjcTzdZggl = mydata.sjcTzdZggl || '';
	mydata.tzdbhFwZggl = mydata.tzdbhFwZggl || '';
	mydata.gcmcZggl = mydata.gcmcZggl || '';
	mydata.gcidZggl = mydata.gcidZggl || '';
	mydata.liidZggl = mydata.liidZggl || '';
	mydata.textareaBianjiZggl = mydata.textareaBianjiZggl || '';
	mydata.zgshfZggl = mydata.zgshfZggl || '';
	mydata.fgshfZggl = mydata.fgshfZggl || '';
	
	//console.log("mydata.sjc："+mydata.sjc+"		mydata.flag："+mydata.flag+"		mydata.panduan："+mydata.panduan+"		mydata.wzxxZggl："+mydata.wzxxZggl+"		mydata.wzbwZggl："+mydata.wzbwZggl+"		mydata.wzztZggl："+mydata.wzztZggl+"		mydata.sjcYlZggl："+mydata.sjcYlZggl+"		mydata.sjcTzdZggl："+mydata.sjcTzdZggl+"		mydata.tzdbhFwZggl："+mydata.tzdbhFwZggl+"		mydata.gcmcZggl："+mydata.gcmcZggl+"			mydata.gcidZggl："+mydata.gcidZggl+"		mydata.liidZggl："+mydata.liidZggl+"			mydata.textareaBianjiZggl："+mydata.textareaBianjiZggl+"		mydata.zgshfZggl："+mydata.zgshfZggl+"		mydata.fgshfZggl："+mydata.fgshfZggl);
	
	mui.ajax(url+'my_plus/my_change_manage_tpyl.php',{
		data:{
			sjc:mydata.sjc,
			flag:mydata.flag,
			panduan:mydata.panduan,
			wzxxZggl:mydata.wzxxZggl,
			wzbwZggl:mydata.wzbwZggl,
			wzztZggl:mydata.wzztZggl,
			sjcYlZggl:mydata.sjcYlZggl,
			sjcTzdZggl:mydata.sjcTzdZggl,
			tzdbhFwZggl:mydata.tzdbhFwZggl,
			gcmcZggl:mydata.gcmcZggl,
			gcidZggl:mydata.gcidZggl,
			liidZggl:mydata.liidZggl,
			textareaBianjiZggl:mydata.textareaBianjiZggl,
			zgshfZggl:mydata.zgshfZggl,
			fgshfZggl:mydata.fgshfZggl
		},
		dataType:'json',
		type:'post',
		timeout:10000,
		success:function(data){
			//console.log(data);
			if (data.result=='success') {
				return callback();
			} else{
				return callback('服务器返回error');	
			}
		},
		error:function(xhr,type,errorThrown){
			return callback('ajax错误'+type+errorThrown);
		}
	});
};