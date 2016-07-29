/*楼层跳转*/
$(function(){
	var floor = $(".shishang");
	var heights = document.documentElement.clientHeight;
	var arr = [];
	for(var i=0;i<floor.length;i++){
		arr.push(floor[i].offsetTop);
	}


	var lis = $(".box1",$(".rightside")[0]);
	var flag =true;
	// console.log(lis);	
	for(var i=0;i<lis.length;i++){
		lis[i].index = i;
		lis[i].onclick = function(){
			flag = false;
			var obj = document.body?document.body:document.documentElement;
			for(var j=0;j<lis.length;j++){
					var divs = $("div",lis[j])[0];
					divs.className = "";
				}
			var divs = $("div",lis[this.index])[0];
			divs.className = "hooot";
			// lis[this.index].style.background = "red";
			animate(obj,{scrollTop:arr[this.index]},function(){
				flag = true;
			});
		}
		lis[i].onmouseover = function(){
			for(var j=0;j<lis.length;j++){
					var divs = $("div",lis[j])[0];
					divs.className = "";
				}
			var divs = $("div",lis[this.index])[0];
			divs.className = "hooot";
		}
	}



	var flag1 = true; 
	var rightside = $(".rightside")[0];
	var guanggao1 = $(".guanggao1");
	var arr1 = [];
	for(var i=0;i<guanggao1.length;i++){
		arr1.push(guanggao1[i].offsetTop);
	}
	var rmtj = $(".rmtj");
	console.log(rmtj);
	var arr2 = [];
	for(var i=0;i<rmtj.length;i++){
		arr2.push(rmtj[i].offsetTop);
	}
	var brand = $(".brand");
	var arr3 = [];
	for(var i=0;i<brand.length;i++){
		arr3.push(brand[i].offsetTop);
	}
	var yt_card = $(".yt_card");
	var arr4 = [];
	for(var i=0;i<yt_card.length;i++){
		arr4.push(yt_card[i].offsetTop);
	}
	// var arr1 = [];
	// for(var i=0;i<floor.length;i++){
	// 	arr1.push(floor[i].offsetTop);
	// }
	window.onscroll = function(){
		var obj = document.body.scrollTop?document.body:document.documentElement;
		var index = obj.scrollTop;
		for(var i=0;i<floor.length;i++){
			if(index+heights>=arr[i]+150){
				for(var j=0;j<lis.length;j++){
					var divs = $("div",lis[j])[0];
					divs.className = "";
				}
				var divs = $("div",lis[i])[0];
				divs.className = "hooot";
			}
		}

		if(index>=arr[0]-200){
			if(flag1){
				flag1 = false;
				
				animate(rightside,{right:10})
			}
		}else{
			if(!flag1){
				flag1 = true;
				animate(rightside,{right:-50});

			}
		}

		if(!flag){
			return;
		}


		/*按序加载*/
		for(var i=0;i<guanggao1.length;i++){
			if(index+heights>arr1[i]+150){
				var img1 = $("img",guanggao1[i]);
				for(var j=0;j<img1.length;j++){
					img1[j].src = img1[j].getAttribute("imgpath");
				}
			}
		}

		for(var i=0;i<floor.length;i++){
			if(index+heights>arr[i]+150){
				var imgs = $("img",floor[i]);
				for(var j=0;j<imgs.length;j++){
					imgs[j].src = imgs[j].getAttribute("imgpath");
				}
			}
		}

		for(var i=0;i<rmtj.length;i++){
			if(index+heights>arr2[i]+150){
				var img2 = $("img",rmtj[i]);
				// console.log(img2);
				for(var j=0;j<img2.length;j++){
					img2[j].src = img2[j].getAttribute("imgpath");
				}
			}
		}

		for(var i=0;i<brand.length;i++){
			if(index+heights>arr3[i]+150){
				var img3 = $("img",brand[i]);
				// console.log(img2);
				for(var j=0;j<img3.length;j++){
					img3[j].src = img3[j].getAttribute("imgpath");
				}
			}
		}

		for(var i=0;i<yt_card.length;i++){
			if(index+heights>arr4[i]+150){
				var img4 = $("img",yt_card[i]);
				// console.log(img2);
				for(var j=0;j<img4.length;j++){
					img4[j].src = img4[j].getAttribute("imgpath");
				}
			}
		}

	}
})



/*
	边框动画
*/

