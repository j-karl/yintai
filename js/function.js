/*
获取文本的兼容性
getContent(obj,[val]);
	1.先判断浏览器
	2.判断有没有第二个参数
	3.获取文本或者设置文本.

*/
function getContent(obj,val){
	if(obj.textContent){
		//w3c
		if(val){
			console.log("有第一个参数");
			obj.textContent = val;
		}else{
			console.log("没有第一个参数");
			return obj.textContent;
		}
	}else{
		//ie6~8
		if(val){
			console.log("有第二个参数");
			obj.innerText = val;
		}else{
			console.log("没有第二个参数");
			return obj.innerText;
		}
	}
}

/*
	获取样式的兼容性
	思路与上面的getContent()一样
*/
function getStyle(obj,arrt){
	if(obj.currentStyle){
		//ie6~8
		// alert(1+"ie");
		return obj.currentStyle[arrt];
	}else{
		//w3c
		// alert(2+"w3c");
		return getComputedStyle(obj,null)[arrt];
	}
}



function getClass(classname,range){
	// alert("getClass");
	//初始化  在排序的时候用过
	var range = range?range:document;
	if(document.getElementsByClass){
		return range.getElementsByClass();
	}else{
		var all = range.getElementsByTagName("*");
		var arr = [];
		for(var i=0;i<all.length;i++){
			var str = all[i].className;
			if(check(str,classname)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}


function check(str,classname){
	var arr = str.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i] == classname){
			return true;
		}
		
	}
	return false;
}

/*
	$()为了更方便的获取元素。
		"."   用document.getElementsByclassName();有兼容性问题，
			  所以用已经写好的getClass();
		"#"	  用document.getElementsById();
		"div" 用正则表达式判断是不是标签,然后用document.getElementsByTagName();
		"<div>"  创建一个字符串
		函数	window.onload = function(){}
	思路：1.先根据获得的className判断第一位字符
		  2.再根据不同的字符返回各自的方法
*/

function $(obj,content){
	if(typeof obj == "string"){
		var first = obj.charAt(0);
		if(first == "."){
			//className
			var classname= obj.substr(1);
			return getClass(classname,content);
		}else if(first == "#"){
			//Id
			var id= obj.substr(1);
			alert(id);
			return document.getElementById(id);
		}else if(/^[a-z][a-z1-6]{0,8}$/.test(obj)){
			//TagName
			return content.getElementsByTagName(obj);
		}else if(/^<[a-z][a-z1-6]{0,8}>$/.test(obj)){
			return document.createElement(obj.slice(1,-1));
		}
	}else if(typeof obj == "function"){
		// window.onload = function(){
		// 	obj();
		// }
		//可以添加很多个onload事件
		addEvent(window,"load",obj);
	}
	
}



/*
	getChild(obj,[type])
	获取指定元素的子元素(元素节点)的集合
	type 指定传入的元素类型
	true
	false
	obj  指定的元素
	1.获取全部的子元素
	2.通过nodeType == 1;进行挑选

*/
	function getChild(obj,type){
		type = type==undefined?true:type;
		var child = obj.childNodes;
		var arr = [];
		if(type){
			for(var i=0;i<child.length;i++){
				if(child[i].nodeType == 1){
					arr.push(child[i]);
				}
			}
			return arr;	
		}else{
			for(var i=0;i<child.length;i++){
				if(child[i].nodeType == 1 || (child[i].nodeType == 3 && child[i].nodeValue.replace(/^\s+|\s$/g,"") )){
					arr.push(child[i]);
				}
			}
			return arr;	
		}
		
	}
	//用继承的方法将getChild()放到父类中的prototype中
	// Node.prototype.getChild = function(type){
	// 	type = type==undefined?true:type;
	// 	var child = this.childNodes;
	// 	console.log(child);
	// 	var arr = [];
	// 	if(type){
	// 		// alert("getChild true");
	// 		for(var i=0;i<child.length;i++){

	// 			if(child[i].nodeType == 1){
	// 				// alert(child[i].nodeType);
	// 				arr.push(child[i]);
	// 			}
	// 		}
	// 		return arr;	
	// 	}else{
	// 		for(var i=0;i<child.length;i++){
	// 			if(child[i].nodeType == 1 || (child[i].nodeType == 3 && child[i].nodeValue.replace(/^\s+|\s+$/g,"") )){
	// 				arr.push(child[i]);
	// 			}
	// 		}
	// 		return arr;	
	// 	}
	// }




/*
	给子元素最前面插入
*/
	function insertFirst(obj,new1){
		var first = firstChild1(obj);
		obj.insertBefore(new1,first);
	}

	// //给元素最前面插入
	// Node.prototype.insertFirst = function(new1){
	// // type = type==undefined?true:type;

	// var first = this.firstChild1();
	//  this.insertBefore(new1,first);
	// }



//insertAfter()往后面插入
//old位置      new1要插入的元素
//type true 忽略文本元素  (默认)
//	   false 不忽略文本元素
/*
	1.看是否有下一个兄弟节点
		有：插到下一个兄弟节点之前

		没有：插到最后
*/

	function insertAfter(new1,old,type){
		type = type==undefined?true:type;
		var next = getNext(old);
		var parent = old.parentNode;
		if(next){
			parent.insertBefore(new1,next);
		}else{
			parent.appendChild(new1);
		}
	}

// Node.prototype.insertAfter = function(new1,old,type){
// 	type = type==undefined?true:type;
// 	var next = this.getNext(type);
// 	var parent = old.parentNode;
// 	if(next){
// 		parent.insertBefore(new1,next);
// 	}else{
// 		parent.appendChild(new1);
// 	}

