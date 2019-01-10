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
	var mobile=self.mobile;
	//alert(mobile);
	
	var my_popover=document.getElementById("my_popover"); //搜索按钮
	var gongchengOne=document.getElementById("gongcheng");
	
	my_popover.addEventListener('tap',function(){
		//alert("搜索");
		var bts=["确认","取消"];
		plus.nativeUI.prompt("请输入内容",function(e){
			var i=e.index;
			if(i==0){
				ajaxDate(e.value,mobile);
				//alert(mobile);
			}
		},"同欣项目巡检系统","内容",bts);
		
//		//遮罩效果
//		ws=null;
//		ws=plus.webview.currentWebview();
//		// 显示遮罩层
//		ws.setStyle({mask:"rgba(0,0,0,0.7)"});
//		mui.openWindow({
//			url:'my_project_list_search_name.html',
//			id:'my_project_list_search_name.html',								
//			styles:{
//				width:'80%',
//				height:'60%',	
//				margin:'auto',
//				hardwareAccelerated:false
//			},
//			extras:{
//				name:'lidegejing'
//			},
//			show:{
//				autoShow:true,//页面loaded事件发生后自动显示
//				aniShow:'slide-in-right',//页面显示动画
//				duration:'100'//页面动画持续时间
//			},
//			waiting:{
//				autoShow:false,//自动显示等待框	
//			}							 
//		});	
	});
	
	//动态创建函数
	var myproject = function(id,gcmc,dq,xmlb,gczt,i,dqsheng,dqshi){
		var num=i;
		var id = id;
		var gcmc = gcmc;
		var dq = dq;
		var xmlb = xmlb;
		var gczt = gczt;
		var dqsheng = dqsheng;
		var dqshi = dqshi;
		//alert(gcmc);
				
		var gcmc_c=encodeURI(encodeURI(gcmc));
		var dq_c=encodeURI(encodeURI(dq));
		var xmlb_c=encodeURI(encodeURI(xmlb));
		var gczt_c=encodeURI(encodeURI(gczt));
		var dqsheng_c=encodeURI(encodeURI(dqsheng));
		var dqshi_c=encodeURI(encodeURI(dqshi));
				
		var zhuyi="注意：本工程存在隐患项延期整改";
		var chakan="查看本工程全部隐患";
					
		var diqu="地区："+	dq;
		var an1='点击查看';
		if(mobile=="13603070333"||mobile=="13826467128"||mobile=="13632665565"||mobile=="13510881338"){
			var an2='查看签到';
		}else{
			var an2='人员签到';
		}
		var an3='进入工程';
					
		var gongcheng=document.getElementById("gongcheng");
		var div = document.createElement("div");
		div.className = "mui-table-view my_list mui-card margintop10px";
		div.style = "margin-top: 10px";
		div.id="div"+id+"num"+i;
					
		var muicontent=document.getElementsByClassName('mui-content');
		var div=document.createElement('div');
		div.className='mui-card margintop10px';			
		gongcheng.appendChild(div);
		var ul=document.createElement('ul');
		ul.className='mui-table-view my_list';
		div.appendChild(ul);
		var li=document.createElement('li');
		li.className='mui-table-view-cell mui-media my_backgroundcolor_blue my_color_white';
		ul.appendChild(li);
		var a=document.createElement('a');	
		a.href="my_project.html?id="+id+"&gcmc="+gcmc_c+"&dq="+dq_c+"&xmlb="+xmlb_c+"&gczt="+gczt_c+"&mobile="+mobile+"&sheng="+dqsheng_c+"&shi="+dqshi_c;
		li.appendChild(a);
		var img=document.createElement('img');
		img.className='mui-media-object mui-pull-right';
		img.src='../images/xmmc.png';
		a.appendChild(img);
		var div2=document.createElement('div');
		div2.className='mui-media-body';			
		a.appendChild(div2);
		var txt=document.createTextNode(gcmc);
		div2.appendChild(txt);
		var p=document.createElement('p');
		p.className='mui-ellipsis my_color_white';
		div2.appendChild(p);
		var txt2=document.createTextNode(diqu);
		p.appendChild(txt2);
		var p2=document.createElement('p');
		p2.className='mui-ellipsis my_underline my_color_white';
		div2.appendChild(p2);
		var txt3=document.createTextNode(an3);
		p2.appendChild(txt3);
					
		var li2=document.createElement('li');
		li2.className='mui-table-view-cell mui-media';
		ul.appendChild(li2);
		var a2=document.createElement('a');
		li2.appendChild(a2);
		var div3=document.createElement('div');
		div3.className='mui-media-body';
		a2.appendChild(div3);
		var span=document.createElement('span');
		span.className='mui-icon mui-icon-spinner-cycle mui-pull-left';
		div3.appendChild(span);
		var button=document.createElement('button');
		button.id="ck"+id;
		button.className='mui-btn mui-btn-warning mui-pull-right';
		button.type='button';
		div3.appendChild(button);
		var txt4=document.createTextNode(an1);
		button.appendChild(txt4);
		var p3=document.createElement('p');
		p3.className='mui-ellipsis my_fontsize my_color_blue my_paddingleft';
		div3.appendChild(p3);
		var txt5=document.createTextNode(zhuyi);
		p3.appendChild(txt5);
					
		var li3=document.createElement('li');
		li3.className='mui-table-view-cell mui-media';
		ul.appendChild(li3);
		var a3=document.createElement('a');
		li3.appendChild(a3);
		var div4=document.createElement('div');
		div4.className='mui-media-body';
		a3.appendChild(div4);
		var span2=document.createElement('span');
		span2.className='mui-icon mui-icon-info mui-pull-left';
		div4.appendChild(span2);
		var button2=document.createElement('button');
		button2.id="qd"+id;
		button2.className='mui-btn mui-btn-warning mui-pull-right';
		button2.type='button';
		div4.appendChild(button2);
		var txt8=document.createTextNode(an2);
		button2.appendChild(txt8);
		var p6=document.createElement('p');
		p6.className='mui-ellipsis my_fontsize my_color_blue my_paddingleft';
		div4.appendChild(p6);
		var txt9=document.createTextNode(chakan);
		p6.appendChild(txt9);
					
		//点击查看
		button.addEventListener('tap',function(){
			//alert(id+"  "+gcmc);
			var webview_style = {
				popGesture: "close",					
				hardwareAccelerated:false
			};
			mui.openWindow({
				id: "djck",
				url: "my_plus_wdgc_djck.html",
				styles: webview_style,
				extras:{
					gcid:id,
					gcmc:gcmc
				},
				show: {
					aniShow:"pop-in"
				},
				waiting: {
					autoShow: false
				}
			});
		});
		//检查签到
		button2.addEventListener('tap',function(){	
			var gcidCf=document.getElementById("gcidCf");
			var id=this.id;
			var btngcid=id.slice(2);
			gcidCf.value=btngcid;
			//判断是不是查看签到
			if(mobile=="13603070333"||mobile=="13826467128"||mobile=="13632665565"||mobile=="13510881338"){
				checkSign(btngcid,gcmc);
			}else{
				//判断是否签到过
				qiandaoPd(btngcid);
				//getPos();
			}
		});
	}
	
	//查看签到结果
	var checkSign=function(gcid,gcmc){
		var webview_style = {
			popGesture: "close",					
			hardwareAccelerated:false
		};
		mui.openWindow({
			id: gcid,
			url: "checkSign.html",
			styles: webview_style,
			extras:{
				gcid:gcid,
				gcmc:gcmc
			},
			show: {
				aniShow:"pop-in"
			},
			waiting: {
				autoShow: false
			}
		});
	};
				
	//判断是否签到
	var qiandaoPd=function(gcid){
		//alert(gcid);
		//签到前验证当前日期是否签到过
		mui.ajax(url+'attention_plus/attention_ewm.php',{
			data:{
				flag:'select',
				gcid:gcid, //工程id
				gcmc:"", //工程名称
				sjc:"", //时间戳
				sji:phone.value, //手机
				bumen:"", //部门
				xm:"", //姓名
				qdTime:qdTime.value
			},
			dataType:'json',
			type:'post',
			timeout:10000,
			success:function(data){
				//console.log(data);
				if (data.result=='OK') {
					alert("您今日已签到过一次,今日内不用再次签到！");
				} else{
					getPos();
				}
		    },
			error:function(xhr,type,errorThrown){
				return callback('ajax错误'+type+errorThrown);
			}
		});
					
	};
	
	var ajaxDate=function(projectName,mobile){
		//alert(mobile);
		gongchengOne.innerHTML="";
		mui.ajax(url+'my_plus/message_search.php',{
			data:{
				gcmc:projectName,
				mobile:mobile,
				flag:"project_message_search"
			},
			dataType:'json',
			type:'post',
			timeout:10000,
			success:function(data){
				//alert(data);
				var length=data.length;
				if (length>1) {
					for (var i=0;i<length-1;i++) {
						var id = data[i].id;
						var gcmc = data[i].工程名称;
						var dq = data[i].地区;
						var xmlb = data[i].项目类别;
						var gczt = data[i].工程状态;
						var dqsheng = data[i].地区省;
						var dqshi = data[i].地区市;
						myproject(id,gcmc,dq,xmlb,gczt,i,dqsheng,dqshi);
					}
				}else{
					alert("暂无数据");
				}
			},
			error:function(xhr,type,errorThrown){
				return callback('ajax错误'+type+errorThrown);
			}
		});
	};
	
	//获取设备位置信息
	var getPos=function(){
		plus.geolocation.getCurrentPosition( geoInf, function ( e ) {
			alert("获取定位位置信息失败："+e.message);
		},{geocode:true,provider:'amap'});
	};
				