$(function(){
	borderanimate(".swich_panners",0);
	borderanimate(".swich_panners",1);
	borderanimate(".tk_content2",0);
	
	function borderanimate(classname,num){
		var swich_panners = $(classname)[num];
		var animatee = $(".ani",swich_panners);
		for(var i=0;i<animatee.length;i++){
			animatee[i].index = i
			animatee[i].onmouseover = function(){
				var bleft = $(".border_left",animatee[this.index])[0];
				var bright = $(".border_right",animatee[this.index])[0];
				var btop = $(".border_top",animatee[this.index])[0];
				var bbottom = $(".border_bottom",animatee[this.index])[0];
				animate(bleft,{height:260});
				animate(bright,{height:260});
				animate(btop,{width:220});
				animate(bbottom,{width:220});
			}
			animatee[i].onmouseout = function(){
				var bleft = $(".border_left",animatee[this.index])[0];
				var bright = $(".border_right",animatee[this.index])[0];
				var btop = $(".border_top",animatee[this.index])[0];
				var bbottom = $(".border_bottom",animatee[this.index])[0];
				animate(bleft,{height:0});
				animate(bright,{height:0});
				animate(btop,{width:0});
				animate(bbottom,{width:0});
			}
		}
	}
	borderanimate1(".shishang_main");
	borderanimate1(".main1");
	borderanimate1(".main2");
	borderanimate1(".main3");
	borderanimate1(".main4");
	borderanimate1(".main5");
	borderanimate1(".main6");
	borderanimate1(".main7");
	borderanimate1(".main8");
	function borderanimate1(classname){
		var swich_panners = $(classname)[0];
		var animatee = $(".ani",swich_panners);
		for(var i=0;i<animatee.length;i++){
			animatee[i].index = i
			animatee[i].onmouseover = function(){
				var bleft = $(".border_left",animatee[this.index])[0];
				var bright = $(".border_right",animatee[this.index])[0];
				var btop = $(".border_top",animatee[this.index])[0];
				var bbottom = $(".border_bottom",animatee[this.index])[0];
				animate(bleft,{height:182});
				animate(bright,{height:182});
				animate(btop,{width:272});
				animate(bbottom,{width:272});
			}
			animatee[i].onmouseout = function(){
				var bleft = $(".border_left",animatee[this.index])[0];
				var bright = $(".border_right",animatee[this.index])[0];
				var btop = $(".border_top",animatee[this.index])[0];
				var bbottom = $(".border_bottom",animatee[this.index])[0];
				animate(bleft,{height:0});
				animate(bright,{height:0});
				animate(btop,{width:0});
				animate(bbottom,{width:0});
			}
		}
	}
	
	
})

/*
	小banner图移动
*/
$(function(){
	var fpic = $(".fpic")[0];
	var as = $("a",fpic)[0];
	// console.log(as);
	fpic.onmouseover = function(){
		animate(fpic,{right:90});
	}
	fpic.onmouseout = function(){
		animate(fpic,{right:79.5});
	}

})


/*
	超值特卖，爆款好货，手机专享
*/
$(function(){
	var lis = $("li",$(".brand_ul")[0]);
	var as = $(".brand_a",$(".brand_ul")[0]);
	// console.log(as);
	var swich_panners = $(".swich_panners");
	swich_panners[0].style.display = "block";
	lis[0].style.borderBottom="5px solid #E5004F";
	as[0].style.fontWeight = "bold";
	for(var i=0;i<lis.length;i++){
		lis[i].index = i;
		lis[i].onmouseover = function(){
			for(var j=0;j<swich_panners.length;j++){
				swich_panners[j].style.display = "none";
				lis[j].style.borderBottom="5px solid #333";
				as[j].style.fontWeight = "";				
			}
			swich_panners[this.index].style.display = "block";
			lis[this.index].style.borderBottom="5px solid #E5004F";
			as[this.index].style.fontWeight = "bold";
			
		}
	
	}
})


/*
	专柜同款
*/
$(function(){
	var lis = $(".trigga1");
	var as = $(".trigga1a");;
	var content = $(".tk_content1");
	// console.log(as);
	content[0].style.display = "block";
	as[0].style.fontWeight = "bold";
	lis[0].style.borderBottom="3px solid #E5004F";
	for(var i=0;i<lis.length;i++){
		lis[i].index = i;
		lis[i].onmouseover = function(){
			for(var j=0;j<content.length;j++){
				content[j].style.display = "none";
				lis[j].style.borderBottom="3px solid #333";
				as[j].style.fontWeight = "";				
			}
			content[this.index].style.display = "block";
			lis[this.index].style.borderBottom="3px solid #E5004F";
			as[this.index].style.fontWeight = "bold";
			
		}
	
	}

})