// }


/*
	得到第一个子元素
*/
	function firstChild1(obj,type){
		return getChild(obj,type)[0];
	}
	// //得到第一个子元素
	// // 如果true 忽略文本，只得到标签元素。
	// // 	   false 不忽略文本，得到标签元素和有意义的文本。
	// Node.prototype.firstChild1 = function(type){
	// 	return this.getChild(type)[0];
	// } 


/*
	得到最后一个子元素
*/
	function lastChild1(){
		var length = obj.getChild(type).length;
		return obj.getChild(type)[length-1];
	}

	// Node.prototype.lastChild1 = function(type){
	// 	var length = this.getChild(type).length;
	// 	return this.getChild(type)[length-1];
	// } 


//获取下一个兄弟节点
/*

		obj:当前这个元素
		type:true  忽略文本和注释
			 false  不忽略有意义的文本
	1.判断是否有兄弟节点
		没有，返回一个false
		有：
		2.判断兄弟节点是否是一个元素节点或者有意义的文本节点
			有：返回
			没有：
			3.更新兄弟元素，继续往下寻找，直到找到符合条件的，没有就返回false
				判断兄弟节点是否为空：空，返回false
									  不为空，继续寻找
*/

	function getNext(obj,type){
		type = type==undefined?true:type;
		var next = obj.nextSibling;
		if(next == null){
			return false;
		}
		if(type){
			while(next.nodeType == 3 || next.nodeType == 8){
				next =next.nextSibling;
				if(next == null){
					return false;
				}
			}
			return next;
		}else{
			while(next.nodeType == 3 &&!(next.nodeValue.replace(/^\s+|\s+$/g,"")) || next.nodeType == 8){
				next =next.nextSibling;
				if(next == null){
					return false;
				}
			}
			return next;
		}
	}

	// Node.prototype.getNext = function(type){
	// type = type==undefined?true:type;
	// // type = type?type:true;
	// var next = this.nextSibling;
	// 	if(next == null){
	// 		return false;
	// 	}
	// if(type){
	// 	while(next.nodeType== 3 || next.nodeType==8){
	// 		next = next.nextSibling;
	// 		if(next == null){
	// 			return false;
	// 		}
	// 	}
	//   return next;
	// }else{
	// 	// alert("false");
	// 	while((next.nodeType== 3&&!(next.nodeValue.replace(/^\s+|\s+$/g,""))) || next.nodeType==8){
	// 		// alert(1);
	// 		next = next.nextSibling;
	// 		if(next == null){
	// 			return false;
	// 		}
	// 	}
	//   return next;
	// }
	//}
	

	/*
		获取上一个元素
		obj:当前这个元素
		type:true  忽略文本和注释
			 false  不忽略有意义的文本
		判断兄弟节点是否是一个元素节点或者有意义的文本节点
	*/
	function getLast(obj,type){
		type = type==undefined?true:type;
		var last = obj.previousSibling;
		if(last == null){
			return false;
		}
		if(type){
			while(last.nodeType == 3 || last.nodeType == 8){
				last = last.previousSibling;
				if(last == null){
					return false;
				}
			}
			return last; 
		}else{
			while(last.nodeType == 3 && !(last.nodeValue.replace(/^\s+|\s+$/g,""))|| last.nodeType == 8){
				last = last.previousSibling;
				if(last == null){
					return false;
				}
			}
			return last;
		}

	}

// 	//获取上一个元素
// Node.prototype.getLast = function(type){
// 	type = type==undefined?true:type;
// 	// type = type?type:true;
// 	var last = this.previousSibling;
// 		if(last == null){
// 			return false;
// 		}
// 	if(type){
// 		while(last.nodeType== 3 || last.nodeType==8){
// 			last = last.previousSibling;
// 			if(last == null){
// 				return false;
// 			}
// 		}
// 	  return last;
// 	}else{
// 		// alert("false");
// 		while((last.nodeType== 3&&!(last.nodeValue.replace(/^\s+|\s+$/g,""))) || last.nodeType==8){
// 			// alert(1);
// 			last = last.previousSibling;
// 			if(last == null){
// 				return false;
// 			}
// 		}
// 	  return last;
// 	}

// }




/*
	jumpFloor(fu,zi,);
	楼层跳转
*/


/*
	addEvent(obj,type,fn);
	给元素添加事件
*/
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false);
	}else{
		obj.attachEvent("on"+type,fn);
	}
}

/*
	removeEvent(obj,type,fn);
*/

function removeEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.removeEventListener(type,fn,false);
	}else{
		obj.detachEvent("on"+type,fn);
	}
}




function mouseWheel(obj,fn1,fn2){

	if(document.attachEvent){
		obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
	}else if(document.addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false);
		//chrome,safari -webkit-
		obj.addEventListener("DOMMouseScroll",scrollFn,false);
		//firefox -moz-
	}

	function scrollFn(e){
 		var ev = e || window.event;
 		var wheel = ev.wheelDelta || ev.detail;
		if(ev.preventDefault ){
			ev.preventDefault(); //阻止默认浏览器动作(W3C)
		}else{
			ev.returnValue = false;//IE中阻止函数器默认动作的方式
		}

 		if(wheel==-120||wheel==3){
 			fn1.call(obj);
 		}else if(wheel==120||wheel==-3){
 			fn2.call(obj);
 		}
	}
}
