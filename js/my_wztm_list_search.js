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
	
	my_popover.addEventListener('tap',function(){
		var tm = chk();
//		alert(tm);
		var bts=["确认","取消"];
		plus.nativeUI.prompt("请输入查找内容",function(e){
			var i=e.index;
			if(i==0){
//				NextPage();
//				mui.openWindow({
//				id: "tm",
//				url: "my_change_wztm_cz.html",
//				extras:{
//					tm:tm,
//					zd:e.value
//				},
//				show: {
//					aniShow:"pop-in"
//				},
//				waiting: {
//					autoShow: false
//				}
//			});
//				alert(e.value);
window.location.href="my_change_wztm_cz.html?tm="+tm+"&zd="+e.value;
			}
		},"违章条目查找","内容",bts);
		
	});
	//获取已选框
						function chk(){
								var a = document.getElementsByName("checkbox1");//定位至name="checkbox1"
		 						var s = "";
		 						var xixi = ' ';//初始化部位
		 						var hehe = '';
								for(var i=0;i<a.length;i++){
		   							if(a[i].checked){
		   								s+=a[i].value+'||'; //如果未选中，将value添加到变量s中
		   								hehe+=xixi+'||';
		   							} 
		   						}
		 						return s;
		 					};
	});
	
