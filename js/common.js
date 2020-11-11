/**
 * 获取某个标签下所有该样式的集合(单层)
 * @param oParent oParent
 * @param className className
 * @returns {Array}
 */
function getByClass(oParent, className) {
    var aResult = [];
    var aEle = oParent.getElementsByTagName('*');
    for (var i = 0; i < aEle.length; i++) {
        var clazz = aEle[i].className;
        var aClazz = clazz.split(" ");
        for (var j = 0; j < aClazz.length; j++) {
            if (aClazz[j] == className) {
                aResult.push(aEle[i]);
            }
        }

    }
    return aResult;
}

/**
 * 获取样式(包括行间样式)
 * @param obj 目标
 * @param name 样式名称
 * @returns {string}
 */
function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}

/**
 * 获取鼠标的X/Y轴
 * @param ev 事件var oEvent = ev || event;
 * @returns {{x: number, y: number}}
 */
function getPosition(ev) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    return {
        x: ev.clientX + scrollLeft,
        y: ev.clientY + scrollTop
    };
}

/**
 * 绑定事件扩展
 * @param oParent 绑定事件的元素
 * @param eventName 事件名称(不带on)
 * @param func 绑定函数
 */
function boundEvent(oParent, eventName, func) {
    if (oParent.attachEvent) {
        // IE
        oParent.attachEvent("on" + eventName, func);
    } else {
        // FIREFOX  || CHROME
        oParent.addEventListener(eventName, func, false);
    }
}

/**
 * 发送ajax请求
 * @param funType 方法类型 post || get
 * @param funUrl 方法请求路径
 * @param funData json格式数据
 * @param isAsynchronous 是否异步
 * @param funSuccessCallBack 请求成功函数
 * @param funErrorCallBack 请求失败函数
 */
function sendAjax(funType, funUrl, funData, isAsynchronous, funSuccessCallBack, funErrorCallBack) {
//    1.创建ajax对象
    if (window.XMLHttpRequest) {
        var oAjax = new XMLHttpRequest();
    } else {
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
//    2.连接服务器
    var params = formatParams(funData);
    if (funType === 'GET' || funType === 'get') {
        oAjax.open('GET', funUrl + '?' + params, isAsynchronous);
        oAjax.send(null);
    } else if (funType === 'POST' || funType === 'post') {
        oAjax.open('POST', funUrl, isAsynchronous);
        //设置表单提交时的内容类型
        oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        oAjax.send(params);
    }
//    3.发送请求
    oAjax.send();
//    4.接收返回
    oAjax.onreadystatechange = function () {
        //请求读取完成
        if (oAjax.readyState === 4) {
            if (oAjax.status === 200) {
                if (funSuccessCallBack) {
                    funSuccessCallBack(eval(oAjax.responseText));
                }
            } else {
                if (funErrorCallBack) {
                    funErrorCallBack(oAjax.status);
                }
            }
        }
    }
}

//获取单选框值
function getRadioVal(obj,name){
    var inputs=obj.getElementsByName(name);
    var checkVal="";
    for(var i=0, len=inputs.length;i<len;i++){
        if(inputs[i].checked){
            checkVal=inputs[i].value;
        }
    }
    return checkVal;
}

//获取复选框的值
function getCheckBoxVal(obj,name){
    var items=obj.getElementBysName(name);
    var checkVal=[];
    var k=0;//用来作checkVal数组的下标
    for(var i=0, len=items.length;i<len;i++){
        if(items[i].checked){
            checkVal[k]=items[i].value;
            k++;
        }
    }   
    return checkVal;
}

//获取select选中的值
function getSelectVal(obj,name){
		var item = obj.getElementById(name);
		var index = item.selectedIndex; // 选中索引
		var text = item.options[index].text; // 选中文本
		var value = item.options[index].value; // 选中值
		return {
			'index':index,
			'text':text,
			'value':value
		};
}