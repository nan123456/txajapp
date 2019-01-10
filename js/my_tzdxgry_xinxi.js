mui.init({
	swipeBack:true //启用右滑关闭功能
	});
	(function($) {
		$('#scroll').scroll({
			indicators: true //是否显示滚动条
		});
	})(mui);
	
mui.plusReady(function(){
	var self=plus.webview.currentWebview();
	var gcid=self.gcid;
	//alert(gcid);
	
	var xmjl=document.getElementById("xmjl");
	var scjl=document.getElementById("scjl");
	var aqzj=document.getElementById("aqzj");
	var aqy=document.getElementById("aqy");
	var gz=document.getElementById("gz");
	var zrr=document.getElementById("zrr");
	
	mui.ajax(url+'my_plus/huifuren_du.php',{
		data:{
			gcid:gcid,
			panduan:"project_related_people_name"
		},
		dataType:'json',
		type:'post',
		timeout:10000,
		success:function(data){
			//alert(data);
			var length=data.length;
			for (var i=0;i<length-1;i++) {
				xmjl.value=data[i].项目经理;
				scjl.value=data[i].生产经理;
				aqzj.value=data[i].安全总监;
				aqy.value=data[i].安全员;
				zrr.value=data[i].责任人;
			}
		},
		error:function(xhr,type,errorThrown){
			return callback('ajax错误'+type+errorThrown);
		}
	});
});