/*
	全部分类
*/
$(function(){
	var allfenlei = $(".allfenlei")[0];
	var dl = $("dl",allfenlei);
	var dd = $(".dd1_10",allfenlei);
	var em = $("em",allfenlei);
	// console.log(em);
	for(var i=0;i<dl.length;i++){
		dl[i].index = i;
		dl[i].onmouseover = function(){
			dd[this.index].style.display = "block";
			if(this.index==0){
				em[0].style.backgroundPosition="0 -126px";
			}
			if(this.index==1){
				em[1].style.backgroundPosition="-17px -128px";
			}
			if(this.index==2){
				em[2].style.backgroundPosition="-34px -128px";
			}
			if(this.index==3){
				em[3].style.backgroundPosition="-51px -129px";
			}
			if(this.index==4){
				em[4].style.backgroundPosition="-68px -129px";
			}
			if(this.index==5){
				em[5].style.backgroundPosition="-85px -128px";
			}
			if(this.index==6){
				em[6].style.backgroundPosition="-102px -129px";
			}
			if(this.index==7){
				em[7].style.backgroundPosition="-119px -129px";
			}
			if(this.index==8){
				em[8].style.backgroundPosition="-136px -129px";
			}
			if(this.index==9){
				em[9].style.backgroundPosition="-153px -129px";
			}
		}
		dl[i].onmouseout = function(){
			dd[this.index].style.display = "none";
			if(this.index==0){
				em[0].style.backgroundPosition="0 -108px";
			}
			if(this.index==1){
				em[1].style.backgroundPosition="-17px -110px";
			}
			if(this.index==2){
				em[2].style.backgroundPosition="-34px -110px";
			}
			if(this.index==3){
				em[3].style.backgroundPosition="-51px -111px";
			}
			if(this.index==4){
				em[4].style.backgroundPosition="-68px -111px";
			}
			if(this.index==5){
				em[5].style.backgroundPosition="-85px -110px";
			}
			if(this.index==6){
				em[6].style.backgroundPosition="-102px -111px";
			}
			if(this.index==7){
				em[7].style.backgroundPosition="-119px -111px";
			}
			if(this.index==8){
				em[8].style.backgroundPosition="-136px -111px";
			}
			if(this.index==9){
				em[9].style.backgroundPosition="-153px -111px";
			}
		}
	}




})



/*
	banner轮播图
*/
$(function(){
	var banner = $(".banner")[0];
	var panners = $(".panners",banner)[0];
	var as = $(".as",panners);
	var tab_panners = $(".tab_panners");
	var widths = parseInt(getStyle(as[0],"width"));
	var lis = $("li",$(".nav_dian")[0]);
	var btnL = $(".switch_prev")[0];
	var btnR = $(".switch_next")[0];
	var index = 0;

	as[0].style.zIndex=10;
	tab_panners[0].style.zIndex=9;
	tab_panners[0].style.opacity=1;

	var t = setInterval(moveL,2000);
	banner.onmouseover = function(){
		btnL.style.display = "block";
		btnR.style.display = "block";
		clearInterval(t);
	}
	banner.onmouseout = function(){
		btnL.style.display = "none";
		btnR.style.display = "none";
		t = setInterval(moveL,2000);
	}
	var flag=true;
	btnL.onclick = function(){
		if(flag){
			flag=false;
			moveR();
		}
		
	}
	btnR.onclick = function(){
		if(flag){
			flag=false;
			moveL();
		}
	}
	function moveL(){
		index++;
		if(index == as.length){
			index=0;
		}
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
			tab_panners[i].style.zIndex=1;
			tab_panners[i].style.opacity=0;
		}
		lis[index].className="hoot";
		tab_panners[index].style.zIndex=9;
		animate(tab_panners[index],{opacity:1});
		animate(as[index],{opacity:1},function(){
			flag=true;
		});
	}
	function moveR(){
		index--;
		if(index < 0){
			index = as.length-1;
		}
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
			tab_panners[i].style.zIndex=1;
			tab_panners[i].style.opacity=0;
		}
		lis[index].className="hoot";
		animate(tab_panners[index],{opacity:1});		
		tab_panners[zIndex].style.zIndex=9;
		animate(as[index],{opacity:1},function(){
			flag=true;
		});
	}


	for(var i=0;i<lis.length;i++){
		lis[i].index = i;
		lis[i].onclick = function(){
			if(index == this.index){
				return;
			}
			for(var i=0;i<lis.length;i++){
				lis[i].className="";
				tab_panners[i].style.zIndex=1;
				tab_panners[i].style.opacity=0;
			}
			lis[this.index].className = "hoot";
			animate(tab_panners[this.index],{opacity:1});		

			animate(as[this.index],{opacity:1},function(){
				flag=true;
			});
		}
	}


})	

