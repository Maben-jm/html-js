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
function boundEvent(oParent,eventName,func){
    if (oParent.attachEvent){
        // IE
        oParent.attachEvent("on"+eventName,func);
    } else{
        // FIREFOX  || CHROME
        oParent.addEventListener(eventName,func,false);
    }
}