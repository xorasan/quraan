
function updatetheme(o) {
return 'html, body {'
+'\n	color:'+o.text+';'
+'\n}'
+'\nbody {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\nbody[data-transparency] {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\nhr {'
+'\n	border-top:2px dashed '+o.secondary+';'
+'\n}'
+'\ns {'
+'\n	text-decoration-color:'+o.text+';'
+'\n}'
+'\na {'
+'\n	text-decoration:underline '+o.accent+';'
+'\n}'
+'\na:active {'
+'\n	color:'+o.tertiary+';'
+'\n	text-decoration:underline '+o.accentd+';'
+'\n}'
+'\nbutton {'
+'\n	background:'+o.primary+';'
+'\n	border:2px solid '+o.secondary+';'
+'\n}'
+'\nbutton:active {'
+'\n	border-color:'+o.accentl+';'
+'\n	color:'+o.accent+';'
+'\n	fill:'+o.accent+';'
+'\n	box-shadow:0 0 0 0 '+o.textl+';'
+'\n}'
+'\nbutton:active svg {'
+'\n	fill:'+o.accent+';'
+'\n}'
+'\nbutton:active span {'
+'\n	color:'+o.accent+';'
+'\n}'
+'\nbutton:focus {'
+'\n	border-color:'+o.accentl+';'
+'\n}'
+'\nbutton svg {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\nbutton[data-selected] {'
+'\n	background:'+o.accent+' !important;'
+'\n}'
+'\nbutton[data-selected] svg {'
+'\n	fill:'+o.primary+' !important;'
+'\n}'
+'\ninput, textarea, select {'
+'\n	border-bottom:2px solid '+o.secondary+';'
+'\n	color:'+o.textd+';'
+'\n}'
+'\ninput:active, input:focus {'
+'\n	color:'+o.textl+';'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\ninput[data-error] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\nselect {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\nselect, select:focus {'
+'\n	background-image:linear-gradient(45deg, transparent 40%, '+o.text+' 50%), linear-gradient(135deg, '+o.text+' 50%, transparent 60%);'
+'\n}'
+'\noption {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.text+';'
+'\n}'
+'\n.tahweem {'
+'\n	background:'+o.accentt+';'
+'\n}'
+'\n.above {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.tag {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n.icon svg {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\n.red {'
+'\n	color:'+o.redl+';'
+'\n}'
+'\n.redbg {'
+'\n	background:'+o.redd+';'
+'\n}'
+'\nbutton.xaas {'
+'\n	background:'+o.secondaryd+';'
+'\n	border:4px solid '+o.secondaryl+';'
+'\n}'
+'\nbutton.xaas:focus {'
+'\n	background:'+o.accentl+';'
+'\n	border-color:'+o.accent+';'
+'\n	color:'+o.primary+';'
+'\n}'
+'\nbutton.xaas:active {'
+'\n	background:'+o.accent+';'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n#dimmer {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n#dimmertext {'
+'\n	color:'+o.textd+';'
+'\n	border:1px solid '+o.tertiary+';'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n.header {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.accent+';'
+'\n}'
+'\n#itlaa3 .text {'
+'\n	box-shadow:0 0 20px 0 '+o.textd+';'
+'\n}'
+'\n#taht3nsar .text {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\n#itlaa3 .text, #taht3nsar .text {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n[data-transparency] #itlaa3 .text, [data-transparency] #taht3nsar .text {'
+'\n	background:'+o.primaryt+';'
+'\n	border-color:'+o.secondaryt+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	::-webkit-scrollbar {'
+'\n		background:'+o.primary+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb {'
+'\n		background:'+o.textd+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb:active {'
+'\n		background:'+o.text+';'
+'\n	}'
+'\n}'
+'\n.list .a3laa {'
+'\n	background:'+o.secondaryt+';'
+'\n	color:'+o.textd+';'
+'\n	text-shadow:0px 1px '+o.secondary+';'
+'\n}'
+'\n[dir=rtl] .list .a3laa {'
+'\n	background:linear-gradient(45deg, transparent 50%, '+o.secondaryt+' 90%);'
+'\n}'
+'\n.list .item, .list .listitem {'
+'\n	border-bottom:1px solid '+o.secondary+';'
+'\n}'
+'\n.list .item[data-baidaa], .list .listitem[data-baidaa] {'
+'\n	box-shadow:0 0 5px 2px '+o.accentl+', 0 0 5px 2px '+o.accentd+' inset;'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n.list .item[data-selected], .list .listitem[data-selected] {'
+'\n	border-color:'+o.textxd+';'
+'\n}'
+'\n[data-rakkaz].list .item[data-selected], [data-rakkaz].list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.secondary+' -110%, '+o.tertiary+' 220%);'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\n[dir=rtl] .list .item[data-selected], [dir=rtl] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.tertiary+' -200%, '+o.secondary+' 110%);'
+'\n}'
+'\n[data-transparency] .list .item[data-selected], [data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.secondary+' 0%, transparent 220%);'
+'\n	border-bottom:1px solid '+o.accent+';'
+'\n}'
+'\n[dir=rtl][data-transparency] .list .item[data-selected], [dir=rtl][data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, transparent -220%, '+o.secondary+' 110%);'
+'\n}'
+'\n.list .body {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item .icon {'
+'\n	background:linear-gradient(200deg, '+o.primary+', transparent);'
+'\n}'
+'\n.list .item[data-selected] .icon {'
+'\n	background:linear-gradient(200deg, '+o.accent+', transparent);'
+'\n}'
+'\n.list .days {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item[data-selected] .days {'
+'\n	color:'+o.primaryl+';'
+'\n}'
+'\n[data-selected] [data-past] {'
+'\n	color:'+o.redd+' !important;'
+'\n}'
+'\n[data-past] {'
+'\n	color:'+o.redl+' !important;'
+'\n}'
+'\n.list [data-mufarraq] {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n[data-transparency] .list [data-mufarraq] {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.list .item .tawassa3, .list .listitem .tawassa3 {'
+'\n	color:'+o.textl+';'
+'\n	background:'+o.tertiaryt+';'
+'\n	box-shadow:0 0 12px 0px '+o.primaryl+';'
+'\n}'
+'\n#softkeysui {'
+'\n	background:linear-gradient(0deg, '+o.primary+' 5%, '+o.primaryt+' 15%, transparent);'
+'\n}'
+'\n#softkeysui[data-hidden] {'
+'\n	background:linear-gradient(0deg, '+o.primaryt+' 0%, transparent);'
+'\n}'
+'\n#softkeysui button {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.textl+';'
+'\n}'
+'\n#softkeysui button label {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row1 button {'
+'\n	border-top:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row2 button {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .left {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .center {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .right {'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\ninput[data-over], textarea[data-over], input[data-under], textarea[data-under] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\n#sheetui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#sheetui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n#dialogui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#dialogui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:321px) {'
+'\n	#softkeysui button {'
+'\n		background:'+o.primary+';'
+'\n		color:'+o.textl+';'
+'\n	}'
+'\n	#softkeysui button:active, #softkeysui button[data-lamsah] {'
+'\n		background:'+o.secondary+';'
+'\n		box-shadow:0 0 30px 6px '+o.tertiaryd+';'
+'\n	}'
+'\n	#softkeysui .row2, #skdots {'
+'\n		box-shadow:0 0 10px 0 '+o.tertiary+';'
+'\n	}'
+'\n	#skdots {'
+'\n		background:'+o.primaryt+';'
+'\n		border:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n#softkeysui .left {'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\n@media (min-width:321px) {'
+'\n	#softkeysui .row2 [data-hawm="1"] span {'
+'\n		background:'+o.secondary+';'
+'\n		border:1px solid '+o.tertiary+';'
+'\n	}'
+'\n	#softkeysui .row2 {'
+'\n		background:'+o.primary+';'
+'\n		border-top:1px solid '+o.tertiary+';'
+'\n		border-left:1px solid '+o.tertiary+';'
+'\n		border-bottom:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n.list .item span {'
+'\n	color:'+o.redl+';'
+'\n}'
+'\n.list .item[data-selected] span {'
+'\n	color:'+o.red+';'
+'\n}'
+'\n.player {'
+'\n	background:linear-gradient('+o.primaryt+' 5%, transparent 130%);'
+'\n}'
+'\n.player .progress {'
+'\n	border-top:2px solid '+o.accentl+';'
+'\n	background:'+o.accent+';'
+'\n	border-bottom:2px solid '+o.accentd+';'
+'\n}'
+'\n.player .name, .player .current, .player .duration {'
+'\n	text-shadow:2px 2px 0 '+o.primary+';'
+'\n}';
};

"object" != typeof module && (module = {}), "object" != typeof module.exports && (module.exports = {}), 
"object" != typeof window && (window = global || {}), "object" != typeof document && (document = {
    body: {}
});

var glatteis = {}, glatteisfn = function(name, fn) {
    if (name) {
        var mod = glatteis._mods[name] || glatteis[name];
        return "function" == typeof fn ? (mod ? fn(mod) : glatteis._paths[name] && glatteis.require(glatteis._paths[name], function(mod) {
            glatteis._mods[name] = mod, fn(mod);
        }), null) : mod || !1;
    }
    return !1;
}, $ = $$ = glatteis = Object.assign(glatteisfn, glatteis);

"object" == typeof module && (module.exports = glatteis), $.log = function() {
    console.log.apply(console, arguments);
}, function() {
    var proto = {
        s: function() {
            var a = "", str = "";
            for (var b in arguments) b > 0 && (a += ", "), a = a + "arguments[" + b + "]", str += " " + arguments[b];
            eval("console.log(" + a + ");");
        },
        e: function() {
            var a = "", str = "";
            for (var b in arguments) b > 0 && (a += ", "), a = a + "arguments[" + b + "]", str += " " + arguments[b];
            eval("console.error(" + a + ");");
        },
        i: function() {
            var a = "";
            for (var b in arguments) b > 0 && (a += ", "), a = a + "arguments[" + b + "]";
            eval("console.info(" + a + ");");
        }
    };
    $.log = Object.assign($.log, proto);
}(), function() {
    var taxeeraat = {};
    $.taxeercancel = function(id) {
        clearTimeout(taxeeraat[id]);
    }, $.taxeer = function(id, fn, customdelay, nofurtherdelay) {
        customdelay = customdelay || 300, nofurtherdelay && taxeeraat[id] || (taxeeraat[id] && (clearTimeout(taxeeraat[id]), 
        taxeeraat[id] = void 0), "function" == typeof fn && (taxeeraat[id] = setTimeout(function() {
            fn(function() {
                $.taxeer(id, fn, customdelay, nofurtherdelay);
            }), taxeeraat[id] = void 0;
        }, customdelay)));
    };
}(), $.re = function(string, automaton, flags) {
    var object = new RegExp(automaton || "", flags || "").exec(string || "") || {};
    return object.re = function(automaton, flags) {
        return $.re(object[0] || "", automaton, flags);
    }, object;
}, $.regex = $.re, $._r = function() {
    module.exports = glatteis;
}, $._c = function(name) {
    var mod = module.exports;
    return module.exports = {}, mod instanceof Object && ("string" == typeof name || "string" == typeof mod._name) && ("string" == typeof mod._name ? glatteis._mods[mod._name] = mod: glatteis._mods[name] = mod, 
    !0);
}, $._paths = {}, $._mods = {}, $.cache = function(name, path) {
    $._paths[name] = path;
}, $.unload = function(mods, fn) {}, function() {
    var _arrayPrototype = {
        set: function(id, object) {
            return void 0 !== this._keys[id] ? (this._array[this._keys[id]] = "function" == typeof object ? object(this._array[this._keys[id]]) : object, 
            "function" == typeof this.onset && this.onset(object, id)) : (this._keys[id] = "function" == typeof object ? this._array.push(object(this._array[this._keys[id]])) - 1: this._array.push(object) - 1, 
            "function" == typeof this.onadd && this.onadd(object, id), ++this.length), this;
        },
        alter: function(id, object) {
            var item = this.get(id);
            return item && this.set(id, Object.assign(item, object)), this;
        },
        pop: function(id) {
            return void 0 !== this._keys[id] && ("function" == typeof this.onpop && this.onpop(id), 
            this._array[this._keys[id]] = void 0, delete this._keys[id], --this.length), this;
        },
        popall: function(array) {
            "function" == typeof array.toNative && (array = array.toNative());
            for (var i in array) this.pop(array[i]);
        },
        get: function(id) {
            return this._keys[id] > -1 ? this._array[this._keys[id]] : void 0;
        },
        each: function(fn) {
            if ("function" == typeof fn) for (var i in this._array) if (void 0 !== this._array[i]) {
                var val = fn(this._array[i], i);
                void 0 !== val && (this._array[i] = val);
            }
        },
        setall: function(id, array) {
            this._id = id, "function" == typeof array.toNative && (array = array.toNative());
            for (var i in array) this.set(array[i][id], array[i]);
        },
        unique: function() {
            var uniquearray = [];
            return this._array.forEach(function(item) {
                uniquearray.indexOf(item) === -1 && uniquearray.push(item);
            }), uniquearray;
        },
        order: function(order) {
            var ordered = [];
            for (var i in order) {
                var val = order[i], index = this._array.indexOf(val);
                index > -1 && (ordered.push(this._array[index]), this._array.splice(index, 1));
            }
            return ordered.concat(this._array);
        },
        slice: function(from, to) {
            var nativearr = $.array();
            return this.each(function(item, i) {
                i >= from && i <= to && nativearr.set(item.uid, item);
            }), nativearr;
        },
        sort: function(reverse, key, id) {
            var temparray = this.toNative();
            return "function" == typeof reverse ? temparray.sort(reverse) : temparray.sort(function(a, b) {
                return reverse ? key ? b[key] - a[key] : b - a: key ? a[key] - b[key] : a - b;
            }), (id || this._id) && (this._array = [], this.length = 0, this._keys = {}, this.setall(id || this._id, temparray)), 
            this;
        },
        tokeys: function() {
            var arr = [], keys = Object.keys(this._keys);
            for (var i in keys) void 0 !== keys[i] && arr.push(keys[i]);
            return arr;
        },
        saabiq: function(uid) {
            var index = this._keys[uid];
            if (!isundef(index) && index > -1) for (var i = index - 1; i >= 0; --i) if (!isundef(this._array[i])) return this._array[i];
        },
        qaadim: function(uid) {
            var index = this._keys[uid];
            if (!isundef(index) && index > -1) for (var i = index + 1; i < this._array.length; ++i) if (!isundef(this._array[i])) return this._array[i];
        },
        eawwad: function(uid, uid2) {
            var index = this._keys[uid], index2 = this._keys[uid2];
            if (index > -1 && index2 > -1) {
                this._keys[uid] = index2, this._keys[uid2] = index;
                var temp = this._array[index];
                this._array[index] = this._array[index2], this._array[index2] = temp;
            }
        },
        toNative: function() {
            var arr = [];
            for (var i in this._array) void 0 !== this._array[i] && arr.push(this._array[i]);
            return arr;
        }
    };
    $.array = function(prearray, id) {
        var newqueue = Object.create(_arrayPrototype);
        return prearray = prearray || [], "function" == typeof prearray.toNative && (prearray = prearray.toNative()), 
        newqueue._array = prearray, newqueue._keys = {}, newqueue._id = id, id && prearray.forEach(function(item, i) {
            newqueue._keys[item[id]] = i;
        }), newqueue.length = newqueue._array.length, newqueue;
    }, $.array.clean = function(arr) {
        var arr2 = [];
        return arr && arr.forEach(function(item, i) {
            arr2.push(item);
        }), arr2;
    };
}(), function() {
    var _queuePrototype = {
        _init: function() {
            this._didinit || (this._didinit = !0, this._didrun = !1, this.queuearray = [], this.active = !1, 
            this.count = 0, this.uid = !1, this._onnext = !1, this._onfinish = !1);
        },
        _next: function(queue, extra) {
            return ++queue.count, queue._process(queue, extra), queue.active = !1, queue.count;
        },
        _process: function(queue, extra) {
            if (!queue.muntahaa && "function" == typeof queue._onnext) {
                if (queue.queuearray.length > 0) {
                    queue.uid = queue.queuearray.length, queue.active = !0;
                    return queue.queuearray.pop()(function(queue, extra) {
                        queue._onnext(queue._next, queue, extra);
                    }, queue, extra), !1;
                }
                return queue.active = !1, --queue.count, "function" == typeof queue._onfinish && queue._onfinish(queue, extra), 
                !1;
            }
        },
        intahaa: function() {
            this.muntahaa = 1;
        },
        set: function(worker) {
            return this._init(), "function" == typeof worker && this.queuearray.unshift(worker), 
            this;
        },
        run: function(_onfinish) {
            this.onfinish(_onfinish);
            var queue = this;
            queue._init(), "function" != typeof queue._onnext && queue.onnext(function(done, _queue, extra) {
                done(_queue, extra);
            }), queue._didrun || "function" != typeof queue._onnext || (queue._didrun = !0, 
            queue._process(queue));
        },
        onnext: function(cb) {
            "function" == typeof cb && (this._onnext = cb);
        },
        onfinish: function(cb) {
            "function" == typeof cb && (this._onfinish = cb);
        }
    };
    $.queue = function(onnext, onfinish) {
        var newqueue = Object.create(_queuePrototype);
        return newqueue._init(), "function" == typeof onnext && (newqueue._onnext = onnext), 
        "function" == typeof onfinish && (newqueue._onfinish = onfinish), newqueue;
    };
}(), function() {
    $.queuerequest = function() {
        var queuerequest = {
            name: 1,
            active: !1,
            cnt: 0,
            id: !1,
            _array: [],
            cur: !1,
            queue: function(options) {
                return this._array.unshift(options), this.id = this._array.length, this.active === !0 ? this.cnt: this.process(this);
            },
            process: function(carriedthis) {
                if (carriedthis = carriedthis || this, carriedthis._array.length && !carriedthis.active) {
                    carriedthis.id = carriedthis._array.length, carriedthis.active = !0;
                    var options = carriedthis._array.pop();
                    null === options.uri.match(/http.*\:\/\//) && "object" == typeof nw && (options.uri = "file://" + options.uri);
                    var request;
                    options.uri;
                    if (window.XMLHttpRequest) request = new XMLHttpRequest(); else if ("function" == typeof require) return request = require(options.uri), 
                    "function" == typeof options.callback && options.callback(request), carriedthis.cnt++, 
                    carriedthis.process(carriedthis), carriedthis.active = !1, carriedthis.cnt;
                    request.timeout = carriedthis.fetchtimeout || $.fetchtimeout, carriedthis.cur = request, 
                    "get" == options.type ? request.open("GET", options.uri, !0) : (request.open("POST", options.uri, !0), 
                    options.headers || request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset = UTF-8")), 
                    options.headers instanceof Object && Object.keys(options.headers).forEach(function(key) {
                        request.setRequestHeader(key, options.headers[key]);
                    }), (request.upload ? request.upload: request).onprogress = function(event) {
                        event.lengthComputable && "function" == typeof carriedthis.progressfn && carriedthis.progressfn(event.loaded, event.total);
                    };
                    var onend = function(errtype) {
                        return "function" == typeof options.callback && options.callback("", errtype || request.status), 
                        carriedthis.cnt++, carriedthis.process(carriedthis), carriedthis.active = !1, carriedthis.cnt;
                    };
                    return request.onreadystatechange = function() {
                        if (4 == request.readyState) {
                            if (200 === request.status) return "function" == typeof options.callback && options.callback(request.responseText), 
                            carriedthis.cnt++, carriedthis.process(carriedthis), carriedthis.active = !1, carriedthis.cnt;
                            onend(request.status);
                        }
                    }, request.onabort = function() {
                        onend(-100);
                    }, request.ontimeout = function() {
                        onend(-200);
                    }, request.onerror = function() {
                        onend(-300);
                    }, request.send("get" == options.type ? null: options.payload), !1;
                }
                return carriedthis.active = !1, carriedthis.cnt = 0, !1;
            }
        };
        return Object.create(queuerequest);
    }, $.fetchtimeout = 3e4, $.fetchcancel = function(channel) {
        (channel = $.fetchchannels[channel || 1]) && (channel._array = [], channel.cur && channel.cur.abort(), 
        channel.active = !1, channel.cnt = 0, channel.cur = 0);
    }, $.fetchchannels = {}, $.fetchprocess = function(channel) {
        channel = channel || 1, $.fetchchannels[channel] && $.fetchchannels[channel].process();
    }, $.fetch = function(uri, data, channel, progressfn, fetchtimeout, headers) {
        channel = channel || 1;
        var thencb = !1, thenfn = function(callback) {
            thencb = callback;
        };
        return $.fetchchannels[channel] || ($.fetchchannels[channel] = $.queuerequest(), 
        $.fetchchannels[channel].name = channel, $.fetchchannels[channel].fetchtimeout = fetchtimeout || $.fetchtimeout), 
        "function" == typeof progressfn && ($.fetchchannels[channel].progressfn = progressfn), 
        $.fetchchannels[channel].queue({
            uri: uri,
            payload: data || null,
            headers: headers || 0,
            type: data ? "post" : "get",
            callback: function(body, err) {
                try {
                    "function" == typeof thencb && thencb({
                        body: body,
                        err: err
                    });
                } catch (e) {
                    glatteis.log.e(e);
                }
            }
        }), {
            then: thenfn
        };
    };
}(), $._r();

var taraajim = {
    en: {
        ayaat: "Ayaat",
        bookmarked: "Bookmarked",
        restored: "Restored",
        showmeanings: "Meanings",
        results: "Results",
        search: "Search",
        nosearchresults: "No search results",
        profile: "Profile",
        profiles: "Profiles",
        noprofiles: "No Profiles",
        aqrabaa: "Favorites",
        noaqrabaa: "No Favorites",
        settings: "Settings",
        requestfeat: "Request Feature",
        reportbug: "Report Bug",
        author: "Author",
        build: "Build",
        openad: "Ad",
        quality: "Quality",
        largetext: "Large Text",
        transparency: "Transparency",
        calendar: "Calendar",
        hijri: "Hijri",
        gregorian: "Gregorian",
        builton: "Built On",
        skhelp: "Press # for actions",
        softkeystouchdpad: "Touchscreen D-Pad",
        theme: "Theme",
        black: "Black",
        white: "White",
        infuture: "in",
        justnow: "just now",
        sseconds: "s",
        secondsago: "secs",
        aminuteago: "a min",
        minute: "min",
        sminutes: "m",
        minutes: "mins",
        minutesago: "mins",
        anhourago: "an hr",
        hourago: "hr",
        hoursago: "hrs",
        yesterday: "yesterday",
        tomorrow: "tomorrow",
        adayago: "a day",
        dayago: "d",
        daysago: "d",
        lastmonth: "last month",
        monthago: "mo",
        monthsago: "mo",
        lastyear: "last year",
        yearago: "y",
        yearsago: "y",
        alongtime: "a long time",
        sunday: "sunday",
        monday: "monday",
        tuesday: "tuesday",
        wednesday: "wednesday",
        thursday: "thursday",
        friday: "friday",
        saturday: "saturday",
        ",": ",",
        am: "am",
        pm: "pm",
        st: "st",
        nd: "nd",
        rd: "rd",
        th: "th",
        timeformat: "Time Format",
        hours24: "24 hour",
        hours12: "12 hour",
        language: "Language",
        en: "English",
        ar: "Arabic",
        ur: "Urdu",
        ru: "Russian",
        de: "German",
        es: "Spanish",
        loading: "Loading...",
        exiting: "Exiting...",
        unsupported: "Your device can't run this app",
        off: "Off",
        on: "On",
        animations: "Animations",
        webapptouchdir: "Touch affects direction"
    }
}, Hooks, hooks;

!function() {
    "use strict";
    Hooks = {
        _registry: {},
        _map: {},
        _uid: 0,
        set: function(hook, id, fn) {
            return hook instanceof Array ? void hook.forEach(function(item) {
                Hooks.set(item, id, fn);
            }) : ("function" == typeof id && (fn = id, id = new Date().getTime()), "function" == typeof fn && (void 0 === Hooks._registry[hook] && (Hooks._registry[hook] = []), 
            ++Hooks._uid, Hooks._registry[hook][Hooks._uid] = fn, Hooks._map[hook + "_" + id] = Hooks._uid, 
            !0));
        },
        run: function(hook, extras) {
            var handlers = Hooks._registry[hook];
            if (handlers instanceof Array) {
                for (var i in handlers) "function" == typeof handlers[i] && handlers[i](extras);
                return !0;
            }
            return !1;
        },
        rununtilconsumed: function(hook, extras) {
            var handlers = Hooks._registry[hook];
            if (handlers instanceof Array) for (var i in handlers) if ("function" == typeof handlers[i]) {
                var returnedvalue = handlers[i](extras);
                if (returnedvalue) return returnedvalue;
            }
            return !1;
        },
        pop: function(hook, id) {
            return !!Hooks._registry[hook] && (delete Hooks._registry[hook][Hooks._map[hook + "_" + id]], 
            !0);
        },
        hook: function(hook) {
            Hooks._registry[hook] = [];
        },
        unhook: function(hook) {
            delete Hooks._registry[hook];
        }
    }, module.exports = Hooks, hooks = Hooks;
}();

var mubaaraat = function(str, re) {
    return (str.match(re) || [])[0];
}, tabdeel = function(str, arr) {
    if (isstr(str) && isarr(arr)) for (var i = 0; i < arr.length; i += 2) str = str.replace(arr[i], arr[i + 1]);
    return str;
}, deepcopy = function(v) {}, isundef = function(v) {
    return void 0 === v;
}, isstr = function(v) {
    return "string" == typeof v;
}, isfinite = function(v) {
    return Number.isFinite(v);
}, isnan = function(v) {
    return Number.isNaN(v);
}, isnum = function(v) {
    return "number" == typeof v && !isnan(v) && isfinite(v);
}, isfun = function(v) {
    return "function" == typeof v;
}, isarr = function(v) {
    return v instanceof Array;
}, areobjectsequal = function(a, b) {
    var same = 1;
    if (a && b && Object.keys(a).length === Object.keys(b).length) {
        for (var i in a) if (a[i] !== b[i]) {
            same = 0;
            break;
        }
    } else same = 0;
    return same;
}, zero = function(num) {
    return num < 10 ? "0" + num: num;
}, collapsearray = function(arr) {
    var arr2 = [];
    return arr.forEach(function(e) {
        isundef(e) || arr2.push(e);
    }), arr2;
}, array2string = function(arr) {
    return " " + arr.join(" ");
}, intersect = function(arr, superset) {
    var arr2 = [];
    return arr.forEach(function(item) {
        isundef(superset[item]) || arr2.push(item);
    }), arr2;
}, shallowcopy = function(v) {
    if (isnum(v) || isstr(v)) return v;
    if (v instanceof Array) {
        var v2 = [];
        return v.forEach(function(item) {
            v2.push(Object.assign({}, item));
        }), v2;
    }
    return Object.assign({}, v);
}, parseint = function(v, r) {
    return parseInt(v, r);
}, parsefloat = function(v, n) {
    return n && (v = parseFloat(v).toFixed(n)), parseFloat(v);
}, intify = function(arr) {
    for (var i = 0; i < arr.length; ++i) arr[i] = parseint(arr[i]);
    return arr;
}, tolower = function(obj) {
    return obj.toLowerCase();
}, enc = function(v) {
    return encodeURIComponent(v);
}, dec = function(v) {
    return decodeURIComponent(v);
}, encp = function(v) {
    return encodeURI(v);
}, decp = function(v) {
    return decodeURI(v);
}, innerhtml = function(obj, v) {
    obj.innerHTML = v;
}, setvalue = function(obj, v) {
    obj.value = v;
}, scrollintoview = function(obj) {
    obj && obj.scrollIntoView(1);
}, prevsibling = function(obj) {
    return obj.previousElementSibling;
}, nextsibling = function(obj) {
    return obj.nextElementSibling;
}, getattribute = function(obj, k) {
    return obj.getAttribute(k);
}, attribute = function(obj, k, v) {
    "" == v ? obj.removeAttribute(k) : obj.setAttribute(k, v);
}, setcss = function(obj, k, v) {
    obj.style[k] = void 0 === v ? "" : v;
}, popdata = function(obj, k, v) {
    delete obj.dataset[k];
}, setdata = function(obj, k, v) {
    obj.dataset[k] = v;
}, getdata = function(obj, k) {
    return obj.dataset[k];
}, innertext = function(obj, v) {
    if (isundef(v)) return obj.innerText;
    obj.innerText = v;
}, innerwidth = function(v) {
    return innerWidth + (v || 0);
}, innerheight = function(v) {
    return innerHeight + (v || 0);
}, hasownprop = function(obj, i) {
    if (obj && obj.hasOwnProperty) return obj.hasOwnProperty(i);
}, izhar = function(v) {
    v.hidden = 0;
}, ixtaf = function(v) {
    v.hidden = 1;
}, isixtaf = function(v) {
    return v.hidden || "hidden" == getattribute(v, "type");
}, markooz = function() {
    return document.activeElement;
}, preventdefault = function(obj) {
    obj && obj.cancelable && obj.preventDefault && obj.preventDefault();
}, raycast = function(x, y) {
    return document.elementsFromPoint(x, y);
}, elementbyid = function(id) {
    return document.getElementById(id);
}, listener = function(obj, name, fn, o) {
    ("string" == typeof obj || obj instanceof Array) && (o = fn, fn = name, name = obj, 
    obj = window), name instanceof Array ? name.forEach(function(item) {
        obj.addEventListener(item, fn, o);
    }) : obj.addEventListener(name, fn, o);
}, createelement = function(name, classes, id) {
    var e = document.createElement(name || "div");
    return classes && (e.className = classes), id && (e.id = id), e;
}, iswithinelement = function(arr, element) {
    var a = arr[0], b = arr[1], x = element.offsetLeft, y = element.offsetTop, w = x + element.offsetWidth, h = y + element.offsetHeight;
    return a >= x && a <= w && b >= y && b <= h;
}, getposition = function(el) {
    var xPos = 0, yPos = 0, dir = document.body.dir;
    for ("rtl" === dir && (xPos += el.clientWidth); el; ) {
        if ("BODY" == el.tagName) {
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft, yScroll = el.scrollTop || document.documentElement.scrollTop;
            xPos += el.offsetLeft - xScroll + el.clientLeft, yPos += el.offsetTop - yScroll + el.clientTop;
        } else xPos += el.offsetLeft - el.scrollLeft + el.clientLeft, yPos += el.offsetTop - el.scrollTop + el.clientTop;
        el = el.offsetParent;
    }
    return [ xPos, yPos ];
}, replacewith = function(el, el2) {
    el.replaceWith(el2);
};

!function() {
    var replacewithpolyfill = function() {
        "use-strict";
        var currentNode, parent = this.parentNode, i = arguments.length;
        if (parent) for (i || parent.removeChild(this); i--; ) currentNode = arguments[i], 
        "object" != typeof currentNode ? currentNode = this.ownerDocument.createTextNode(currentNode) : currentNode.parentNode && currentNode.parentNode.removeChild(currentNode), 
        i ? parent.insertBefore(currentNode, this.nextSibling) : parent.replaceChild(currentNode, this);
    };
    Element.prototype.replaceWith || (Element.prototype.replaceWith = replacewithpolyfill), 
    CharacterData.prototype.replaceWith || (CharacterData.prototype.replaceWith = replacewithpolyfill), 
    DocumentType.prototype.replaceWith || (DocumentType.prototype.replaceWith = replacewithpolyfill);
}();

var webapp, appname = "quraan", maxzan = maxzan || 0, pager = pager || 0, checkbox = checkbox || 0, preferences = preferences || 0, translate = translate || 0, focusprev, focusnext, navigables, LAYERTOPMOST = 3e3;

!function() {
    var doc = document, bod = doc.body;
    navigables = [ "input", "textarea", "button", "a", "select" ], focusprev = function(element, thisone, num) {
        var out, LV, orig = element;
        if (!((num = num || 0) > 100)) {
            for (;element.previousElementSibling && num < 100; ) {
                if (++num, element = thisone ? element: element.previousElementSibling, isixtaf(element)) ; else if ("list" == element.dataset.focus) {
                    if (LV = element.listobject, LV.length()) {
                        webapp.blur(), element.focus(), LV.last(), LV.rakkaz(1, 1), out = element;
                        break;
                    }
                } else {
                    if (element.dataset.focus && element.lastElementChild) {
                        out = focusprev(element.lastElementChild, 1, ++num);
                        break;
                    }
                    if (navigables.includes(element.tagName.toLowerCase())) {
                        element.focus(), webapp.scrollto(element), out = element;
                        break;
                    }
                }
                thisone && (thisone = 0);
            }
            if (out) ; else {
                if (1 == element.dataset.focus) return focusprev(element.parentElement, 0, ++num);
                if (element.parentElement.dataset.focus) return focusprev(element.parentElement, 0, ++num);
            }
            return element.onprev && element.onprev(element), out ? (orig && orig.listobject && orig.listobject.deselect(), 
            out) : void 0;
        }
    }, focusnext = function(element, thisone, num) {
        var out, LV, orig = element;
        if (!((num = num || 0) > 100)) {
            for (;element.nextElementSibling && num < 100; ) {
                if (++num, element = thisone ? element: element.nextElementSibling, isixtaf(element)) ; else if ("list" == element.dataset.focus) {
                    if (LV = element.listobject, LV.length()) {
                        webapp.blur(), element.focus(), LV.first(), LV.rakkaz(1, 1), out = element;
                        break;
                    }
                } else {
                    if (element.dataset.focus && element.firstElementChild) {
                        out = focusnext(element.firstElementChild, 1, ++num);
                        break;
                    }
                    if (navigables.includes(element.tagName.toLowerCase())) {
                        element.focus(), webapp.scrollto(element), out = element;
                        break;
                    }
                }
                thisone && (thisone = 0);
            }
            if (out) ; else {
                if (1 == element.dataset.focus) return focusnext(element.parentElement, 0, ++num);
                if (element.parentElement.dataset.focus) return focusnext(element.parentElement, 0, ++num);
            }
            return element.onnext && element.onnext(element), out ? (orig && orig.listobject && orig.listobject.deselect(), 
            out) : void 0;
        }
    };
    var getform = function(element) {
        if (element instanceof HTMLElement) {
            var payload = {}, otherviews = element.querySelectorAll("[data-id]");
            for (var i in otherviews) otherviews.hasOwnProperty(i) && (otherviews[i].getvalue ? payload[otherviews[i].dataset.id] = otherviews[i].getvalue() : payload[otherviews[i].dataset.id] = otherviews[i].value);
            return payload;
        }
    }, getformkeys = function(element) {
        if (element instanceof HTMLElement) {
            var keys = {}, otherviews = element.querySelectorAll("[data-id]");
            for (var i in otherviews) otherviews.hasOwnProperty(i) && (keys[otherviews[i].dataset.id] = otherviews[i]);
            return keys;
        }
    }, sendform = function(element, button) {
        var payload, keys;
        element ? (payload = getform(element), keys = getformkeys(element)) : element = {
            id: button.dataset.form
        }, Hooks.run("domformdata", {
            form: element,
            button: button,
            payload: payload,
            keys: keys
        });
    }, setupforms = function() {
        var sendbuttons = document.querySelectorAll(".form .send");
        for (var i in sendbuttons) sendbuttons.hasOwnProperty(i) && (sendbuttons[i].onclick = function() {
            sendform(document.querySelector("#" + this.dataset.form), this);
        });
        var counts = document.querySelectorAll(".form label.count");
        for (var i in counts) {
            var countlabel = counts[i];
            if (counts.hasOwnProperty(i)) {
                var field = countlabel.parentNode.nextElementSibling;
                field.oninput = function() {
                    this.previousElementSibling.lastElementChild.innerText = (this.value || "").length;
                }, field.oninput();
            }
        }
    };
    webapp = {
        visible: 1,
        isdimmed: 0,
        lavaazim: function(inwindow) {
            inwindow = inwindow || [];
            var err;
            for (var i in inwindow) {
                var feature = inwindow[i];
                if (!(feature in window || feature in navigator || feature in Navigator)) {
                    err = 1;
                    break;
                }
            }
            return err ? (webapp.header(translate && translate("unsupported")), 0) : (webapp.header(), 
            1);
        },
        blur: function() {
            var ae = markooz();
            return ae && ae.blur(), blur(), ae;
        },
        header: function(text, align) {
            1 == align ? headerui.dataset.align = "1" : 2 == align ? headerui.dataset.align = "2" : delete headerui.dataset.align, 
            backstack.darajah <= 1 ? text ? (text instanceof Array ? headerui.dataset.i18n = text[0] : (delete headerui.dataset.i18n, 
            headerui.innerText = text), headerui.hidden = 0) : (delete headerui.dataset.i18n, 
            headerui.innerText = "", headerui.hidden = 1) : 2 === backstack.darajah && sheet.header(text), 
            translate.update();
        },
        scrollx: function(v) {
            scrollingelement().scrollTop += v;
        },
        scrolly: function(v) {
            scrollingelement().scrollLeft += v;
        },
        dimmer: function(zindex, text) {
            zindex && (dimmer.style.zIndex = zindex), dimmer.hidden = zindex ? 0: 1, webapp.isdimmed = zindex ? 1: 0, 
            text ? (dimmertext.hidden = 0, dimmertext.dataset.i18n = text) : (dimmertext.hidden = 1, 
            delete dimmertext.dataset.i18n, innerhtml(dimmertext, "")), document.scrollingElement.style.overflow = zindex ? "hidden" : "", 
            translate.update(dimmer);
        },
        statusbarpadding: function(yes) {
            yes ? (statusbarpadding.hidden = 0, statusbarshadow.hidden = 0) : (statusbarpadding.hidden = 1, 
            statusbarshadow.hidden = 1);
        },
        transparency: function(yes) {
            yes = void 0 === yes ? preferences && preferences.get(23, 1) : yes, yes ? document.body.dataset.transparency = 1: delete document.body.dataset.transparency;
        },
        textsize: function(yes) {
            yes = void 0 === yes ? preferences && preferences.get(9, 1) : yes, yes ? document.body.dataset.largetext = 1: delete document.body.dataset.largetext;
        },
        exit: function() {
            close();
        },
        icons: function() {
            var elements = document.body.querySelectorAll("[data-icon]");
            for (var i in elements) if (elements.hasOwnProperty(i) && elements[i].dataset.icon) {
                var e = eqonaat.querySelector("#" + elements[i].dataset.icon);
                e && (elements[i].innerHTML = '<svg viewBox="0 0 48 48">' + e.cloneNode(1).innerHTML + "</svg>");
            }
        },
        uponresize: function() {
            $.taxeer("taHjeem", function() {
                innerwidth() <= 320 ? setdata(bod, "aqil", 1) : popdata(bod, "aqil"), innerwidth() > 320 && innerwidth() <= 640 ? setdata(bod, "qaleel", 1) : popdata(bod, "qaleel"), 
                innerwidth() > 320 ? setdata(bod, "qaleelah", 1) : popdata(bod, "qaleelah"), innerwidth() > 640 && innerwidth() <= 800 ? setdata(bod, "wast", 1) : popdata(bod, "wast"), 
                innerwidth() > 640 ? setdata(bod, "wastah", 1) : popdata(bod, "wastah"), innerwidth() >= 1024 ? setdata(bod, "tvfs", 1) : popdata(bod, "tvfs");
            }, 100), innerheight() <= 480 ? document.body.dataset.keyboardopen = 1: delete document.body.dataset.keyboardopen;
        }
    }, listener("dragover", function(e) {
        return $.log("dragover"), setdata(bod, "tahweem", 1), preventdefault(e), !1;
    }), listener("dragleave", function(e) {
        return $.log("dragleave"), $.taxeer("dragleave", function() {
            popdata(bod, "tahweem");
        }, 3e3), preventdefault(e), !1;
    }), listener("drop", function(e) {
        popdata(bod, "tahweem"), preventdefault(e);
        var f = e.dataTransfer.files;
        return f && f.length && Hooks.run("huboot", f), !1;
    }), listener("resize", function() {
        webapp.uponresize();
    }), listener("contextmenu", function(e) {
        Hooks.rununtilconsumed("contextmenu", e) && e && preventdefault(e);
    }), listener("scroll", function(e) {
        Hooks.run("scroll", document.scrollingElement.scrollTop);
    }), listener("keyup", function(e) {
        Hooks.rununtilconsumed("keyup", e);
    }), listener("keydown", function(e) {
        Hooks.rununtilconsumed("keydown", e);
    }), listener("load", function(e) {
        webapp.header(xlate(appname)), xlate.update(), time && time.start(), webapp.icons(), 
        webapp.uponresize(), view.fahras(), setupforms(), maxzan && maxzan.badaa ? maxzan.badaa(function() {
            Hooks.run("ready", 1), backstack.main(), loadingbox.hidden = 1;
        }) : (Hooks.run("ready", 1), $.taxeer("loadingbox", function() {
            loadingbox.hidden = 1;
        }), backstack.main()), document.addEventListener("visibilitychange", function() {
            "visible" === document.visibilityState ? (webapp.visible = 1, Hooks.run("visible")) : (webapp.visible = 0, 
            Hooks.run("hidden"));
        }), Hooks.run("visible");
    });
}();

var scrollingelement = function() {
    var darajah = backstack.darajah;
    return [ 0, 1 ].includes(darajah) ? document.scrollingElement: 2 === darajah ? sheetui: 3 === darajah ? dialogui: void 0;
}, datepicker = datepicker || 0;

!function() {
    webapp.itlaa3 = function(text, time) {
        var element = itlaa3.firstElementChild;
        text ? (text instanceof Array ? (element.dataset.i18n = text[0], translate.update(itlaa3)) : (delete element.dataset.i18n, 
        element.innerText = text), itlaa3.hidden = 0, $.taxeer("itlaa3", function() {
            webapp.itlaa3();
        }, time || 3e3)) : (delete element.dataset.i18n, element.innerText = "", itlaa3.hidden = 1);
    }, webapp.taht3nsar = function(text, time, taht) {
        taht = document.activeElement || taht;
        var element = taht3nsar.firstElementChild;
        if (text) {
            if (text instanceof Array ? (element.dataset.i18n = text[0], translate.update(taht3nsar)) : (delete element.dataset.i18n, 
            element.innerText = text), taht3nsar.hidden = 0, taht) {
                var pos = getposition(taht);
                setcss(taht3nsar, "top", pos[1] - 20 + "px"), "rtl" == taht.dir ? (setcss(taht3nsar, "right"), 
                setcss(taht3nsar, "left", pos[0] + "px")) : (setcss(taht3nsar, "left"), setcss(taht3nsar, "right", innerwidth() - pos[0] - taht.offsetWidth + "px"));
            }
            $.taxeer("taht3nsar", function() {
                webapp.taht3nsar();
            }, time || 3e3);
        } else delete element.dataset.i18n, element.innerText = "", taht3nsar.hidden = 1;
    }, webapp.scrollto = function(element) {
        var se = scrollingelement();
        se.scrollTop = 0 + (element ? element.offsetTop - se.clientHeight / 4: 0);
    }, webapp.scrolltotop = function() {
        scrollingelement().scrollTop = 0;
    }, webapp.scrolltobottom = function() {
        var se = scrollingelement();
        return se.scrollTop = se.scrollHeight - se.clientHeight, se.scrollTop;
    }, webapp.isatop = function() {
        var se = scrollingelement();
        return 0 === Math.floor(se.scrollTop);
    }, webapp.isatbottom = function() {
        var se = scrollingelement();
        return Math.floor(se.scrollTop) === se.scrollHeight - se.clientHeight;
    }, Hooks.set("closeall", function(darajah) {
        3 === darajah && (datepicker && datepicker.hide(), dialog.hide(), webapp.blur()), 
        2 === darajah && (sheet.hide(), webapp.blur()), 1 === darajah && (view.axad("main"), 
        webapp.blur()), 0 === darajah && (webapp.itlaa3(translate("exiting")), $.taxeer("exit", function() {
            webapp.exit();
        }));
    }), Hooks.set("restore", function(darajah) {
        3 === darajah && webapp.dimmer(600), 2 === darajah && webapp.dimmer(400), 1 === darajah && webapp.dimmer(), 
        0 === darajah && (webapp.header(), webapp.dimmer());
    }), Hooks.set("backstackdialog", function(args) {
        var date = 0;
        datepicker && args instanceof HTMLElement && (date = 1), webapp.dimmer(600), softkeys.clear(), 
        softkeys.set(K.sl, function() {
            date ? datepicker.okay && datepicker.okay(args) : dialog.okay && dialog.okay();
        }, 0, "icondone"), softkeys.set(K.sr, function() {
            date ? datepicker.cancel && datepicker.cancel() : dialog.cancel && dialog.cancel();
        }, 0, "iconclose"), date ? datepicker.show(args) : dialog.show(args);
    }), Hooks.set("backstacksheet", function(args) {
        webapp.dimmer(400), softkeys.clear(), (args.callback || args.c) && softkeys.set(K.sl, function() {
            sheet.okay && sheet.okay();
        }, 0, "icondone"), softkeys.set(K.sr, function() {
            sheet.cancel && sheet.cancel();
        }, 0, "iconarrowback"), sheet.show(args), softkeys.showhints();
    }), Hooks.set("backstackview", function(name) {
        return webapp.dimmer(), softkeys.clear(), softkeys.P.empty(), softkeys.set(K.sr, function() {
            Hooks.run("back");
        }, 0, "iconarrowback"), view.ishtaghal(name), softkeys.showhints(), 1;
    }), Hooks.set("backstackmain", function(name) {
        softkeys.clear(), softkeys.P.empty(), view.ishtaghal("main");
    }), Hooks.set("ready", function() {
        settings.adaaf("animations", function() {
            var animationsoff = preferences.get(15, 1);
            return animationsoff ? (delete document.body.dataset.animations, setcss(document.firstElementChild, "scrollBehavior")) : (document.body.dataset.animations = 1, 
            setcss(document.firstElementChild, "scrollBehavior", "smooth")), [ animationsoff ? "off" : "on" ];
        }, function() {
            preferences.get(15, 1) ? preferences.set(15, 0) : preferences.set(15, 1);
        });
    });
}(), function() {
    dimmer.onclick = function() {
        "" == dimmertext.innerText && backstack.back();
    };
}();

var list;

!function() {
    "use strict";
    var direction = function() {
        return document.body.dir;
    }, proto = {
        _muntahaabox: 0,
        _muntahaa: -1,
        murakkaz: 0,
        adapter: 0,
        beforeset: 0,
        beforepop: 0,
        uponpastend: function() {
            var yes = focusnext(this.element);
            return yes && yes.listobject && softkeys.list.basic(yes.listobject), yes;
        },
        uponpaststart: function() {
            var yes = focusprev(this.element);
            return yes && yes.listobject && softkeys.list.basic(yes.listobject), yes;
        },
        uponend: 0,
        uponstart: 0,
        uponnavi: 0,
        moveup: function(uid) {
            uid = uid || (this.axavmuntaxab() || {}).uid;
            var clone = this.get(this.id2num(uid));
            if (clone) {
                var prev = clone.previousElementSibling;
                if (prev) {
                    var prevuid = prev.dataset.uid, obj = this.adapter.get(uid), prevobj = this.adapter.get(prevuid);
                    obj && prevobj && (this.adapter.eawwad(prevuid, uid), this.keys.items.insertBefore(clone, prev), 
                    this.gridnum > 1 ? this.left() : this.up());
                }
            }
        },
        movedown: function(uid) {
            uid = uid || (this.axavmuntaxab() || {}).uid;
            var clone = this.get(this.id2num(uid));
            if (clone) {
                var next = clone.nextElementSibling;
                if (next) {
                    var nextuid = next.dataset.uid, obj = this.adapter.get(uid), nextobj = this.adapter.get(nextuid);
                    obj && nextobj && (this.adapter.eawwad(nextuid, uid), this.keys.items.insertBefore(next, clone), 
                    this.gridnum > 1 ? this.right() : this.down());
                }
            }
        },
        ixtaf: function() {
            this.element.hidden = 1, this.element.parentElement.hidden = 1;
        },
        izhar: function() {
            this.element.hidden = 0, this.element.parentElement.hidden = 0;
        },
        uponrakkaz: function(v, active) {
            v && active && softkeys.list.basic(this);
        },
        rakkaz: function(v, active) {
            var yes;
            this.murakkaz = !!v, v && !this.element.dataset.rakkaz ? (this.element.dataset.rakkaz = 1, 
            yes = 1) : !v && this.element.dataset.rakkaz && (delete this.element.dataset.rakkaz, 
            yes = 1), (yes || active) && this.uponrakkaz && this.uponrakkaz(v, active);
        },
        first: function(select) {
            this.selected = void 0 === select ? -1: select;
            for (var item = this.get(++this.selected); item; ) item = item.dataset.listitem ? 0: this.get(++this.selected);
            return this.intaxabscroll(this.intaxabsaamitan()), this;
        },
        last: function() {
            this.selected = this.length();
            for (var item = this.get(--this.selected); item; ) item = item.dataset.listitem ? 0: this.get(--this.selected);
            return this.intaxabscroll(this.intaxabsaamitan()), this;
        },
        message: function(msg) {
            msg ? (this.keys.message.dataset.i18n = msg, this.keys.message.parentElement.hidden = 0, 
            this.keys.items.hidden = 1) : (delete this.keys.message.dataset.i18n, this.keys.message.innerText = "", 
            this.keys.message.parentElement.hidden = 1, this.keys.items.hidden = 0), translate.update();
        },
        left: function(e, fake) {
            if (!fake && "rtl" === direction()) return this.right(e, 1);
            var delta = this.gridnum ? 1: 10;
            this.selected -= delta;
            for (var item = this.get(this.selected); item; ) item = item.dataset.listitem ? 0: this.get(++this.selected);
            return this.selected < 0 ? this.first() : this.intaxabscroll(this.intaxabsaamitan()), 
            this;
        },
        up: function(e) {
            this.selectedold = this.selected;
            var delta = this.gridnum ? this.gridnum: 1;
            this.selected -= delta;
            for (var item = this.get(this.selected); item; ) item = item.dataset.listitem ? 0: this.get(--this.selected);
            if (this.selected < 0) {
                var yes;
                this.uponpaststart && (yes = this.uponpaststart(this.selectedold)), yes ? this.intaxabscroll(this.intaxabsaamitan()) : this.last();
            } else this.intaxabscroll(this.intaxabsaamitan());
            return this;
        },
        length: function() {
            return isfun(this.uponlength) ? this.uponlength() : this.keys.items.children.length;
        },
        down: function(e) {
            this.selectedold = this.selected;
            var delta = this.gridnum ? this.gridnum: 1;
            this.selected += delta;
            for (var item = this.get(this.selected); item; ) item = item.dataset.listitem ? 0: this.get(++this.selected);
            if (this.selected > this.length() - 1) {
                this.selected = this.length() - 1;
                var yes;
                this.uponpastend && (yes = this.uponpastend(this.selectedold)), yes ? this.intaxabscroll(this.intaxabsaamitan()) : this.first(this.gridnum ? this.selected - this.length() - 1: -1);
            } else this.intaxabscroll(this.intaxabsaamitan());
            return this;
        },
        right: function(e, fake) {
            if (!fake && "rtl" === direction()) return this.left(e, 1);
            var delta = this.gridnum ? 1: 10;
            this.selected += delta;
            for (var item = this.get(this.selected); item; ) item = item.dataset.listitem ? 0: this.get(++this.selected);
            return this.selected > this.length() - 1 ? this.last() : this.intaxabscroll(this.intaxabsaamitan()), 
            this;
        },
        baidaa: function(id, multiple) {
            id = void 0 === id ? this.selected: id;
            var item, items = this.keys.items.children;
            for (var i in items) items.hasOwnProperty(i) && (item = items[i], i == id ? multiple ? item.dataset.baidaa && delete item.dataset.baidaa: item.dataset.baidaa = 1: multiple || delete item.dataset.baidaa);
            return item;
        },
        select: function(id, noscroll, silent, nofocus) {
            id = void 0 === id ? this.selected: id;
            var selected = this.intaxabsaamitan(id);
            return noscroll || this.intaxabscroll(selected), selected && !nofocus && (markooz() && markooz().blur(), 
            selected.focus(), this.rakkaz(1, 1)), this.selected = id, this.uponselect && !silent && (selected = this.get(this.selected)) && (selected = this.adapter.get(selected.dataset.uid)) && this.uponselect(selected), 
            this;
        },
        intaxabscroll: function(selected) {
            isundef(selected) && (selected = this.get(this.selected)), this.filmakaan ? selected && scrollintoview(selected) : 0 === this.selected ? webapp.scrollto() : selected && webapp.scrollto(selected);
        },
        intaxabsaamitan: function(id) {
            id = void 0 === id ? this.selected: id;
            var item, selected, items = this.keys.items.children;
            for (var i in items) items.hasOwnProperty(i) && (item = items[i], i == id ? (item.dataset.selected = 1, 
            selected = item) : delete item.dataset.selected);
            if (isfun(this.uponintaxab) && selected) {
                var a = this.adapter.get(selected.dataset.uid);
                a && this.uponintaxab(a);
            }
            return selected;
        },
        deselect: function() {
            var old = this.selected;
            return this.selected = -1, this.intaxabsaamitan(), this.selected = old, this.rakkaz(), 
            this;
        },
        mufarraq: function(pixels) {},
        eawwad: function(o, uid) {
            var oldclone = this.get(this.id2num(uid));
            if (oldclone) {
                replacewith(oldclone, this.set(o)), this.adapter.eawwad(uid, o.uid), this.adapter.pop(uid);
            }
        },
        set: function(o, id) {
            id && $.log("list.set, stop using id, use o.uid instead"), o = o || {};
            var clone, LV = this, listitem = o._listitem || LV._listitem, parent = LV.keys.items;
            if (!(isnum(LV._muntahaa) && LV._muntahaa > -1 && LV.length() >= LV._muntahaa)) {
                if (void 0 === id && (void 0 === o.uid ? o.uid = id = LV.length() : id = o.uid), 
                LV.idprefix_raw && void 0 !== o.uid && (o.id_dom = LV.idprefix_raw + o.uid), o.uid && (clone = elementbyid(o.id_dom || o.uid)), 
                LV.idprefix_raw && o.ruid && (clone = elementbyid(LV.idprefix_raw + o.ruid)) && (clone.id = o.id_dom, 
                setdata(clone, "uid", o.uid)), LV.beforeset && (o = LV.beforeset(o, o.uid)), o.ruid && (LV.adapter.pop(o.ruid), 
                delete o.ruid), LV.adapter.set(o.uid, o), clone) {
                    var selected = clone.dataset.selected, baidaa = clone.dataset.baidaa;
                    templates.set(clone, o, listitem), selected && (clone.dataset.selected = 1), baidaa && (clone.dataset.baidaa = 1);
                } else {
                    var o2 = Object.assign({
                        id: o.id_dom,
                        data: {
                            uid: o.uid
                        }
                    }, o);
                    clone = templates.get(listitem, parent, o.before || o.awwal, o.id_dom || o.uid)(o2), 
                    delete o.before, delete o.awwal, clone.dataset.listitem = 1, o.mufarraq && (clone.dataset.mufarraq = o.mufarraq);
                }
                return clone && (o.mu3allaq ? setdata(clone, "mu3allaq", 1) : popdata(clone, "mu3allaq"), 
                clone.onclick = function(e) {
                    var item = LV.adapter.get(o.uid);
                    item && LV.uponclick && LV.uponclick(item, e, parseint(LV.id2num(o.uid)));
                }), LV._katabmowdoo3(), LV.afterset && LV.afterset(o, clone, templates.keys(clone)), 
                LV.ba3dihi && LV.ba3dihi(o, clone, templates.keys(clone)), LV.uponadaaf && LV.uponadaaf(LV.length()), 
                clone;
            }
        },
        listitem: function(elementname) {
            return this._listitem = elementname || "listitem", this;
        },
        axavmfateeh: function(uid) {
            var clone = this.get(this.id2num(uid));
            if (clone) return templates.mfateeh(clone);
        },
        axavmuntaxab: function() {
            return this.axadmuntaxab();
        },
        axadmuntaxab: function() {
            var uid = this.num2id(this.selected || 0);
            return !isundef(uid) && this.adapter.get(uid);
        },
        axav: function() {
            return this.axad();
        },
        axad: function() {
            var item, baidaa, items = this.keys.items.children;
            for (var i in items) if (items.hasOwnProperty(i) && (item = items[i], item.dataset.baidaa)) {
                baidaa = item.dataset.uid;
                break;
            }
            return !isundef(baidaa) && this.adapter.get(baidaa);
        },
        get: function(id) {
            return this.keys.items.children[id];
        },
        pop: function(id) {
            var element, uid, LV = this;
            isundef(id) ? element = LV.get(LV.selected) : (LV.idprefix_raw && (id = LV.idprefix_raw + id), 
            element = elementbyid(id)), element && (uid = element.dataset.uid, LV.adapter.pop(uid), 
            element.remove(), LV.selected && (LV.selected == LV.length() ? LV.selected = LV.length() - 1: LV.selected = LV.selected - 1), 
            LV.intaxabsaamitan(), LV._katabmowdoo3(), LV.uponhavaf && LV.uponhavaf(LV.length()));
        },
        popall: function() {
            this.adapter = $.array(), innertext(this.keys.items, ""), innertext(this._muntahaabox, ""), 
            this._katabmowdoo3();
        },
        press: function(key, force) {
            var element = this.get(this.selected);
            if (element) {
                var item = this.adapter.get(element.dataset.uid);
                item && (this.element.dataset.rakkaz || force) && this.onpress && this.onpress(item, key, this.selected);
            }
            return this;
        },
        num2id: function(id) {
            var clone = this.get(id || this.selected);
            return !!clone && clone.dataset.uid;
        },
        id2num: function(uid) {
            var cn = this.keys.items.children;
            for (var i in cn) if (cn.hasOwnProperty(i) && cn[i].dataset.uid == uid) return i;
            return !1;
        },
        grid: function(num) {
            return this.gridnum = num, num ? this.element.dataset.grid = num: delete this.element.dataset.grid, 
            this;
        },
        freeflow: function(v) {
            return v ? (this.grid(), this.element.dataset.freeflow = 1) : delete this.element.dataset.freeflow, 
            this;
        },
        hidetext: function(num) {
            return num ? this.element.dataset.hidetext = num: delete this.element.dataset.hidetext, 
            this;
        },
        muntahaa: function(max, muntahaabox) {
            return this._muntahaa = max || -1, this._muntahaabox = this.keys.miqyaas || this._muntahaabox, 
            this._muntahaabox && max > -1 && (this.keys.miqyaas.hidden = 0), this;
        },
        _katabmowdoo3: function() {
            var LV = this, len = LV.length();
            isnum(LV._muntahaa) && LV._muntahaa > -1 && innertext(LV._muntahaabox, len + " / " + LV._muntahaa), 
            this.keys.raees.hidden = len ? 0: 1, this._mowdoo3 || (this.keys.raees.hidden = 1);
        },
        mowdoo3: function(m, i18n) {
            return this._mowdoo3 = m || 0, i18n ? (attribute(this.keys.mowdoo3list, "data-i18n", m), 
            xlate.update(this.element)) : m && innertext(this.keys.mowdoo3list, m), this._katabmowdoo3(), 
            this;
        },
        idprefix: function(id) {
            return this.idprefix_raw = id, this;
        },
        bahac: function(bahacbox) {
            var LV = this;
            return bahacbox instanceof HTMLInputElement && (LV.uponpaststart = function() {
                return bahacbox.focus(), 1;
            }, bahacbox.oninput = function() {
                $.taxeer("listbahac", function() {
                    LV.uponbahac && LV.uponbahac(bahacbox.value.trim());
                }, 250);
            }, bahacbox.onfocus = function() {
                LV.rakkaz();
            }), LV;
        }
    };
    list = function(element) {
        var LV = Object.create(proto);
        return element.dataset.focus = "list", element.listobject = LV, LV.filmakaan = element.dataset.filmakaan, 
        LV.element = templates.get("list", element)(), LV.listitem(), LV.adapter = $.array(), 
        LV.keys = templates.keys(LV.element), LV.selected = 0, LV.muntahaa(), LV.mowdoo3(), 
        LV.uponclick = function(i, e, uid) {
            LV.beforepress && LV.beforepress(i, e, uid), LV.intaxabsaamitan(uid);
            var yes = LV.selected == uid && 1 == LV.element.dataset.rakkaz;
            LV.selected = uid, LV.rakkaz(1, 1), yes && LV.press(K.en);
        }, LV;
    };
}();

var bahaclist, bahac;

!function() {
    var keys, oldresults, kitabat = 0, nazzaf = function(string) {
        return (string || "").toLowerCase();
    };
    bahac = {
        kitabat: function(v) {
            kitabat = v;
        },
        an3ash: function(select) {
            "bahac" === backstack.states.view && ($.taxeer("bahac", function() {
                var value = nazzaf(keys.searchbox.value);
                0 === value.length ? bahac.fahras([]) : Hooks.run("bahac", value);
            }, 350), select && bahaclist.select());
        },
        fahras: function(results) {
            results = results || oldresults || [], bahaclist.popall(), bahaclist.message(results.length ? void 0: translate("nosearchresults")), 
            results.forEach(function(item, i) {
                bahaclist.set(item);
            }), "bahac" === backstack.states.view && (webapp.header(results.length ? results.length + " " + translate("results") : translate("search")), 
            bahaclist.select()), oldresults = results;
        }
    }, Hooks.set("ready", function() {
        keys = view.mfateeh("bahac"), keys.searchbox.oninput = function() {
            bahac.an3ash();
        }, bahaclist = list(keys.list).idprefix("bahac"), bahaclist.uponpastend = bahaclist.uponpaststart = function() {
            return keys.searchbox.focus(), 1;
        }, bahaclist.beforeset = function(item, id) {
            return item;
        }, bahaclist.onpress = function(item, key, uid) {
            Hooks.run("bahaconpress", [ item, key, uid ]);
        };
    }), Hooks.set("viewready", function(args) {
        switch (args.name) {
          case "main":
            softkeys.set("*", function() {
                return Hooks.run("view", "bahac"), 1;
            }, "*", "iconsearch");
            break;

          case "bahac":
            webapp.header(translate("search")), (!oldresults || oldresults && 0 === oldresults.length) && keys.searchbox.focus(), 
            bahac.fahras(), softkeys.list.basic(bahaclist), softkeys.set([ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ], function(k) {
                bahaclist.press(k);
            }), kitabat && softkeys.set(K.sl, function() {
                bahaclist.press(K.sl);
            }, 0, "iconedit"), softkeys.set("*", function() {
                return bahaclist.selected = -1, bahaclist.select(), keys.searchbox.focus(), 1;
            }, "*", "iconsearch");
        }
    });
}();

var backstack;

!function() {
    var s, storage = {
        3: {},
        2: {},
        1: {},
        0: {}
    }, l = function() {
        var darajah = 0;
        return darajah = s.dialog ? 3: s.sheet ? 2: s.view ? 1: 0, backstack.darajah = darajah, 
        darajah;
    }, savefocus = function() {
        backstack.set("backstackfocus", document.activeElement);
    }, restorefocus = function() {
        var active = backstack.get("backstackfocus");
        active && active.focus && active.focus();
    };
    backstack = {
        darajah: 0,
        states: {
            dialog: 0,
            sheet: 0,
            view: 0,
            main: 0
        },
        set: function(key, value) {
            storage[backstack.darajah][key] = value;
        },
        get: function(key) {
            return key ? storage[backstack.darajah][key] : storage[backstack.darajah];
        },
        dialog: function(args) {
            savefocus(), s.dialog = args || 1, l(), storage[backstack.darajah] = {}, Hooks.rununtilconsumed("backstackdialog", args), 
            Hooks.run("backstack", backstack.darajah);
        },
        sheet: function(args) {
            savefocus(), s.sheet = args || 1, l(), storage[backstack.darajah] = {}, Hooks.rununtilconsumed("backstacksheet", args), 
            Hooks.run("backstack", backstack.darajah);
        },
        view: function(args) {
            savefocus(), s.view = args, l(), storage[backstack.darajah] = {}, Hooks.rununtilconsumed("backstackview", args), 
            Hooks.run("backstack", backstack.darajah);
        },
        main: function(args) {
            savefocus(), s.main = args || 1, l(), storage[backstack.darajah] = {}, Hooks.rununtilconsumed("backstackmain", args), 
            Hooks.run("backstack", backstack.darajah);
        },
        back: function() {
            s.dialog ? (s.dialog = 0, l(), Hooks.run("closeall", 3)) : s.sheet ? (s.sheet = 0, 
            l(), Hooks.run("closeall", 2)) : s.view ? (s.view = 0, s.main = 1, l(), Hooks.run("closeall", 1)) : (s.main = 0, 
            l(), Hooks.run("closeall", 0)), Hooks.run("restore", backstack.darajah), Hooks.run("backstack", backstack.darajah), 
            restorefocus();
        }
    }, Hooks.set("back", function() {
        backstack.back();
    }), Hooks.set("dialog", function(args) {
        backstack.dialog(args);
    }), Hooks.set("sheet", function(args) {
        backstack.sheet(args);
    }), Hooks.set("view", function(args) {
        backstack.view(args);
    }), Hooks.set("main", function(args) {
        backstack.main(args);
    }), s = backstack.states;
}();

var preferences;

!function() {
    "use strict";
    preferences = {
        popall: function() {
            return localStorage.clear();
        },
        set: function(name, value) {
            return localStorage.setItem(name, value);
        },
        get: function(name, json) {
            if (json) {
                try {
                    return JSON.parse(localStorage.getItem(name));
                } catch (ignore) {}
                return {};
            }
            return localStorage.getItem(name);
        },
        pop: function(name) {
            return localStorage.removeItem(name);
        },
        change: function(name, callback) {
            if ("function" == typeof callback) {
                var data;
                try {
                    data = preferences.get(name), data = JSON.parse(data);
                } catch (ignore) {}
                data instanceof Object || (data = {}), data = callback(data), preferences.set(name, JSON.stringify(data));
            }
        }
    };
    var buildnum = preferences.get("#", 1);
    buildnum != 159 && (preferences.pop(3), preferences.pop("@"), preferences.pop(4), 
    preferences.pop(6)), preferences.set("#", 159), Hooks.set("ready", function() {
        buildnum != 159 && $.taxeer("seeghahjadeedah", function() {
            Hooks.run("seeghahjadeedah", buildnum);
        }, 2e3);
    }), $.log.s(159);
}();

var activity;

!function() {
    activity = {
        jaame3: function(name, type, key, value) {
            if ("MozActivity" in window) {
                var data = {
                    type: type
                };
                data[key] = value, new MozActivity({
                    name: name,
                    data: data
                });
            }
        },
        ittasal: function(num) {
            num && activity.jaame3("dial", "webtelephony/number", "number", num);
        },
        arsal: function(num) {
            num && activity.jaame3("new", "websms/sms", "number", num);
        },
        abrad: function(address) {
            address && activity.jaame3("new", "mail", "url", "mailto:" + address);
        }
    };
}();

var view;

!function() {
    var index = {};
    view = {
        zaahir: function(name) {
            return view.axav() === name;
        },
        mfateeh: function(name) {
            var element = index[name];
            return !!element && templates.keys(element);
        },
        ishtaghal: function(name) {
            var level = backstack.level, element = view.axad(name), keys = templates.keys(element);
            Hooks.run("viewready", {
                name: name,
                element: element,
                keys: keys,
                level: level
            });
        },
        axav: function(name, onlyelement) {
            if (name) {
                var view;
                for (var i in index) i == name ? view = index[i] : onlyelement || (index[i].hidden = 1);
                if (view) return onlyelement || (view.hidden = 0), view;
            } else for (var i in index) if (!index[i].hidden) return i;
        },
        axad: function(name, onlyelement) {
            view.axav(name, onlyelement);
        },
        fahras: function() {
            var elements = document.body.querySelectorAll("[data-view]");
            for (var i in elements) elements.hasOwnProperty(i) && elements[i].dataset.view && ("main" !== elements[i].dataset.view && (elements[i].hidden = 1), 
            index[elements[i].dataset.view] = elements[i]);
            return index;
        }
    };
}();

var time;

!function() {
    var timeout, started, val = {}, monthnames = "january february march april may june july august september october november december".split(" "), weekdays = "sunday monday tuesday wednesday thursday friday saturday".split(" ");
    time = function(parent) {
        var items = (parent || document).querySelectorAll("[data-time]"), is24 = preferences.get(24, 1);
        for (var i in items) if (items.hasOwnProperty(i)) {
            var e = items[i];
            if (e) {
                var dataset = e.dataset, datetime = dataset.time, by = dataset.by;
                datetime = parseInt(datetime), e.dataset.deadline ? time.now() < datetime ? (delete e.dataset.past, 
                e.dataset.future = 1) : (delete e.dataset.future, e.dataset.past = 1) : (delete e.dataset.future, 
                delete e.dataset.past), by ? time.relativetime(0, items[i]) : "" !== datetime && ("false" !== datetime && e.setAttribute("title", time.formatdate(new Date(datetime), "Do MMM YYYY, " + (is24 ? "HH:mm" : "hh:mma"))), 
                e.innerHTML = time.relativetime(datetime, 0, e.dataset));
            }
        }
    }, time.monthname = function(value) {
        return monthnames[value];
    }, time.miqdaar = function(delta, secondary) {
        var fuzzy = "", day = 86400;
        if (delta < 60) fuzzy = delta + " " + xlate("secondsago"); else if (delta < 120) fuzzy = parsefloat(delta / 60, 1) + xlate("minute"); else if (delta < 3600) fuzzy = parsefloat(delta / 60, 1) + xlate("minutesago"); else if (1 == Math.floor(delta / 3600)) {
            fuzzy = 1 + xlate("hourago");
            var mins = Math.floor(delta % 3600 / 60);
            mins && (fuzzy += " " + parsefloat(mins, 1) + xlate("minutesago"));
        } else if (delta < day) {
            fuzzy = Math.floor(delta / 3600) + " " + xlate("hoursago");
            var mins = Math.floor(delta % 3600 / 60);
            mins && (fuzzy += " " + mins + xlate("minutesago"));
        } else if (delta >= day && delta < 2592e3) {
            var days = Math.floor(delta / day);
            fuzzy = 1 === days ? 1 + xlate("dayago") : days + xlate("daysago");
            var hours = Math.floor(delta % day / 3600);
            hours && (fuzzy += " " + (1 === hours ? hours + xlate("hourago") : hours + xlate("hoursago")));
        } else if (delta > 2592e3 && delta < 31104e3) {
            var months = Math.floor(delta / 2592e3);
            fuzzy = 1 === months ? months + xlate("monthago") : months + xlate("monthsago");
            var days = Math.floor(delta % 2592e3 / day);
            days && (fuzzy += " " + (1 === days ? days + xlate("dayago") : days + xlate("daysago")));
        } else if (delta > 31104e3) {
            var years = Math.floor(delta / 31104e3);
            fuzzy = 1 === years ? years + xlate("yearago") : years + xlate("yearsago");
            var months = Math.floor(delta % 31104e3 / 2592e3);
            months && (fuzzy += " " + (1 === months ? months + xlate("monthago") : months + xlate("monthsago")));
        }
        return fuzzy;
    }, time.days = function(days) {
        return days = new Date().getTime() - new Date(days).getTime(), days /= time.day;
    }, time.fuzzytime = function(date, muxtasar) {
        date = date || +new Date();
        var future, delta = Math.round((+new Date() - date) / 1e3);
        delta < 0 && (future = 1, delta *= -1);
        var fuzzy, day = 86400;
        if (!future && delta < 15) fuzzy = muxtasar ? delta + translate("sseconds") : translate("justnow"); else if (delta < 60) fuzzy = muxtasar ? delta + translate("sseconds") : delta + " " + translate("secondsago"); else if (delta < 120) fuzzy = muxtasar ? 1 + translate("sminutes") : translate("aminuteago"); else if (delta < 3600) fuzzy = muxtasar ? Math.floor(delta / 60) + translate("sminutes") : Math.floor(delta / 60) + " " + translate("minutesago"); else if (1 == Math.floor(delta / 3600)) {
            fuzzy = 1 + translate("hourago");
            var mins = Math.floor(delta % 3600 / 60);
            mins && (muxtasar ? fuzzy = " " + mins + translate("sminutes") : fuzzy += " " + mins + translate("minutesago"));
        } else if (delta < day) {
            fuzzy = Math.floor(delta / 3600) + translate("hoursago");
            var mins = Math.floor(delta % 3600 / 60);
            mins && (fuzzy += " " + mins + translate("minutesago"));
        } else if (delta >= day && delta < 2592e3) {
            var days = Math.floor(delta / day);
            fuzzy = 1 === days ? 1 + translate("dayago") : days + translate("daysago");
            var hours = Math.floor(delta % day / 3600);
            hours && (fuzzy += " " + (1 === hours ? hours + translate("hourago") : hours + translate("hoursago")));
        } else if (delta > 2592e3 && delta < 31104e3) {
            var months = Math.floor(delta / 2592e3);
            fuzzy = 1 === months ? months + translate("monthago") : months + translate("monthsago");
            var days = Math.floor(delta % 2592e3 / day);
            days && (fuzzy += " " + (1 === days ? days + translate("dayago") : days + translate("daysago")));
        } else if (delta > 31104e3) {
            var years = Math.floor(delta / 31104e3);
            fuzzy = 1 === years ? years + translate("yearago") : years + translate("yearsago");
            var months = Math.floor(delta % 31104e3 / 2592e3);
            months && (fuzzy += " " + (1 === months ? months + translate("monthago") : months + translate("monthsago")));
        }
        return future && (fuzzy = translate("infuture") + " " + fuzzy), translate.a3daad(fuzzy);
    }, time.relativetime = function(datetime, e, dataset) {
        if ("false" === datetime) return translate("alongtime");
        var today = time.striptime().getTime(), yesterday = time.traversebydays(today, -1), tomorrow = time.traversebydays(today, 1), text = "", is24 = preferences.get(24, 1);
        if (e) {
            dataset = e.dataset;
            var datetime = parseInt(dataset.time), minus = dataset.minus, by = dataset.by;
            if (delete dataset.i18n, void 0 !== minus && (datetime = time.now() - datetime), 
            "age" === by) innerhtml(e, time.fuzzytime(datetime)); else if ("days" === by) {
                var days = time.days(datetime);
                days = days < .1 ? days.toFixed(2) : days < 1 ? days.toFixed(1) : Math.floor(days), 
                innerhtml(e, days + " " + translate("daysago"));
            } else "hourly" === by ? innerhtml(e, time.formatdate(new Date(datetime), is24 ? "HH:mm" : "hh:mma")) : "yearly" === by ? innerhtml(e, time.formatdate(new Date(datetime), "YYYY")) : "monthly" === by ? innerhtml(e, time.formatdate(new Date(datetime), "MMMM YYYY")) : "daily" === by ? innerhtml(e, time.formatdate(new Date(datetime), "Do MMMM YYYY")) : "minute" === by ? innerhtml(e, time.formatdate(new Date(datetime), is24 ? "HH:mm" : "hh:mma")) : datetime === today ? dataset.i18n = "today" : datetime === yesterday ? dataset.i18n = "yesterday" : datetime === tomorrow ? dataset.i18n = "tomorrow" : innerhtml(e, time.formatdate(new Date(datetime), "Do MMM YYYY"));
        } else {
            var at = translate("@"), c = translate(","), months = (time.now() - datetime) / time.month, days = (time.now() - datetime) / time.day;
            days <= 1 ? dataset && "3" == dataset.muxtasar ? text += time.fuzzytime(datetime, 1) : dataset && "2" == dataset.muxtasar ? text += time.fuzzytime(datetime) : (dataset && !dataset.muxtasar && (text += time.fuzzytime(datetime) + " " + at + " "), 
            text += time.formatdate(new Date(datetime), is24 ? "HH:mm" : "hh:mma")) : text = days > 1 && days <= 4 ? time.formatdate(new Date(datetime), "dddd" + c + " " + (is24 ? "HH:mm" : "hh:mma")) : months < 2 ? time.formatdate(new Date(datetime), "Do MMM" + c + " " + (is24 ? "HH:mm" : "hh:mma")) : time.formatdate(new Date(datetime), "Do MMM YYYY" + c + " " + (is24 ? "HH:mm" : "hh:mma")), 
            e && innerhtml(e, text);
        }
        return text;
    }, time._calcs = {}, time._replacements = [], time._uid = 0, time.now = function() {
        return new Date().getTime();
    }, time.zero = function(s) {
        return s < 10 ? "0" + s: s;
    }, time.year = 315576e5, time.month = 26298e5, time.day = 8766e4, time.hour = 3652500, 
    time.minute = 60875, time.second = 1e3, time.milli = 1, time.striptime = function(_time) {
        var parsed = new Date(_time || new Date().getTime());
        return parsed = parsed.getDate() + " " + monthnames[parsed.getMonth()] + " " + parsed.getFullYear() + " GMT", 
        parsed = new Date(parsed), "Invalid Date" === parsed.toString() && (parsed = !1), 
        parsed;
    }, time.traversebydays = function(intdate, num) {
        return intdate = new Date(intdate), intdate.setDate(intdate.getDate() + num), intdate.getTime();
    }, time.realdatereplace = function(s) {
        return "YYYY" === s ? val._year: "YY" === s ? val._shortyear < 10 ? "0" + val._shortyear: val._shortyear: "Y" === s ? val._shortyear: "HH" === s ? val._hours < 10 ? "0" + val._hours: val._hours: "H" === s ? val._hours: "hh" === s ? val._hours12 < 10 ? "0" + val._hours12: val._hours12: "h" === s ? val._hours12: "mm" === s ? val._minutes < 10 ? "0" + val._minutes: val._minutes: "m" === s ? val._minutes: "ss" === s ? val._seconds < 10 ? "0" + val._seconds: val._seconds: "s" === s ? val._seconds: "a" === s ? val._ampm: "MMMM" === s ? val._monthname: "MMM" === s ? (val._monthname || "").substr(0, 3) : "MM" === s ? val._month < 10 ? "0" + val._month: val._month: "M" === s ? val._month: "dddd" === s ? val._dayname: "ddd" === s ? (val._dayname || "").substr(0, 3) : "DD" === s ? val._day < 10 ? "0" + val._day: val._day: "Do" === s ? val._day + val._o: "D" === s ? val._day: void 0;
    }, time.replacewithuid = function() {
        return time._replacements[time._uid] = time.realdatereplace(arguments[0]), "%{" + ++time._uid + "}";
    }, time.formatdate = function(date, format) {
        format = format || "MM/DD/YYYY h:mma", time._uid = 0, time._replacements = [], val._year = date.getFullYear() + "", 
        val._shortyear = parseInt(val._year.substr(-2)), val._month = date.getMonth() + 1, 
        val._monthname = monthnames[val._month - 1], val._day = date.getDate(), val._dayname = weekdays[date.getDay()], 
        val._hours = date.getHours(), val._hours12 = val._hours % 12, val._hours12 = val._hours12 < 1 ? 12: val._hours12, 
        val._minutes = date.getMinutes(), val._seconds = date.getSeconds(), val._ampm = translate(val._hours >= 12 ? "pm" : "am"), 
        val._monthname = translate(val._monthname), val._dayname = translate(val._dayname), 
        val._o = translate("th"), 1 !== val._day && 21 !== val._day && 31 !== val._day || (val._o = translate("st")), 
        2 !== val._day && 22 !== val._day || (val._o = translate("nd")), 3 !== val._day && 23 !== val._day || (val._o = translate("rd"));
        var datetimestring = format;
        datetimestring = datetimestring.replace(/YYYY/g, time.replacewithuid).replace(/YY/g, time.replacewithuid).replace(/Y/g, time.replacewithuid).replace(/HH/g, time.replacewithuid).replace(/H/g, time.replacewithuid).replace(/hh/g, time.replacewithuid).replace(/h/g, time.replacewithuid).replace(/mm/g, time.replacewithuid).replace(/m/g, time.replacewithuid).replace(/ss/g, time.replacewithuid).replace(/s/g, time.replacewithuid).replace(/a/g, time.replacewithuid).replace(/MMMM/g, time.replacewithuid).replace(/MMM/g, time.replacewithuid).replace(/MM/g, time.replacewithuid).replace(/M/g, time.replacewithuid).replace(/dddd/g, time.replacewithuid).replace(/ddd/g, time.replacewithuid).replace(/DD/g, time.replacewithuid).replace(/Do/g, time.replacewithuid).replace(/D/g, time.replacewithuid);
        return datetimestring = datetimestring.replace(/\%\{(\d)*\}/gm, function() {
            return time._replacements[arguments[1] - 1];
        });
    }, time.start = function(parent) {
        started = 1, clearTimeout(timeout), timeout = setTimeout(function() {
            time(parent), started && time.start();
        }, 1e4);
    }, time.stop = function() {
        clearTimeout(timeout), started = 0;
    }, Hooks.set("visible", function() {
        time.start();
    }), Hooks.set("hidden", function() {
        time.stop();
    }), Hooks.set("widgets", function(parent) {
        parent && time(parent);
    }), Hooks.set("ready", function() {});
}();

var settings, currentad;

!function() {
    var settingslist, keys, settingsitems = [ [ "reportbug", 0, function() {
        activity.abrad(myemail + "?subject=" + appname + " bug " + 159);
    } ], [ "requestfeat", 0, function() {
        activity.abrad(myemail + "?subject=" + appname + " request " + 159);
    } ], [ "timeformat", function() {
        return [ preferences.get(24, 1) ? "hours24" : "hours12" ];
    }, function() {
        preferences.get(24, 1) ? preferences.set(24, 0) : preferences.set(24, 1);
    } ], [ "calendar", function() {
        return [ preferences.get(26, 1) ? "gregorian" : "hijri" ];
    }, function() {
        preferences.get(26, 1) ? preferences.set(26, 0) : preferences.set(26, 1);
    } ], [ "transparency", function() {
        var isit = preferences.get(23, 1);
        return webapp.transparency(), [ isit ? "on" : "off" ];
    }, function() {
        preferences.get(23, 1) ? preferences.set(23, 0) : preferences.set(23, 1);
    } ], [ "largetext", function() {
        var largetext = preferences.get(9, 1);
        return webapp.textsize(), [ largetext ? "on" : "off" ];
    }, function() {
        preferences.set(9, preferences.get(9, 1) ? 0: 1);
    } ] ], myemail = "hxorasani@gmail.com";
    settings = {
        adaaf: function(name, getvalue, onpress) {
            return settingsitems.push([ name, getvalue, onpress ]), settings.jaddad(settingsitems.length - 1), 
            settingsitems.length - 1;
        },
        axad: function(uid) {
            return settingsitems[uid];
        },
        jaddad: function(uid) {
            var item = settings.axad(uid);
            if (item) {
                var body = "function" == typeof item[1] ? item[1]() : void 0, obj = {
                    uid: uid
                };
                obj.index = uid, obj.titlei18n = item[0], body instanceof Array ? obj.bodyi18n = body[0] : obj.body = body, 
                settingslist && (settingslist.set(obj), "settings" === backstack.states.view && settingslist.select());
            }
        }
    }, Hooks.set("ready", function() {
        keys = view.mfateeh("settings"), settingslist = list(keys.list).idprefix("settings"), 
        settingslist.beforeset = function(item, id) {
            return item;
        }, settingsitems.forEach(function(item, i) {
            settings.jaddad(i);
        }), settingslist.onpress = function(item, key, uid) {
            item && (settings.axad(item.index)[2](), settings.jaddad(item.index));
        }, 0 && "getKaiAd" in window && getKaiAd({
            publisher: "7e2cfabf-ef5c-46eb-8e57-c20f3d6a1171",
            test: 0 ? 0: 1,
            timeout: 6e4,
            h: 48,
            w: 240,
            container: keys.ad,
            onerror: function(e) {
                $.log.e(e);
            },
            onready: function(ad) {
                currentad = ad, ad.call("display", {});
            }
        });
    }), Hooks.set("viewready", function(args) {
        switch (args.name) {
          case "main":
            softkeys.set("9", function() {
                Hooks.run("view", "settings");
            }, "9", "iconsettings");
            break;

          case "settings":
            webapp.header([ "settings" ]), softkeys.list.basic(settingslist), softkeys.set(K.en, function() {
                settingslist.press(K.en);
            }), softkeys.set(K.bs, function() {
                backstack.back();
            }), 0 && "getKaiAd" in window && softkeys.set("0", function() {
                currentad && currentad.call && currentad.call("click");
            }, translate("openad"), !1), settingslist.select();
        }
    });
}();

var translate, taraajim = taraajim || {}, xlate;

!function() {
    "use strict";
    var languages = Object.keys(taraajim), uglynames = {
        en: "en",
        ar: "ar",
        ur: "ur"
    }, donumbers = function(translation) {
        var language = translate.get();
        return [ "ur", "ar" ].includes(language) ? translation.replace(/0/g, "٠").replace(/1/g, "١").replace(/2/g, "٢").replace(/3/g, "٣").replace(/4/g, "٤").replace(/5/g, "٥").replace(/6/g, "٦").replace(/7/g, "٧").replace(/8/g, "٨").replace(/9/g, "٩").replace(/%/g, "٪") : translation;
    }, dodirection = function(parent, selector) {
        void 0 === selector && (selector = "[data-dir]");
        var items = (parent || document).querySelectorAll(selector);
        for (var i in items) if (items.hasOwnProperty(i)) {
            var e = items[i];
            if (e) {
                var dir;
                e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ? (dir = translate.direction(e.value), 
                e.dir = 1 === dir ? "rtl" : "ltr", listener(e, [ "focus", "input" ], function() {
                    dir = translate.direction(this.value), this.dir = 1 === dir ? "rtl" : "ltr";
                })) : (dir = "rtl" === e.dataset.dir ? "rtl" : "ltr" === e.dataset.dir ? "ltr" : translate.direction(e.innerText), 
                "parent" == e.dataset.dir ? e.parentElement.dir = 1 === dir ? "rtl" : "ltr" : e.dir = 1 === dir ? "rtl" : "ltr");
            }
        }
    };
    translate = function(alias) {
        var str = "", language = translate.get();
        language && taraajim[language] && taraajim[language][alias] && (str = taraajim[language][alias]), 
        "" === str && taraajim.en && taraajim.en[alias] && (str = taraajim.en[alias]);
        var args = arguments;
        if (args.length > 1) for (var i = 0; i < args.length; ++i) str = str.replace(new RegExp("%" + (i + 1), "g"), args[i + 1]);
        return "" === str && (str = alias || ""), "" + (str = donumbers(str));
    }, translate.get = function() {
        return preferences.get(translate.saveto) || "en";
    }, translate.set = function(language) {
        preferences.set(translate.saveto, language);
    }, translate.saveto = 25, translate.change = function(language) {
        language = language || "en", [ "ur", "ar" ].includes(language) ? document.body.dir = "rtl" : document.body.dir = "ltr", 
        Hooks && Hooks.run("translateupdate"), translate.set(language), translate.update();
    }, translate.a3daad = function(str) {
        return donumbers(str);
    }, translate.update = function(parent) {
        var items = (parent || document).querySelectorAll("[data-i18n]");
        for (var i in items) if (items.hasOwnProperty(i)) {
            var e = items[i];
            if (e) {
                var dataset = e.dataset, i18n = dataset.i18n;
                if ("" !== i18n) {
                    var translation = translate(i18n);
                    translation = donumbers(translation), e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement ? e.placeholder = translation: e.innerText = translation;
                }
            }
        }
        dodirection(parent), dodirection(parent, "input"), dodirection(parent, "textarea");
    }, translate.direction = function(text) {
        text = text || "";
        var ltr = text.match(/[a-zA-Z]+/);
        return text.match(/[ا-ي]+/) ? 1: ltr ? 0: 2;
    }, Hooks.set("ready", function() {
        translate.change(translate.get()), settings.adaaf("language", function() {
            var language = translate.get();
            if (language) return translate(uglynames[language] || "");
        }, function() {
            var language = translate.get(), index = languages.indexOf(language);
            index < languages.length - 1 ? ++index: index = 0, translate.change(languages[index]);
        });
    }), xlate = translate;
}();

var templates;

!function() {
    var index = {};
    templates = {
        mfateeh: function(element) {
            return templates.keys(element);
        },
        keys: function(element) {
            if (element instanceof HTMLElement) {
                var keys = {}, otherviews = element.querySelectorAll("[data-id]");
                for (var i in otherviews) otherviews.hasOwnProperty(i) && otherviews[i].dataset && (keys[otherviews[i].dataset.id] = otherviews[i]);
                return keys;
            }
        },
        set: function(clone, o, template) {
            var keys = templates.keys(clone);
            if (o = o || {}, o.hidden && (clone.hidden = 1), o.id && (clone.id = o.id), o.classes && (clone.className = o.classes), 
            1 == o.status ? (clone.dataset.selected = 1, clone.disabled = 0) : 2 == o.status ? (clone.disabled = 1, 
            delete clone.dataset.selected) : (clone.disabled = 0, delete clone.dataset.selected), 
            o.data) for (var i in o.data) void 0 !== o.data[i] ? clone.dataset[i] = o.data[i] : delete clone.dataset[i];
            o.onclick && (clone.onclick = o.onclick);
            for (var i in keys) if (!isundef(o[i]) || !isundef(o[i + "$h"])) if ("ixtaf" == o[i]) keys[i].hidden = 1; else if ("izhar" == o[i]) keys[i].hidden = 0; else if (keys[i] instanceof HTMLInputElement) keys[i].value = o[i]; else if (keys[i] instanceof HTMLImageElement) "string" == typeof o[i] && o[i].length ? (o[i].startsWith("app://") ? keys[i].src = o[i] : keys[i].src = "file://" + o[i], 
            keys[i].hidden = 0) : keys[i].hidden = 1; else if ([ "titlehours", "titledays", "titletime", "time", "timeshow", "days", "waqt" ].includes(i)) void 0 !== o[i] && (keys[i].dataset.time = o[i]), 
            o.deadline ? keys[i].dataset.deadline = 1: delete keys[i].dataset.deadline; else if ([ "titlei18n", "bodyi18n" ].includes(i)) o[i] ? (keys[i].hidden = 0, 
            keys[i].dataset.i18n = o[i]) : (keys[i].hidden = 1, delete keys[i].dataset.i18n, 
            keys[i].innerHTML = ""); else if ([ "titlehtml", "bodyhtml", "bodyshowhtml" ].includes(i)) o[i] ? (keys[i].hidden = 0, 
            keys[i].innerHTML = o[i]) : (keys[i].hidden = 1, keys[i].innerHTML = ""); else if ("icon" == i) if ("string" == typeof o[i] && o[i].length) {
                keys[i].hidden = 0;
                var e = eqonaat.querySelector("#" + o[i]);
                e && (keys[i].innerHTML = '<svg viewBox="0 0 48 48">' + e.cloneNode(1).innerHTML + "</svg>");
            } else keys[i].hidden = 1, keys[i].innerHTML = ""; else {
                keys[i].hidden && (keys[i].hidden = 0);
                var html = o[i + "$h"];
                isundef(html) ? innertext(keys[i], o[i]) : innerhtml(keys[i], html);
            }
            return Hooks.rununtilconsumed("templateset", [ clone, o, keys, template ]), translate && translate.update(clone.parentElement), 
            time && time(clone.parentElement), datepicker && datepicker.fahras(clone.parentElement), 
            clone;
        },
        get: function(element, parent, before, id) {
            if ("string" == typeof element && (element = index[element]), !(element instanceof HTMLElement)) return !1;
            var clone, template;
            return id && (clone = document.getElementById(id)) && (before = clone.nextElementSibling), 
            clone || (clone = element.cloneNode(!0), template = clone.dataset.template, delete clone.dataset.template, 
            clone.hidden = 0), parent ? (before instanceof HTMLElement ? parent.insertBefore(clone, before) : before ? parent.insertBefore(clone, parent.firstElementChild) : parent.appendChild(clone), 
            Hooks.rununtilconsumed("widgets", parent), function(o) {
                return templates.set(clone, o, template);
            }) : clone;
        },
        index: function(parent) {
            var elements = (parent || document.body).querySelectorAll("[data-template]");
            for (var i in elements) elements.hasOwnProperty(i) && elements[i].dataset.template && (elements[i].hidden = 1, 
            index[elements[i].dataset.template] = elements[i]);
            return index;
        }
    }, templates.index();
}();

var softkeys, K, P;

!function() {
    K = {
        mt: "microphonetoggle",
        sr: "softright",
        sl: "softleft",
        en: "enter",
        pu: "pageup",
        pd: "pagedown",
        up: "arrowup",
        dn: "arrowdown",
        rt: "arrowright",
        lf: "arrowleft",
        cl: "call",
        bs: "backspace"
    }, P = {
        empty: {},
        sheet: {},
        dialog: {},
        list: {}
    };
    var lastkeytime, hfizM = {}, M = {}, index = {}, selectionorigin = 0, removableparent = function(element) {
        var parent = element.parentElement;
        if (parent.dataset.focus) return parent.dataset.removable ? parent: removableparent(parent);
    }, updatekey = function(k) {
        var parent, o = {}, classes = "", args = M[k];
        args && (1 === args.length && (o.hidden = 1), args[0] && (o.onclick = function(e) {
            args[0](e.key, e);
        }), o.label = args[1] || "", o.icon = args[2], o.status = args[3], o.icon === !1 && (o.name = k), 
        k == K.sl && (classes = "left"), k == K.en && (classes = "center"), k == K.sr && (classes = "right"), 
        "*" == k && (classes = "star"), "#" == k && (classes = "hash"), parent = [ K.sr, K.sl, K.en ].includes(k) ? skmain: skhints, 
        o.id = "sk" + k, o.classes = classes, index[k] = templates.get("skbutton", parent, 0, o.id)(o), 
        skdots.hidden = totalvisible() ? 0: 1, resize());
    }, adaaf = function(name, callback, label, icon, status) {
        var action = [];
        M[name] = M[name] || action, action[0] = void 0 === callback ? M[name][0] : callback, 
        action[1] = void 0 === label ? M[name][1] : label, action[2] = void 0 === icon ? M[name][2] : icon, 
        action[3] = void 0 === status ? M[name][3] : status, M[name] = action;
    }, talaf = function(name) {
        M[name] = void 0;
    };
    totalvisible = function() {
        var total = 0;
        for (var i in skhints.childNodes) skhints.childNodes.hasOwnProperty(i) && (skhints.childNodes[i].hidden || total++);
        return total;
    }, P.empty = function() {
        M[K.sr] = [ function() {
            return Hooks.run("back"), 1;
        }, 0, "iconclose" ], M[K.bs] = [ function() {
            Hooks.run("minimize");
        } ], M["#"] = [ function() {
            return softkeys.showhints(), 1;
        } ], softkeys.update();
    }, softkeys = {
        P: P,
        K: K,
        saveto: 7,
        clear: function() {
            return M = {}, softkeys.update(), backstack.set("softkeys", M), softkeys;
        },
        havaf: function(name) {
            return softkeys.talaf(name);
        },
        baidaa: function(name, yes) {
            M[name] && (M[name][3] = yes ? 1: void 0, softkeys.update());
        },
        talaf: function(name) {
            return name && (name instanceof Array ? name.forEach(function(n) {
                talaf(n);
            }) : talaf(name), softkeys.update(), backstack.set("softkeys", M)), softkeys;
        },
        update: function() {
            if (skhints.innerHTML = "", skmain.innerHTML = "", M) for (var k in M) updatekey(k);
        },
        showhints: function() {
            delete softkeysui.dataset.hidden, skhelp.hidden || (skhelp.hidden = 1, preferences.set(7, 1)), 
            $.taxeer("softkeyshints", function() {
                softkeysui.dataset.hidden = 1;
            }, 2500);
        },
        hfiz: function(name) {
            return name && (name instanceof Array ? name.forEach(function(n) {
                softkeys.hfiz(n);
            }) : hfizM[name] = M[name]), softkeys;
        },
        fasax: function() {
            for (var i in hfizM) M[i] = hfizM[i];
            return softkeys.update(), softkeys;
        },
        nsee: function() {
            return hfizM = {}, softkeys;
        },
        set: function(name, callback, label, icon, status) {
            return name && (name instanceof Array ? name.forEach(function(n) {
                adaaf(n, callback, label, icon, status);
            }) : adaaf(name, callback, label, icon, status), softkeys.update(name), backstack.set("softkeys", M)), 
            softkeys;
        },
        map: function(preset, callbacks) {
            if ((M = Object.assign({}, M, preset)) && callbacks) for (var i in callbacks) M[i] = M[i] || [], 
            M[i][0] = callbacks[i];
            softkeys.update(), backstack.set("softkeys", M);
        },
        actualpress: function(k, e, longpress) {
            var pd = function() {
                e && e.preventDefault();
            };
            k = k.toLowerCase(), "sl" == k && (k = K.sl, pd()), "up" == k && (k = K.up, pd()), 
            "sr" == k && (k = K.sr, pd()), "lf" == k && (k = K.lf, pd()), "en" == k && (k = K.en, 
            pd()), "rt" == k && (k = K.rt, pd()), "cl" == k && (k = K.cl, pd()), "dn" == k && (k = K.dn, 
            pd()), "bs" == k && (k = K.bs, pd()), M && M[k] && "function" == typeof M[k][0] && M[k][0](k, e, e && e.type, longpress) && pd();
        },
        press: function(k, e, longpress) {
            var caught, pd = function() {
                preventdefault(e);
            };
            kraw = k, k = k.toLowerCase(), e && e.type && "mousewheel" == e.type && (e.y <= -1 && (k = K.up), 
            e.y >= 1 && (k = K.dn)), "f1" == k && (k = K.sl, pd()), "f2" == k && (k = K.sr, 
            pd()), ("f5" == k || e && e.ctrlKey && "r" == k) && history.go(), "escape" != k || document.fullscreenElement || (k = K.sr, 
            pd()), k == K.mt && pd();
            var dir, editmode = 0, a = document.activeElement;
            if ((a instanceof HTMLTextAreaElement && "range" != a.type || "true" == a.contentEditable) && (e && e.altKey || [ K.sl, K.sr ].includes(k) || (caught = 1)), 
            (a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement) && "range" != a.type && (editmode = 1, 
            dir = translate.direction(a.value), a.dir = 1 === dir ? "rtl" : "ltr"), a instanceof HTMLButtonElement && a.dataset.remover && k == K.en) {
                var parent = removableparent(a);
                focusprev(parent) || (caught = focusnext(parent)), parent && parent.remove(), pd();
            }
            if (editmode) {
                var atend = a.value.length === a.selectionStart;
                0 === a.selectionStart && k == K.up && (caught = focusprev(a), pd()), atend && k == K.dn ? (caught = focusnext(a), 
                pd()) : k == K.en && e.shiftKey && a.uponshiftenter ? (a.uponshiftenter(), pd()) : k == K.en && !e.shiftKey && a.uponenter && (a.uponenter(), 
                pd());
            } else a && (navigables.includes(a.tagName.toLowerCase()) || a.parentElement.dataset.focus) && (k == K.up && (caught = focusprev(a), 
            pd()), k == K.dn && (caught = focusnext(a), pd()), k == K.en && a.onclick && (a.onclick(), 
            pd()));
            if (editmode && !a.value.length && k == K.bs && (a.dataset.removable ? (caught = focusprev(a), 
            a.remove(), pd()) : pd()), editmode && a.value.length && [ K.up, K.dn, K.lf, K.rt, K.en ].includes(k)) return void (void 0 !== selectionorigin && (a.selectionStart < selectionorigin ? selectiondirection = 0: a.selectionStart > selectionorigin && (selectiondirection = 1), 
            k == K.lf && a.selectionEnd == selectionorigin ? (a.selectionEnd = selectionorigin, 
            --a.selectionStart, pd()) : k == K.rt && a.selectionStart - a.selectionEnd ? (a.selectionStart = selectionorigin, 
            ++a.selectionEnd, pd()) : k == K.rt && a.selectionEnd < a.value.length ? (++a.selectionEnd, 
            pd()) : k == K.lf && a.selectionStart > -1 ? (--a.selectionStart, pd()) : k == K.lf && a.selectionStart && (--a.selectionStart, 
            pd())));
            if (selectionorigin = void 0, !(caught = caught || Hooks.rununtilconsumed("softkey", [ k, e || {}, e && e.type, longpress ]))) {
                var mmm = M[kraw] || M[k];
                mmm && "function" == typeof mmm[0] && mmm[0](k, e, e && e.type, longpress) && pd();
            }
        }
    }, softkeys.showhints();
    var autoheight = function(a) {
        a instanceof HTMLTextAreaElement && (setcss(a, "height", 0), a.scrollHeight > a.offsetHeight && setcss(a, "height", a.scrollHeight + 3 + "px"));
    };
    softkeys.autoheight = autoheight;
    var resize = function() {
        var w = innerwidth(), sl = index[K.sl], sr = index[K.sr];
        if (w > 720) {
            var ww = (innerwidth() - 640) / 2;
            sl && setcss(sl, "width", ww + "px"), sr && setcss(sr, "width", ww + "px");
        } else sl && setcss(sl, "width"), sr && setcss(sr, "width");
    };
    listener("resize", function() {
        $.taxeer("resizesoftkeys", function() {
            resize();
        }, 100);
    }), resize(), Hooks.set("contextmenu", function(e) {
        var a = document.activeElement;
        if (!a || !(a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement) || "range" == a.type) return softkeys.showhints(), 
        1;
    }), Hooks.set("ready", function() {
        skhints.onclick = skdots.onclick = function() {
            softkeys.showhints();
        };
    }), Hooks.set("mousewheel", function(e) {
        e && softkeys.press("", e, e.type);
    }), Hooks.set("keyup", function(e) {
        var a = document.activeElement;
        if ((a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement) && "range" != a.type) {
            var yes, len = a.value.trim().length;
            if (len) {
                var min = parseint(getattribute(a, "min") || 0), max = parseint(getattribute(a, "max") || 0);
                min && len < min ? (a.dataset.under = 1, yes = 1) : delete a.dataset.under, max && len > max ? (a.dataset.over = 1, 
                yes = 2) : delete a.dataset.over;
            } else delete a.dataset.under, delete a.dataset.over;
            $.taxeer("softkeysminmax", function() {
                1 === yes ? webapp.taht3nsar("-" + (min - len)) : 2 === yes ? webapp.taht3nsar(len + " / " + max + " +" + (len - max)) : webapp.taht3nsar(len);
            }, 50), $.taxeer("softkeysautoheight", function() {
                autoheight(a);
            }, 100);
        }
        Hooks.rununtilconsumed("softkey", [ e.key.toLowerCase(), e || {}, e && e.type, 0 ]), 
        preventdefault(e);
    }), Hooks.set("keydown", function(e) {
        time.now() - lastkeytime > 60 || void 0 === lastkeytime || !0 ? (e && softkeys.press(e.key, e, e.type, 0), 
        lastkeytime = time.now()) : preventdefault(e);
    }), Hooks.set("templateset", function(args) {
        var c = args[0], o = args[1], k = args[2];
        "skbutton" === args[3] && (k.icon && !o.icon && k.icon.remove(), o.label || o.icon || (c.hidden = 1));
    }), Hooks.set("restore", function(args) {
        var oldM = backstack.get("softkeys");
        oldM && (M = Object.assign({}, oldM), softkeys.update());
    }), preferences.get(softkeys.saveto, 1) && (skhelp.hidden = 1);
}(), function() {
    softkeys.list = {
        basic: function(LV) {
            LV ? (softkeys.set(K.en, function(k, e) {
                LV.element.dataset.rakkaz && (LV.press(K.en), e && e.preventDefault());
            }), softkeys.set(K.up, function(k, e) {
                LV.element.dataset.rakkaz && (LV.up(), e && e.preventDefault());
            }), softkeys.set(K.dn, function(k, e) {
                LV.element.dataset.rakkaz && (LV.down(), e && e.preventDefault());
            }), softkeys.set(K.rt, function(k, e) {
                LV.element.dataset.rakkaz && (LV.right(), e && e.preventDefault());
            }), softkeys.set(K.lf, function(k, e) {
                LV.element.dataset.rakkaz && (LV.left(), e && e.preventDefault());
            })) : softkeys.talaf([ K.en, K.up, K.dn, K.rt, K.lf ]);
        }
    };
}();

var sheet;

!function() {
    var header, container, zaahirname, ae, murakkaz, index = {};
    sheet = {
        okay: 0,
        cancel: 0,
        onshow: 0,
        zaahir: function(name) {
            return zaahirname === name;
        },
        bardaa: function(v) {
            if (container.firstElementChild) {
                var children = Object.values(container.firstElementChild.children);
                v ? (children.forEach(function(item) {
                    if ("list" === getdata(item, "focus")) {
                        var l = item.listobject;
                        l.murakkaz && (murakkaz = l, l.rakkaz());
                    }
                }), setdata(container, "bardaa", 1), softkeys.set(K.sl, function(e) {
                    webapp.itlaa3("pleasewait");
                }, 0, "iconhourglassempty"), ae = webapp.blur()) : (softkeys.set(K.sl, function(e) {
                    sheet.okay();
                }, 0, "icondone"), popdata(container, "bardaa"), ae && ae.focus(), murakkaz && murakkaz.rakkaz(1));
            }
        },
        header: function(text) {
            text ? (text instanceof Array ? header.dataset.i18n = text[0] : header.innerText = text, 
            header.hidden = 0) : (delete headerui.dataset.i18n, header.innerText = "", header.hidden = 1);
        },
        hide: function() {
            sheetui.hidden = 1, sheet.okay = 0, sheet.cancel = 0, zaahirname = 0;
        },
        show: function(args) {
            ae = murakkaz = 0, container.innerHTML = "", sheetui.hidden = 0, "string" == typeof args && (args = {
                name: args
            });
            var keys, name = args.name || args.n, title = args.title || args.t || "", minqabl = args.minqabl || args.b, callback = args.callback || args.c, oncancel = args.oncancel || args.x, ayyihaal = args.ayyihaal || args.a, init = args.init || args.i;
            header.innerText = title, sheet.onshow && sheet.onshow(name);
            var ui = index[name];
            if (ui) {
                zaahirname = name;
                var node = ui.cloneNode(!0);
                node && (delete node.dataset.sheet, node.dataset.visiblesheet = 1, node.hidden = 0, 
                container.appendChild(node), sheetui.focus(), translate && translate.update(sheetui), 
                Hooks.rununtilconsumed("widgets", sheetui), keys = templates.keys(container), init && init(keys), 
                Hooks.rununtilconsumed("widgets", sheetui));
            }
            if (sheet.okay = callback ? function(args) {
                callback && callback(args || keys), ayyihaal && ayyihaal(args || keys), webapp.blur(), 
                Hooks.run("back");
            } : 0, sheet.bardaa(), isfun(minqabl)) {
                var oldokay = sheet.okay;
                sheet.okay = function(args) {
                    sheet.bardaa(1), minqabl(args || keys, function(args) {
                        oldokay(args || keys);
                    });
                };
            }
            sheet.cancel = function(args) {
                oncancel && oncancel(args || keys), ayyihaal && ayyihaal(args || keys), webapp.blur(), 
                Hooks.run("back");
            };
        },
        get: function(name) {
            return name ? index[name] : container.firstElementChild;
        },
        index: function(parent) {
            var elements = (parent || document.body).querySelectorAll("[data-sheet]");
            for (var i in elements) elements.hasOwnProperty(i) && elements[i].dataset.sheet && (elements[i].hidden = 1, 
            index[elements[i].dataset.sheet] = elements[i]);
            return index;
        }
    }, Hooks.set("ready", function() {
        sheet.index();
        var mfateeh = templates.keys(sheetui);
        header = mfateeh.header, container = mfateeh.container;
    });
}();

var themes;

!function() {
    var K, P, settingsuid, current = 0, store = {
        0: {
            status: "rgba(0,0,0,0.6)",
            textl: "#fff",
            text: "#ddd",
            textd: "#aaa",
            textxd: "#777",
            primaryl: "#050505",
            primary: "black",
            primaryd: "black",
            primaryt: "rgba(0,0,0,0.8)",
            secondaryl: "#353535",
            secondary: "#333",
            secondaryd: "#252525",
            secondaryt: "rgba(40,40,40,0.8)",
            tertiaryl: "#454545",
            tertiary: "#444",
            tertiaryd: "#353535",
            tertiaryt: "rgba(53,53,53,0.8)",
            accentl: "#4ccbfc",
            accent: "#04baf5",
            accentt: "rgba(4, 186, 245, 0.7)",
            accentd: "#0284c0",
            accentdt: "rgba(4, 126, 205, 0.7)",
            green: "#0c0",
            yellow: "#ca0",
            redl: "#f99",
            red: "#c00",
            redd: "#900"
        },
        1: {
            status: "rgba(0,0,0,0.6)",
            textl: "#111",
            text: "#333",
            textd: "#666",
            textxd: "#888",
            primaryl: "#e6e6e6",
            primary: "#fff",
            primaryd: "#d6d6d6",
            primaryt: "rgba(255,255,255,0.8)",
            secondaryl: "#e6e6e6",
            secondary: "#d6d6d6",
            secondaryd: "#c6c6c6",
            secondaryt: "rgba(180,180,180,0.8)",
            tertiaryl: "#eee",
            tertiary: "#ddd",
            tertiaryd: "#ccc",
            tertiaryt: "rgba(204,204,204,0.8)",
            accentl: "#0bb8cb",
            accent: "#00609a",
            accentt: "rgba(0, 67, 113, 0.7)",
            accentd: "#004371",
            accentdt: "rgba(0, 37, 93, 0.7)",
            green: "#0c0",
            yellow: "#ca0",
            redl: "#900",
            red: "#c00",
            redd: "#faa"
        }
    };
    themes = {
        saveto: 19,
        set: function(theme, key, value) {
            var arglen = arguments.length;
            return 0 === arglen && themes.set(current), 1 === arglen && (store[theme] && (current = theme, 
            dynamicstyle.innerHTML = updatetheme(store[theme]), preferences.set(themes.saveto, current)), 
            themecolor && themecolor.setAttribute("content", themes.get("status"))), 2 === arglen && (store[theme] = key), 
            3 === arglen && (store[theme] = store[theme] || {}, store[theme][key] = value), 
            themes;
        },
        get: function(theme, key) {
            var arglen = arguments.length;
            return 0 === arglen && void 0 !== current ? current: 1 === arglen && void 0 !== current ? store[current][theme] : 2 === arglen && store[theme][key];
        },
        toggle: function() {
            current = current ? current = 0: 1, themes.set(current), settings.jaddad(settingsuid);
        }
    }, Hooks.set("ready", function() {
        preferences && (current = preferences.get(themes.saveto, 1) || 0), themes.set(current), 
        settingsuid = settings.adaaf("theme", function() {
            var iswhite = preferences.get(themes.saveto, 1);
            return themes.set(iswhite), [ iswhite ? "white" : "black" ];
        }, function() {
            preferences.set(themes.saveto, preferences.get(themes.saveto, 1) ? 0: 1);
        });
    }), Hooks.set("viewready", function(args) {
        switch (K = softkeys.K, P = softkeys.P, args.name) {
          case "main":
            softkeys.set(1, function(k, e) {
                themes.toggle(), e && e.preventDefault();
            }, "1", "icontheme");
        }
    });
}();

var dialog;

!function() {
    dialog = {
        okay: 0,
        cancel: 0,
        onshow: 0,
        hide: function() {
            dialogui.hidden = 1, dialog.okay = 0, dialog.cancel = 0;
        },
        show: function(args) {
            args = args || {}, markooz() && markooz().blur(), dialogui.hidden = 0;
            var k = templates.keys(dialogui), max = args.max || args.x, callback = args.callback || args.c, message = args.message || args.m, answer = args.answer || args.a, question = args.question || args.q;
            dialog.onshow && dialog.onshow(name), dialog.okay = function() {
                var answer = k.input.value;
                max && (answer = answer.slice(0, max)), callback && callback(answer), document.activeElement && document.activeElement.blur(), 
                Hooks.run("back");
            }, dialog.cancel = function() {
                document.activeElement && document.activeElement.blur(), Hooks.run("back");
            }, k.input.value = answer || "", attribute(k.input, "max", max || 0), question ? (k.input.hidden = 0, 
            k.input.focus()) : k.input.hidden = 1, innertext(k.message, ""), k.message.dataset.i18n = message || "", 
            translate.update(dialogui);
        }
    };
}(), function() {
    var x = 0, y = 0, curx = 0, cury = 0, horizontal = 0, vertical = 0, caught = 0, start = 0;
    Hooks.set("ready", function() {}), Hooks.set("keyup", function(e) {
        var k = e.key.toLowerCase();
        "r" === k && e.ctrlKey && (location.reload(), preventdefault(e)), [ "escape", "f11" ].includes(k) && document.fullscreenElement ? (document.exitFullscreen(), 
        preventdefault(e)) : "f11" === k && (document.firstElementChild.requestFullscreen(), 
        preventdefault(e));
    }), listener("touchstart", function(e) {
        softkeys.touchdpad && preventdefault(e), x = e.touches[0].clientX, y = e.touches[0].clientY, 
        caught = 0, start = e.timeStamp, Hooks.run("navigationstart", [ x, y ]);
    }, {
        passive: !1
    }), listener("touchmove", function(e) {
        curx = e.touches[0].clientX, cury = e.touches[0].clientY, horizontal = curx - x, 
        vertical = cury - y, horizontal < -15 || horizontal > 15 ? (horizontal > 15 ? horizontal = 1: horizontal < -15 && (horizontal = -1), 
        0 !== horizontal && (x = curx)) : horizontal = 0, vertical < -20 || vertical > 20 ? (vertical > 20 ? vertical = 1: vertical < -20 && (vertical = -1), 
        0 !== vertical && (y = cury)) : vertical = 0, 0 === horizontal && 0 === vertical || (caught = 1, 
        Hooks.run("navigation", [ horizontal, vertical ]));
    }), listener("touchend", function(e) {
        caught ? Hooks.run("navigationend", [ x, y, e.path, horizontal, vertical ]) : e.timeStamp - start > 250 ? Hooks.run("navigationlongpress", [ x, y, e.path, horizontal, vertical ]) : Hooks.run("navigationpress", [ x, y, e.path, horizontal, vertical ]);
    });
}(), function() {
    var settingsuid, lastitem, lamsahbar, locked = 0, edgestart = 0, edgeend = 0, softkeystouchdpad = 1;
    Hooks.set("ready", function() {
        preferences && (softkeystouchdpad = preferences.get(16, 1) || 1), softkeys.touchdpad = softkeystouchdpad, 
        settingsuid = settings.adaaf("softkeystouchdpad", function() {
            return softkeystouchdpad = preferences.get(16, 1), softkeys.touchdpad = softkeystouchdpad, 
            [ softkeystouchdpad ? "on" : "off" ];
        }, function() {
            preferences.set(16, preferences.get(16, 1) ? 0: 1);
        });
    }), Hooks.set("navigationstart", function(args) {
        locked = 0, edgestart = args[0] > innerwidth(-60) ? 1: args[0] < 60 ? -1: 0;
    }), Hooks.set("navigation", function(args) {
        locked && 2 !== locked || (args[0] > 0 && (softkeystouchdpad && !edgestart && softkeys.press(K.rt), 
        locked = 2), args[0] < 0 && (softkeystouchdpad && !edgestart && softkeys.press(K.lf), 
        locked = 2)), locked && 1 !== locked || (args[1] > 0 && (softkeystouchdpad && !edgestart && softkeys.press(K.dn), 
        locked = 1), args[1] < 0 && (softkeystouchdpad && !edgestart && softkeys.press(K.up), 
        locked = 1));
    });
    var doclick = function(path) {
        for (var i = 0; i < path.length; ++i) {
            if (path[i].onclick) {
                path[i].onclick(), path[i].blur();
                break;
            }
            if (path[i] instanceof HTMLButtonElement) {
                path[i].click(), path[i].blur();
                break;
            }
        }
    };
    Hooks.set("navigationend", function(args) {
        softkeystouchdpad ? pager && edgestart && (edgeend = 0, edgeend = args[0] > innerwidth(-60) ? 1: args[0] < 60 ? -1: 0, 
        edgestart !== edgeend && (1 === edgestart ? pager.yameen() : edgestart === -1 && pager.shimaal())) : (args[3] < 0 && pager && pager.yameen(), 
        args[3] > 0 && pager && pager.shimaal());
    }), Hooks.set("navigationpress", function(args) {
        var isbutton = 0;
        args[2].forEach(function(item) {
            (item instanceof HTMLButtonElement || item instanceof HTMLInputElement || item instanceof HTMLTextAreaElement) && (isbutton = 1, 
            item.focus(), lastitem && (popdata(lastitem, "lamsah"), lastitem = 0), setdata(item, "lamsah", 1), 
            lastitem = item, $.taxeer("sklamsah", function() {
                lastitem && (popdata(lastitem, "lamsah"), lastitem = 0);
            }, 300));
        }), args[1] > innerheight(-60) ? softkeystouchdpad && doclick(args[2]) : iswithinelement(args, skhints) || isbutton ? (softkeystouchdpad && doclick(args[2]), 
        softkeys.showhints()) : softkeystouchdpad && (skhints.hidden || softkeys.showhints(), 
        softkeys.press(K.en));
    }), Hooks.set("navigationlongpress", function(args) {
        softkeys.showhints();
    });
    listener(skhints, [ "touchstart" ], function(e) {
        lamsahbar = [ e.touches[0].pageX, e.touches[0].pageY ];
    }), listener(skhints, [ "touchmove" ], function(e) {
        if (lamsahbar) {
            lamsahbar = [ e.touches[0].pageX, e.touches[0].pageY ];
            var el, path, ch = skhints.children;
            "touchmove" == e.type && (path = raycast(lamsahbar[0], lamsahbar[1]));
            for (var i in ch) if (ch.hasOwnProperty(i)) for (j in path) path[j] == ch[i] && (el = ch[i]);
            if (el) {
                for (var i in ch) ch.hasOwnProperty(i) && path[j] != el && popdata(ch[i], "hawm");
                setdata(el, "hawm", 1), softkeys.showhints();
            }
        }
    }), listener(skhints, [ "touchend", "touchcancel" ], function(e) {
        var path, el, ch = skhints.children;
        "touchend" == e.type && lamsahbar && (path = raycast(lamsahbar[0], lamsahbar[1]));
        for (var i in ch) if (ch.hasOwnProperty(i)) for (j in path) path[j] == ch[i] && (el = ch[i]);
        for (var i in ch) ch.hasOwnProperty(i) && (ch[i] == el && "touchend" == e.type && getdata(ch[i], "hawm") && ch[i].click(), 
        popdata(ch[i], "hawm"));
        lamsahbar = 0;
    });
}();

var main, replacements = {}, surahs = {}, cached = {}, meanings = {};

!function() {
    "use strict";
    var textview, textview2, progress, duration, current, gname, showmeanings, settingsuid, surah = 1, ayah = 0, meaningstoggle = function() {
        showmeanings = preferences.get(13, 1) ? 0: 1, preferences.set(13, showmeanings), 
        main.show();
    }, nazzaf = function(text) {
        return text.toLowerCase().replace(/ئ/g, "ء").replace(/ى/g, "ي").replace(/أ/g, "ا").replace(/إ/g, "ا").replace(/آ/g, "ا").replace(/ٱ/g, "ا").replace(/ؤ/g, "و").replace(/ک/g, "ك").replace(/ہ/g, "ه").replace(/َ/g, "").replace(/ِ/g, "").replace(/ُ/g, "").replace(/ّ/g, "").replace(/ٰ/g, "").replace(/ْ/g, "").replace(/ٌ/g, "").replace(/ً/g, "").replace(/ٍ/g, "").replace(/ٓ/g, "");
    }, nateejah = function(surah, ayah, string) {
        var stripped = cached[surah][ayah].split(string), str = "";
        return stripped[0].length && (str += stripped[0].split(" ").slice(-4).join(" ")), 
        stripped.forEach(function(sentence, j) {
            if (sentence.length && j) {
                str += "<span>" + string + "</span>";
                var words = sentence.split(" ");
                words.splice(0, 4).forEach(function(item, i) {
                    item.length ? (i && (str += " "), str += item) : str += " ";
                }), words.length && (words.length > 4 && (str += "&hellip;"), words.splice(-4).forEach(function(item, i) {
                    str += item.length ? " " + item: " ";
                }));
            }
        }), str;
    }, hawalah = function(surah, ayah) {
        return meta.surahs[surah][4] + " " + (parseInt(ayah) + 1);
    };
    main = {
        fahras: function(T, Q) {
            var lines = Q.split(",");
            T.split(",").forEach(function(item, i) {
                var splat = item.split("|");
                replacements[splat[1]] = splat[0], splat[2] && splat[2].length && (meanings[splat[0]] = splat[2]);
            }), lines.forEach(function(line) {
                var index = line.split("|"), s = index[0], text = index[2], newtext = "";
                replacements[text] && (text = replacements[text]), text.split(" ").forEach(function(word) {
                    newtext += replacements[word] ? " " + replacements[word] : " " + word;
                }), newtext = newtext.trim(), cached[s] = cached[s] || [], cached[s].push(nazzaf(newtext)), 
                surahs[s] = surahs[s] || [], surahs[s].push(newtext);
            }), main.show();
        },
        ilaa: function(s, a) {
            surah = s, ayah = a || 0, main.hifz(), main.show();
        },
        show: function() {
            var metadata = meta.surahs[surah], ayaat = surahs[surah];
            if (ayaat) {
                surahpicker && surahpicker.ilaa(surah), progress.style.width = Math.floor(ayah / (ayaat.length - 1) * 100 + .75) + "%", 
                gname.innerText = surah + " " + metadata[4], current.innerText = ayah + 1, duration.innerText = ayaat.length, 
                webapp.scrolltotop();
                var str = "";
                ayaat[ayah].split(" ").forEach(function(item, i) {
                    str += "<span>", str += item + (showmeanings && meanings[item] ? "<div class=dim>" + meanings[item] + "</div>" : ""), 
                    str += "</span>&nbsp;&nbsp;";
                }), textview.innerHTML = str.trim(), translate.update();
            }
        },
        axad: function() {
            return [ surah, ayah ];
        },
        next: function() {
            if (surah < 114) return ++surah, ayah = 0, main.hifz(), main.show(), 1;
        },
        prev: function(fromend) {
            if (surah > 1) return --surah, ayah = fromend ? surahs[surah].length - 1: 0, main.hifz(), 
            main.show(), fromend && webapp.scrolltobottom(), 1;
        },
        nextayah: function() {
            var text = surahs[surah];
            if (text) return text[ayah + 1] ? (++ayah, main.show(), main.hifz(), 1) : main.next();
        },
        prevayah: function() {
            return ayah > 0 ? (--ayah, main.show(), main.hifz(), webapp.scrolltobottom(), 1) : main.prev(1);
        },
        hifz: function(restore, bookmark) {
            restore ? (surah = preferences.get(bookmark ? "bs" : "s", 1) || 1, ayah = preferences.get(bookmark ? "ba" : "a", 1) || 0) : (preferences.set(bookmark ? "bs" : "s", surah), 
            preferences.set(bookmark ? "ba" : "a", ayah));
        },
        badaa: function(T, Q) {
            main.hifz(1), main.fahras(T, Q);
        }
    }, Hooks.set("bahaconpress", function(args) {
        args[1] === K.en && (Hooks.run("back"), surah = args[0].surah, ayah = args[0].ayah, 
        main.hifz(), main.show());
    }), Hooks.set("bahac", function(rawstring) {
        var string = nazzaf(rawstring).trim();
        if (string.length) for (var results = [], count = 0, surahcount = 0, i = 1; i <= 114 && surahcount < 3; ++i) {
            var metadata = meta.surahs[i];
            (nazzaf(metadata[4]).includes(string) || nazzaf(metadata[6]).includes(string)) && (results.push({
                id: i,
                surah: parseInt(i),
                ayah: 0,
                title: i + " " + metadata[4],
                body: metadata[6]
            }), ++surahcount);
        }
        if (string.length > 1) for (var i in cached) {
            var s = cached[i];
            for (var j in s) {
                var a = s[j];
                if (a.includes(string) && results.push({
                    titlehide: hawalah(i, j),
                    surah: parseInt(i),
                    ayah: parseInt(j),
                    id: i + ":" + j,
                    bodyshowhtml: nateejah(i, j, nazzaf(rawstring))
                }), ++count, results.length >= 20) break;
            }
            if (results.length >= 20) break;
        }
        bahac.fahras(results);
    }), Hooks.set("scroll", function(top) {
        globalplayer.style.position = top > 12 ? "fixed" : "", textview.style.paddingTop = top > 12 ? "24px" : "", 
        duration.hidden = gname.hidden = top > 12 ? 1: 0;
    }), Hooks.set("ready", function() {
        webapp.statusbarpadding();
        var mfateeh = view.mfateeh("main");
        textview = mfateeh.text, textview2 = mfateeh.text2, gname = mfateeh.name, progress = mfateeh.progress, 
        duration = mfateeh.duration, current = mfateeh.current, showmeanings = preferences.get(13, 1), 
        settingsuid = settings.adaaf("showmeanings", function() {
            return showmeanings = preferences.get(13, 1), translate(showmeanings ? "on" : "off");
        }, function() {
            meaningstoggle();
        }), tempscript.onload = function() {
            main.badaa(T, Q);
        }, tempscript.src = "q.js";
    }), Hooks.set("viewready", function(args) {
        switch (args.name) {
          case "main":
            webapp.header(), softkeys.set(K.lf, function() {
                main.prev();
            }), softkeys.set(K.rt, function() {
                main.next();
            }), softkeys.set(K.dn, function() {
                if (webapp.isatbottom()) return main.nextayah();
            }, "d", "iconkeyboardarrowdown"), softkeys.set(K.up, function() {
                if (webapp.isatop()) return main.prevayah();
            }, "u", "iconkeyboardarrowup"), softkeys.set(K.en, function() {
                return main.hifz(0, 1), webapp.itlaa3([ "bookmarked" ]), 1;
            }, 0, "iconbookmarkborder"), softkeys.set("5", function() {
                return main.hifz(1, 1), main.show(), webapp.itlaa3([ "restored" ]), 1;
            }, "5", "iconhistory"), softkeys.set("7", function() {
                return meaningstoggle(), settings.jaddad(settingsuid), 1;
            }, "7", "icontranslate"), softkeys.set(K.sl, function() {
                Hooks.run("view", "surahs");
            }, 0, "iconmenu");
        }
    }), Hooks.set("restore", function(darajah) {
        if (0 === darajah) switch (view.axad()) {
          case "main":
            webapp.header(), main.show();
        }
    });
}();

var surahpicker, surahslist;

!function() {
    "use strict";
    surahpicker = {
        ilaa: function(s) {
            surahslist && surahslist.select(s - 1, 1, 1, 1);
        }
    }, Hooks.set("ready", function() {
        surahslist = list(view.mfateeh("surahs").list), surahslist.idprefix("surah"), surahpicker.ilaa(main.axad()[0]);
        for (var i = 1; i <= 114; ++i) {
            var metadata = meta.surahs[i];
            surahslist.set({
                id: i - 1,
                title: i + " " + metadata[4],
                body: metadata[6],
                subtitle: metadata[1] + " " + translate("ayaat")
            });
        }
        surahslist.onpress = function(item, key, i) {
            key === K.en && (main.ilaa(i + 1), Hooks.run("back"));
        };
    }), Hooks.set("viewready", function(args) {
        switch (args.name) {
          case "surahs":
            webapp.header(), softkeys.list.basic(surahslist), surahpicker.ilaa(main.axad()[0]), 
            surahslist.rakkaz(1), surahslist.intaxabscroll();
        }
    }), Hooks.set("restore", function(darajah) {
        if (1 === darajah) switch (view.axad()) {
          case "surahs":
            surahslist.select();
        }
    });
}();

var meta = {};

!function() {
    "use strict";
    meta.surahs = [ [], [ 0, 7, 5, 1, "الفاتحة", "Al-Faatiha", "The Opening", 0 ], [ 7, 286, 87, 40, "البقرة", "Al-Baqara", "The Cow", 1 ], [ 293, 200, 89, 20, "آل عمران", "Aal-i-Imraan", "The Family of Imraan", 1 ], [ 493, 176, 92, 24, "النساء", "An-Nisaa", "The Women", 1 ], [ 669, 120, 112, 16, "المائدة", "Al-Maaida", "The Table", 1 ], [ 789, 165, 55, 20, "الأنعام", "Al-An'aam", "The Cattle", 0 ], [ 954, 206, 39, 24, "الأعراف", "Al-A'raaf", "The Heights", 0 ], [ 1160, 75, 88, 10, "الأنفال", "Al-Anfaal", "The Spoils of War", 1 ], [ 1235, 129, 113, 16, "التوبة", "At-Tawba", "The Repentance", 1 ], [ 1364, 109, 51, 11, "يونس", "Yunus", "Jonas", 0 ], [ 1473, 123, 52, 10, "هود", "Hud", "Hud", 0 ], [ 1596, 111, 53, 12, "يوسف", "Yusuf", "Joseph", 0 ], [ 1707, 43, 96, 6, "الرعد", "Ar-Ra'd", "The Thunder", 1 ], [ 1750, 52, 72, 7, "ابراهيم", "Ibrahim", "Abraham", 0 ], [ 1802, 99, 54, 6, "الحجر", "Al-Hijr", "The Rock", 0 ], [ 1901, 128, 70, 16, "النحل", "An-Nahl", "The Bee", 0 ], [ 2029, 111, 50, 12, "الإسراء", "Al-Israa", "The Night Journey", 0 ], [ 2140, 110, 69, 12, "الكهف", "Al-Kahf", "The Cave", 0 ], [ 2250, 98, 44, 6, "مريم", "Maryam", "Mary", 0 ], [ 2348, 135, 45, 8, "طه", "Taa-Haa", "Taa-Haa", 0 ], [ 2483, 112, 73, 7, "الأنبياء", "Al-Anbiyaa", "The Prophets", 0 ], [ 2595, 78, 103, 10, "الحج", "Al-Hajj", "The Pilgrimage", 1 ], [ 2673, 118, 74, 6, "المؤمنون", "Al-Muminoon", "The Believers", 0 ], [ 2791, 64, 102, 9, "النور", "An-Noor", "The Light", 1 ], [ 2855, 77, 42, 6, "الفرقان", "Al-Furqaan", "The Criterion", 0 ], [ 2932, 227, 47, 11, "الشعراء", "Ash-Shu'araa", "The Poets", 0 ], [ 3159, 93, 48, 7, "النمل", "An-Naml", "The Ant", 0 ], [ 3252, 88, 49, 8, "القصص", "Al-Qasas", "The Stories", 0 ], [ 3340, 69, 85, 7, "العنكبوت", "Al-Ankaboot", "The Spider", 0 ], [ 3409, 60, 84, 6, "الروم", "Ar-Room", "The Romans", 0 ], [ 3469, 34, 57, 3, "لقمان", "Luqman", "Luqman", 0 ], [ 3503, 30, 75, 3, "السجدة", "As-Sajda", "The Prostration", 0 ], [ 3533, 73, 90, 9, "الأحزاب", "Al-Ahzaab", "The Clans", 1 ], [ 3606, 54, 58, 6, "سبإ", "Saba", "Sheba", 0 ], [ 3660, 45, 43, 5, "فاطر", "Faatir", "The Originator", 0 ], [ 3705, 83, 41, 5, "يس", "Yaseen", "Yaseen", 0 ], [ 3788, 182, 56, 5, "الصافات", "As-Saaffaat", "Those drawn up in Ranks", 0 ], [ 3970, 88, 38, 5, "ص", "Saad", "The letter Saad", 0 ], [ 4058, 75, 59, 8, "الزمر", "Az-Zumar", "The Groups", 0 ], [ 4133, 85, 60, 9, "غافر", "Al-Ghaafir", "The Forgiver", 0 ], [ 4218, 54, 61, 6, "فصلت", "Fussilat", "Explained in detail", 0 ], [ 4272, 53, 62, 5, "الشورى", "Ash-Shura", "Consultation", 0 ], [ 4325, 89, 63, 7, "الزخرف", "Az-Zukhruf", "Ornaments of gold", 0 ], [ 4414, 59, 64, 3, "الدخان", "Ad-Dukhaan", "The Smoke", 0 ], [ 4473, 37, 65, 4, "الجاثية", "Al-Jaathiya", "Crouching", 0 ], [ 4510, 35, 66, 4, "الأحقاف", "Al-Ahqaf", "The Dunes", 0 ], [ 4545, 38, 95, 4, "محمد", "Muhammad", "Muhammad", 1 ], [ 4583, 29, 111, 4, "الفتح", "Al-Fath", "The Victory", 1 ], [ 4612, 18, 106, 2, "الحجرات", "Al-Hujuraat", "The Inner Apartments", 1 ], [ 4630, 45, 34, 3, "ق", "Qaaf", "The letter Qaaf", 0 ], [ 4675, 60, 67, 3, "الذاريات", "Adh-Dhaariyat", "The Winnowing Winds", 0 ], [ 4735, 49, 76, 2, "الطور", "At-Tur", "The Mount", 0 ], [ 4784, 62, 23, 3, "النجم", "An-Najm", "The Star", 0 ], [ 4846, 55, 37, 3, "القمر", "Al-Qamar", "The Moon", 0 ], [ 4901, 78, 97, 3, "الرحمن", "Ar-Rahmaan", "The Beneficent", 1 ], [ 4979, 96, 46, 3, "الواقعة", "Al-Waaqia", "The Inevitable", 0 ], [ 5075, 29, 94, 4, "الحديد", "Al-Hadid", "The Iron", 1 ], [ 5104, 22, 105, 3, "المجادلة", "Al-Mujaadila", "The Pleading Woman", 1 ], [ 5126, 24, 101, 3, "الحشر", "Al-Hashr", "The Exile", 1 ], [ 5150, 13, 91, 2, "الممتحنة", "Al-Mumtahana", "She that is to be examined", 1 ], [ 5163, 14, 109, 2, "الصف", "As-Saff", "The Ranks", 1 ], [ 5177, 11, 110, 2, "الجمعة", "Al-Jumu'a", "Friday", 1 ], [ 5188, 11, 104, 2, "المنافقون", "Al-Munaafiqoon", "The Hypocrites", 1 ], [ 5199, 18, 108, 2, "التغابن", "At-Taghaabun", "Mutual Disillusion", 1 ], [ 5217, 12, 99, 2, "الطلاق", "At-Talaaq", "Divorce", 1 ], [ 5229, 12, 107, 2, "التحريم", "At-Tahrim", "The Prohibition", 1 ], [ 5241, 30, 77, 2, "الملك", "Al-Mulk", "The Sovereignty", 0 ], [ 5271, 52, 2, 2, "القلم", "Al-Qalam", "The Pen", 0 ], [ 5323, 52, 78, 2, "الحاقة", "Al-Haaqqa", "The Reality", 0 ], [ 5375, 44, 79, 2, "المعارج", "Al-Ma'aarij", "The Ascending Stairways", 0 ], [ 5419, 28, 71, 2, "نوح", "Nooh", "Noah", 0 ], [ 5447, 28, 40, 2, "الجن", "Al-Jinn", "The Jinn", 0 ], [ 5475, 20, 3, 2, "المزمل", "Al-Muzzammil", "The Enshrouded One", 0 ], [ 5495, 56, 4, 2, "المدثر", "Al-Muddaththir", "The Cloaked One", 0 ], [ 5551, 40, 31, 2, "القيامة", "Al-Qiyaama", "The Resurrection", 0 ], [ 5591, 31, 98, 2, "الانسان", "Al-Insaan", "Man", 1 ], [ 5622, 50, 33, 2, "المرسلات", "Al-Mursalaat", "The Emissaries", 0 ], [ 5672, 40, 80, 2, "النبإ", "An-Naba", "The Announcement", 0 ], [ 5712, 46, 81, 2, "النازعات", "An-Naazi'aat", "Those who drag forth", 0 ], [ 5758, 42, 24, 1, "عبس", "Abasa", "He frowned", 0 ], [ 5800, 29, 7, 1, "التكوير", "At-Takwir", "The Overthrowing", 0 ], [ 5829, 19, 82, 1, "الإنفطار", "Al-Infitaar", "The Cleaving", 0 ], [ 5848, 36, 86, 1, "المطففين", "Al-Mutaffifin", "Defrauding", 0 ], [ 5884, 25, 83, 1, "الإنشقاق", "Al-Inshiqaaq", "The Splitting Open", 0 ], [ 5909, 22, 27, 1, "البروج", "Al-Burooj", "The Constellations", 0 ], [ 5931, 17, 36, 1, "الطارق", "At-Taariq", "The Morning Star", 0 ], [ 5948, 19, 8, 1, "الأعلى", "Al-A'laa", "The Most High", 0 ], [ 5967, 26, 68, 1, "الغاشية", "Al-Ghaashiya", "The Overwhelming", 0 ], [ 5993, 30, 10, 1, "الفجر", "Al-Fajr", "The Dawn", 0 ], [ 6023, 20, 35, 1, "البلد", "Al-Balad", "The City", 0 ], [ 6043, 15, 26, 1, "الشمس", "Ash-Shams", "The Sun", 0 ], [ 6058, 21, 9, 1, "الليل", "Al-Lail", "The Night", 0 ], [ 6079, 11, 11, 1, "الضحى", "Ad-Dhuhaa", "The Morning Hours", 0 ], [ 6090, 8, 12, 1, "الشرح", "Ash-Sharh", "The Consolation", 0 ], [ 6098, 8, 28, 1, "التين", "At-Tin", "The Fig", 0 ], [ 6106, 19, 1, 1, "العلق", "Al-Alaq", "The Clot", 0 ], [ 6125, 5, 25, 1, "القدر", "Al-Qadr", "The Power, Fate", 0 ], [ 6130, 8, 100, 1, "البينة", "Al-Bayyina", "The Evidence", 1 ], [ 6138, 8, 93, 1, "الزلزلة", "Az-Zalzala", "The Earthquake", 1 ], [ 6146, 11, 14, 1, "العاديات", "Al-Aadiyaat", "The Chargers", 0 ], [ 6157, 11, 30, 1, "القارعة", "Al-Qaari'a", "The Calamity", 0 ], [ 6168, 8, 16, 1, "التكاثر", "At-Takaathur", "Competition", 0 ], [ 6176, 3, 13, 1, "العصر", "Al-Asr", "The Declining Day, Epoch", 0 ], [ 6179, 9, 32, 1, "الهمزة", "Al-Humaza", "The Traducer", 0 ], [ 6188, 5, 19, 1, "الفيل", "Al-Fil", "The Elephant", 0 ], [ 6193, 4, 29, 1, "قريش", "Quraish", "Quraysh", 0 ], [ 6197, 7, 17, 1, "الماعون", "Al-Maa'un", "Almsgiving", 0 ], [ 6204, 3, 15, 1, "الكوثر", "Al-Kawthar", "Abundance", 0 ], [ 6207, 6, 18, 1, "الكافرون", "Al-Kaafiroon", "The Disbelievers", 0 ], [ 6213, 3, 114, 1, "النصر", "An-Nasr", "Divine Support", 1 ], [ 6216, 5, 6, 1, "المسد", "Al-Masad", "The Palm Fibre", 0 ], [ 6221, 4, 22, 1, "الإخلاص", "Al-Ikhlaas", "Sincerity", 0 ], [ 6225, 5, 20, 1, "الفلق", "Al-Falaq", "The Dawn", 0 ], [ 6230, 6, 21, 1, "الناس", "An-Naas", "Mankind", 0 ], [ 6236, 1 ] ], 
    meta.ajzaa = [ [], [ 1, 1 ], [ 2, 142 ], [ 2, 253 ], [ 3, 93 ], [ 4, 24 ], [ 4, 148 ], [ 5, 82 ], [ 6, 111 ], [ 7, 88 ], [ 8, 41 ], [ 9, 93 ], [ 11, 6 ], [ 12, 53 ], [ 15, 1 ], [ 17, 1 ], [ 18, 75 ], [ 21, 1 ], [ 23, 1 ], [ 25, 21 ], [ 27, 56 ], [ 29, 46 ], [ 33, 31 ], [ 36, 28 ], [ 39, 32 ], [ 41, 47 ], [ 46, 1 ], [ 51, 31 ], [ 58, 1 ], [ 67, 1 ], [ 78, 1 ], [ 115, 1 ] ], 
    meta.hizbquarter = [ [], [ 1, 1 ], [ 2, 26 ], [ 2, 44 ], [ 2, 60 ], [ 2, 75 ], [ 2, 92 ], [ 2, 106 ], [ 2, 124 ], [ 2, 142 ], [ 2, 158 ], [ 2, 177 ], [ 2, 189 ], [ 2, 203 ], [ 2, 219 ], [ 2, 233 ], [ 2, 243 ], [ 2, 253 ], [ 2, 263 ], [ 2, 272 ], [ 2, 283 ], [ 3, 15 ], [ 3, 33 ], [ 3, 52 ], [ 3, 75 ], [ 3, 93 ], [ 3, 113 ], [ 3, 133 ], [ 3, 153 ], [ 3, 171 ], [ 3, 186 ], [ 4, 1 ], [ 4, 12 ], [ 4, 24 ], [ 4, 36 ], [ 4, 58 ], [ 4, 74 ], [ 4, 88 ], [ 4, 100 ], [ 4, 114 ], [ 4, 135 ], [ 4, 148 ], [ 4, 163 ], [ 5, 1 ], [ 5, 12 ], [ 5, 27 ], [ 5, 41 ], [ 5, 51 ], [ 5, 67 ], [ 5, 82 ], [ 5, 97 ], [ 5, 109 ], [ 6, 13 ], [ 6, 36 ], [ 6, 59 ], [ 6, 74 ], [ 6, 95 ], [ 6, 111 ], [ 6, 127 ], [ 6, 141 ], [ 6, 151 ], [ 7, 1 ], [ 7, 31 ], [ 7, 47 ], [ 7, 65 ], [ 7, 88 ], [ 7, 117 ], [ 7, 142 ], [ 7, 156 ], [ 7, 171 ], [ 7, 189 ], [ 8, 1 ], [ 8, 22 ], [ 8, 41 ], [ 8, 61 ], [ 9, 1 ], [ 9, 19 ], [ 9, 34 ], [ 9, 46 ], [ 9, 60 ], [ 9, 75 ], [ 9, 93 ], [ 9, 111 ], [ 9, 122 ], [ 10, 11 ], [ 10, 26 ], [ 10, 53 ], [ 10, 71 ], [ 10, 90 ], [ 11, 6 ], [ 11, 24 ], [ 11, 41 ], [ 11, 61 ], [ 11, 84 ], [ 11, 108 ], [ 12, 7 ], [ 12, 30 ], [ 12, 53 ], [ 12, 77 ], [ 12, 101 ], [ 13, 5 ], [ 13, 19 ], [ 13, 35 ], [ 14, 10 ], [ 14, 28 ], [ 15, 1 ], [ 15, 50 ], [ 16, 1 ], [ 16, 30 ], [ 16, 51 ], [ 16, 75 ], [ 16, 90 ], [ 16, 111 ], [ 17, 1 ], [ 17, 23 ], [ 17, 50 ], [ 17, 70 ], [ 17, 99 ], [ 18, 17 ], [ 18, 32 ], [ 18, 51 ], [ 18, 75 ], [ 18, 99 ], [ 19, 22 ], [ 19, 59 ], [ 20, 1 ], [ 20, 55 ], [ 20, 83 ], [ 20, 111 ], [ 21, 1 ], [ 21, 29 ], [ 21, 51 ], [ 21, 83 ], [ 22, 1 ], [ 22, 19 ], [ 22, 38 ], [ 22, 60 ], [ 23, 1 ], [ 23, 36 ], [ 23, 75 ], [ 24, 1 ], [ 24, 21 ], [ 24, 35 ], [ 24, 53 ], [ 25, 1 ], [ 25, 21 ], [ 25, 53 ], [ 26, 1 ], [ 26, 52 ], [ 26, 111 ], [ 26, 181 ], [ 27, 1 ], [ 27, 27 ], [ 27, 56 ], [ 27, 82 ], [ 28, 12 ], [ 28, 29 ], [ 28, 51 ], [ 28, 76 ], [ 29, 1 ], [ 29, 26 ], [ 29, 46 ], [ 30, 1 ], [ 30, 31 ], [ 30, 54 ], [ 31, 22 ], [ 32, 11 ], [ 33, 1 ], [ 33, 18 ], [ 33, 31 ], [ 33, 51 ], [ 33, 60 ], [ 34, 10 ], [ 34, 24 ], [ 34, 46 ], [ 35, 15 ], [ 35, 41 ], [ 36, 28 ], [ 36, 60 ], [ 37, 22 ], [ 37, 83 ], [ 37, 145 ], [ 38, 21 ], [ 38, 52 ], [ 39, 8 ], [ 39, 32 ], [ 39, 53 ], [ 40, 1 ], [ 40, 21 ], [ 40, 41 ], [ 40, 66 ], [ 41, 9 ], [ 41, 25 ], [ 41, 47 ], [ 42, 13 ], [ 42, 27 ], [ 42, 51 ], [ 43, 24 ], [ 43, 57 ], [ 44, 17 ], [ 45, 12 ], [ 46, 1 ], [ 46, 21 ], [ 47, 10 ], [ 47, 33 ], [ 48, 18 ], [ 49, 1 ], [ 49, 14 ], [ 50, 27 ], [ 51, 31 ], [ 52, 24 ], [ 53, 26 ], [ 54, 9 ], [ 55, 1 ], [ 56, 1 ], [ 56, 75 ], [ 57, 16 ], [ 58, 1 ], [ 58, 14 ], [ 59, 11 ], [ 60, 7 ], [ 62, 1 ], [ 63, 4 ], [ 65, 1 ], [ 66, 1 ], [ 67, 1 ], [ 68, 1 ], [ 69, 1 ], [ 70, 19 ], [ 72, 1 ], [ 73, 20 ], [ 75, 1 ], [ 76, 19 ], [ 78, 1 ], [ 80, 1 ], [ 82, 1 ], [ 84, 1 ], [ 87, 1 ], [ 90, 1 ], [ 94, 1 ], [ 100, 9 ], [ 115, 1 ] ], 
    meta.manzil = [ [], [ 1, 1 ], [ 5, 1 ], [ 10, 1 ], [ 17, 1 ], [ 26, 1 ], [ 37, 1 ], [ 50, 1 ] ], 
    meta.rukuu3 = [ [], [ 1, 1 ], [ 2, 1 ], [ 2, 8 ], [ 2, 21 ], [ 2, 30 ], [ 2, 40 ], [ 2, 47 ], [ 2, 60 ], [ 2, 62 ], [ 2, 72 ], [ 2, 83 ], [ 2, 87 ], [ 2, 97 ], [ 2, 104 ], [ 2, 113 ], [ 2, 122 ], [ 2, 130 ], [ 2, 142 ], [ 2, 148 ], [ 2, 153 ], [ 2, 164 ], [ 2, 168 ], [ 2, 177 ], [ 2, 183 ], [ 2, 189 ], [ 2, 197 ], [ 2, 211 ], [ 2, 217 ], [ 2, 222 ], [ 2, 229 ], [ 2, 232 ], [ 2, 236 ], [ 2, 243 ], [ 2, 249 ], [ 2, 254 ], [ 2, 258 ], [ 2, 261 ], [ 2, 267 ], [ 2, 274 ], [ 2, 282 ], [ 2, 284 ], [ 3, 1 ], [ 3, 10 ], [ 3, 21 ], [ 3, 31 ], [ 3, 42 ], [ 3, 55 ], [ 3, 64 ], [ 3, 72 ], [ 3, 81 ], [ 3, 92 ], [ 3, 102 ], [ 3, 110 ], [ 3, 121 ], [ 3, 130 ], [ 3, 144 ], [ 3, 149 ], [ 3, 156 ], [ 3, 172 ], [ 3, 181 ], [ 3, 190 ], [ 4, 1 ], [ 4, 11 ], [ 4, 15 ], [ 4, 23 ], [ 4, 26 ], [ 4, 34 ], [ 4, 43 ], [ 4, 51 ], [ 4, 60 ], [ 4, 71 ], [ 4, 77 ], [ 4, 88 ], [ 4, 92 ], [ 4, 97 ], [ 4, 101 ], [ 4, 105 ], [ 4, 113 ], [ 4, 116 ], [ 4, 127 ], [ 4, 135 ], [ 4, 142 ], [ 4, 153 ], [ 4, 163 ], [ 4, 172 ], [ 5, 1 ], [ 5, 6 ], [ 5, 12 ], [ 5, 20 ], [ 5, 27 ], [ 5, 35 ], [ 5, 44 ], [ 5, 51 ], [ 5, 57 ], [ 5, 67 ], [ 5, 78 ], [ 5, 87 ], [ 5, 94 ], [ 5, 101 ], [ 5, 109 ], [ 5, 116 ], [ 6, 1 ], [ 6, 11 ], [ 6, 21 ], [ 6, 31 ], [ 6, 42 ], [ 6, 51 ], [ 6, 56 ], [ 6, 61 ], [ 6, 71 ], [ 6, 83 ], [ 6, 91 ], [ 6, 95 ], [ 6, 101 ], [ 6, 111 ], [ 6, 122 ], [ 6, 130 ], [ 6, 141 ], [ 6, 145 ], [ 6, 151 ], [ 6, 155 ], [ 7, 1 ], [ 7, 11 ], [ 7, 26 ], [ 7, 32 ], [ 7, 40 ], [ 7, 48 ], [ 7, 54 ], [ 7, 59 ], [ 7, 65 ], [ 7, 73 ], [ 7, 85 ], [ 7, 94 ], [ 7, 100 ], [ 7, 109 ], [ 7, 127 ], [ 7, 130 ], [ 7, 142 ], [ 7, 148 ], [ 7, 152 ], [ 7, 158 ], [ 7, 163 ], [ 7, 172 ], [ 7, 182 ], [ 7, 189 ], [ 8, 1 ], [ 8, 11 ], [ 8, 20 ], [ 8, 29 ], [ 8, 38 ], [ 8, 45 ], [ 8, 49 ], [ 8, 59 ], [ 8, 65 ], [ 8, 70 ], [ 9, 1 ], [ 9, 7 ], [ 9, 17 ], [ 9, 25 ], [ 9, 30 ], [ 9, 38 ], [ 9, 43 ], [ 9, 60 ], [ 9, 67 ], [ 9, 73 ], [ 9, 81 ], [ 9, 90 ], [ 9, 100 ], [ 9, 111 ], [ 9, 119 ], [ 9, 123 ], [ 10, 1 ], [ 10, 11 ], [ 10, 21 ], [ 10, 31 ], [ 10, 41 ], [ 10, 54 ], [ 10, 61 ], [ 10, 71 ], [ 10, 83 ], [ 10, 93 ], [ 10, 104 ], [ 11, 1 ], [ 11, 9 ], [ 11, 25 ], [ 11, 36 ], [ 11, 50 ], [ 11, 61 ], [ 11, 69 ], [ 11, 84 ], [ 11, 96 ], [ 11, 110 ], [ 12, 1 ], [ 12, 7 ], [ 12, 21 ], [ 12, 30 ], [ 12, 36 ], [ 12, 43 ], [ 12, 50 ], [ 12, 58 ], [ 12, 69 ], [ 12, 80 ], [ 12, 94 ], [ 12, 105 ], [ 13, 1 ], [ 13, 8 ], [ 13, 19 ], [ 13, 27 ], [ 13, 32 ], [ 13, 38 ], [ 14, 1 ], [ 14, 7 ], [ 14, 13 ], [ 14, 22 ], [ 14, 28 ], [ 14, 35 ], [ 14, 42 ], [ 15, 1 ], [ 15, 16 ], [ 15, 26 ], [ 15, 45 ], [ 15, 61 ], [ 15, 80 ], [ 16, 1 ], [ 16, 10 ], [ 16, 22 ], [ 16, 26 ], [ 16, 35 ], [ 16, 41 ], [ 16, 51 ], [ 16, 61 ], [ 16, 66 ], [ 16, 71 ], [ 16, 77 ], [ 16, 84 ], [ 16, 90 ], [ 16, 101 ], [ 16, 111 ], [ 16, 120 ], [ 17, 1 ], [ 17, 11 ], [ 17, 23 ], [ 17, 31 ], [ 17, 41 ], [ 17, 53 ], [ 17, 61 ], [ 17, 71 ], [ 17, 78 ], [ 17, 85 ], [ 17, 94 ], [ 17, 101 ], [ 18, 1 ], [ 18, 13 ], [ 18, 18 ], [ 18, 23 ], [ 18, 32 ], [ 18, 45 ], [ 18, 50 ], [ 18, 54 ], [ 18, 60 ], [ 18, 71 ], [ 18, 83 ], [ 18, 102 ], [ 19, 1 ], [ 19, 16 ], [ 19, 41 ], [ 19, 51 ], [ 19, 66 ], [ 19, 83 ], [ 20, 1 ], [ 20, 25 ], [ 20, 55 ], [ 20, 77 ], [ 20, 90 ], [ 20, 105 ], [ 20, 116 ], [ 20, 129 ], [ 21, 1 ], [ 21, 11 ], [ 21, 30 ], [ 21, 42 ], [ 21, 51 ], [ 21, 76 ], [ 21, 94 ], [ 22, 1 ], [ 22, 11 ], [ 22, 23 ], [ 22, 26 ], [ 22, 34 ], [ 22, 39 ], [ 22, 49 ], [ 22, 58 ], [ 22, 65 ], [ 22, 73 ], [ 23, 1 ], [ 23, 23 ], [ 23, 33 ], [ 23, 51 ], [ 23, 78 ], [ 23, 93 ], [ 24, 1 ], [ 24, 11 ], [ 24, 21 ], [ 24, 27 ], [ 24, 35 ], [ 24, 41 ], [ 24, 51 ], [ 24, 58 ], [ 24, 62 ], [ 25, 1 ], [ 25, 10 ], [ 25, 21 ], [ 25, 35 ], [ 25, 45 ], [ 25, 61 ], [ 26, 1 ], [ 26, 10 ], [ 26, 34 ], [ 26, 53 ], [ 26, 70 ], [ 26, 105 ], [ 26, 123 ], [ 26, 141 ], [ 26, 160 ], [ 26, 176 ], [ 26, 192 ], [ 27, 1 ], [ 27, 15 ], [ 27, 32 ], [ 27, 45 ], [ 27, 59 ], [ 27, 67 ], [ 27, 83 ], [ 28, 1 ], [ 28, 14 ], [ 28, 22 ], [ 28, 29 ], [ 28, 43 ], [ 28, 51 ], [ 28, 61 ], [ 28, 76 ], [ 29, 1 ], [ 29, 14 ], [ 29, 23 ], [ 29, 31 ], [ 29, 45 ], [ 29, 52 ], [ 29, 64 ], [ 30, 1 ], [ 30, 11 ], [ 30, 20 ], [ 30, 28 ], [ 30, 41 ], [ 30, 54 ], [ 31, 1 ], [ 31, 12 ], [ 31, 20 ], [ 32, 1 ], [ 32, 12 ], [ 32, 23 ], [ 33, 1 ], [ 33, 9 ], [ 33, 21 ], [ 33, 28 ], [ 33, 35 ], [ 33, 41 ], [ 33, 53 ], [ 33, 59 ], [ 33, 69 ], [ 34, 1 ], [ 34, 10 ], [ 34, 22 ], [ 34, 31 ], [ 34, 37 ], [ 34, 46 ], [ 35, 1 ], [ 35, 8 ], [ 35, 15 ], [ 35, 27 ], [ 35, 38 ], [ 36, 1 ], [ 36, 13 ], [ 36, 33 ], [ 36, 51 ], [ 36, 68 ], [ 37, 1 ], [ 37, 22 ], [ 37, 75 ], [ 37, 114 ], [ 37, 139 ], [ 38, 1 ], [ 38, 15 ], [ 38, 27 ], [ 38, 41 ], [ 38, 65 ], [ 39, 1 ], [ 39, 10 ], [ 39, 22 ], [ 39, 32 ], [ 39, 42 ], [ 39, 53 ], [ 39, 64 ], [ 39, 71 ], [ 40, 1 ], [ 40, 10 ], [ 40, 21 ], [ 40, 28 ], [ 40, 38 ], [ 40, 51 ], [ 40, 61 ], [ 40, 69 ], [ 40, 79 ], [ 41, 1 ], [ 41, 9 ], [ 41, 19 ], [ 41, 26 ], [ 41, 33 ], [ 41, 45 ], [ 42, 1 ], [ 42, 10 ], [ 42, 20 ], [ 42, 30 ], [ 42, 44 ], [ 43, 1 ], [ 43, 16 ], [ 43, 26 ], [ 43, 36 ], [ 43, 46 ], [ 43, 57 ], [ 43, 68 ], [ 44, 1 ], [ 44, 30 ], [ 44, 43 ], [ 45, 1 ], [ 45, 12 ], [ 45, 22 ], [ 45, 27 ], [ 46, 1 ], [ 46, 11 ], [ 46, 21 ], [ 46, 27 ], [ 47, 1 ], [ 47, 12 ], [ 47, 20 ], [ 47, 29 ], [ 48, 1 ], [ 48, 11 ], [ 48, 18 ], [ 48, 27 ], [ 49, 1 ], [ 49, 11 ], [ 50, 1 ], [ 50, 16 ], [ 50, 30 ], [ 51, 1 ], [ 51, 24 ], [ 51, 47 ], [ 52, 1 ], [ 52, 29 ], [ 53, 1 ], [ 53, 26 ], [ 53, 33 ], [ 54, 1 ], [ 54, 23 ], [ 54, 41 ], [ 55, 1 ], [ 55, 26 ], [ 55, 46 ], [ 56, 1 ], [ 56, 39 ], [ 56, 75 ], [ 57, 1 ], [ 57, 11 ], [ 57, 20 ], [ 57, 26 ], [ 58, 1 ], [ 58, 7 ], [ 58, 14 ], [ 59, 1 ], [ 59, 11 ], [ 59, 18 ], [ 60, 1 ], [ 60, 7 ], [ 61, 1 ], [ 61, 10 ], [ 62, 1 ], [ 62, 9 ], [ 63, 1 ], [ 63, 9 ], [ 64, 1 ], [ 64, 11 ], [ 65, 1 ], [ 65, 8 ], [ 66, 1 ], [ 66, 8 ], [ 67, 1 ], [ 67, 15 ], [ 68, 1 ], [ 68, 34 ], [ 69, 1 ], [ 69, 38 ], [ 70, 1 ], [ 70, 36 ], [ 71, 1 ], [ 71, 21 ], [ 72, 1 ], [ 72, 20 ], [ 73, 1 ], [ 73, 20 ], [ 74, 1 ], [ 74, 32 ], [ 75, 1 ], [ 75, 31 ], [ 76, 1 ], [ 76, 23 ], [ 77, 1 ], [ 77, 41 ], [ 78, 1 ], [ 78, 31 ], [ 79, 1 ], [ 79, 27 ], [ 80, 1 ], [ 81, 1 ], [ 82, 1 ], [ 83, 1 ], [ 84, 1 ], [ 85, 1 ], [ 86, 1 ], [ 87, 1 ], [ 88, 1 ], [ 89, 1 ], [ 90, 1 ], [ 91, 1 ], [ 92, 1 ], [ 93, 1 ], [ 94, 1 ], [ 95, 1 ], [ 96, 1 ], [ 97, 1 ], [ 98, 1 ], [ 99, 1 ], [ 100, 1 ], [ 101, 1 ], [ 102, 1 ], [ 103, 1 ], [ 104, 1 ], [ 105, 1 ], [ 106, 1 ], [ 107, 1 ], [ 108, 1 ], [ 109, 1 ], [ 110, 1 ], [ 111, 1 ], [ 112, 1 ], [ 113, 1 ], [ 114, 1 ] ], 
    meta.safhaat = [ [], [ 1, 1 ], [ 2, 1 ], [ 2, 6 ], [ 2, 17 ], [ 2, 25 ], [ 2, 30 ], [ 2, 38 ], [ 2, 49 ], [ 2, 58 ], [ 2, 62 ], [ 2, 70 ], [ 2, 77 ], [ 2, 84 ], [ 2, 89 ], [ 2, 94 ], [ 2, 102 ], [ 2, 106 ], [ 2, 113 ], [ 2, 120 ], [ 2, 127 ], [ 2, 135 ], [ 2, 142 ], [ 2, 146 ], [ 2, 154 ], [ 2, 164 ], [ 2, 170 ], [ 2, 177 ], [ 2, 182 ], [ 2, 187 ], [ 2, 191 ], [ 2, 197 ], [ 2, 203 ], [ 2, 211 ], [ 2, 216 ], [ 2, 220 ], [ 2, 225 ], [ 2, 231 ], [ 2, 234 ], [ 2, 238 ], [ 2, 246 ], [ 2, 249 ], [ 2, 253 ], [ 2, 257 ], [ 2, 260 ], [ 2, 265 ], [ 2, 270 ], [ 2, 275 ], [ 2, 282 ], [ 2, 283 ], [ 3, 1 ], [ 3, 10 ], [ 3, 16 ], [ 3, 23 ], [ 3, 30 ], [ 3, 38 ], [ 3, 46 ], [ 3, 53 ], [ 3, 62 ], [ 3, 71 ], [ 3, 78 ], [ 3, 84 ], [ 3, 92 ], [ 3, 101 ], [ 3, 109 ], [ 3, 116 ], [ 3, 122 ], [ 3, 133 ], [ 3, 141 ], [ 3, 149 ], [ 3, 154 ], [ 3, 158 ], [ 3, 166 ], [ 3, 174 ], [ 3, 181 ], [ 3, 187 ], [ 3, 195 ], [ 4, 1 ], [ 4, 7 ], [ 4, 12 ], [ 4, 15 ], [ 4, 20 ], [ 4, 24 ], [ 4, 27 ], [ 4, 34 ], [ 4, 38 ], [ 4, 45 ], [ 4, 52 ], [ 4, 60 ], [ 4, 66 ], [ 4, 75 ], [ 4, 80 ], [ 4, 87 ], [ 4, 92 ], [ 4, 95 ], [ 4, 102 ], [ 4, 106 ], [ 4, 114 ], [ 4, 122 ], [ 4, 128 ], [ 4, 135 ], [ 4, 141 ], [ 4, 148 ], [ 4, 155 ], [ 4, 163 ], [ 4, 171 ], [ 4, 176 ], [ 5, 3 ], [ 5, 6 ], [ 5, 10 ], [ 5, 14 ], [ 5, 18 ], [ 5, 24 ], [ 5, 32 ], [ 5, 37 ], [ 5, 42 ], [ 5, 46 ], [ 5, 51 ], [ 5, 58 ], [ 5, 65 ], [ 5, 71 ], [ 5, 77 ], [ 5, 83 ], [ 5, 90 ], [ 5, 96 ], [ 5, 104 ], [ 5, 109 ], [ 5, 114 ], [ 6, 1 ], [ 6, 9 ], [ 6, 19 ], [ 6, 28 ], [ 6, 36 ], [ 6, 45 ], [ 6, 53 ], [ 6, 60 ], [ 6, 69 ], [ 6, 74 ], [ 6, 82 ], [ 6, 91 ], [ 6, 95 ], [ 6, 102 ], [ 6, 111 ], [ 6, 119 ], [ 6, 125 ], [ 6, 132 ], [ 6, 138 ], [ 6, 143 ], [ 6, 147 ], [ 6, 152 ], [ 6, 158 ], [ 7, 1 ], [ 7, 12 ], [ 7, 23 ], [ 7, 31 ], [ 7, 38 ], [ 7, 44 ], [ 7, 52 ], [ 7, 58 ], [ 7, 68 ], [ 7, 74 ], [ 7, 82 ], [ 7, 88 ], [ 7, 96 ], [ 7, 105 ], [ 7, 121 ], [ 7, 131 ], [ 7, 138 ], [ 7, 144 ], [ 7, 150 ], [ 7, 156 ], [ 7, 160 ], [ 7, 164 ], [ 7, 171 ], [ 7, 179 ], [ 7, 188 ], [ 7, 196 ], [ 8, 1 ], [ 8, 9 ], [ 8, 17 ], [ 8, 26 ], [ 8, 34 ], [ 8, 41 ], [ 8, 46 ], [ 8, 53 ], [ 8, 62 ], [ 8, 70 ], [ 9, 1 ], [ 9, 7 ], [ 9, 14 ], [ 9, 21 ], [ 9, 27 ], [ 9, 32 ], [ 9, 37 ], [ 9, 41 ], [ 9, 48 ], [ 9, 55 ], [ 9, 62 ], [ 9, 69 ], [ 9, 73 ], [ 9, 80 ], [ 9, 87 ], [ 9, 94 ], [ 9, 100 ], [ 9, 107 ], [ 9, 112 ], [ 9, 118 ], [ 9, 123 ], [ 10, 1 ], [ 10, 7 ], [ 10, 15 ], [ 10, 21 ], [ 10, 26 ], [ 10, 34 ], [ 10, 43 ], [ 10, 54 ], [ 10, 62 ], [ 10, 71 ], [ 10, 79 ], [ 10, 89 ], [ 10, 98 ], [ 10, 107 ], [ 11, 6 ], [ 11, 13 ], [ 11, 20 ], [ 11, 29 ], [ 11, 38 ], [ 11, 46 ], [ 11, 54 ], [ 11, 63 ], [ 11, 72 ], [ 11, 82 ], [ 11, 89 ], [ 11, 98 ], [ 11, 109 ], [ 11, 118 ], [ 12, 5 ], [ 12, 15 ], [ 12, 23 ], [ 12, 31 ], [ 12, 38 ], [ 12, 44 ], [ 12, 53 ], [ 12, 64 ], [ 12, 70 ], [ 12, 79 ], [ 12, 87 ], [ 12, 96 ], [ 12, 104 ], [ 13, 1 ], [ 13, 6 ], [ 13, 14 ], [ 13, 19 ], [ 13, 29 ], [ 13, 35 ], [ 13, 43 ], [ 14, 6 ], [ 14, 11 ], [ 14, 19 ], [ 14, 25 ], [ 14, 34 ], [ 14, 43 ], [ 15, 1 ], [ 15, 16 ], [ 15, 32 ], [ 15, 52 ], [ 15, 71 ], [ 15, 91 ], [ 16, 7 ], [ 16, 15 ], [ 16, 27 ], [ 16, 35 ], [ 16, 43 ], [ 16, 55 ], [ 16, 65 ], [ 16, 73 ], [ 16, 80 ], [ 16, 88 ], [ 16, 94 ], [ 16, 103 ], [ 16, 111 ], [ 16, 119 ], [ 17, 1 ], [ 17, 8 ], [ 17, 18 ], [ 17, 28 ], [ 17, 39 ], [ 17, 50 ], [ 17, 59 ], [ 17, 67 ], [ 17, 76 ], [ 17, 87 ], [ 17, 97 ], [ 17, 105 ], [ 18, 5 ], [ 18, 16 ], [ 18, 21 ], [ 18, 28 ], [ 18, 35 ], [ 18, 46 ], [ 18, 54 ], [ 18, 62 ], [ 18, 75 ], [ 18, 84 ], [ 18, 98 ], [ 19, 1 ], [ 19, 12 ], [ 19, 26 ], [ 19, 39 ], [ 19, 52 ], [ 19, 65 ], [ 19, 77 ], [ 19, 96 ], [ 20, 13 ], [ 20, 38 ], [ 20, 52 ], [ 20, 65 ], [ 20, 77 ], [ 20, 88 ], [ 20, 99 ], [ 20, 114 ], [ 20, 126 ], [ 21, 1 ], [ 21, 11 ], [ 21, 25 ], [ 21, 36 ], [ 21, 45 ], [ 21, 58 ], [ 21, 73 ], [ 21, 82 ], [ 21, 91 ], [ 21, 102 ], [ 22, 1 ], [ 22, 6 ], [ 22, 16 ], [ 22, 24 ], [ 22, 31 ], [ 22, 39 ], [ 22, 47 ], [ 22, 56 ], [ 22, 65 ], [ 22, 73 ], [ 23, 1 ], [ 23, 18 ], [ 23, 28 ], [ 23, 43 ], [ 23, 60 ], [ 23, 75 ], [ 23, 90 ], [ 23, 105 ], [ 24, 1 ], [ 24, 11 ], [ 24, 21 ], [ 24, 28 ], [ 24, 32 ], [ 24, 37 ], [ 24, 44 ], [ 24, 54 ], [ 24, 59 ], [ 24, 62 ], [ 25, 3 ], [ 25, 12 ], [ 25, 21 ], [ 25, 33 ], [ 25, 44 ], [ 25, 56 ], [ 25, 68 ], [ 26, 1 ], [ 26, 20 ], [ 26, 40 ], [ 26, 61 ], [ 26, 84 ], [ 26, 112 ], [ 26, 137 ], [ 26, 160 ], [ 26, 184 ], [ 26, 207 ], [ 27, 1 ], [ 27, 14 ], [ 27, 23 ], [ 27, 36 ], [ 27, 45 ], [ 27, 56 ], [ 27, 64 ], [ 27, 77 ], [ 27, 89 ], [ 28, 6 ], [ 28, 14 ], [ 28, 22 ], [ 28, 29 ], [ 28, 36 ], [ 28, 44 ], [ 28, 51 ], [ 28, 60 ], [ 28, 71 ], [ 28, 78 ], [ 28, 85 ], [ 29, 7 ], [ 29, 15 ], [ 29, 24 ], [ 29, 31 ], [ 29, 39 ], [ 29, 46 ], [ 29, 53 ], [ 29, 64 ], [ 30, 6 ], [ 30, 16 ], [ 30, 25 ], [ 30, 33 ], [ 30, 42 ], [ 30, 51 ], [ 31, 1 ], [ 31, 12 ], [ 31, 20 ], [ 31, 29 ], [ 32, 1 ], [ 32, 12 ], [ 32, 21 ], [ 33, 1 ], [ 33, 7 ], [ 33, 16 ], [ 33, 23 ], [ 33, 31 ], [ 33, 36 ], [ 33, 44 ], [ 33, 51 ], [ 33, 55 ], [ 33, 63 ], [ 34, 1 ], [ 34, 8 ], [ 34, 15 ], [ 34, 23 ], [ 34, 32 ], [ 34, 40 ], [ 34, 49 ], [ 35, 4 ], [ 35, 12 ], [ 35, 19 ], [ 35, 31 ], [ 35, 39 ], [ 35, 45 ], [ 36, 13 ], [ 36, 28 ], [ 36, 41 ], [ 36, 55 ], [ 36, 71 ], [ 37, 1 ], [ 37, 25 ], [ 37, 52 ], [ 37, 77 ], [ 37, 103 ], [ 37, 127 ], [ 37, 154 ], [ 38, 1 ], [ 38, 17 ], [ 38, 27 ], [ 38, 43 ], [ 38, 62 ], [ 38, 84 ], [ 39, 6 ], [ 39, 11 ], [ 39, 22 ], [ 39, 32 ], [ 39, 41 ], [ 39, 48 ], [ 39, 57 ], [ 39, 68 ], [ 39, 75 ], [ 40, 8 ], [ 40, 17 ], [ 40, 26 ], [ 40, 34 ], [ 40, 41 ], [ 40, 50 ], [ 40, 59 ], [ 40, 67 ], [ 40, 78 ], [ 41, 1 ], [ 41, 12 ], [ 41, 21 ], [ 41, 30 ], [ 41, 39 ], [ 41, 47 ], [ 42, 1 ], [ 42, 11 ], [ 42, 16 ], [ 42, 23 ], [ 42, 32 ], [ 42, 45 ], [ 42, 52 ], [ 43, 11 ], [ 43, 23 ], [ 43, 34 ], [ 43, 48 ], [ 43, 61 ], [ 43, 74 ], [ 44, 1 ], [ 44, 19 ], [ 44, 40 ], [ 45, 1 ], [ 45, 14 ], [ 45, 23 ], [ 45, 33 ], [ 46, 6 ], [ 46, 15 ], [ 46, 21 ], [ 46, 29 ], [ 47, 1 ], [ 47, 12 ], [ 47, 20 ], [ 47, 30 ], [ 48, 1 ], [ 48, 10 ], [ 48, 16 ], [ 48, 24 ], [ 48, 29 ], [ 49, 5 ], [ 49, 12 ], [ 50, 1 ], [ 50, 16 ], [ 50, 36 ], [ 51, 7 ], [ 51, 31 ], [ 51, 52 ], [ 52, 15 ], [ 52, 32 ], [ 53, 1 ], [ 53, 27 ], [ 53, 45 ], [ 54, 7 ], [ 54, 28 ], [ 54, 50 ], [ 55, 17 ], [ 55, 41 ], [ 55, 68 ], [ 56, 17 ], [ 56, 51 ], [ 56, 77 ], [ 57, 4 ], [ 57, 12 ], [ 57, 19 ], [ 57, 25 ], [ 58, 1 ], [ 58, 7 ], [ 58, 12 ], [ 58, 22 ], [ 59, 4 ], [ 59, 10 ], [ 59, 17 ], [ 60, 1 ], [ 60, 6 ], [ 60, 12 ], [ 61, 6 ], [ 62, 1 ], [ 62, 9 ], [ 63, 5 ], [ 64, 1 ], [ 64, 10 ], [ 65, 1 ], [ 65, 6 ], [ 66, 1 ], [ 66, 8 ], [ 67, 1 ], [ 67, 13 ], [ 67, 27 ], [ 68, 16 ], [ 68, 43 ], [ 69, 9 ], [ 69, 35 ], [ 70, 11 ], [ 70, 40 ], [ 71, 11 ], [ 72, 1 ], [ 72, 14 ], [ 73, 1 ], [ 73, 20 ], [ 74, 18 ], [ 74, 48 ], [ 75, 20 ], [ 76, 6 ], [ 76, 26 ], [ 77, 20 ], [ 78, 1 ], [ 78, 31 ], [ 79, 16 ], [ 80, 1 ], [ 81, 1 ], [ 82, 1 ], [ 83, 7 ], [ 83, 35 ], [ 85, 1 ], [ 86, 1 ], [ 87, 16 ], [ 89, 1 ], [ 89, 24 ], [ 91, 1 ], [ 92, 15 ], [ 95, 1 ], [ 97, 1 ], [ 98, 8 ], [ 100, 10 ], [ 103, 1 ], [ 106, 1 ], [ 109, 1 ], [ 112, 1 ], [ 115, 1 ] ], 
    meta.sujood = [ [], [ 7, 206, 0 ], [ 13, 15, 0 ], [ 16, 50, 0 ], [ 17, 109, 0 ], [ 19, 58, 0 ], [ 22, 18, 0 ], [ 22, 77, 0 ], [ 25, 60, 0 ], [ 27, 26, 0 ], [ 32, 15, 1 ], [ 38, 24, 0 ], [ 41, 38, 1 ], [ 53, 62, 1 ], [ 84, 21, 0 ], [ 96, 19, 1 ] ], 
    module.exports = meta;
}();
