
function startMove(obj, attr, iTarget) {
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
};

function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}