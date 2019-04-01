var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
var target = '_blank';

if (isSafari) {
    target = '_parent';
}

if (!Array.prototype.indexOf)
{
    Array.prototype.indexOf = function(elt /*, from*/)
    {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
            ? Math.ceil(from)
            : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++)
        {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
}


if (window.addEventListener) {
    window.addEventListener("message", handlerRedirect);
} else {
    // IE8
    window.attachEvent("onmessage", handlerRedirect);
}

function handlerRedirect(message) {
    var link = message.data;

    if (link.indexOf('outer__') != -1) {
        link = link.slice(7);
        console.log(link);
        var userAgent = window.navigator.userAgent;
        window.open(link, target);
    }
}
