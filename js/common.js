/**
 * 获取某个标签下所有该样式的集合(单层)
 * @param oParent oParent
 * @param className className
 * @returns {Array}
 */
function getByClass(oParent,className){
    var aResult = [];
    var aEle = oParent.getElementsByTagName('*');
    for(var i=0;i<aEle.length;i++){
        var clazz = aEle[i].className;
        var aClazz = clazz.split(" ");
        for (var j = 0; j <aClazz.length; j++) {
            if(aClazz[j]==className){
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