/*
	左侧小轮播
*/
$(function(){

	lunbo(".many",0);
	lunbo(".many2",1);
	lunbo(".many3",3);
	lunbo(".many4",4);
	lunbo(".many5",5);
	lunbo(".many6",6);
	lunbo(".many7",2);
	lunbo(".many8",7);
	lunbo(".many9",8);



	function lunbo(classname,num){
		var btnL = $(".floorBrand_prev")[num];
		var btnR = $(".floorBrand_next")[num];
		var imgBoxs = $(classname);
		var widths = parseInt(getStyle(imgBoxs[0],"width"));
		// console.log($(".many2"));

		var flag=true;
		var num = 0;
		var next = 0;
		for(var i=0;i<imgBoxs.length;i++){
			if(i==0){
				continue;
			}
			imgBoxs[i].style.left=widths +"px";
		}
		btnL.onclick = function(){
			if(flag){
				flag=false;
				moveR();
			}
		
		}
		btnR.onclick = function(){
			if(flag){
				flag=false;
				moveL();
			}
		}
		function moveL(){
			next++;
			if(next == imgBoxs.length){
				next=0;
			}
			imgBoxs[next].style.left = widths+"px";
			animate(imgBoxs[num],{left:-widths});
			animate(imgBoxs[next],{left:0},function(){
				flag=true;
			});
			num = next;
		}

		function moveR(){
			next--;
			if(next < 0){
				next = imgBoxs.length-1;
			}
			imgBoxs[next].style.left = -widths+"px";
			animate(imgBoxs[num],{left:widths});
			animate(imgBoxs[next],{left:0},function(){
				flag=true;
			});
			num = next;
		}

	}
})


/*
	中侧小轮播
*/
$(function(){

	lunbo(".a1",0);
	lunbo(".a3",1);
	lunbo(".a4",2);
	lunbo(".a5",3);
	lunbo(".a6",4);
	lunbo(".a7",5);
	// var btnL = $(".floorBrand_prev");
	// var btnR = $(".floorBrand_next");
	// for(var i=0;i<imgBoxs.length;i++){

	// }
	function lunbo(classname,num){
		var btnL = $(".slide_prev")[num];
		var btnR = $(".slide_next")[num];
		var imgBoxs = $(classname);
		var lis = $("li",$(".lunbodian")[num]);
		var widths = parseInt(getStyle(imgBoxs[0],"width"));
		var flag=true;
		console.log(imgBoxs);
		var num = 0;
		var next = 0;
		for(var i=0;i<imgBoxs.length;i++){
			if(i==0){
				continue;
			}
			imgBoxs[i].style.left=widths +"px";
		}
		btnL.onclick = function(){
			if(flag){
				flag=false;
				moveR();
			}
		
		}
		btnR.onclick = function(){
			if(flag){
				flag=false;
				moveL();
			}
		}
		function moveL(){
			next++;
			if(next == imgBoxs.length){
				next=0;
			}
			imgBoxs[next].style.left = widths+"px";
			lis[num].className="";
			lis[next].className="hot";
			animate(imgBoxs[num],{left:-widths});
			animate(imgBoxs[next],{left:0},function(){
				flag=true;
			});
			num = next;
		}

		function moveR(){
			next--;
			if(next < 0){
				next = imgBoxs.length-1;
			}
			imgBoxs[next].style.left = -widths+"px";
			lis[num].className="";
			lis[next].className="hot";
			animate(imgBoxs[num],{left:widths});
			animate(imgBoxs[next],{left:0},function(){
				flag=true;
			});
			num = next;
		 }

		 for(var i=0;i<lis.length;i++){
			lis[i].index = i;
			lis[i].onclick = function(){
				if(num == this.index){
					return;
				}
				if(this.index<num){			
					imgBoxs[this.index].style.left = -widths+"px";
					animate(imgBoxs[num],{left:widths});
					animate(imgBoxs[this.index],{left:0});				
				}else{
					imgBoxs[this.index].style.left = widths+"px";
					animate(imgBoxs[num],{left:-widths});
					animate(imgBoxs[this.index],{left:0});
				}			
				lis[num].className = "";
				lis[this.index].className = "hot";
				next = this.index;
				num = next;
			}
		}
	}
})



/*
	导航 微信
*/
$(function(){
	var weixin = $(".weixin")[0];
	var out = $(".weixinout")[0];
	var s2 = $(".s2")[0];
	// console.log(s2);
	weixin.onmouseover = function(){
		out.style.display = "block";
		s2.style.backgroundPosition = "-225px -87px";
	}
	weixin.onmouseout = function(){
		out.style.display = "none";
		s2.style.backgroundPosition = "-225px -57px";
	}

	var phone = $(".ytphone")[0];
	var logout = $(".logout")[0];
	phone.onmouseover = function(){
		logout.style.display = "block";
	}
	phone.onmouseout = function(){
		logout.style.display = "none";
	}


	var myyt = $(".myyt")[0];
	var myytout = $(".myytout")[0];
	myyt.onmouseover = function(){
		myytout.style.display = "block";
	}
	myyt.onmouseout = function(){
		myytout.style.display = "none";
	}

	var minicart = $(".minicart")[0];
	var miniout = $(".miniout")[0];
	minicart.onmouseover = function(){
		miniout.style.display = "block";
	}
	minicart.onmouseout = function(){
		miniout.style.display = "none";
	}
})


