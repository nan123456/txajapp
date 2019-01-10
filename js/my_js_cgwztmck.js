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

mui.plusReady(function(){
	var self = plus.webview.currentWebview();
	gcid = self.gcid;
	gcmc = self.gcmc;
	name = self.name;
	tzdbh = self.tzdbh;
	sjc = self.sjc; //获取通知单时间戳
	jcxm_jc = self.jcxm;
	mobile = self.mobile;
	var shjPanduan = self.shjPanduan;
	//console.log(mobile+"**"+sjc);
	//alert(shjPanduan);
	//单机修改按钮操作
	var xiugai = document.getElementById("xiugai");
	var tianjia = document.getElementById("tianjia");
	
	var createimg=function(tpmc,wztm,i,hehe,zuhe) {
		var tpmc=tpmc;
		var wztm=wztm;
		var num=i;
		//alert("tpmc："+tpmc); 
		if(tpmc!=""){
			var mysrc=url+"upload/"+tpmc;
		}else{
			var mysrc="../images/add.png";
		}
		//alert("mysrc："+mysrc);
		if(zuhe=="chufaXz"){
			var wztmck = document.getElementById("xzwztmck");
			
		}else{
			var wztmck = document.getElementById("wztmck");
		}
		var ul = document.createElement("ul");
		ul.className = "mui-table-view";
		ul.innerHTML = '<li id="l'+num+'" class="mui-table-view-cell"><img id="t'+num+'" class="mui-media-object mui-pull-right" src="'+mysrc+'" style="width:50px;height:50px;"><div class="mui-media-body">'+wztm+'</div><p>部位：'+hehe+'</p></li>'
		wztmck.appendChild(ul);
	};
	
	var createimg1=function(tpmc,wztm,i,hehe,zuhe) {
		var tpmc=tpmc;
		var wztm=wztm;
		var num=i;
		//alert(tpmc);
		if(tpmc!=""){
			var mysrc=url+"upload/"+tpmc;
		}else{
			var mysrc="../images/add.png";
		}
		//alert(mysrc);
		var wztmck = document.getElementById("xzwztmck");
		var ul = document.createElement("ul");
		ul.className = "mui-table-view";
		ul.innerHTML = '<li id="li'+num+'" class="mui-table-view-cell"><img id="t'+num+'" class="mui-media-object mui-pull-right" src="'+mysrc+'" style="width:50px;height:50px;"><div class="mui-media-body">'+wztm+'</div><p>部位：'+hehe+'</p></li>'
		wztmck.appendChild(ul);
	};
	
	
	
	//获取处罚条目以及照片信息信息
	var cgfj=[];
	mui.ajax(url+'my_plus/my_ckwztm.php',{
		data:{
			sjc:sjc,
			liid:'', 
			flag:'',
			zggllx:'chufa'
		},
		dataType:'json',
		type:'post',
		timeout:10000,
		success:function(data){
//			alert(data);
			var length=data.length;
			for (var i=0;i<length-1;i++){
				id=data[i].id;
				wztmnr=data[i].内容.split("||");
				hehe=data[i].对象.split("||");
				cgfj=data[i].草稿附件.length;
				heheLength=hehe.length;
				if(cgfj!=0){
					cgfj=data[i].草稿附件.split("~*^*~");
					//console.log(cgfj.toString()+"**"+cgfj.length+"##"+wztmnr.length);
					if(heheLength!=0){
						for (i=0;i<wztmnr.length-1;i++) {
							createimg(cgfj[i],wztmnr[i],i,hehe[i],"chufa");
						}
					}else{
						for (i=0;i<wztmnr.length-1;i++) {
							createimg(cgfj[i],wztmnr[i],i,'',"chufa");
						}
					}
				}else{
					if(heheLength!=0){
						for (i=0;i<wztmnr.length-1;i++) {
							createimg('',wztmnr[i],i,hehe[i],"chufa");
						}
					}else{
						for (i=0;i<wztmnr.length-1;i++) {
							createimg('',wztmnr[i],i,'',"chufa");
						}
					}
				}
			}
		},
		error:function(xhr,type,errorThrown){
			return callback('ajax错误'+type+errorThrown);
		}
	});
	
	//获取处罚条目以及照片信息信息
	var cgfjArray=[];
	mui.ajax(url+'my_plus/my_ckwztm.php',{
		data:{
			sjc:sjc,
			liid:'', 
			flag:'',
			zggllx:'chufaXz',
			mobile:mobile,
			shjPanduan:shjPanduan
		},
		dataType:'json',
		type:'post',
		timeout:10000,
		success:function(data){
			//alert(data);
			//console.log(data);
			var length=data.length;
			for (var i=0;i<length-1;i++){
				var id=data[i].id;
				var wztmnr=data[i].内容.split("||");
				var hehe=data[i].对象.split("||");
				//cgfj=data[i].草稿附件.split("~*^*~");
				var cgfjlength=data[i].草稿附件.length;
				//console.log(cgfjlength);
				if(cgfjlength==0){
					//草稿附件长度等于0
					if(hehe.length==0){
						//部位等于0
						for(var j=0;j<wztmnr.length-1;j++){
							createimg1('',wztmnr[j],j,'',"chufaXz");
							//createimg1("1",wztmnr[j],j,'',"chufaXz");
						}
					}else{
						//部位不等于0
						for(var j=0;j<wztmnr.length-1;j++){
							createimg1('',wztmnr[j],j,hehe[j],"chufaXz");
							//createimg1("2",wztmnr[j],j,hehe[j],"chufaXz");
						}
						
					}
				}else{
					cgfj=data[i].草稿附件.split("~*^*~");
					//草稿附件长度不等于0
					if(hehe.length==0){
						//部位等于0
						for(var j=0;j<wztmnr.length-1;j++){
							createimg1(cgfj[j],wztmnr[j],j,'',"chufaXz");
							//createimg1("3",wztmnr[j],j,'',"chufaXz");
						}
					}else{
						//部位不等于0
						for(var j=0;j<wztmnr.length-1;j++){
							createimg1(cgfj[j],wztmnr[j],j,hehe[j],"chufaXz");
							//createimg1("4",wztmnr[j],j,hehe[j],"chufaXz");
						}
						
					}
				}
			}
		},
		error:function(xhr,type,errorThrown){
			//return callback('ajax错误'+type+errorThrown);
		}
	});
	
	//修改按钮
	xiugai.addEventListener('tap',function(){
		//alert("测试");
		var anniu=document.getElementById("anniu");
		var fanhui=document.getElementById("fanhui");
		var zhenghe=document.getElementById("zhenghe");
		var xzwztmck=document.getElementById("xzwztmck");
		//var wchen=document.getElementById("wchen");
		xiugai.setAttribute("class","mui-btn mui-btn-link mui-pull-right mui-btn-blue my_none");
		//var wchen=wchen.setAttribute("class","mui-btn mui-btn-link mui-pull-right mui-btn-blue")
		anniu.setAttribute("class","mui-content-padded my_margintop10px");
		//alert(style);
		if(shjPanduan=="Yes"){
			var xzwztmckLength=xzwztmck.getElementsByTagName("li").length;
			if(xzwztmckLength!=0){
				var confirm=document.getElementById("confirm");
				confirm.setAttribute("class","mui-btn mui-btn-primary mui-btn-block_my my_none");
				var tianjia=document.getElementById("tianjia");
				tianjia.setAttribute("class","mui-btn mui-btn-primary mui-btn-block_my my_none");
				zhenghe.setAttribute("class","mui-btn mui-btn-link mui-pull-right mui-btn-blue");
				fanhui.setAttribute("class","mui-action-back mui-icon mui-icon-left-nav mui-pull-left my_none");
			}else{
				
			}
		}else{
			var xzwztmckLength=xzwztmck.getElementsByTagName("li").length;
			if(xzwztmckLength!=0){
				var confirm=document.getElementById("confirm");
				confirm.setAttribute("class","mui-btn mui-btn-primary mui-btn-block_my my_none");
				var tianjia=document.getElementById("tianjia");
				tianjia.setAttribute("class","mui-btn mui-btn-primary mui-btn-block_my my_none");
			}else{
				
			}
		}
					
		//在进入修改此界面后，就弹出提示框框
		mui.toast('点击放大查看图片，长按编辑或删除！');
		//获取编辑后的违章条目
		window.addEventListener('wetmbj',function(event){
			var wztmbj=event.detail.flag;
			var wztmbjId=event.detail.flag1; //li的id
//			alert(wztmbjId)
			var mysrc=event.detail.flag2;
			var buwei=event.detail.flag4;
			var liid=document.getElementById(wztmbjId);
			liid.innerHTML='<img id="t'+wztmbjId+'" class="mui-media-object mui-pull-right" src='+mysrc+' style="width:50px;height:50px;"><div class="mui-media-body">'+wztmbj+'</div><p>部位：'+buwei+'</p>';
		})
		//获取新增的违章条目
		window.addEventListener('json',function(event){
			
			var confirm=document.getElementById("confirm");
			var tianjia=document.getElementById("tianjia");
			confirm.setAttribute("class","mui-btn mui-btn-primary mui-btn-block_my my_none");
			tianjia.setAttribute("class","mui-btn mui-btn-primary mui-btn-block_my my_none");
			var confirmOne=document.getElementById("confirmOne");
			confirmOne.setAttribute("class","mui-btn mui-btn-primary mui-btn-block_my");
			var xzwztmck=document.getElementById("xzwztmck");
			xzwztmck.setAttribute("class","mui-card");
			//关闭遮罩层
			if(self.jcxm==""){
				setTimeout(function() {
					ws.setStyle({mask:"none"});
					ws=null;
				}, 100);
			}
			var length=0;
			var xzwztm1=event.detail.flag3;
			var hehe1=event.detail.flag4;
			var photo =event.detail.photo;
			var length=event.detail.length;
//			alert(photo);
//			alert(xzwztm1+"   "+hehe1);
			if(photo!=""){
				var tpwz = photo.split("^|*|^");
				var tpcount = tpwz.length;
//				alert(tpwz[1]);
			}
			
			var xzwztm=xzwztm1.split("||");
			hehe=hehe1.split("||"); 
			if(xzwztm.length>0){
				var Lee = document.getElementById("Lee");
				Lee.setAttribute("value","Lee");
			}
//			alert(id)
			
				if(length>0){
					var xztmul = document.getElementById("xztmul");
					var xztmli = xztmul.getElementsByTagName("li");
//					alert(xztmli.length);
					      for(var i = xztmli.length-1;i >= 0;i--){
//					      	alert(xztmli[i].id);
					      	var liwztm=document.getElementById(xztmli[i].id);//获取li标签
					      	xztmul.removeChild(liwztm);
					      }
					      for(var j = 0;j<xzwztm.length-tpcount;j++){
					      	photo=photo+"^|*|^"+"../images/null.jpg";
					      }
					}	
					var wz_tp = photo.split("^|*|^");
					for(var j=wztmnr.length-1,i=0,n=1;i<xzwztm.length-1;i++,j++,n++){
						id=id+1;
					    mywztm(id,xzwztm[i],j,hehe[i],wz_tp[n]);
					    mybsc(j);
					   }
				
   	
			function mywztm(id,wztm,j,hehe,tpwz){
				var id=id;
				var hehe=hehe;
				var wztm=wztm;  
				var num=j; 
				var src = tpwz
				//var wztmck = document.getElementById("wztmck");
				var ul = document.getElementById("xztmul");
				var li = document.createElement("li");
				li.className = "mui-table-view-cell";
				li.id="li"+num;
				li.name="ture";
				if(src!=null){
					li.innerHTML = '<img id="t'+num+'" class="mui-media-object mui-pull-right"  src="'+src+'" style="width:50px;height:50px;"><div class="mui-media-body">'+wztm+'</div><p>部位：'+hehe+'</p>';
				}else{
					li.innerHTML = '<img id="t'+num+'" class="mui-media-object mui-pull-right"  src="../images/null.jpg" style="width:50px;height:50px;"><div class="mui-media-body">'+wztm+'</div><p>部位：'+hehe+'</p>';
				}
				
				ul.appendChild(li); 
//				alert('li'+num);
//				alert('t'+num);
			};
			function mybsc(j){
				var num=j;
				var li_id=document.getElementById("li"+num); //定位至点击的图片
				var img_id=li_id.getElementsByTagName("img")[0].getAttribute("id");
				var x = li_id.getElementsByTagName("img")[0].getAttribute("src");
				//alert(img_id);
				appendFile(x,img_id);
			}
		})
		
		//长按操作
		mui('#wztmck').on('longtap', 'li', function() {
//		wztmck.addEventListener('longtap',function(){
			var liDivText=document.getElementById(this.id).getElementsByTagName("div")[0].innerText;
			//alert(liDivText);
			var liTextid=document.getElementById(this.id).getAttribute("id");
			var liID=document.getElementById(this.id);
			var imgShuzu=liID.getElementsByTagName("img")[0];
			var mysrc=imgShuzu.getAttribute("src");
			var li_id=liID.getAttribute("id");
			//alert(li_id);
			//弹出选择框
			var btnArray = [
				{title:"编辑"},
				{title:"删除"}
			];
			plus.nativeUI.actionSheet( {
				title:"操作",
				cancel:"取消",
				buttons:btnArray
			},function(e){
				var index = e.index;							
				switch (index){
					case 0:	//取消
						break;
					case 1:	//编辑
						mui.openWindow({
							url: "my_change_wztmbj.html",
							id: "my_change_wztmbj.html",
							extras:{
								liText:liDivText,
								liTextid:liTextid,
								mysrc:mysrc
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
						var ulwztm=document.getElementById(liTextid).parentNode; //获取li上级标签（ul）
						var liwztm=document.getElementById(liTextid);//获取li标签
						ulwztm.removeChild(liwztm);//删除li
//						alert(liTextid);
						deleteli(sjc,li_id,"oldWztm");						
						break;
						
				}
			} );
		});
		
		//新增违章条目长按操作
		//长按操作
		mui('#xzwztmck').on('longtap', 'li', function() {
			var my_nome=document.getElementById(this.id);
			var liDivText=document.getElementById(this.id).getElementsByTagName("div")[0].innerText;
			//alert(liDivText);
			var liTextid=document.getElementById(this.id).getAttribute("id");
			var liID=document.getElementById(this.id);
			var imgShuzu=liID.getElementsByTagName("img")[0];
			var mysrc=imgShuzu.getAttribute("src");
			var li_id=liID.getAttribute("id");
			//alert(liTextid);
			//弹出选择框
			var btnArray = [
				{title:"编辑"},
				{title:"删除"}
			];
			plus.nativeUI.actionSheet( {
				title:"操作",
				cancel:"取消",
				buttons:btnArray
			},function(e){
				var index = e.index;							
				switch (index){
					case 0:	//取消
						break;
					case 1:	//编辑
//					alert(my_nome.onclick);
						my_nome.name="false";
						mui.openWindow({
							url: "my_change_wztmbj.html",
							id: "my_change_wztmbj.html",
							extras:{
								liText:liDivText,
								liTextid:liTextid,
								mysrc:mysrc
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
						var ulwztm=document.getElementById(liTextid).parentNode; //获取li上级标签（ul）
						var liwztm=document.getElementById(liTextid);//获取li标签
						      ulwztm.removeChild(liwztm);//删除li
						
						//deleteli(sjc,li_id,"newWztm");	
						var xztm_ul = document.getElementById("xztmul").getElementsByTagName("li");
						var xz_tm = " ";
						var wz_tp = " ";
						var bw = " ";
//						alert(xztm_ul.length);
						for(var i=0;i<xztm_ul.length;i++){
//								alert(i);
							var xz_tm = xz_tm +"||"+ xztm_ul[i].innerText;
							var idli = xztm_ul[i].id;
							
							var lidom = document.getElementById(idli);
							var img_src=lidom.getElementsByTagName("img")[0].src;
							var wz_tp = wz_tp +"^|*|^"+ img_src;
						}
						var Lee = xz_tm.split("||");
						var  tmNew = "";
			            var part ="";
							for(i=1;i<Lee.length;i++){
								var tmxz = Lee[i].split("部位：");
				      					tmNew = tmNew+"**"+tmxz[0];
				      					part = part+"**"+tmxz[1];
									}  
						var tm_de = tmNew.split("**");
						var tp_de = wz_tp.split("^|*|^");
						var b_w = part.split("**");
//						alert(tm_de.length);
						var xztmul = document.getElementById("xztmul");
					    var xztmli = xztmul.getElementsByTagName("li");
//					alert(xztmli.length);
					      for(var i = xztmli.length-1;i >= 0;i--){
//					      	alert(xztmli[i].id);
					      	var liwztm=document.getElementById(xztmli[i].id);//获取li标签
					      	xztmul.removeChild(liwztm);
					      }
//					      alert(wztmnr.length); 
						for(var i=1,j=wztmnr.length-1; i<tm_de.length; i++,j++){
//							alert(tm_de[i]);
							mywztm_d(idli,tm_de[i],j,b_w[i],tp_de[i]);
							mybsc_d(j);
						}
						
						function mywztm_d(id,wztm,j,hehe,tpwz){
							var id=id;
							var hehe=hehe;
//							alert(hehe);
							var wztm=wztm;  
							var num=j; 
							var src = tpwz
							//var wztmck = document.getElementById("wztmck");
							var ul = document.getElementById("xztmul");
							var li = document.createElement("li");
							li.className = "mui-table-view-cell";
							li.id="li"+num;
							li.name="ture";
								li.innerHTML = '<img id="t'+num+'" class="mui-media-object mui-pull-right"  src="'+src+'" style="width:50px;height:50px;"><div class="mui-media-body">'+wztm+'</div><p>部位：'+hehe+'</p>';
							
							ul.appendChild(li); 
			//				alert('li'+num);
			//				alert('t'+num);
			};
			function mybsc_d(j){
				var num=j;
				var li_id=document.getElementById("li"+num); //定位至点击的图片
				var img_id=li_id.getElementsByTagName("img")[0].getAttribute("id");
				var x = li_id.getElementsByTagName("img")[0].getAttribute("src");
				//alert(img_id);
				appendFile_1(x,img_id);
			}
						break;
						
				}
			} );
		});
		
		//删除操作
		var deleteli=function(sjc,liID,panduan){
			if(panduan=="newWztm"){
				var wztmck = document.getElementById("xzwztmck");
			}else{
				var wztmck = document.getElementById("wztmck");
			}
			
			var liShu = document.getElementsByTagName("li");
			var length = liShu.length;
			if(length==0){
				alert("请添加违章条目！！");
				var confirm=document.getElementById("confirm");
				confirm.disabled=true;
			}else{
				var spstr=new Array; 
				spstr=liID.split("");
				var num=spstr[spstr.length-1];
				//alert(spstr.toString());
				mui.ajax(url+'my_plus/my_change_list_changan.php',{
					data:{ 
						tzdid:'',
						gcid:'',
						gcmc:num,
						qdlx:'scwztm',
						sjc:sjc
					},
					dataType:'json',
					type:'POST', 
					timeout:10000,
					success:function(data){
						//alert(data);
						var length=data.length;						
						if (length>1) {
							for (var i=0;i<length-1;i++) {
								var cgfjSc=data[i].草稿附件;
								var sjcSc=data[i].时间戳;
								deleteWztm(cgfjSc,sjcSc,num);
							}
						}
					}, 
					error:function(xhr,type,errorThrown){
						alert('ajax错误'+type+'---'+errorThrown);
					}
				});
			}
		};
		var deleteWztm=function(cgfjSc,sjcSc,num){
			//将草稿附件以指定的字符分割成数组
			var strs=new Array();
			strs=cgfjSc.split("~*^*~");
			//删除数组中指定元素
			Array.prototype.baoremove = function(dx){  
				if(isNaN(dx)||dx>this.length){return false;}  
				this.splice(dx,1);  
			}
			strs.baoremove(num); 
			//将数组中新的新元素组合起来
			var cgfjZfc=strs.join("~*^*~");
			//异步将新的图片名称更新数据库
			mui.ajax(url+'my_plus/my_change_list_changan.php',{
				data:{ 
					tzdid:'',
					gcid:'',
					gcmc:cgfjZfc,
					qdlx:'tpfjGx',
					sjc:sjc
				},
				dataType:'json',
				type:'POST', 
				timeout:10000,
				success:function(data){
					//alert(data);
					if (data.result=='success') {
						var wobj = plus.webview.currentWebview();					
					} else{
						return callback('服务器返回error');	
					}
				}, 
				error:function(xhr,type,errorThrown){
					alert('ajax错误'+type+'---'+errorThrown);
				}
			});
		};
		
		
        //图片查看
		mui('#wztmck').on('tap', 'li', function() {
			var li_id=document.getElementById(this.id);
			var img_src=li_id.getElementsByTagName("img")[0].src;
						mui.openWindow({
							url: 'imageviewer.html',
							id:'imageviewer.html',
							styles: {
								hardwareAccelerated:false
							},
							extras:{
//								fhid:fhid,
								img_src:img_src
							},
							show:{							
								aniShow:'slide-in-right',//页面显示动画
								duration:'100'//页面动画持续时间
							},
							waiting:{
								autoShow:false,//自动显示等待框
							}
						});
					});
		
		});
	//整合按钮监听
	zhenghe.addEventListener('tap',function(){
//		alert("您已点击整合,请等待");
		var stringString=savePictureWztm("confirmOne");
		var stringArray=new Array();
		stringArray=stringString.split("--");
		var stringConnectWztm=""; 
		var stringConnectWzbw="";
		for(var k=0;k<stringArray.length;k++){
			if(k%2==0){
				stringConnectWztm+=stringArray[k];
			}else{
				stringConnectWzbw+=stringArray[k];
			}
			
		}
		//在草稿新建时已经添加的图片判断
		var wztmck=document.getElementById("wztmck");
		var imgArrayFirst=wztmck.getElementsByTagName("img");
		var pictureNameFirst="";
		for(var k=0;k<imgArrayFirst.length;k++){
			var srcTrueFirst=imgArrayFirst[k].getAttribute("src");
			//alert(srcTrue);
			if(srcTrueFirst=="../images/null.png"){
				//这个路径也要改，IP为服务器的IP
				srcTrueFirst=url+"upload/null.jpg";
			}
			//console.log(srcTrueFirst);
			pictureNameFirst+=srcTrueFirst+"upload/";
		}
		var imgSrcFirst=new Array();
		imgSrcFirst=pictureNameFirst.split("upload/");
		var pictureNameNewFirst="";
		for(var x=0;x<imgSrcFirst.length;x++){
			if(x%2==0){
				
			}else{
				pictureNameNewFirst+=imgSrcFirst[x]+"~*^*~";
			}
			
		}
		//console.log(pictureNameNewFirst);
		
		//组员上传的照片拼接
		var xzwztmck=document.getElementById("xzwztmck");
		var imgArray=xzwztmck.getElementsByTagName("img");
		var pictureName="";
		for(var i=0;i<imgArray.length;i++){
			var srcTrue=imgArray[i].getAttribute("src");
			//alert(srcTrue);
			if(srcTrue=="../images/null.png"){
				//这个路径也要改，IP为服务器的IP
				srcTrue=url+"upload/null.jpg";
			}
			pictureName+=srcTrue+"upload/";
		}
		var imgSrc=new Array();
		imgSrc=pictureName.split("upload/");
		var pictureNameNew="";
		for(var j=0;j<imgSrc.length;j++){
			if(j%2==0){
				
			}else{
				pictureNameNew+=imgSrc[j]+"~*^*~";
			}
			
		}
//		alert(pictureNameNewFirst);
		//console.log(pictureNameNew);
		mui.ajax(url+'my_plus/my_cg_wztmzhenghe.php',{
			data:{ 
				sjcTzd:sjc,
				//组员违章照片
				pictureName:pictureNameNew, 
				//组长的违章照片
				pictureNameNewFirst:pictureNameNewFirst,
                //违章条目
				wztmNew:stringConnectWztm,
                //违章部位
				wzbwNew:stringConnectWzbw
			},
			dataType:'json',
			type:'POST', 
			timeout:10000,
			success:function(data){
				//alert(data);
				if (data.result=='success'){
					//window.location.reload();
					var target=plus.webview.currentWebview().opener();
					mui.fire(target,'zhengHe',{
						zggl:'my_change_ckcg.html'
					});
					mui.back();
				}else{
					//window.location.reload();
					var target=plus.webview.currentWebview().opener();
					mui.fire(target,'zhengHe',{
						zggl:'my_change_ckcg.html'
					});
					mui.back();
				}
			}, 
			error:function(xhr,type,errorThrown){
				alert('ajax错误'+type+'---'+errorThrown);
			}
		});
	});
	
	//添加按钮
	tianjia.addEventListener('tap',function(){
		var Lee = document.getElementById("Lee").value;
		var xztm ="";
		var wztp =""; 
		if(Lee=="Lee"){ 
			var xztmul = document.getElementById("xztmul").getElementsByTagName("li");
			
			for(i=0;i<xztmul.length;i++){
				var xztm = xztm +"||"+ xztmul[i].innerText;
				var idli = xztmul[i].id;
				var lidom = document.getElementById(idli);
				var img_src=lidom.getElementsByTagName("img")[0].src;
				var wztp = wztp +"^|*|^"+ img_src;
			}
			
		}
		mui.toast("没有图片的违章条目请放置底部！"); 
		var confirm=document.getElementById("confirm");
		confirm.disabled=false;
		if(self.jcxm==""){
//			alert(xztm);
			//遮罩效果
			ws=null;
			ws=plus.webview.currentWebview();
			// 显示遮罩层
			ws.setStyle({mask:"rgba(0,0,0,0.7)"});
			mui.openWindow({
				url: 'my_project_ckcg_wztmtj.html',
				id:'my_project_ckcg_wztmtj.html',								
				styles:{
					width:'80%',
					height:'60%',	
					margin:'auto',
					hardwareAccelerated:false
				},
				extras:{
					name:'lidegejing',
					xztm:xztm,
					wztp:wztp
				},
				show:{
					autoShow:true,//页面loaded事件发生后自动显示
					aniShow:'slide-in-right',//页面显示动画
					duration:'100'//页面动画持续时间
				},
				waiting:{
					autoShow:false,//自动显示等待框	
				}							 
			});	
			
		}else{
			//alert("测试2");
			mui.openWindow({
				url: "my_change_wztm.html",
				id: "my_change_wztm.html",
				extras:{
					//传值 
					cg:'ckcg',
					tianjia:'添加',
					jcxm_jc:jcxm_jc
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
		}
		
	});
	
	//接收值
	window.addEventListener('json_bj',function(event){
		//关闭遮罩层
		setTimeout(function() {
			ws.setStyle({mask:"none"});
			ws=null;
		}, 100);
	});
	
});

	//点击操作，替换新添加的图片
//			function tap1(a){
////				alert(a.id)
//				var li_id=document.getElementById(a.id); //定位至点击的图片
//				var img_id=li_id.getElementsByTagName("img")[0].getAttribute("id");
////				alert(img_id);
//				galleryImg_1(img_id);
//			}
		mui('#xzwztmck').on('tap', 'li', function() {
			if(this.name=="ture"){
			var li_id=document.getElementById(this.id); //定位至点击的图片 
			var img_id=li_id.getElementsByTagName("img")[0].getAttribute("id");
//			alert(img_id);
			galleryImg_1(img_id);
			}
		}); 

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
		//文件替换
		function appendFile_1(path,id){
			var img = new Image();
			img.src = path; // 传过来的图片路径在这里用。                                              ///////////// 用canvas画布对照片像素进行处理
			var	sum = id.replace("t","");
//			alert(sum);
			var	num = sum-(wztmnr.length-1);
//			alert(num);
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function galleryImg(id){
	plus.gallery.pick(function(p){                                     /////////////从相册中选择照片上传
		//将本地路径传至压缩中
		var imgImg=document.getElementById(id).getAttribute("id");
		appendFile(p,imgImg);//处理图片的地方
	});
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//添加文件 采用canvas
var f1Base64=[];
function appendFile(path,id){
	var img = new Image();
	img.src = path; // 传过来的图片路径在这里用。                              /////////////////////////添加文件
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
		f1Base64.push(base64+"︴"); //上传用
		var pic = document.getElementById(id);    
		pic.src = base64; //这里丢到img 的 src 里面就能看到效果了
		createItem(base64);
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//创建数组
var index_rwfj=1;
function createItem(p) {
	files_rwfj.push({name:"upfile"+index_rwfj,path:p});                    //////////////////创建上传数组
	index_rwfj++;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var server=url+"my_plus/fileupload_cgck_xg.php";
//var server="http://192.168.0.114:80/ceshi0311/plus/fileupload.php";
var files=[]; //定义文件变量
var files_rwfj=[]; //定义任务附件(图片)
function upload(lx,clean){
	var btnArray = ['否', '是'];
	mui.confirm('确定上传？上传后待责任人整合后才能做其他操作！！', '违章现象添加', btnArray, function(e) {
		if (e.index == 1) {
			//alert(f1Base64.length);
			var strs=","+f1Base64.join();
			if (lx=='confirm') {
				files=files_rwfj; //将任务附件赋值给文件变量
				var wztmXz="";
				var tmXz="";
				var wzbwXz="";
			}else if(lx=='confirmOne'){
				files=files_rwfj; //将任务附件赋值给文件变量
				var wztmXz="wztmtjnew";
				//拼接违章条目、部位和附件
				var strsTest=savePictureWztm(lx);
				var strsArray=new Array();
				strsArray=strsTest.split("--");
				var tmXz=strsArray[0];
				var wzbwXz=strsArray[1];
			}else{
				
			}
			//alert(files.length);
			if(files.length<=0){
				//plus.nativeUI.alert("没有添加上传文件！");
				//return;
				if(lx=='confirmOne'){
					var div_text=tmXz;
					var p_text=wzbwXz;
				}else{
					var wztmck=document.getElementById('wztmck');
					//var wztmck=document.getElementById('wztmck');
					var divTextShuzu=wztmck.getElementsByTagName("div");
					var pTextshuzu=wztmck.getElementsByTagName("p");
					div_text="";  
					p_text="";
					//违章条目拼接
					for(var i=0;i<divTextShuzu.length;i++){
						var divText=divTextShuzu[i].innerText+'||';
						div_text+=divText;
					}
					//部位拼接
					for(var i=0;i<pTextshuzu.length;i++){
						//去掉部位两个字
						var strs=new Array;
						strs=pTextshuzu[i].innerText.split("：");
						var pText=strs[1]+'||';
						p_text+=pText;
					}
				}
				//alert(div_text+"****"+p_text);
				weztmXg(div_text,p_text,wztmXz);
				alert("此信息已同步云端！");
				var target=plus.webview.currentWebview().opener();
				mui.fire(target,'wztmck',{
					zggl:'my_change_ckcg.html'
				});
				mui.back();
				return;
			}
			var wt=plus.nativeUI.showWaiting();
			var task=plus.uploader.createUpload(server,{method:"POST"},	function(t,status){
				//上传完成
				if(status==200){ //固定值200
					wt.close();
		//			plus.nativeUI.alert("上传成功！");
					//alert("保存成功！");
					//保存违章部位和违章条目
					//获取违章条目和违章部位
					if(lx=='confirmOne'){
						var wztmck=document.getElementById('xzwztmck');
					}else{
						var wztmck=document.getElementById('wztmck');
					}
					//var wztmck=document.getElementById('wztmck')
					var divTextShuzu=wztmck.getElementsByTagName("div");
					var pTextshuzu=wztmck.getElementsByTagName("p");
					div_text="";  
					p_text="";
					//违章条目拼接
					for(var i=0;i<divTextShuzu.length;i++){
						var divText=divTextShuzu[i].innerText+'||';
						div_text+=divText;
					}
					//部位拼接
					for(var i=0;i<pTextshuzu.length;i++){
						//去掉部位两个字
						var strs=new Array;
						strs=pTextshuzu[i].innerText.split("：");
						var pText=strs[1]+'||';
						p_text+=pText;
					}
					if(lx=='confirmOne'){
						
					}else{
						weztmXg(div_text,p_text,wztmXz);
					}
					
					
					
					alert("此信息已同步云端！");
					var target=plus.webview.currentWebview().opener();
					mui.fire(target,'wztmck',{
						zggl:'my_change_ckcg.html'
					});
					mui.back();
				}else{
					//outLine("上传失败："+status); 
					wt.close();
				}
			});
			//////////////
			task.addData("lx",lx);
			task.addData("tzdbh",tzdbh);
			task.addData("gcmc",gcmc);
			task.addData("gcid",gcid);
			task.addData("sjc",sjc);
			task.addData("mobile",mobile);
			task.addData("uid",getUid());
			task.addData("mchen",mchen());
			/////////////
			nub=files.length.toString();
			task.addData("nub",nub);
			task.addData("files1",strs);
			task.addData("wztmXz",wztmXz);
			
			task.addData("tmXz",tmXz);
			task.addData("wzbwXz",wzbwXz);
			for(var i=0;i<files.length;i++){
				var f=files[i];
				task.addFile(f.path,{key:f.name});
			}
			task.start();
			files=[];
			
		} else {
			//否
		}
	})
}

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
function weztmXg(okwetm,p_text,wztmXz){
	//alert(wztmXz);
	mui.ajax(url+'my_plus/my_change_ckwztm.php',{
		data:{
			q:p_text,
			s:okwetm,
			sjc:sjc,
			tzdbh:tzdbh,
			wztmtjnew:wztmXz,
			mobile:mobile
		},
		//dataType:'json',
		type:'POST', 
		timeout:10000,
		success:function(data){
			//alert(data);
		}, 
		error:function(xhr,type,errorThrown){ 
			alert('ajax错误'+type+'---'+errorThrown);
		}
	});
}
function savePictureWztm(lx){
	if(lx=='confirmOne'){
		var wztmck=document.getElementById('xzwztmck');
	}else{
		var wztmck=document.getElementById('wztmck');
	}
	//var wztmck=document.getElementById('wztmck')
	var divTextShuzu=wztmck.getElementsByTagName("div");
	var pTextshuzu=wztmck.getElementsByTagName("p");
	div_text="";  
	p_text="";
	//违章条目拼接
	for(var i=0;i<divTextShuzu.length;i++){
		var divText=divTextShuzu[i].innerText+'||';
		div_text+=divText;
	}
	//部位拼接
	for(var i=0;i<pTextshuzu.length;i++){
		//去掉部位两个字
		var strs=new Array;
		strs=pTextshuzu[i].innerText.split("：");
		var pText=strs[1]+'||';
		p_text+=pText;
	}
	return div_text+"--"+p_text;
}
