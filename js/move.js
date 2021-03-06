/**
 * 缓冲运动
 * @param obj 运动对象
 * @param attr 运动元素(left,right,top,opacity...)
 * @param iTarget 目标
 * @param funEnd  运动结束执行的方法(链式运动)
 */
function bufferingMotion(obj, attr, iTarget,funEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var cur;
        if (attr === "opacity") {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            cur = parseInt(getStyle(obj, attr));
        }
        var speed = (iTarget - cur) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (iTarget === cur) {
            clearInterval(obj.timer);
            if (funEnd){
                funEnd();
            }
        } else {
            if (attr === 'opacity') {
                var alpha = cur + speed;
                obj.style.filter = "alpha(opacity:" + alpha + ")";
                obj.style.opacity = alpha / 100;
            } else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    }, 30);
}

/**
 * 匀速运动
 * @param obj 要移动的目标
 * @param attr 元素
 * @param iTarget 目标
 * @param speedIn 速度
 */
function uniformMotion(obj,attr,iTarget,speedIn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var cur;
        if (attr === "opacity") {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            cur = parseInt(getStyle(obj, attr));
        }
        var speed = Math.abs(speedIn);
        if (cur > iTarget) {
            speed = -speed;
        }
        if (Math.abs(cur-iTarget)<Math.abs(speed)){
            speed = 1;
        }
        if (iTarget === cur) {
            clearInterval(obj.timer);
        } else {
            if (attr === 'opacity') {
                var alpha = cur + speed;
                obj.style.filter = "alpha(opacity:" + alpha + ")";
                obj.style.opacity = alpha / 100;
            } else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    }, 30);
}

