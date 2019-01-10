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
	var gcid = self.gcid;
	var gcmc = self.gcmc;
	
	var jzrqYq=document.getElementById("jzrqYq");
	var yqqding=document.getElementById("yqqding");
	var yqgbi=document.getElementById('yqgbi');
	var tzdsjc=document.getElementById("tzdsjc");
	
	//草稿长按监听
	mui('#caogao').on('longtap', 'ul', function() {
		if(this.id == 000){
			return;
		}
		var ulId=this.id;
		var CountNum = 0;
		//检查是否已经签名
		mui.ajax(url+'my_plus/my_signature.php',{
			data:{
				flag:"ChaStu",
				tzdId:ulId
			},
			type:'post',
			timeout:10000,
			success:function(data){
//				alert(data);
				CountNum = data;
			},
			error:function(xhr,type,errorThrown){
				alert('ajax错误'+type+'---'+errorThrown);
			}
		});
		
		var btnArray = [
			{title:"下发整改"},
			{title:"分享"},
			{title:"删除"}
		];
		plus.nativeUI.actionSheet( {
			title:"操作",
			cancel:"取消",
			buttons:btnArray
		}, function(e){
			var index = e.index;	
			var nextpage='';
			switch (index){
				case 0:	//取消	
					break;
				case 1:	//下发整改								
					nextpage='';
//					alert(CountNum);
					//alert(gcmc);
					if(CountNum>0){
						var bts=["是","否","已签"+CountNum+"人          "];
					}else{
						var bts=["是","否","下达人签名        "];
					}
					plus.nativeUI.confirm("您确认下发此草稿吗？",function(e){
						var i=e.index;
//						alert(i);
						if(i==0){
							if(CountNum==0){
								var bts2=["是","否"];
								plus.nativeUI.confirm("该整改未签名，是否下发整改？",function(m){
									var y=m.index;
			//						alert(y);
									if(y==0){
										//是
										xfzg(ulId,gcid,gcmc);
										return;
									}else {
										//否
										return;
									}
								},"中国华西巡检系统",bts2);
							}else{
								//是&&已经签名
								xfzg(ulId,gcid,gcmc);
							}
						}else if(i==2){
//							alert("检察员签名");
							//ulId//通知单id
							mui.openWindow({
							    url:'sign/my_signature_1.html',
							    id:'my_signature.html',
							    extras:{
							    	tzdId:ulId//通知单id
//							        PicId:data
							    },
							    waiting:{
							      autoShow:true,//自动显示等待框，默认为true
							      title:'正在加载...'//等待对话框上显示的提示内容
							    }
							});
						}else {
							//否
						}
					},"中国华西巡检系统",bts);
					//xfzg(ulId,gcid,gcmc);
					break;
				case 2:	//分享
					nextpage='';
					shareSystem(ulId,"caogao");
					break;
				case 3:	//删除
					nextpage='';
					var bts=["是","否"];
					plus.nativeUI.confirm("您确认删除此草稿吗？",function(e){
						var i=e.index;
						if(i==0){
							//是
							sccg(ulId,gcid,gcmc);
						}else{
							//否
									
						}
					},"中国华西巡检系统",bts);
					break;
			}
			mui.openWindow({
				url: nextpage,
				id: nextpage,
				styles: {
					hardwareAccelerated:false
				},
				extras:{
					name:'wushaohang_lidegejing'
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
		});
	});
	
	var yqsq=function(biaozhi,ulID,zt,jzrq){
		var biaozhi=biaozhi;
		var ulID=ulID;
		var zt=zt;
		var jzrq=jzrq;
		if(zt=="回复"){
			var flag="yqhf";
		}else if(zt=="申请"){
			var flag="yqsq";
		}else if(zt=="不同意"){
			var flag="bty";
		}else{
			
		}
		mui.ajax(url+'my_plus/my_plus_jiekou.php',{
			data:{
				cangshu1:"",
				cangshu2:jzrq,
				cangshu3:"",
				biaozhi:biaozhi,
				sjc:ulID,
				flag:flag
			},
			dataType:'json',
			type:'post',
			timeout:10000,
			success:function(data){
				//alert(data);
				if(zt=="回复"){
					//刷新界面
					plus.nativeUI.toast("通知单号为："+ulID+"  通过延期申请！",{duration:"long"});					
					var wobj = plus.webview.currentWebview();					
					wobj.reload(true);
				}else if(zt=="不同意"){
					plus.nativeUI.toast("通知单号为："+ulID+"  未通过延期申请！",{duration:"long"});					
					var wobj = plus.webview.currentWebview();					
					wobj.reload(true);
				}else{
					
				}
				
			},
			error:function(xhr,type,errorThrown){
				//return callback('ajax错误'+type+errorThrown);
			}
		});
	};
	
	//整改中的主列表长按监听
	mui('#zhenggaizhong').on('longtap', 'ul', function() {
		var ulId=this.id; //通知单时间戳
		//alert(ulId);
		//alert("测试");
		var btnArray = [
			{title:"申请延期"},
			{title:"延期回复"},
			{title:"分享"}
		];
		plus.nativeUI.actionSheet( {
			title:"操作",
			cancel:"取消",
			buttons:btnArray
		}, function(e){
			var index = e.index;	
			var nextpage='';
			switch (index){
				case 0:	//取消	
					//alert("ceshi");
					break;
				case 1:	//申请延期	
//					var btnArray = ['否', '是'];
//					mui.confirm('申请延期，确认？', '申请延期', btnArray, function(e) {
//						if (e.index == 1) {
//							var ulliText=document.getElementById(ulId).getElementsByTagName("li")[6].innerText;
//							var arr=ulliText.split(":");
//							var str=arr[1];
//							if(str==1){
//								plus.nativeUI.toast("此通知单已提交申请，申请有待批准！",{duration:"long"});
//							}else{
//								yqsq("是",ulId,"申请","");			
//								var ulIdgColor = document.getElementById(ulId);
//								ulIdgColor.setAttribute("style","border: 3px solid green;");
//							}
//						} else {
//										
//						}
//					})
//					break;
					
					var ulliText=document.getElementById(ulId).getElementsByTagName("li")[6].innerText;
					tzdsjc.value=ulId;
					jzrqYq.value="";
					//弹出 id="zuyPopover" 的菜单
					mui("#zuyPopover").popover("toggle");
					break;
					
				case 2:	//延期回复
					var btnArray = ['不同意', '同意'];
					mui.confirm('申请延期，确认？', '延期回复', btnArray, function(e) {
						if (e.index == 1) {
							yqsq("是",ulId,"回复","");
						} else {
							yqsq("否",ulId,"不同意","");
						}
					})								
					break;
				case 3:	//分享								
//					//nextpage='';	
//					var ulliTextGcid=document.getElementById(ulId).getElementsByTagName("li")[7].innerText;
//					//遮罩效果
//					ws=null;
//					ws=plus.webview.currentWebview();
//					// 显示遮罩层
//					ws.setStyle({mask:"rgba(0,0,0,0.7)"});
//					mui.openWindow({
//						url: 'my_project_xczg_ryqd.html',
//						id:'my_project_xczg_ryqd.html',								
//						styles:{
//							width:'80%',
//							height:'60%',	
//							margin:'auto',
//							hardwareAccelerated:false
//						},
//						extras:{
//							name:'lidegejing',
//							tzdsjc:ulId,
//							gcid:ulliTextGcid
//						},
//						show:{
//							autoShow:true,//页面loaded事件发生后自动显示
//							aniShow:'slide-in-right',//页面显示动画
//							duration:'100'//页面动画持续时间
//						},
//						waiting:{
//							autoShow:false,//自动显示等待框	
//						}							 
//					});
					nextpage='';
					shareSystem(ulId,"zhenggai");
					
					break;
				}
			mui.openWindow({
				url: nextpage,
				id: nextpage,
				styles: {
					hardwareAccelerated:false
				},
				extras:{
					//传递参数
					name:'wushaohang_lidegejing'
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
		});
	});
	
	//延期长按事件
	mui('#yanqi').on('longtap', 'ul', function() {
		var ulId=this.id;
		var btnArray = [
			{title:"撤销延期"},
			{title:"分享"}
		];
		plus.nativeUI.actionSheet( {
			title:"操作",
			cancel:"取消",
			buttons:btnArray
		}, function(e){
			var index = e.index;	
			var nextpage='';
			switch (index){
				case 0:	//取消	
					break;
				case 1:	//撤销延期								
					nextpage='';
					var btnArray = ['否', '是'];
					mui.confirm('是否撤销该通知单的延期状态？', '撤销延期', btnArray, function(e) {
						if (e.index == 1) {
							//是
							cancelDelay(ulId);
						} else {
							//否
						}
					})
					break;
				case 2:	//分享								
					nextpage='';
					shareSystem(ulId,"same");
					break;
			}
			mui.openWindow({
				url: nextpage,
				id: nextpage,
				styles: {
					hardwareAccelerated:false
				},
				extras:{
					//传递参数
					name:'wushaohang_lidegejing'
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
		});
	});
				
	//逾期长按事件
	mui('#yuqi').on('longtap', 'ul', function() {
		var ulId=this.id;
		var btnArray = [
//			{title:"注销通知"},
//			{title:"逾期回复"},
			{title:"分享"}
		];
		plus.nativeUI.actionSheet( {
			title:"操作",
			cancel:"取消",
			buttons:btnArray
		}, function(e){
			var index = e.index;	
			var nextpage='';
			switch (index){
				case 0:	//取消	
					break;
//				case 1:	//注销通知								
//					nextpage='';								
//					break;
//				case 2:	//逾期回复	
//					nextpage='';								
//					break;
				case 1:	//分享								
					nextpage='';
					shareSystem(ulId,"same");
					break;
			}
			mui.openWindow({
				url: nextpage,
				id: nextpage,
				styles: {
					hardwareAccelerated:false
				},
				extras:{
					//传递参数
					name:'wushaohang_lidegejing'
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
		});
	});
				
	//未完成长按事件
	mui('#weiwancheng').on('longtap', 'ul', function() {
		var ulId=this.id;
		var btnArray = [
			{title:"分享"}
		];
		plus.nativeUI.actionSheet( {
			title:"操作",
			cancel:"取消",
			buttons:btnArray
		}, function(e){
			var index = e.index;	
			var nextpage='';
			switch (index){
				case 0:	//取消	
					break;
				case 1:	//分享								
					nextpage='';
					shareSystem(ulId,"same");
					break;
			}
			mui.openWindow({
				url: nextpage,
				id: nextpage,
				styles: {
					hardwareAccelerated:false
				},
				extras:{
					//传递参数
					name:'wushaohang_lidegejing'
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
		});
	});
				
	//完成长按事件
	mui('#yiwancheng').on('longtap', 'ul', function() {
		var ulId=this.id;
		var btnArray = [
			{title:"分享"}
		];
		plus.nativeUI.actionSheet( {
			title:"操作",
			cancel:"取消",
			buttons:btnArray
		}, function(e){
			var index = e.index;	
			var nextpage='';
			switch (index){
				case 0:	//取消	
					break;
				case 1:	//分享								
					nextpage='';
					shareSystem(ulId,"same");
				break;
			}
			mui.openWindow({
				url: nextpage,
				id: nextpage,
				styles: {
					hardwareAccelerated:false
				},
				extras:{
					//传递参数
					name:'wushaohang_lidegejing'
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
		});
	});

	//下发整改
	var xfzg=function xfzg(ulId,gcid,gcmc){
		var caid=ulId;
		var gcid=gcid;
		var gcmc=gcmc;
		//alert("222"+gcmc);
		mui.ajax(url+'my_plus/my_change_list_changan.php',{
			data:{ 
				tzdid:caid,
				gcid:gcid,
				gcmc:gcmc,
				qdlx:'caogao',
				sjc:''
			},
			dataType:'json',
			type:'POST', 
			timeout:10000,
			success:function(data){
				//alert(data);
				if (data.result=='success') {
					alert("草稿已下达！");
					var wobj = plus.webview.currentWebview();
					wobj.reload(true);
				} else{
					return callback('服务器返回error');	
				}
			}, 
			error:function(xhr,type,errorThrown){
				//alert('ajax错误'+type+'---'+errorThrown);
			}
		});
	}
	
	//删除草稿
	var sccg=function xfzg(ulId,gcid,gcmc){
		var caid=ulId;
		var gcid=gcid;
		var gcmc=gcmc;
		var ulliSjc=document.getElementById(caid).getElementsByTagName("li")[7].innerText;
		var arr=ulliSjc.split(":");
		//alert(ulliSjc); //时间戳
		mui.ajax(url+'my_plus/my_change_list_changan.php',{
			data:{ 
				tzdid:caid,
				gcid:gcid,
				gcmc:gcmc,
				qdlx:'sccg',
				sjc:arr[1]
			},
			dataType:'json',
			type:'POST', 
			timeout:10000,
			success:function(data){
				//alert(data);
				if (data.result=='success') {
					alert("草稿删除成功！");
					var wobj = plus.webview.currentWebview();					
					wobj.reload(true);
				} else{
					//return callback('服务器返回error');	
				}
			}, 
			error:function(xhr,type,errorThrown){
				//alert('ajax错误'+type+'---'+errorThrown);
			}
		});
	};
	
	//系统分享
	var shareSystem=function(ulId,text){
		//alert(ulId);
		var ulid=document.getElementById(ulId);
		var ulp=ulid.getElementsByTagName("p");
		var ulpText="";
		if(text=="caogao"){
			for(var i=0;i<ulp.length-1;i++){
				ulpText+=ulp[i].innerText+"\n";
			}
		}else if(text=="zhenggai"){
			for(var i=0;i<ulp.length-2;i++){
				ulpText+=ulp[i].innerText+"\n";
			}
		}else if(text=="same"){
			for(var i=0;i<ulp.length;i++){
				ulpText+=ulp[i].innerText+"\n";
			}
		}else{
			
		}
		var msg={content:ulpText};
		//var msg={content:"测试"};
		plus.share.sendWithSystem?plus.share.sendWithSystem(msg, function(){
			//console.log('Success');
		}, function(e){
			//console.log('Failed: '+JSON.stringify(e));
		}):shareSystemNativeJS();
	};
	
	//申请延期确定事件监听
	yqqding.addEventListener('tap', function() {
		//alert("测试");
		var ulId=tzdsjc.value;
		var ulliText=document.getElementById(ulId).getElementsByTagName("li")[6].innerText;
		var arr=ulliText.split(":");
		var str=arr[1];
		//alert(str);
		if(str==1){
			alert("此通知单已提交申请，申请有待批准！");
			//plus.nativeUI.toast("此通知单已提交申请，申请有待批准！",{duration:"long"});
		}else{
			yqsq("是",ulId,"申请",jzrqYq.value);			
			var ulIdgColor = document.getElementById(ulId);
			ulIdgColor.setAttribute("style","border: 3px solid green;");
		}
		//弹窗自动消失
		mui("#zuyPopover").popover("toggle");
	});
	
	//申请延期关闭事件监听
	yqgbi.addEventListener('tap', function() {
		mui("#zuyPopover").popover("toggle");
	});
	
	//撤销延期申请
	var cancelDelay=function(ulID){
		mui.ajax(url+'my_plus/my_plus_jiekou.php',{
			data:{
				cangshu1:"",
				cangshu2:"",
				cangshu3:"",
				biaozhi:ulID,
				sjc:"",
				flag:"canceldelay"
			},
			dataType:'json',
			type:'post',
			timeout:10000,
			success:function(data){
				//alert(data);
				if (data.result=='success') {
					var wobj = plus.webview.currentWebview();					
					wobj.reload(true);
					mui.toast('此单被撤销延期，可在未完成中找到此单！');
				}
			},
			error:function(xhr,type,errorThrown){
				//return callback('ajax错误'+type+errorThrown);
			}
		});
	};
	
	//接收值
	window.addEventListener('json_bj',function(event){
		//关闭遮罩层
		setTimeout(function() {
			ws.setStyle({mask:"none"});
			ws=null;
		}, 100);
		var flag = event.detail.flag;
		if (flag=='ok') {
			alert("分享成功！");
		}
	});
});