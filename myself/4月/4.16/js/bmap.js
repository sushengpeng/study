window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20170803"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20170803"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20170803"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20170803"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20170803"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20170803"
        },
        "panoClick": {
            "version": "1033",
            "updateDate": "20170627"
        },
        "panoUdt": {
            "version": "20170627",
            "updateDate": "20170627"
        },
        "panoSwfAPI": {
            "version": "20150123",
            "updateDate": "20150123"
        },
        "panoSwfPlace": {
            "version": "20141112",
            "updateDate": "20141112"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20170803"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20170803"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20170803"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20170803"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20170803"
        }
    }
};
window.BMAP_AUTHENTIC_KEY = "XS9zbYnYu6dylRK6hGutsZh6";
(function () {
        function aa(a) {
            throw a;
        }
        var j = void 0,
            o = !0,
            p = null,
            q = !1;

        function s() {
            return function () {}
        }

        function ba(a) {
            return function (b) {
                this[a] = b
            }
        }

        function u(a) {
            return function () {
                return this[a]
            }
        }

        function ca(a) {
            return function () {
                return a
            }
        }
        var da, ga = [];

        function ha(a) {
            return function () {
                return ga[a].apply(this, arguments)
            }
        }

        function ia(a, b) {
            return ga[a] = b
        }
        var ja, x = ja = x || {
            version: "1.3.4"
        };
        x.ba = "$BAIDU$";
        window[x.ba] = window[x.ba] || {};
        x.object = x.object || {};
        x.extend = x.object.extend = function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        };
        x.D = x.D || {};
        x.D.$ = function (a) {
            return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : p
        };
        x.$ = x.Dc = x.D.$;
        x.D.U = function (a) {
            a = x.D.$(a);
            if (a === p) return a;
            a.style.display = "none";
            return a
        };
        x.U = x.D.U;
        x.lang = x.lang || {};
        x.lang.tg = function (a) {
            return "[object String]" == Object.prototype.toString.call(a)
        };
        x.tg = x.lang.tg;
        x.D.Pj = function (a) {
            return x.lang.tg(a) ? document.getElementById(a) : a
        };
        x.Pj = x.D.Pj;
        x.D.getElementsByClassName = function (a, b) {
            var c;
            if (a.getElementsByClassName) c = a.getElementsByClassName(b);
            else {
                var d = a;
                d == p && (d = document);
                c = [];
                var d = d.getElementsByTagName("*"),
                    e = d.length,
                    f = RegExp("(^|\\s)" + b + "(\\s|$)"),
                    g, i;
                for (i = g = 0; g < e; g++) f.test(d[g].className) && (c[i] = d[g], i++)
            }
            return c
        };
        x.getElementsByClassName = x.D.getElementsByClassName;
        x.D.contains = function (a, b) {
            var c = x.D.Pj,
                a = c(a),
                b = c(b);
            return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
        };
        x.da = x.da || {};
        /msie (\d+\.\d)/i.test(navigator.userAgent) && (x.da.la = x.la = document.documentMode || +RegExp.$1);
        var ka = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            rowspan: "rowSpan",
            valign: "vAlign",
            usemap: "useMap",
            frameborder: "frameBorder"
        };
        8 > x.da.la ? (ka["for"] = "htmlFor", ka["class"] = "className") : (ka.htmlFor = "for", ka.className = "class");
        x.D.AG = ka;
        x.D.mF = function (a, b, c) {
            a = x.D.$(a);
            if (a === p) return a;
            if ("style" == b) a.style.cssText = c;
            else {
                b = x.D.AG[b] || b;
                a.setAttribute(b, c)
            }
            return a
        };
        x.mF = x.D.mF;
        x.D.nF = function (a, b) {
            a = x.D.$(a);
            if (a === p) return a;
            for (var c in b) x.D.mF(a, c, b[c]);
            return a
        };
        x.nF = x.D.nF;
        x.Rk = x.Rk || {};
        (function () {
            var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
            x.Rk.trim = function (b) {
                return ("" + b).replace(a, "")
            }
        })();
        x.trim = x.Rk.trim;
        x.Rk.Po = function (a, b) {
            var a = "" + a,
                c = Array.prototype.slice.call(arguments, 1),
                d = Object.prototype.toString;
            if (c.length) {
                c = c.length == 1 ? b !== p && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b : c : c;
                return a.replace(/#\{(.+?)\}/g, function (a, b) {
                    var g = c[b];
                    "[object Function]" == d.call(g) && (g = g(b));
                    return "undefined" == typeof g ? "" : g
                })
            }
            return a
        };
        x.Po = x.Rk.Po;
        x.D.Sb = function (a, b) {
            a = x.D.$(a);
            if (a === p) return a;
            for (var c = a.className.split(/\s+/), d = b.split(/\s+/), e, f = d.length, g, i = 0; i < f; ++i) {
                g = 0;
                for (e = c.length; g < e; ++g)
                    if (c[g] == d[i]) {
                        c.splice(g, 1);
                        break
                    }
            }
            a.className = c.join(" ");
            return a
        };
        x.Sb = x.D.Sb;
        x.D.Ix = function (a, b, c) {
            a = x.D.$(a);
            if (a === p) return a;
            var d;
            if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
            else {
                d = a.ownerDocument.createRange();
                b = b.toUpperCase();
                if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                    d.selectNodeContents(a);
                    d.collapse(b == "AFTERBEGIN")
                } else {
                    b = b == "BEFOREBEGIN";
                    d[b ? "setStartBefore" : "setEndAfter"](a);
                    d.collapse(b)
                }
                d.insertNode(d.createContextualFragment(c))
            }
            return a
        };
        x.Ix = x.D.Ix;
        x.D.show = function (a) {
            a = x.D.$(a);
            if (a === p) return a;
            a.style.display = "";
            return a
        };
        x.show = x.D.show;
        x.D.ED = function (a) {
            a = x.D.$(a);
            return a === p ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
        };
        x.D.Ua = function (a, b) {
            a = x.D.$(a);
            if (a === p) return a;
            for (var c = b.split(/\s+/), d = a.className, e = " " + d + " ", f = 0, g = c.length; f < g; f++) e.indexOf(" " + c[f] + " ") < 0 && (d = d + (" " + c[f]));
            a.className = d;
            return a
        };
        x.Ua = x.D.Ua;
        x.D.CB = x.D.CB || {};
        x.D.Kl = x.D.Kl || [];
        x.D.Kl.filter = function (a, b, c) {
            for (var d = 0, e = x.D.Kl, f; f = e[d]; d++)
                if (f = f[c]) b = f(a, b);
            return b
        };
        x.Rk.rO = function (a) {
            return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function (a) {
                return a.charAt(1).toUpperCase()
            })
        };
        x.D.D_ = function (a) {
            x.D.$s(a, "expand") ? x.D.Sb(a, "expand") : x.D.Ua(a, "expand")
        };
        x.D.$s = function (a) {
            if (arguments.length <= 0 || typeof a === "function") return this;
            if (this.size() <= 0) return q;
            var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
                b = a.split(" "),
                c;
            x.forEach(this, function (a) {
                for (var a = a.className, e = 0; e < b.length; e++)
                    if (!~(" " + a + " ").indexOf(" " + b[e] + " ")) {
                        c = q;
                        return
                    } c !== q && (c = o)
            });
            return c
        };
        x.D.sj = function (a, b) {
            var c = x.D,
                a = c.$(a);
            if (a === p) return a;
            var b = x.Rk.rO(b),
                d = a.style[b];
            if (!d) var e = c.CB[b],
                d = a.currentStyle || (x.da.la ? a.style : getComputedStyle(a, p)),
                d = e && e.get ? e.get(a, d) : d[e || b];
            if (e = c.Kl) d = e.filter(b, d, "get");
            return d
        };
        x.sj = x.D.sj;
        /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.opera = +RegExp.$1);
        x.da.kM = /webkit/i.test(navigator.userAgent);
        x.da.lY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
        x.da.qE = "CSS1Compat" == document.compatMode;
        x.D.ha = function (a) {
            a = x.D.$(a);
            if (a === p) return a;
            var b = x.D.ED(a),
                c = x.da,
                d = x.D.sj;
            c.lY > 0 && b.getBoxObjectFor && d(a, "position");
            var e = {
                    left: 0,
                    top: 0
                },
                f;
            if (a == (c.la && !c.qE ? b.body : b.documentElement)) return e;
            if (a.getBoundingClientRect) {
                a = a.getBoundingClientRect();
                e.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
                e.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
                e.left = e.left - b.documentElement.clientLeft;
                e.top = e.top - b.documentElement.clientTop;
                a = b.body;
                b = parseInt(d(a, "borderLeftWidth"));
                d = parseInt(d(a, "borderTopWidth"));
                if (c.la && !c.qE) {
                    e.left = e.left - (isNaN(b) ? 2 : b);
                    e.top = e.top - (isNaN(d) ? 2 : d)
                }
            } else {
                f = a;
                do {
                    e.left = e.left + f.offsetLeft;
                    e.top = e.top + f.offsetTop;
                    if (c.kM > 0 && d(f, "position") == "fixed") {
                        e.left = e.left + b.body.scrollLeft;
                        e.top = e.top + b.body.scrollTop;
                        break
                    }
                    f = f.offsetParent
                } while (f && f != a);
                if (c.opera > 0 || c.kM > 0 && d(a, "position") == "absolute") e.top = e.top - b.body.offsetTop;
                for (f = a.offsetParent; f && f != b.body;) {
                    e.left = e.left - f.scrollLeft;
                    if (!c.opera || f.tagName != "TR") e.top = e.top - f.scrollTop;
                    f = f.offsetParent
                }
            }
            return e
        };
        /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.nf = +RegExp.$1);
        /BIDUBrowser/i.test(navigator.userAgent) && (x.da.u1 = o);
        var la = navigator.userAgent;
        /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) && !/chrome/i.test(la) && (x.da.gF = +(RegExp.$1 || RegExp.$2));
        /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.cC = +RegExp.$1);
        x.kc = x.kc || {};
        x.kc.Gb = function (a, b) {
            var c, d, e = a.length;
            if ("function" == typeof b)
                for (d = 0; d < e; d++) {
                    c = a[d];
                    c = b.call(a, c, d);
                    if (c === q) break
                }
            return a
        };
        x.Gb = x.kc.Gb;
        x.lang.ba = function () {
            return "TANGRAM__" + (window[x.ba]._counter++).toString(36)
        };
        window[x.ba]._counter = window[x.ba]._counter || 1;
        window[x.ba]._instances = window[x.ba]._instances || {};
        x.lang.jt = function (a) {
            return "[object Function]" == Object.prototype.toString.call(a)
        };
        x.lang.Ca = function (a) {
            this.ba = a || x.lang.ba();
            window[x.ba]._instances[this.ba] = this
        };
        window[x.ba]._instances = window[x.ba]._instances || {};
        x.lang.Ca.prototype.gi = ha(0);
        x.lang.Ca.prototype.toString = function () {
            return "[object " + (this.wQ || "Object") + "]"
        };
        x.lang.Xy = function (a, b) {
            this.type = a;
            this.returnValue = o;
            this.target = b || p;
            this.currentTarget = p
        };
        x.lang.Ca.prototype.addEventListener = function (a, b, c) {
            if (x.lang.jt(b)) {
                !b.al && (b.al = {});
                !this.Gi && (this.Gi = {});
                var d = this.Gi,
                    e;
                if (typeof c == "string" && c) {
                    /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                    e = b.Ax = c
                }
                a.indexOf("on") != 0 && (a = "on" + a);
                typeof d[a] != "object" && (d[a] = {});
                typeof b.al[a] != "object" && (b.al[a] = {});
                e = e || x.lang.ba();
                b.al[a].Ax = e;
                d[a][e] = b
            }
        };
        x.lang.Ca.prototype.removeEventListener = function (a, b) {
            a.indexOf("on") != 0 && (a = "on" + a);
            if (x.lang.jt(b)) {
                if (!b.al || !b.al[a]) return;
                b = b.al[a].Ax
            } else if (!x.lang.tg(b)) return;
            !this.Gi && (this.Gi = {});
            var c = this.Gi;
            c[a] && c[a][b] && delete c[a][b]
        };
        x.lang.Ca.prototype.dispatchEvent = function (a, b) {
            x.lang.tg(a) && (a = new x.lang.Xy(a));
            !this.Gi && (this.Gi = {});
            var b = b || {},
                c;
            for (c in b) a[c] = b[c];
            var d = this.Gi,
                e = a.type;
            a.target = a.target || this;
            a.currentTarget = this;
            e.indexOf("on") != 0 && (e = "on" + e);
            x.lang.jt(this[e]) && this[e].apply(this, arguments);
            if (typeof d[e] == "object")
                for (c in d[e]) d[e][c].apply(this, arguments);
            return a.returnValue
        };
        x.lang.ua = function (a, b, c) {
            var d, e, f = a.prototype;
            e = new Function;
            e.prototype = b.prototype;
            e = a.prototype = new e;
            for (d in f) e[d] = f[d];
            a.prototype.constructor = a;
            a.u_ = b.prototype;
            if ("string" == typeof c) e.wQ = c
        };
        x.ua = x.lang.ua;
        x.lang.Kc = function (a) {
            return window[x.ba]._instances[a] || p
        };
        x.platform = x.platform || {};
        x.platform.dM = /macintosh/i.test(navigator.userAgent);
        x.platform.h3 = /MicroMessenger/i.test(navigator.userAgent);
        x.platform.lM = /windows/i.test(navigator.userAgent);
        x.platform.tY = /x11/i.test(navigator.userAgent);
        x.platform.Fm = /android/i.test(navigator.userAgent);
        /android (\d+\.\d)/i.test(navigator.userAgent) && (x.platform.OJ = x.OJ = RegExp.$1);
        x.platform.nY = /ipad/i.test(navigator.userAgent);
        x.platform.mE = /iphone/i.test(navigator.userAgent);

        function ma(a, b) {
            a.domEvent = b = window.event || b;
            a.clientX = b.clientX || b.pageX;
            a.clientY = b.clientY || b.pageY;
            a.offsetX = b.offsetX || b.layerX;
            a.offsetY = b.offsetY || b.layerY;
            a.screenX = b.screenX;
            a.screenY = b.screenY;
            a.ctrlKey = b.ctrlKey || b.metaKey;
            a.shiftKey = b.shiftKey;
            a.altKey = b.altKey;
            if (b.touches) {
                a.touches = [];
                for (var c = 0; c < b.touches.length; c++) a.touches.push…