//	//接收值
//	window.addEventListener('json_bj',function(event){
//		//关闭遮罩层
//		setTimeout(function() {
//			ws.setStyle({mask:"none"});
//			ws=null;
//		}, 100);
//	});
});
function geoInf( position ) {
	var codns=position.coords;//获取地理坐标信息；
	var lat=codns.latitude;//获取到当前位置的纬度；
	var longt=codns.longitude;//获取到当前位置的经度
	//alert(lat+"  "+longt);
	var weidu=document.getElementById("weidu");
	var jingdu=document.getElementById("jingdu");
	var phone=document.getElementById("phone");
	var gcidCf=document.getElementById("gcidCf");
	var nameXm=document.getElementById("nameXm");
	var bumen1=document.getElementById("bumen1");
	weidu.value=lat;
	jingdu.value=longt;
	//alert(gcidCf.value);
				
	//自动添加当前时间戳,作为这个新建任务的唯一标识存到数据库，附件上传时会用到
	var myDate=new Date();
	var mytime=myDate.getTime();
	//alert(mytime);
	//异步上传数据
	mui.ajax(url+'my_plus/my_plus_ryqd.php',{
		data:{
			lat: lat,
			longt:longt,
			phone:phone.value,
			gcid:gcidCf.value,
			name:nameXm.value,
			bumen:bumen1.value,
			sjc:mytime
		},
		dataType:'json',
		type:'post',
		timeout:10000,
		success:function(data){
//			alert(data);
			if (data.result=='success') {
				alert(data.resultWc);
				//return callback();
			} else{
				return callback('服务器返回error');	
			}
		},
		error:function(xhr,type,errorThrown){
			return callback('ajax错误'+type+errorThrown);
		}
	});
}