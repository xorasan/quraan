
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
+'\n@media (min-width:800px) {'
+'\n	#softkeysui .row2 button {'
+'\n		border-top:2px solid '+o.secondary+';'
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
+'\n@media (min-width:640px) {'
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
+'\n@media (min-width:640px) {'
+'\n	#softkeysui .row2 {'
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

/* 01 Jan 2017
* these are on demand
* included in the custom engine build process
* standard ECMA/JS shims
* don't include shims for non-standard JS features
* or vendor specific features here
* index engine/shims.js
* shims/node.js
* shims/dom-removenode.js
* shims/object-create.js
* shims/object-assign.js
* shims/string-trim.js
*/
if (typeof module !== 'object') { module = {}; }
if (typeof module.exports !== 'object') { module.exports = {}; }
if (typeof window !== 'object') { window = global||{}; }
if (typeof document !== 'object') {
	document = {
		body: {},
	};
}
var glatteis = {
};
/*
* a move to .then(cb) would be awesome or nuh?
* @todo indeed.
*/
var glatteisfn = function (name, fn) {
	if (name) {
		var mod = (glatteis._mods[name] || glatteis[name]);
		if (typeof fn === 'function') { // defer execution
			if (mod) { // if the mod is loaded or it's a core module
				fn(mod);
			} else {
				if (glatteis._paths[name]) { // if its path is defined
					glatteis.require(glatteis._paths[name], function(mod) {
						glatteis._mods[name] = mod;
						fn(mod);
					});
				}
			}
			return null; // the function will be called
		} else { // immediate execution
			return (mod || false);
		}
	}
	return false; // if name wasn't provided
};
var $ = $$ = glatteis = Object.assign(glatteisfn, glatteis);
if (typeof module === 'object') {
	module.exports = glatteis;
}
$.log = function () {
	console.log.apply(console, arguments);
};
;(function(){
	var proto = {
		s: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.log('+a+');');
		},
		e: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.error('+a+');');
		},
		i: function () {
			var a = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
			}
			eval('console.info('+a+');');
		}
	};
	$.log = Object.assign($.log, proto);
})();
;(function (){
	/*
	* takes a function with a unique name, if a function with this name is
	* provided again, it delays the exec of that function by a few ms
	*
	* calling without fn will just clear the timeout on that id
	* */
	var taxeeraat = {};
	$.taxeercancel = function (id) {
		clearTimeout(taxeeraat[id]);
	};
	$.taxeer = function (id, fn, customdelay, nofurtherdelay) {
		customdelay = customdelay || 300;
		if ( nofurtherdelay && taxeeraat[id] ) return;
		if ( taxeeraat[id] ) {
			clearTimeout( taxeeraat[id] );
			taxeeraat[id] = undefined;
		}
		if ( typeof fn === 'function' ) {
			taxeeraat[id] = setTimeout( function () {
				fn(function () {
					$.taxeer(id, fn, customdelay, nofurtherdelay);
				});
				taxeeraat[id] = undefined;
			}, customdelay );
		}
	};
})();
$.re = function (string, automaton, flags) { // automaton, flags
	var object = (new RegExp(automaton||'', flags||'')).exec(string||'') || {};
	object.re = function (automaton, flags) {
		return $.re(object[0]||'', automaton, flags);
	};
	return object;
};
$.regex = $.re;
/*
* this restores the initial module.exports = {} from
* = glatteis by ._c
* inclusion in other parent scripts after concatenation &
* uglification
*/
$._r = function () {
	module.exports = glatteis;
};
/*
* used only when mods are concat'd
* if no ._name property is present in mod, use the name argument
* if no name argument, return false
*/
$._c = function (name) {
	var mod = module.exports;
	module.exports = {};
	if (mod instanceof Object
		&& (typeof(name) === 'string' || typeof(mod._name) === 'string')
	) {
		if (typeof(mod._name) === 'string') {
			glatteis._mods[mod._name] = mod;
		} else {
			glatteis._mods[name] = mod;
		}
		return true;
	}
	return false;
};
$._paths = {
};
$._mods = {
};
$.cache = function (name, path) { // cache a module's path
	$._paths[name] = path;
};
$.unload = function (mods, fn) {
	/*
	* @TODO: delete/unload mods from memory
	* run ._unload per mod for a graceful exit
	* once all mods are unloaded in a chain/order -> call fn
	*/
};
;(function (){
	var _arrayPrototype = {
		set: function (id, object) {
			if (this._keys[id] !== undefined) { // update
				if (typeof object === 'function') {
					this._array[this._keys[id]] = object(this._array[this._keys[id]]);
				} else {
					this._array[this._keys[id]] = object;
				}
				typeof this.onset === 'function' && this.onset(object, id);
			} else { // add
				if (typeof object === 'function') {
					this._keys[id] = this._array.push(
												object(this._array[this._keys[id]])
											) - 1;
				} else {
					this._keys[id] = this._array.push(object) - 1;
				}
				typeof this.onadd === 'function' && this.onadd(object, id);
				++this.length;
			}
			return this;
		},
		alter: function (id, object) {
			var item = this.get(id);
			if (item) {
				this.set( id , Object.assign( item, object ) );
			}
			return this;
		},
		pop: function (id) {
			if (this._keys[id] !== undefined) {
				typeof this.onpop === 'function' && this.onpop(id);
				this._array[this._keys[id]] = undefined;
				delete this._keys[id];
				--this.length;
			}
			return this;
		},
		popall: function (array) {
			if (typeof array.toNative === 'function') array = array.toNative();
			for (var i in array) {
				this.pop( array[i] );
			}
		},
		get: function (id) {
			if (this._keys[id] > -1) {
				return this._array[ this._keys[id] ];
			} else {
				return undefined;
			}
		},
		each: function (fn) {
			if (typeof fn === 'function') {
				for (var i in this._array) {
					if (this._array[i] !== undefined) {
						var val = fn(this._array[i], i);
						if (val !== undefined) {
							this._array[i] = val;
						}
					}
				}
			}
		},
		/*
		* this supports both native and Ge arrays
		* id is the prop name in array that you want to be the id
		* */
		setall: function (id, array) {
			this._id = id;
			if (typeof array.toNative === 'function') array = array.toNative();
			for (var i in array) {
				this.set( array[i][id], array[i] );
			}
		},
		unique: function () {
			var uniquearray = [];
			this._array.forEach(function (item) {
				if (uniquearray.indexOf(item) === -1)
					uniquearray.push(item);
			});
			return uniquearray;
		},
		order: function (order) {
			var ordered = [];
			for (var i in order) {
				var val = order[i];
				var index = this._array.indexOf(val);
				if (index > -1) {
					ordered.push( this._array[index] );
					this._array.splice(index, 1);
				}
			}
			return ordered.concat(this._array);
		},
		slice: function (from, to) {
			var nativearr = $.array();
			this.each(function (item, i) {
				if (i >= from && i <= to)
					nativearr.set(item.uid, item);
			});
			return nativearr;
		},
		/*
		* id is the prop name in array that you want to be the id
		* key is the prop you want to compare for order
		* */
		sort: function (reverse, key, id) {
			var temparray = this.toNative();
			if (typeof reverse === 'function') {
				temparray.sort(reverse);
			} else {
				temparray.sort(function (a, b) {
					if (reverse) {
						if (key) {
							return b[key]-a[key];
						} else {
							return b-a;
						}
					} else {
						if (key) {
							return a[key]-b[key];
						} else {
							return a-b;
						}
					}
				});
			}
			if (id || this._id) {
				this._array = [];
				this.length = 0;
				this._keys = {};
				this.setall(id || this._id, temparray);
			}
			return this;
		},
		/*reverse: function (id, order) {
			this._array.reverse();
			this.setall(id, this._array);
			return this;
		},*/
		/*
		* the new non-camelcase format in effect since 29nov2018
		* returns all keys that are not 'undefined'
		* returns native array
		* */
		tokeys: function () {
			var arr = [], keys = Object.keys(this._keys);
			for (var i in keys) {
				if (keys[i] !== undefined)
					arr.push( keys[i] );
			}
			return arr;
		},
		saabiq: function (uid) {
			var index = this._keys[uid];
			if (!isundef(index) && index > -1) {
				for (var i = index-1; i >= 0; --i) {
					if (!isundef(this._array[i])) {
						return this._array[i];
					}
				}
			}
		},
		qaadim: function (uid) {
			var index = this._keys[uid];
			if (!isundef(index) && index > -1) {
				for (var i = index+1; i < this._array.length; ++i) {
					if (!isundef(this._array[i])) {
						return this._array[i];
					}
				}
			}
		},
		eawwad: function (uid, uid2) { // swap objects in array to change order
			var index = this._keys[uid];
			var index2 = this._keys[uid2];
			if (index > -1 && index2 > -1) {
				this._keys[uid] = index2;
				this._keys[uid2] = index;
				var temp = this._array[index];
				this._array[index] = this._array[index2];
				this._array[index2] = temp;
			}
		},
		toNative: function () {
			var arr = [];
			for (var i in this._array) {
				if (this._array[i] !== undefined) {
					arr.push(this._array[i]);
				}
			}
			return arr;
		}
	};
	$.array = function (prearray, id) {
		var newqueue = Object.create(_arrayPrototype);
		prearray = prearray || [];
		if (typeof prearray.toNative === 'function') prearray = prearray.toNative();
		newqueue._array = prearray;
		newqueue._keys = {};
		newqueue._id = id;
		if (id)
			prearray.forEach(function (item, i) {
				newqueue._keys[ item[id] ] = i;
			});
		newqueue.length = newqueue._array.length;
		return newqueue;
	};
	$.array.clean = function (arr) {
		var arr2 = [];
		if (arr) arr.forEach(function (item, i) {
			arr2.push(item);
		});
		return arr2;
	};
})();
;(function (){
	var _queuePrototype = {
		_init: function () {
			if (!this._didinit) {
				this._didinit = true;
				this._didrun = false;
				this.queuearray = [];
				this.active = false;
				this.count = 0;
				this.uid = false;
				this._onnext = false;
				this._onfinish = false;
			}
		},
		_next: function (queue, extra) {
			++queue.count;
			queue._process(queue, extra);
			queue.active = false;
			return queue.count;
		},
		_process: function (queue, extra) {
			if (queue.muntahaa) return;
			if (typeof queue._onnext === 'function') {
				if (queue.queuearray.length > 0) {
					queue.uid = queue.queuearray.length;
					queue.active = true;
					var worker = queue.queuearray.pop();
					var done = function (queue, extra) {
						queue._onnext(queue._next, queue, extra);
					};
					worker(done, queue, extra);
					return false;
				} else {
					queue.active = false;
					--queue.count;
					if (typeof queue._onfinish === 'function') {
						queue._onfinish(queue, extra);
					}
					return false;
				}
			}
		},
		intahaa: function () {
			this.muntahaa = 1
		},
		set: function (worker) {
			this._init();
			if (typeof worker === 'function') {
				this.queuearray.unshift(worker);
			}
			return this;
		},
		run: function (_onfinish) {
			this.onfinish(_onfinish);
			var queue = this;
			queue._init();
			if (typeof queue._onnext !== 'function') {
				queue.onnext(function (done, _queue, extra) {
					done(_queue, extra);
				});
			}
			if (!queue._didrun
			&& typeof queue._onnext === 'function') {
				queue._didrun = true;
				queue._process(queue);
			}
		},
		onnext: function (cb) {
			if (typeof cb === 'function') {
				this._onnext = cb;
			}
		},
		onfinish: function (cb) {
			if (typeof cb === 'function') {
				this._onfinish = cb;
			}
		}
	};
	$.queue = function (onnext, onfinish) {
		var newqueue = Object.create(_queuePrototype);
		newqueue._init();
		if (typeof onnext === 'function') {
			newqueue._onnext = onnext;
		}
		if (typeof onfinish === 'function') {
			newqueue._onfinish = onfinish;
		}
		return newqueue;
	};
})();
;(function (){
	$.queuerequest = function () {
		var queuerequest = {
			name: 1,
			active: false,
			cnt: 0,
			id: false,
			_array: [],
			cur: false,
			queue: function (options) {
				this._array.unshift(options);
				this.id = this._array.length;
				if (this.active === true)
					return this.cnt;
				else
					return this.process(this);
			},
			/* TODO
			* when requests are queued too fast, it gets stuck on the last
			* request and never processes it unless queue is called again
			* or process is called manually
			*
			* fix this asap, it's an ugly prob
			* */
			process: function (carriedthis) {
				carriedthis = carriedthis || this;
				if (carriedthis._array.length && !carriedthis.active) {
					carriedthis.id = carriedthis._array.length;
					carriedthis.active = true;
					var options = carriedthis._array.pop();
					{
						if (options.uri.match(/http.*\:\/\//) === null) {
							if (typeof nw === 'object') {
								options.uri = 'file://'+options.uri;
							}
						}
						var request;
						var shorty = options.uri;
						if (window.XMLHttpRequest) {
							request = new XMLHttpRequest();
						}
						else if (typeof require === 'function') {
							request = require(options.uri);
							typeof options.callback === 'function' && options.callback(request);
							carriedthis.cnt++; carriedthis.process(carriedthis); carriedthis.active = false; return carriedthis.cnt;
						}
						request.timeout = carriedthis.fetchtimeout || $.fetchtimeout;
						carriedthis.cur = request;
						if (options.type == 'get') {
							request.open('GET', options.uri, true);
						} else {
							request.open('POST', options.uri, true);
							if (!options.headers)
								request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset = UTF-8");
						}
						if (options.headers instanceof Object) {
							Object.keys(options.headers).forEach(function (key) {
								request.setRequestHeader(key, options.headers[key]);
							});
						}
						(request.upload ? request.upload: request).onprogress = function (event) {
							if (event.lengthComputable && typeof carriedthis.progressfn === 'function') {
								carriedthis.progressfn(event.loaded, event.total);
							}
						};
						var onend = function (errtype) {
							typeof options.callback === 'function' && options.callback('', errtype || request.status);
							carriedthis.cnt++; carriedthis.process(carriedthis); carriedthis.active = false; return carriedthis.cnt;
						};
						request.onreadystatechange = function() {
							if (request.readyState == 4) {
								if (request.status === 200) {
									typeof options.callback === 'function' && options.callback(request.responseText);
									carriedthis.cnt++; carriedthis.process(carriedthis); carriedthis.active = false; return carriedthis.cnt;
								} else {
									onend(request.status);
								}
							}
						}
						request.onabort = function () {
							onend(-100);
						};
						request.ontimeout = function () {
							onend(-200);
						};
						request.onerror = function () {
							onend(-300);
						};
						request.send( options.type == 'get' ? null: options.payload );
					}
					return false;
				} else {
					carriedthis.active = false; carriedthis.cnt = 0;
					return false;
				}
			},
		};
		var newobject = Object.create(queuerequest);
		return newobject;
	};
	/*
	* (s)cript location is required, (c)allback function is passed the
	* responseText as the first argument
	* (e)xecute the script before the callback function
	* this is fetch 2.0 now
	* it tries to implement a very basic form of ES6 fetch + then
	* it uses a barebones promise without depending on JS base Promise or
	* Response class
	*
	* channels: strings that identify separate independent queues of requests
	* for example in web apps, one for regular sync requests and another for
	* listening for events from the server
	*/
	$.fetchtimeout = 30 * 1000;
	$.fetchcancel = function (channel) {
		channel = $.fetchchannels[channel || 1];
		if ( channel ) {
			channel._array = [];
			if (channel.cur)
				channel.cur.abort();
			channel.active = false;
			channel.cnt = 0;
			channel.cur = 0;
		}
	};
	$.fetchchannels = {};
	$.fetchprocess = function (channel) {
		channel = channel || 1;
		if ( $.fetchchannels[channel] )
			$.fetchchannels[channel].process();
	};
	$.fetch = function (uri, data, channel, progressfn, fetchtimeout, headers) {
		channel = channel || 1;
		var response = false,
			thencb = false,
			thenfn = function (callback) {
				if (response) {
					if (typeof callback === 'function') callback(response);
				} else {
					thencb = callback;
				}
			};
		if ( !$.fetchchannels[channel] ) {
			$.fetchchannels[channel] = /*Object.create(queuerequest)*/ $.queuerequest();
			$.fetchchannels[channel].name = channel;
			$.fetchchannels[channel].fetchtimeout = fetchtimeout || $.fetchtimeout;
		}
		if (typeof progressfn === 'function')
			$.fetchchannels[channel].progressfn = progressfn;
		$.fetchchannels[channel].queue({
			uri: uri,
			payload: (data || null),
			headers: headers || 0,
			type: (data ? 'post' : 'get'),
			callback: function (body, err) {
				try {
					if (typeof thencb === 'function') {
						thencb({
							body: body,
							err: err
						});
					}
				} catch (e) {
					glatteis.log.e(e);
				}
			}
		});
		return {
			then: thenfn
		};
	};
})();
$._r();
'use strict';
var taraajim = {"en":{"results":"Results","search":"Search","nosearchresults":"No search results","profile":"Profile","profiles":"Profiles","noprofiles":"No Profiles","aqrabaa":"Favorites","noaqrabaa":"No Favorites","settings":"Settings","requestfeat":"Request Feature","reportbug":"Report Bug","author":"Author","build":"Build","openad":"Ad","quality":"Quality","largetext":"Large Text","transparency":"Transparency","calendar":"Calendar","hijri":"Hijri","gregorian":"Gregorian","builton":"Built On","skhelp":"Press # for actions","softkeystouchdpad":"Touchscreen D-Pad","theme":"Theme","black":"Black","white":"White","infuture":"in","justnow":"just now","sseconds":"s","secondsago":"secs","aminuteago":"a min","minute":"min","sminutes":"m","minutes":"mins","minutesago":"mins","anhourago":"an hr","hourago":"hr","hoursago":"hrs","yesterday":"yesterday","tomorrow":"tomorrow","adayago":"a day","dayago":"d","daysago":"d","lastmonth":"last month","monthago":"mo","monthsago":"mo","lastyear":"last year","yearago":"y","yearsago":"y","alongtime":"a long time","sunday":"sunday","monday":"monday","tuesday":"tuesday","wednesday":"wednesday","thursday":"thursday","friday":"friday","saturday":"saturday",",":",","am":"am","pm":"pm","st":"st","nd":"nd","rd":"rd","th":"th","timeformat":"Time Format","hours24":"24 hour","hours12":"12 hour","language":"Language","en":"English","ar":"Arabic","ur":"Urdu","ru":"Russian","de":"German","es":"Spanish","loading":"Loading...","exiting":"Exiting...","unsupported":"Your device can't run this app","off":"Off","on":"On","animations":"Animations","webapptouchdir":"Touch affects direction"}};
var Hooks, hooks;
;(function (){
	'use strict';
	Hooks = {
		_registry: {},
		_map: {},
		_uid: 0,
		set: function (hook, id, fn) {
			if (hook instanceof Array) {
				hook.forEach(function (item) {
					Hooks.set(item, id, fn);
				});
				return;
			}
			if (typeof id === 'function')
				fn = id, id = new Date().getTime();
			if (typeof fn === 'function') {
				if (Hooks._registry[hook] === undefined) {
					Hooks._registry[hook] = [];
				}
				++Hooks._uid;
				Hooks._registry[hook][Hooks._uid] = fn;
				Hooks._map[hook+'_'+id] = Hooks._uid;
				return true;
			}
			return false;
		},
		run: function (hook, extras) {
			var handlers = Hooks._registry[hook];
			if (handlers instanceof Array) {
				for (var i in handlers) {
					if (typeof handlers[i] === 'function') {
						handlers[i](extras);
					}
				}
				return true;
			}
			return false;
		},
		rununtilconsumed: function (hook, extras) {
			var handlers = Hooks._registry[hook];
			if (handlers instanceof Array) {
				for (var i in handlers) {
					if (typeof handlers[i] === 'function') {
						var returnedvalue = handlers[i](extras);
						if (returnedvalue) {
							return returnedvalue;
						}
					}
				}
			}
			return false;
		},
		pop: function (hook, id) {
			if (Hooks._registry[hook]) {
				delete Hooks._registry[hook][ Hooks._map[hook+'_'+id] ];
				return true;
			}
			return false;
		},
		hook: function (hook) {
			Hooks._registry[hook] = [];
		},
		unhook: function (hook) {
			delete Hooks._registry[hook];
		}
	};
	module.exports = Hooks;
	hooks = Hooks;
})();
var
mubaaraat = function (str, re) {
	return (str.match(re)||[])[0];
},
tabdeel = function (str, arr) {
	if (isstr(str) && isarr(arr)) {
		for (var i = 0; i < arr.length; i += 2) {
			str = str.replace(arr[i], arr[i+1]);
		}
	}
	return str;
},
deepcopy = function (v) {
},
isundef = function (v) {
	return v === undefined;
},
isstr = function (v) {
	return typeof v == 'string';
},
isfinite = function (v) {
	return Number.isFinite(v);
},
isnan = function (v) {
	return Number.isNaN(v);
},
isnum = function (v) {
	return typeof v == 'number' && !isnan(v) && isfinite(v);
},
isfun = function (v) {
	return typeof v == 'function';
},
isarr = function (v) {
	return v instanceof Array;
},
areobjectsequal = function (a, b) { // only compares primitives bw 2 objs
	var same = 1;
	if (a && b && Object.keys(a).length === Object.keys(b).length)
	for (var i in a) {
		if (a[i] !== b[i]) {
			same = 0;
			break;
		}
	}
	else same = 0;
	return same;
},
zero = function (num) {
	return num < 10 ? '0'+num: num;
},
collapsearray = function (arr) {
	var arr2 = [];
	arr.forEach(function (e) {
		if (!isundef(e)) arr2.push(e);
	});
	return arr2;
},
array2string = function (arr) { // [ 1, 2 ] -> " 1 2"
	return ' '+arr.join(' ');
},
intersect = function (arr, superset) { // [ num, num, ... ]
	var arr2 = [];
	arr.forEach(function (item) {
		if (!isundef(superset[ item ])) arr2.push(item);
	});
	return arr2;
},
shallowcopy = function (v) { // return a copy of array of objs or just one obj
	if (isnum(v) || isstr(v)) {
		return v;
	} else
	if (v instanceof Array) {
		var v2 = [];
		v.forEach(function (item) {
			v2.push( Object.assign({}, item) );
		});
		return v2;
	}
	else {
		return Object.assign({}, v);
	}
},
parseint = function (v, r) {
	return parseInt(v, r);
},
parsefloat = function (v, n) {
	if (n) v = parseFloat(v).toFixed(n);
	return parseFloat(v);
},
intify = function (arr) {
	for (var i = 0; i < arr.length; ++i) {
		arr[i] = parseint(arr[i]);
	}
	return arr;
},
tolower = function (obj) {
	return obj.toLowerCase();
};
var
enc = function (v) {
	return encodeURIComponent(v);
},
dec = function (v) {
	return decodeURIComponent(v);
},
encp = function (v) {
	return encodeURI(v);
},
decp = function (v) {
	return decodeURI(v);
},
innerhtml = function (obj, v) {
	obj.innerHTML = v;
},
setvalue = function (obj, v) {
	obj.value = v;
},
scrollintoview = function (obj) {
	obj && obj.scrollIntoView(1);
},
prevsibling = function (obj) {
	return obj.previousElementSibling;
},
nextsibling = function (obj) {
	return obj.nextElementSibling;
},
getattribute = function (obj, k) {
	return obj.getAttribute(k);
},
attribute = function (obj, k, v) {
	v == '' ? obj.removeAttribute(k) : obj.setAttribute(k, v);
},
setcss = function (obj, k, v) {
	if (v === undefined)
		obj.style[k] = '';
	else
		obj.style[k] = v;
},
popdata = function (obj, k, v) {
	delete obj.dataset[k];
},
setdata = function (obj, k, v) {
	obj.dataset[k] = v;
},
getdata = function (obj, k) {
	return obj.dataset[k];
},
innertext = function (obj, v) {
	if (isundef(v)) return obj.innerText;
	else obj.innerText = v;
},
innerwidth = function (v) { // returns width + v
	return innerWidth + (v||0);
},
innerheight = function (v) {
	return innerHeight + (v||0);
},
hasownprop = function (obj, i) {
	if (obj && obj.hasOwnProperty)
		return obj.hasOwnProperty(i);
},
izhar = function (v) {
	v.hidden = 0;
},
ixtaf = function (v) {
	v.hidden = 1;
},
isixtaf = function (v) {
	return v.hidden || getattribute(v, 'type') == 'hidden';
},
markooz = function () {
	return document.activeElement;
},
preventdefault = function (obj) {
	obj && obj.cancelable && obj.preventDefault && obj.preventDefault();
},
elementbyid = function (id) {
	return document.getElementById(id);
},
listener = function (obj, name, fn, o) {
	if (typeof obj === 'string' || obj instanceof Array)
		o = fn,
		fn = name,
		name = obj,
		obj = window;
	if (name instanceof Array) {
		name.forEach(function (item) {
			obj.addEventListener(item, fn, o);
		});
	} else obj.addEventListener(name, fn, o);
},
createelement = function (name, classes, id) {
	var e = document.createElement(name||'div');
	if (classes) e.className = classes;
	if (id) e.id = id;
	return e;
},
iswithinelement = function (arr, element) {
	var a = arr[0],
		b = arr[1],
		x = element.offsetLeft,
		y = element.offsetTop,
		w = x+element.offsetWidth,
		h = y+element.offsetHeight;
	return (a >= x && a <= w && b >= y && b <= h);
},
getposition = function (el) {
	var xPos = 0;
	var yPos = 0;
	var dir = document.body.dir;
	if ( dir === 'rtl' )
		xPos = xPos + el.clientWidth;
	while (el) {
		if (el.tagName == 'BODY') {
			var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
			var yScroll = el.scrollTop || document.documentElement.scrollTop;
			xPos += (el.offsetLeft - xScroll + el.clientLeft);
			yPos += (el.offsetTop - yScroll + el.clientTop);
		} else {
			xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
			yPos += (el.offsetTop - el.scrollTop + el.clientTop);
		}
		el = el.offsetParent;
	}
	return [xPos, yPos];
},
replacewith = function (el, el2) {
	el.replaceWith(el2);
};
;(function(){
	var replacewithpolyfill = function () {
	'use-strict'; // For safari, and IE > 10
	var parent = this.parentNode, i = arguments.length, currentNode;
	if (!parent) return;
	if (!i) // if there are no arguments
		parent.removeChild(this);
	while (i--) { // i-- decrements i and returns the value of i before the decrement
		currentNode = arguments[i];
		if (typeof currentNode !== 'object'){
		currentNode = this.ownerDocument.createTextNode(currentNode);
		} else if (currentNode.parentNode){
		currentNode.parentNode.removeChild(currentNode);
		}
		if (!i) // if currentNode is the first argument (currentNode === arguments[0])
		parent.replaceChild(currentNode, this);
		else // if currentNode isn't the first
		parent.insertBefore(currentNode, this.nextSibling);
	}
	}
	if (!Element.prototype.replaceWith)
		Element.prototype.replaceWith = replacewithpolyfill;
	if (!CharacterData.prototype.replaceWith)
		CharacterData.prototype.replaceWith = replacewithpolyfill;
	if (!DocumentType.prototype.replaceWith)
		DocumentType.prototype.replaceWith = replacewithpolyfill;
})();
var webapp, appname = 'quraan' || '',
	maxzan = maxzan || 0,
	pager = pager || 0,
	checkbox = checkbox || 0,
	preferences = preferences || 0,
	translate = translate || 0,
	focusprev, focusnext, navigables,
	LAYERTOPMOST = 3000;
;(function(){
	var doc = document, bod = doc.body;
	navigables = ['input', 'textarea', 'button', 'a', 'select'];
	/* FOCUS how this works
	* for elements inside other formating elements, set data-focus on each parent
	* this hints to this algo to go up a parent
	* */
	focusprev = function (element, thisone, num) {
		var orig = element, out, LV;
		num = num || 0; if (num > 100) return;
		while ( element.previousElementSibling && num < 100 ) {
			++num;
			element = thisone ? element: element.previousElementSibling;
			if (isixtaf(element)) {
			} else if ( element.dataset.focus == 'list' ) {
				LV = element.listobject;
				if (LV.length()) {
					webapp.blur();
					element.focus();
					LV.last();
					LV.rakkaz(1, 1);
					out = element;
					break;
				}
			} else if ( element.dataset.focus && element.lastElementChild ) {
				out = focusprev(element.lastElementChild, 1, ++num);
				break;
			}
			else if ( navigables.includes( element.tagName.toLowerCase() ) ) {
				element.focus();
				webapp.scrollto(element);
				out = element;
				break;
			}
			if (thisone) thisone = 0; // after first run, go to the next element
		}
		if ( out ) {}
		else if ( element.dataset.focus == 1 ) {
			return focusprev( element.parentElement, 0, ++num );
		}
		else if ( element.parentElement.dataset.focus ) {
			return focusprev( element.parentElement, 0, ++num );
		} else {
			/* BUG
			* come up with a solution for this
			* */
		}
		element.onprev && element.onprev(element);
		if (out) {
			if (orig && orig.listobject) {
				orig.listobject.deselect();
			} /*else LV && LV.selected++;*/ // to avoid a +1 jump
			return out;
		}
	};
	focusnext = function (element, thisone, num) {
		var orig = element, out, LV;
		num = num || 0; if (num > 100) return;
		while ( element.nextElementSibling && num < 100 ) {
			++num;
			element = thisone ? element: element.nextElementSibling;
			if (isixtaf(element)) {
			} else if ( element.dataset.focus == 'list' ) {
				LV = element.listobject;
				if (LV.length()) {
					webapp.blur();
					element.focus();
					LV.first();
					LV.rakkaz(1, 1);
					out = element;
					break;
				}
			} else if ( element.dataset.focus && element.firstElementChild ) {
				out = focusnext(element.firstElementChild, 1, ++num);
				break;
			}
			else if ( navigables.includes( element.tagName.toLowerCase() ) ) {
				element.focus();
				webapp.scrollto(element);
				out = element;
				break;
			}
			if (thisone) thisone = 0; // after first run, go to the next element
		}
		if ( out ) {}
		else if ( element.dataset.focus == 1 ) {
			return focusnext( element.parentElement, 0, ++num );
		}
		else if ( element.parentElement.dataset.focus ) {
			return focusnext( element.parentElement, 0, ++num );
		}
		element.onnext && element.onnext(element);
		if (out) {
			if (orig && orig.listobject) {
				orig.listobject.deselect();
			} /*else LV && LV.selected--;*/ // to avoid a +1 jump
			return out;
		}
	};
	var viewsindex = {},
		getform = function (element) {
			if (!(element instanceof HTMLElement)) return;
			var payload = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					if (otherviews[i].getvalue)
						payload[ otherviews[i].dataset.id ] = otherviews[i].getvalue();
					else
						payload[ otherviews[i].dataset.id ] = otherviews[i].value;
/*
					if (otherviews[i] instanceof HTMLSelectElement) {
						otherviews[i].value = 0;
					}
					else if ( ['text', 'textarea'].includes(otherviews[i].type) ) {
						otherviews[i].value = '';
					}
					else {
					}
*/
				}
			}
			return payload;
		},
		getformkeys = function (element) {
			if (!(element instanceof HTMLElement)) return;
			var keys = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					keys[ otherviews[i].dataset.id ] = otherviews[i];
				}
			}
			return keys;
		},
		/*
		* this version lets you setup custom callbacks for forms
		* each call sends you three things
		* cb(formelement, pressedbutton, payload)
		* */
		sendform = function (element, button) {
			var payload, keys;
			if (element) {
				payload = getform(element);
				keys = getformkeys(element);
			} else {
				element = {
					id: button.dataset.form,
				};
			}
			Hooks.run('domformdata', {
				form: element,
				button: button,
				payload: payload,
				keys: keys,
			});
		},
		setupforms = function () {
			var sendbuttons = document.querySelectorAll('.form .send');
			for (var i in sendbuttons) {
				if ( sendbuttons.hasOwnProperty(i) ) {
					sendbuttons[i].onclick = function () {
						sendform( document.querySelector( '#'+this.dataset.form ), this );
					};
				}
			}
			var counts = document.querySelectorAll('.form label.count');
			for (var i in counts) {
				var countlabel = counts[i];
				if ( counts.hasOwnProperty(i) ) {
					var field = countlabel.parentNode.nextElementSibling;
					field.oninput = function () {
						this.previousElementSibling.lastElementChild.innerText = (this.value || '').length;
					};
					field.oninput();
				}
			}
		};
	/*
	* webapp features like 3inch handles linked-modules functionality example:
	* when backstack reports darajah, 3inch updates softkeys
	* */
	webapp = {
		visible: 1,
		isdimmed: 0,
		/*
		* an array of features that can be check like
		* 'feature' in window OR
		* in Navigator OR
		* in navigator
		* even if a singe one fails, an error is shown
		* */
		lavaazim: function (inwindow) {
			inwindow = inwindow || [];
			var err;
			for (var i in inwindow) {
				var feature = inwindow[i];
				if ( feature in window
					|| feature in navigator
					|| feature in Navigator ) {
				} else {
					err = 1;
					break;
				}
			}
			if (err) {
				webapp.header( translate && translate('unsupported') );
				return 0;
			} else {
				webapp.header();
				return 1;
			}
		},
		blur: function () {
			var ae = markooz();
			ae && ae.blur();
			blur();
			return ae;
		},
		header: function (text, align) {
			if (align == 1) headerui.dataset.align = '1';
			else if (align == 2) headerui.dataset.align = '2';
			else delete headerui.dataset.align;
			if (backstack.darajah <= 1) {
				if (text) {
					if (text instanceof Array) {
						headerui.dataset.i18n = text[0];
					} else {
						delete headerui.dataset.i18n,
						headerui.innerText = text;
					}
					headerui.hidden = 0;
				} else
					delete headerui.dataset.i18n,
					headerui.innerText = '',
					headerui.hidden = 1;
			} else if (backstack.darajah === 2) {
				sheet.header(text);
			}
			translate.update();
		},
		scrollx: function (v) {
			var se = scrollingelement();
			se.scrollTop += v;
		},
		scrolly: function (v) {
			var se = scrollingelement();
			se.scrollLeft += v;
		},
		dimmer: function (zindex, text) {
			zindex && (dimmer.style.zIndex = zindex);
			dimmer.hidden = zindex ? 0: 1;
			webapp.isdimmed = zindex ? 1: 0;
			if (text)
				dimmertext.hidden = 0,
				dimmertext.dataset.i18n = text;
			else
				dimmertext.hidden = 1,
				delete dimmertext.dataset.i18n,
				innerhtml(dimmertext, '');
			document.scrollingElement.style.overflow = zindex ? 'hidden' : '';
			translate.update(dimmer);
		},
		statusbarpadding: function (yes) {
			if (yes) {
				statusbarpadding.hidden = 0;
				statusbarshadow.hidden = 0;
			} else {
				statusbarpadding.hidden = 1;
				statusbarshadow.hidden = 1;
			}
		},
		transparency: function (yes) {
			yes = yes === undefined ? preferences && preferences.get(23, 1) : yes;
			if (yes/* || Navigator.largeTextEnabled*/) {
				document.body.dataset.transparency = 1;
			} else {
				delete document.body.dataset.transparency;
			}
		},
		textsize: function (yes) {
			yes = yes === undefined ? preferences && preferences.get(9, 1) : yes;
			if (yes/* || Navigator.largeTextEnabled*/) {
				document.body.dataset.largetext = 1;
			} else {
				delete document.body.dataset.largetext;
			}
		},
		exit: function () {
			close();
		},
		icons: function () {
			var elements = document.body.querySelectorAll('[data-icon]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.icon ) {
					var e = eqonaat.querySelector('#'+elements[i].dataset.icon);
					if (e)
						elements[i].innerHTML = '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>';
				}
			}
		},
		uponresize: function () {
			if (innerheight() <= 480) document.body.dataset.keyboardopen = 1;
			else delete document.body.dataset.keyboardopen;
		},
	};
	listener('dragover', function (e) {
		$.log('dragover');
		setdata(bod, 'tahweem', 1);
		preventdefault(e);
		return false;
	});
	listener('dragleave', function (e) {
		$.log('dragleave');
		$.taxeer('dragleave', function () {
			popdata(bod, 'tahweem');
		}, 3000);
		preventdefault(e);
		return false;
	});
	listener('drop', function (e) {
		popdata(bod, 'tahweem');
		preventdefault(e);
		var f = e.dataTransfer.files;
		if (f && f.length) Hooks.run('huboot', f);
		return false;
	});
	listener('resize', function () {
		webapp.uponresize();
	});
	listener('contextmenu', function (e) {
		var yes = Hooks.rununtilconsumed('contextmenu', e);
		if (yes && e) preventdefault(e);
	});
	listener('scroll', function (e) {
		Hooks.run('scroll', document.scrollingElement.scrollTop);
	});
	listener('keyup', function (e) {
		Hooks.rununtilconsumed('keyup', e);
	});
	listener('keydown', function (e) {
		Hooks.rununtilconsumed('keydown', e);
	});
	listener('load', function (e) {
		webapp.header( xlate(appname) );
		xlate.update();
		time && time.start();
		webapp.icons();
		webapp.uponresize();
		view.fahras();
		setupforms();
		if (maxzan && maxzan.badaa) {
			maxzan.badaa(function () {
				Hooks.run('ready', 1);
				backstack.main();
				loadingbox.hidden = 1;
			});
		}
		else {
			Hooks.run('ready', 1);
			$.taxeer('loadingbox', function () {
				loadingbox.hidden = 1;
			});
			backstack.main();
		}
		document.addEventListener('visibilitychange', function () {
			if (document.visibilityState === 'visible') {
				webapp.visible = 1;
				Hooks.run('visible');
			} else {
				webapp.visible = 0;
				Hooks.run('hidden');
			}
		});
		Hooks.run('visible');
	});
})();
var scrollingelement = function () {
	var darajah = backstack.darajah;
	if ([0, 1].includes(darajah)) {
		return document.scrollingElement;
	}
	if (darajah === 2) {
		return sheetui;
	}
	if (darajah === 3) {
		return dialogui;
	}
};
var datepicker = datepicker || 0;
;(function(){
	webapp.itlaa3 = function (text, time) {
		var element = itlaa3.firstElementChild;
		if (text) {
			if (text instanceof Array) {
				element.dataset.i18n = text[0];
				translate.update(itlaa3);
			} else {
				delete element.dataset.i18n,
				element.innerText = text;
			}
			itlaa3.hidden = 0;
			$.taxeer('itlaa3', function () {
				webapp.itlaa3();
			}, time||3000);
		} else {
			delete element.dataset.i18n,
			element.innerText = '',
			itlaa3.hidden = 1;
		}
	};
	webapp.taht3nsar = function (text, time, taht) { // below element
		taht = document.activeElement || taht;
		var element = taht3nsar.firstElementChild;
		if (text) {
			if (text instanceof Array) {
				element.dataset.i18n = text[0];
				translate.update(taht3nsar);
			} else {
				delete element.dataset.i18n,
				element.innerText = text;
			}
			taht3nsar.hidden = 0;
			if (taht) {
				var pos = getposition(taht);
				setcss(taht3nsar, 'top', (pos[1]-20)+'px');
				if (taht.dir == 'rtl') {
					setcss(taht3nsar, 'right');
					setcss(taht3nsar, 'left', pos[0]+'px');
				} else {
					setcss(taht3nsar, 'left');
					setcss(taht3nsar, 'right', innerwidth()-pos[0]-taht.offsetWidth+'px');
				}
			}
			$.taxeer('taht3nsar', function () {
				webapp.taht3nsar();
			}, time||3000);
		} else {
			delete element.dataset.i18n,
			element.innerText = '',
			taht3nsar.hidden = 1;
		}
	};
	webapp.scrollto = function (element) {
		var se = scrollingelement();
		se.scrollTop = 0 + (element ? element.offsetTop - (se.clientHeight / 4) : 0);
	};
	webapp.scrolltotop = function () {
		var se = scrollingelement();
		se.scrollTop = 0;
	};
	webapp.scrolltobottom = function () {
		var se = scrollingelement();
		se.scrollTop = se.scrollHeight - se.clientHeight;
		return se.scrollTop;
	};
	webapp.isatop = function () {
		var se = scrollingelement();
		return Math.floor(se.scrollTop) === 0;
	};
	webapp.isatbottom = function () {
		var se = scrollingelement();
		return Math.floor(se.scrollTop) === se.scrollHeight - se.clientHeight;
	};
	Hooks.set('closeall', function (darajah) {
		if (darajah === 3) {
			datepicker && datepicker.hide();
			dialog.hide();
			webapp.blur();
		}
		if (darajah === 2) sheet.hide(), webapp.blur();
		if (darajah === 1) view.axad('main'), webapp.blur();
		if (darajah === 0)
			webapp.itlaa3( translate('exiting') ),
			$.taxeer('exit', function () {
				webapp.exit();
			});
	});
	Hooks.set('restore', function (darajah) {
		if (darajah === 3) webapp.dimmer(600);
		if (darajah === 2) webapp.dimmer(400);
		if (darajah === 1) webapp.dimmer();
		if (darajah === 0) webapp.header(), webapp.dimmer();
	});
	Hooks.set('backstackdialog', function (args) {
		var date = 0;
		if (datepicker && args instanceof HTMLElement) date = 1;
		webapp.dimmer(600);
		softkeys.clear();
		softkeys.set(K.sl, function () {
			if (date) datepicker.okay && datepicker.okay(args);
			else dialog.okay && dialog.okay();
		}, 0, 'icondone');
		softkeys.set(K.sr, function () {
			if (date) datepicker.cancel && datepicker.cancel();
			else dialog.cancel && dialog.cancel();
		}, 0, 'iconclose');
		if (date) datepicker.show(args);
		else dialog.show(args);
	});
	Hooks.set('backstacksheet', function (args) {
		webapp.dimmer(400);
		softkeys.clear();
		if (args.callback || args.c) {
			softkeys.set(K.sl, function () {
				sheet.okay && sheet.okay();
			}, 0, 'icondone');
		}
		softkeys.set(K.sr, function () {
			sheet.cancel && sheet.cancel();
		}, 0, 'iconarrowback');
		sheet.show(args);
		softkeys.showhints();
	});
	Hooks.set('backstackview', function (name) {
		webapp.dimmer();
		softkeys.clear();
		softkeys.P.empty();
		softkeys.set(K.sr, function () {
			Hooks.run('back');
		}, 0, 'iconarrowback');
		view.ishtaghal(name);
		softkeys.showhints();
		return 1; // stop propagation
	});
	Hooks.set('backstackmain', function (name) {
		softkeys.clear();
		softkeys.P.empty();
		view.ishtaghal('main');
	});
	Hooks.set('ready', function () {
		settings.adaaf('animations', function () {
			var animationsoff = preferences.get(15, 1);
			if (animationsoff) {
				delete document.body.dataset.animations;
				setcss(document.firstElementChild, 'scrollBehavior');
			}
			else {
				document.body.dataset.animations = 1;
				setcss(document.firstElementChild, 'scrollBehavior', 'smooth');
			}
			return [animationsoff ? 'off' : 'on'];
		}, function () {
			if (preferences.get(15, 1)) {
				preferences.set(15, 0);
			}
			else {
				preferences.set(15, 1);
			}
		});
	});
})();
;(function(){
	dimmer.onclick = function () {
		if (dimmertext.innerText == '') backstack.back();
	};
	var resize = function () { $.taxeer('tvfs', function () {
		if (innerwidth() >= 1024) {
			document.body.dataset.tvfs = 1;
		} else {
			delete document.body.dataset.tvfs;
		}
	}, 100); };
	listener('resize', function () { resize(); });
	resize();
	/*
	* this messes up the nishaat pins list so it needs improvement
	* */
	/*listener('mousewheel', function (e) {
		e.preventDefault();
		if (e.wheelDeltaX >= 1 || e.wheelDeltaX <= -1
		|| e.wheelDeltaY >= 1 || e.wheelDeltaY <= -1) {
			helpers.delayedexec('mousewheel', function () {
				x = 0, y = 0;
			}, 400);
			x += e.wheelDeltaX; y += e.wheelDeltaY;
			var xx = x/60, yy = y/60;
			if (xx > 1 || xx < -1) x = 0;
			if (yy > 1 || yy < -1) y = 0;
			Hooks.rununtilconsumed('mousewheel', {
				type: 'mousewheel',
				x: xx,
				y: yy,
				preventDefault: function () {
					e.preventDefault();
				},
			});
		}
	}, {passive: false});*/
})();
/*
*
* lists have an adapter $.array, it contains the objects present in the dom list
*
* the adapter set/pop functions can be overriden to provide your own logic
*
* the dom list set/pop functions also mutate the adapter
* */
var list;
;(function(){
	'use strict';
	var direction = function () {
		return document.body.dir;
	};
	var proto = {
		_muntahaabox: 0,
		_muntahaa: -1,
		murakkaz: 0,
		adapter: 0,
		/* EXPLAIN TODO
		* my hunch is that this is to change idb prop names to dom prop names
		* but im not sure
		* */
		beforeset: 0,
		beforepop: 0,
		uponpastend: function () {
			var yes = focusnext(this.element);
			if (yes && yes.listobject) softkeys.list.basic(yes.listobject);
			return yes;
		},
		uponpaststart: function () {
			var yes = focusprev(this.element);
			if (yes && yes.listobject) softkeys.list.basic(yes.listobject);
			return yes;
		},
		uponend: 0, // when reached list end, do what? return 1 to avoid default
		uponstart: 0,
		uponnavi: 0, // ( type )
		moveup: function (uid) {
			uid = uid || (this.axavmuntaxab()||{}).uid;
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				var prev = clone.previousElementSibling;
				if (prev) {
					var prevuid = prev.dataset.uid;
					var obj = this.adapter.get(uid);
					var prevobj = this.adapter.get(prevuid);
					if (obj && prevobj) {
						this.adapter.eawwad(prevuid, uid);
						this.keys.items.insertBefore(clone, prev);
						if (this.gridnum > 1) this.left();
						else this.up();
					}
				}
			}
		},
		movedown: function (uid) {
			uid = uid || (this.axavmuntaxab()||{}).uid;
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				var next = clone.nextElementSibling;
				if (next) {
					var nextuid = next.dataset.uid;
					var obj = this.adapter.get(uid);
					var nextobj = this.adapter.get(nextuid);
					if (obj && nextobj) {
						this.adapter.eawwad(nextuid, uid);
						this.keys.items.insertBefore(next, clone);
						if (this.gridnum > 1) this.right();
						else this.down();
					}
				}
			}
		},
		ixtaf: function () {
			this.element.hidden = 1;
			this.element.parentElement.hidden = 1;
		},
		izhar: function () {
			this.element.hidden = 0;
			this.element.parentElement.hidden = 0;
		},
		uponrakkaz: function (v, active) { // active = visible & view is active
			if (v && active) softkeys.list.basic(this);
		},
		rakkaz: function (v, active) {
			var yes;
			this.murakkaz = !!v;
			if (v && !this.element.dataset.rakkaz) this.element.dataset.rakkaz = 1, yes = 1;
			else if (!v && this.element.dataset.rakkaz) delete this.element.dataset.rakkaz, yes = 1;
			(yes || active) && this.uponrakkaz && this.uponrakkaz(v, active);
		},
		/* TODO
		* improve this navigation to account for mufarraqaat
		* detect if the next item is a mufarraq, skip it.
		* */
		first: function (select) {
			this.selected = select === undefined ? -1: select;
			var item = this.get(++this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected)
				}
			}
			this.intaxabscroll( this.intaxabsaamitan() );
			return this;
		},
		last: function () {
			this.selected = this.length();
			var item = this.get(--this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(--this.selected)
				}
			}
			this.intaxabscroll( this.intaxabsaamitan() );
			return this;
		},
		message: function (msg) {
			if (msg) {
				this.keys.message.dataset.i18n = msg;
				this.keys.message.parentElement.hidden = 0;
				this.keys.items.hidden = 1;
			} else {
				delete this.keys.message.dataset.i18n;
				this.keys.message.innerText = '';
				this.keys.message.parentElement.hidden = 1;
				this.keys.items.hidden = 0;
			}
			translate.update();
		},
		left: function (e, fake) {
			if (!fake && direction() === 'rtl') return this.right(e, 1);
			var delta = this.gridnum ? 1: 10;
			this.selected -= delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected);
				}
			}
			if (this.selected < 0)
				this.first();
			else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		up: function (e) {
			this.selectedold = this.selected;
			var delta = this.gridnum ? this.gridnum: 1;
			this.selected -= delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(--this.selected)
				}
			}
			if (this.selected < 0) {
				var yes;
				if (this.uponpaststart)
					yes = this.uponpaststart(this.selectedold);
				if (yes) {
					this.intaxabscroll( this.intaxabsaamitan() );
				}
				else this.last();
			} else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		length: function () {
			if (isfun(this.uponlength)) // custom length algo
				return this.uponlength();
			return this.keys.items.children.length;
		},
		down: function (e) {
			this.selectedold = this.selected;
			var delta = this.gridnum ? this.gridnum: 1;
			this.selected += delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected)
				}
			}
			if (this.selected > this.length()-1) {
				this.selected = this.length()-1;
				var yes;
				if (this.uponpastend)
					yes = this.uponpastend(this.selectedold);
				if (yes) {
					this.intaxabscroll( this.intaxabsaamitan() );
				}
				else this.first(this.gridnum ? this.selected - this.length()-1: -1);
			} else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		right: function (e, fake) {
			if (!fake && direction() === 'rtl') return this.left(e, 1);
			var delta = this.gridnum ? 1: 10;
			this.selected += delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected);
				}
			}
			if (this.selected > this.length()-1)
				this.last();
			else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		baidaa: function (id, multiple) { // with multiple it also toggles
			id = id === undefined ? this.selected: id;
			var items = this.keys.items.children, item;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (i == id) {
						if (multiple) {
							if (item.dataset.baidaa) delete item.dataset.baidaa;
						} else item.dataset.baidaa = 1;
					}
					else if (!multiple)
						delete item.dataset.baidaa;
				}
			}
			return item;
		},
		/*
		* id can be a number or string id
		* */
		select: function (id, noscroll, silent, nofocus) {
			id = id === undefined ? this.selected: id;
			var selected = this.intaxabsaamitan(id);
			if (!noscroll) this.intaxabscroll(selected);
			if (selected && !nofocus) {
				markooz() && markooz().blur();
				selected.focus();
				this.rakkaz(1, 1);
			}
			this.selected = id;
			if (this.uponselect && !silent) {
				selected = this.get(this.selected);
				if (selected) {
					selected = this.adapter.get( selected.dataset.uid );
					if (selected) this.uponselect(selected);
				}
			}
			return this;
		},
		intaxabscroll: function (selected) {
			if (isundef(selected)) {
				selected = this.get( this.selected );
			}
			if (this.filmakaan) {
				if (selected) scrollintoview(selected);
			} else {
				if (this.selected === 0) webapp.scrollto();
				else if (selected) webapp.scrollto(selected);
			}
		},
		intaxabsaamitan: function (id) { // select silently
			id = id === undefined ? this.selected: id;
			var items = this.keys.items.children, item, selected;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (i == id)
						item.dataset.selected = 1, selected = item;
					else
						delete item.dataset.selected;
				}
			}
			if (isfun(this.uponintaxab) && selected) {
				var a = this.adapter.get( selected.dataset.uid );
				if (a) this.uponintaxab(a);
			}
			return selected;
		},
		deselect: function () {
			var old = this.selected;
			this.selected = -1;
			this.intaxabsaamitan();
			this.selected = old;
			this.rakkaz();
			return this;
		},
		/* TODO
		* add a sticky mufarraq compensation function
		* this func should add a px comp
		* use case to add another sticky heading on top of this list
		* */
		mufarraq: function (pixels) {
		},
		eawwad: function (o, uid) { // replace with o at num
			var oldclone = this.get( this.id2num(uid) );
			if (oldclone) {
				var newclone = this.set(o);
				replacewith(oldclone, newclone);
				this.adapter.eawwad(uid, o.uid)
				this.adapter.pop(uid);
			}
		},
		set: function (o, id) { // deprecate the second argument
			o = o || {};
			var clone, LV = this, listitem = o._listitem || LV._listitem,
				parent = LV.keys.items;
			if (isnum(LV._muntahaa) && LV._muntahaa > -1 && LV.length() >= LV._muntahaa)
				return; // muntahaa limit hit
			if (id === undefined)
				if (o.uid === undefined) o.uid = id = LV.length();
				else id = o.uid;
			if (LV.idprefix_raw && o.uid !== undefined)
				o.id_dom = LV.idprefix_raw + o.uid;
			if (o.uid) {
				clone = elementbyid( o.id_dom || o.uid );
			}
			if (LV.idprefix_raw && o.ruid) {
				clone = elementbyid( LV.idprefix_raw + o.ruid );
				if (clone) {
					clone.id = o.id_dom;
					setdata(clone, 'uid', o.uid)
				}
			}
			if (LV.beforeset) o = LV.beforeset(o, o.uid);
			if (o.ruid) {
				LV.adapter.pop(o.ruid);
				delete o.ruid;
			}
			LV.adapter.set(o.uid, o);
			if (!clone) {
				/*
				* this is to avoid modifying provided o object
				* it sets dataset on clone
				* */
				var o2 = Object.assign({
					id: o.id_dom, // sets the #id of an element
					data: {
						uid: o.uid,
					},
				}, o);
				clone = templates.get(listitem, parent, o.before || o.awwal, o.id_dom || o.uid)(o2);
				delete o.before;
				delete o.awwal;
				clone.dataset.listitem = 1;
				if (o.mufarraq) clone.dataset.mufarraq = o.mufarraq;
			}
			else {
				var selected = clone.dataset.selected;
				var baidaa = clone.dataset.baidaa;
				templates.set( clone, o, listitem );
				if (selected) clone.dataset.selected = 1;
				if (baidaa) clone.dataset.baidaa = 1;
			}
			if (clone) {
				if (o.mu3allaq) setdata(clone, 'mu3allaq', 1);
				else popdata(clone, 'mu3allaq');
				clone.onclick = function (e) {
					var item = LV.adapter.get( o.uid );
					if (item) {
						LV.uponclick &&
						LV.uponclick( item, e, parseint( LV.id2num(o.uid) ) );
					}
				};
			}
			LV._katabmowdoo3();
			LV.afterset && LV.afterset( o, clone, templates.keys(clone) ); // TODO deprecate
			LV.ba3dihi && LV.ba3dihi( o, clone, templates.keys(clone) );
			LV.uponadaaf && LV.uponadaaf( LV.length() );
			return clone;
		},
		listitem: function (elementname) {
			this._listitem = elementname || 'listitem';
			return this;
		},
		axavmfateeh: function (uid) {
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				return templates.mfateeh(clone);
			}
		},
		axavmuntaxab: function () { // get baidaa item's adapter object
			return this.axadmuntaxab();
		},
		axadmuntaxab: function () {
			var uid = this.num2id( this.selected || 0 );
			if (!isundef(uid)) {
				return this.adapter.get( uid );
			}
			return false;
		},
		axav: function () {
			return this.axad();
		},
		axad: function () { // get baidaa item's adapter object
			var items = this.keys.items.children, item, baidaa;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (item.dataset.baidaa) {
						baidaa = item.dataset.uid;
						break;
					}
				}
			}
			if (!isundef(baidaa)) {
				return this.adapter.get( baidaa );
			}
			return false;
		},
		get: function (id) {
			return this.keys.items.children[id];
		},
		pop: function (id) {
			var element, LV = this, uid;
			if (isundef(id)) {
				element = LV.get(LV.selected);
			} else {
				if (LV.idprefix_raw) id = LV.idprefix_raw + id;
				element = elementbyid(id);
			}
			if (element) {
				uid = element.dataset.uid;
				LV.adapter.pop( uid );
				element.remove();
				if (LV.selected) {
					if (LV.selected == LV.length())
					LV.selected = LV.length()-1;
					else
					LV.selected = LV.selected-1;
				}
				LV.intaxabsaamitan();
				LV._katabmowdoo3();
				LV.uponhavaf && LV.uponhavaf( LV.length() );
			}
		},
		popall: function () {
			this.adapter = $.array();
			innertext(this.keys.items, '');
			innertext(this._muntahaabox, '');
			this._katabmowdoo3();
		},
		press: function (key, force) {
			var element = this.get(this.selected);
			if (element) {
				var item = this.adapter.get( element.dataset.uid );
				if (item) {
					(this.element.dataset.rakkaz || force) &&
					this.onpress && this.onpress( item, key, this.selected );
				}
			}
			return this;
		},
		num2id: function (id) {
			var clone = this.get(id || this.selected);
			if (clone) return clone.dataset.uid;
			return false;
		},
		id2num: function (uid) { // return id of item that has this uid
			var cn = this.keys.items.children;
			for (var i in cn) {
				if (cn.hasOwnProperty(i)) {
					if (cn[i].dataset.uid == uid) return i;
				}
			}
			return false;
		},
		grid: function (num) {
			this.gridnum = num;
			if (num) this.element.dataset.grid = num;
			else delete this.element.dataset.grid;
			return this;
		},
		freeflow: function (v) {
			if (v) this.grid(), this.element.dataset.freeflow = 1;
			else delete this.element.dataset.freeflow;
			return this;
		},
		hidetext: function (num) {
			if (num) this.element.dataset.hidetext = num;
			else delete this.element.dataset.hidetext;
			return this;
		},
		muntahaa: function (max, muntahaabox) { // maximum
			this._muntahaa = max || -1;
			this._muntahaabox = this.keys.miqyaas || this._muntahaabox;
			if (this._muntahaabox && max > -1) this.keys.miqyaas.hidden = 0;
			return this;
		},
		_katabmowdoo3: function () {
			var LV = this, len = LV.length();
			if (isnum(LV._muntahaa) && LV._muntahaa > -1) {
				innertext(LV._muntahaabox, len+' / '+ LV._muntahaa);
			}
			this.keys.raees.hidden = len ? 0: 1;
			if (!this._mowdoo3) this.keys.raees.hidden = 1;
		},
		mowdoo3: function (m, i18n) {
			this._mowdoo3 = m || 0;
			if (i18n)
				attribute(this.keys.mowdoo3list, 'data-i18n', m),
				xlate.update(this.element);
			else if (m)
				innertext(this.keys.mowdoo3list, m);
			this._katabmowdoo3();
			return this;
		},
		idprefix: function (id) {
			this.idprefix_raw = id;
			return this;
		},
		bahac: function (bahacbox) {
			var LV = this;
			/* EXPLAIN
			* connects this list to bahacbox, bahacbox.onchange is listened on
			* with a $.taxeer
			* list.uponpaststart is also connected to bahacbox.focus
			* bahacbox.onpastend is prolly auto handled by softkeys
			* */
			if (bahacbox instanceof HTMLInputElement) {
				LV.uponpaststart = function () {
					bahacbox.focus();
					return 1;
				};
				bahacbox.oninput = function () {
					$.taxeer('listbahac', function () {
						LV.uponbahac && LV.uponbahac( bahacbox.value.trim() )
					}, 250);
				};
				bahacbox.onfocus = function () {
					LV.rakkaz();
				};
			}
			return LV;
		},
	};
	list = function (element) {
		var LV = Object.create(proto);
		element.dataset.focus = 'list';
		element.listobject = LV;
		LV.filmakaan = element.dataset.filmakaan;
		LV.element = templates.get( 'list', element )();
		LV.listitem();
		LV.adapter = $.array();
		LV.keys = templates.keys( LV.element );
		LV.selected = 0;
		LV.muntahaa();
		LV.mowdoo3();
		/* IMPORTANT EXPLAIN
		* this is for use cases with a single list that is focussed by default
		* for multiple lists in a focus group, chain .rakkaz() to unset this
		* before setting uponrakkaz
		* */
		LV.uponclick = function (i, e, uid) {
			/* call these before triggering press events in case press handler
			* calls pop or set and that changes this.selected
			* */
			LV.beforepress && LV.beforepress(i, e, uid);
			LV.intaxabsaamitan( uid ); // select without trig event
			var yes = LV.selected == uid && LV.element.dataset.rakkaz == 1;
			LV.selected = uid;
			LV.rakkaz(1, 1);
			if (yes) LV.press(K.en);
		};
		return LV;
	};
})();
/* TODO
* search should also report where in the results the pressedon result is
* this way, only that one can be updated
* also provide a way to update that very result by using the reported index uid
* */
var bahaclist, bahac;
;(function(){
	var keys, kitabat = 0, oldresults,
	nazzaf = function (string) {
		return (string||'').toLowerCase();
	};
	bahac = {
		kitabat: function (v) { // no edit button
			kitabat = v;
		},
		an3ash: function (select) { // refresh
			if (backstack.states.view === 'bahac') {
				$.taxeer('bahac', function () {
					var value = nazzaf(keys.searchbox.value);
					if (value.length === 0)
						bahac.fahras([]);
					else Hooks.run( 'bahac', value );
				}, 350);
				if (select)
					bahaclist.select();
			}
		},
		fahras: function (results) {
			results = results || oldresults || [];
			bahaclist.popall();
			bahaclist.message(results.length ? undefined: translate('nosearchresults') );
			results.forEach(function (item, i) {
				bahaclist.set(item, i);
			});
			if (backstack.states.view === 'bahac') {
				webapp.header( results.length ? (results.length+' '+translate('results'))
								: translate('search') );
				bahaclist.select();
			}
			oldresults = results;
		},
	};
	Hooks.set('ready', function () {
		keys = view.mfateeh('bahac');
		keys.searchbox.oninput = function () {
			bahac.an3ash();
		};
		bahaclist = list( keys.list ).idprefix('bahac');
		bahaclist.uponpastend = bahaclist.uponpaststart = function () {
			keys.searchbox.focus();
			return 1;
		};
		bahaclist.beforeset = function (item, id) {
			return item;
		};
		bahaclist.onpress = function (item, key, uid) {
			$.log(bahaclist.axav(), [item, key, uid]);
			Hooks.run('bahaconpress', [item, key, uid]);
		};
	});
	Hooks.set('viewready', function (args) {
		switch (args.name) {
			case 'main':
				softkeys.set('*', function () {
					Hooks.run('view', 'bahac');
					return 1;
				}, '*', 'iconsearch');
				break;
			case 'bahac':
				webapp.header( translate('search') );
				if (!oldresults || (oldresults && oldresults.length === 0))
					keys.searchbox.focus();
				bahac.fahras();
				softkeys.list.basic(bahaclist);
				softkeys.set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], function (k) {
					bahaclist.press(k);
				});
				if (kitabat)
					softkeys.set(K.sl, function () {
						bahaclist.press(K.sl);
					}, 0, 'iconedit');
				softkeys.set('*', function () {
					bahaclist.selected = -1;
					bahaclist.select();
					keys.searchbox.focus();
					return 1;
				}, '*', 'iconsearch');
				break;
		}
	});
})();
var backstack;
;(function(){
	var s,
	storage = {
		3: {}, // searches, dialogs, menus
		2: {}, // settings, ...
		1: {}, // lists, editors, renderuis, ...
		0: {}, // main, ...
	},
	l = function () {
		var darajah = 0;
		if (s.dialog) darajah = 3;
		else if (s.sheet) darajah = 2;
		else if (s.view) darajah = 1;
		else darajah = 0;
		backstack.darajah = darajah;
		return darajah;
	},
	savefocus = function () { // save focus on each darajah, restore automatically
		backstack.set('backstackfocus', document.activeElement);
	},
	restorefocus = function () {
		var active = backstack.get('backstackfocus');
		active && active.focus && active.focus();
	};
	/*
	* this is the glatteis standalone platform
	* there's no browser history stack or back+forward buttons to worry about
	* so we can take full control
	* no need to make it compatible with almudeer since that's for PWAs
	* here we have way more freedom so let's capitalize on it
	*
	* this basically replaces the browser backstack
	*
	* the backstack event is fired on all changes
	* */
	backstack = {
		darajah: 0,
		states: {
			dialog: 0, // searches, dialogs, menus
			sheet: 0, // settings, ...
			view: 0, // lists, editors, renderuis, ...
			main: 0, // main, ...
		},
		set: function (key, value) {
			storage[backstack.darajah][key] = value;
		},
		get: function (key) {
			if (key) return storage[backstack.darajah][key] ;
			else return storage[backstack.darajah] ;
		},
		dialog: function (args) {
			savefocus();
			s.dialog = args || 1;
			l();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackdialog', args);
			Hooks.run('backstack', backstack.darajah);
		},
		sheet: function (args) {
			savefocus();
			s.sheet = args || 1;
			l();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstacksheet', args);
			Hooks.run('backstack', backstack.darajah);
		},
		view: function (args) {
			savefocus();
			s.view = args;
			l();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackview', args);
			Hooks.run('backstack', backstack.darajah);
		},
		main: function (args) {
			savefocus();
			s.main = args || 1;
			l();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackmain', args);
			Hooks.run('backstack', backstack.darajah);
		},
		back: function () {
			/*
			* if any dialog is open, close them first, then sheets, then mains
			* */
			if (s.dialog)
				s.dialog = 0, l(), Hooks.run('closeall', 3);
			else if (s.sheet)
				s.sheet = 0, l(), Hooks.run('closeall', 2);
			else if (s.view)
				s.view = 0, s.main = 1, l(), Hooks.run('closeall', 1);
			else
				s.main = 0, l(), Hooks.run('closeall', 0);
			/*
			* then see what is left open and refire its event with stored args
			* */
			Hooks.run('restore', backstack.darajah);
			Hooks.run('backstack', backstack.darajah);
			restorefocus();
		},
	};
	Hooks.set('back', function () {
		backstack.back();
	});
	Hooks.set('dialog', function (args) {
		backstack.dialog(args);
	});
	Hooks.set('sheet', function (args) {
		backstack.sheet(args);
	});
	Hooks.set('view', function (args) {
		backstack.view(args);
	});
	Hooks.set('main', function (args) {
		backstack.main(args);
	});
	s = backstack.states;
})();
var preferences;
;(function(){
	'use strict';
	/* LEGEND preferences local storage
	* @ last sync time
	* @0 offline since
	* 1 key
	* 2 uid (account)
	* 3 ruid
	* 4 list views cache
	* 5 is menu hidden, 1 yes
	* 6 initial sync done?
	* 7 softkeys help
	* 8 sound off
	* 9 largetext
	* 10 default perms for different account types
	* 11 permissions of current account
	* 12 temp unit C F K
	* 13 meanings
	* 15 animations off
	* 16 softkeystouch dpad
	* 17 pagerasmaa
	* 18 webapptouchdir
	* 19 theme
	* 20 username
	* 21 display name
	* 22 account type
	* 23 transparency
	* 24 24 hour
	* 25 lang
	* 26 calendar type hijri gregorian
	* 27 digit comma separation
	* 30 app uid
	* 40 app title
	* 50 app address
	* 60 app phone
	* 70 billing on Central
	* 80 default currency
	* 81 latitude
	* 82 longitude
	* 90 sign in required
	* 91 location required
	* 100 remember viewed articles
	* 110 frequency of used dashboard items
	* 120 home view
	* 130 units (SI, imperial)
	* 140 font
	* 150 global newform toggle
	* 160 features
	* 170 conf
	* 1100 umoor what tag(s) to show?
	* */
	preferences = {
		popall: function () {
			return localStorage.clear();
		},
		set: function (name, value) {
			return localStorage.setItem(name, value);
		},
		get: function (name, json) {
			if (json) {
				try {
					return JSON.parse( localStorage.getItem(name) );
				} catch (ignore) {
				}
				return {};
			} else
				return localStorage.getItem(name);
		},
		pop: function (name) {
			return localStorage.removeItem(name);
		},
		/*
		* for json data, fetches stored data, parses as json, gives you a nice
		* object to work with in a callback, you make the changes and just
		* return the result, it saves the object back
		* */
		change: function (name, callback) {
			if (typeof callback === 'function') {
				var data;
				try {
					data = preferences.get(name);
					data = JSON.parse( data );
				} catch (ignore) {
				}
				if (!(data instanceof Object))
					data = {};
				data = callback(data);
				preferences.set(name, JSON.stringify( data ) );
			}
		},
	};
	var buildnum = preferences.get('#', 1);
	if ( buildnum != 33 ) {
		preferences.pop(3); // ruid
		preferences.pop('@'); // last sync time
		preferences.pop(4); // list view cache
		preferences.pop(6); // initial sync done
	}
	preferences.set('#', 33);
	Hooks.set('ready', function () {
		if ( buildnum != 33 ) {
			$.taxeer('seeghahjadeedah', function () {
				Hooks.run('seeghahjadeedah', buildnum);
			}, 2000);
		}
	});
	$.log.s( 33 );
})();
var activity;
;(function(){
	activity = {
		jaame3: function (name, type, key, value) { // generic
			if ('MozActivity' in window) {
				var data = {
					type: type,
				};
				data[key] = value;
				new MozActivity({
					name: name,
					data: data,
				});
			}
		},
		ittasal: function (num) { // call/telephone (verb)
			if (num) activity.jaame3('dial', 'webtelephony/number', 'number', num);
		},
		arsal: function (num) { // send (verb) risaalah (noun) message
			if (num) activity.jaame3('new', 'websms/sms', 'number', num);
		},
		abrad: function (address) { // (e)mail (verb) breed (noun)
			if (address) activity.jaame3('new', 'mail', 'url', 'mailto:'+address);
		},
	};
})();
var view;
;(function(){
	var index = {};
	view = {
		zaahir: function (name) {
			return view.axav() === name;
		},
		mfateeh: function (name) { // keys
			var element = index[name];
			if (element) return templates.keys(element);
			return false;
		},
		ishtaghal: function (name) {
			var level = backstack.level ,
				element = view.axad(name) ,
				keys = templates.keys(element) ;
			Hooks.run('viewready', {
				name: name,
				element: element,
				keys: keys,
				level: level,
			});
		},
		axav: function (name, onlyelement) { // get
			if (!name) {
				for (var i in index) {
					if (!index[i].hidden) {
						return i;
					}
				}
				return;
			}
			var view;
			for (var i in index) {
				if (i == name)
					view = index[i];
				else if (!onlyelement)
					index[i].hidden = 1;
			}
			if (view) {
				if (!onlyelement) view.hidden = 0;
				return view;
			}
		},
		axad: function (name, onlyelement) { // get, deprecated
			view.axav(name, onlyelement);
		},
		fahras: function () { // index
			var elements = document.body.querySelectorAll('[data-view]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.view ) {
					if (elements[i].dataset.view !== 'main')
						elements[i].hidden = 1;
					index[ elements[i].dataset.view ] = elements[i];
				}
			}
			return index;
		},
	};
})();
var time;
;(function(){
	var val = {}, timeout, started,
		monthnames = ('january february march april may june july '
					+ 'august september october november december').split(' '),
		weekdays = 'sunday monday tuesday wednesday thursday friday saturday'.split(' ');
	time = function (parent) {
		var items = (parent||document).querySelectorAll('[data-time]'),
			is24 = preferences.get(24, 1);
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dataset = e.dataset;
					var datetime = dataset.time;
					var by = dataset.by;
					datetime = parseInt(datetime);
					if (e.dataset.deadline) {
						if (time.now() < datetime)
							delete e.dataset.past, e.dataset.future = 1;
						else
							delete e.dataset.future, e.dataset.past = 1;
					} else
						delete e.dataset.future, delete e.dataset.past;
					if (by) {
						time.relativetime(0, items[i]);
					}
					else if (datetime !== '') {
						if (datetime !== 'false') {
							e.setAttribute('title',
								time.formatdate(
									new Date(datetime),
									'Do MMM YYYY, ' + (is24 ? 'HH:mm' : 'hh:mma')
								)
							);
						}
						e.innerHTML = time.relativetime(datetime, 0, e.dataset);
					}
				}
			}
		}
	};
	time.monthname = function (value) { //starts at zero
		return monthnames[value];
	};
	time.miqdaar = function (delta, secondary) { // to mins, hrs, days, etc
		var fuzzy = '',
			minute = 60,
			hour = minute * 60,
			day = hour * 24,
			week = day * 7,
			month = day * 30,
			year = month * 12;
		if (delta < minute) {
			fuzzy = delta + ' ' + xlate('secondsago');
		}
		else if (delta < 2 * minute) {
			fuzzy = parsefloat(delta / minute, 1) + xlate('minute');
		}
		else if (delta < hour) {
			fuzzy = parsefloat(delta / minute, 1) + xlate('minutesago');
		}
		else if (Math.floor(delta / hour) == 1) {
			fuzzy = 1 + xlate('hourago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + parsefloat(mins, 1) + xlate('minutesago');
		}
		else if (delta < day) {
			fuzzy = Math.floor(delta / hour) + ' ' + xlate('hoursago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + mins + xlate('minutesago');
		}
		else if (delta >= day && delta < month) {
			var days = Math.floor(delta / day);
			fuzzy = days === 1 ? 1 + xlate('dayago') : days + xlate('daysago');
			var hours = Math.floor( (delta % day) / hour );
			if (hours)
				fuzzy += ' ' + (hours === 1 ?
								hours + xlate('hourago')
								: hours + xlate('hoursago'));
		}
		else if (delta > month && delta < year) {
			var months = Math.floor(delta / month);
			fuzzy = months === 1 ? months + xlate('monthago')
					: months + xlate('monthsago');
			var days = Math.floor( (delta % month) / day );
			if (days) fuzzy += ' ' + (days === 1 ? days + xlate('dayago')
									: days + xlate('daysago'));
		}
		else if (delta > year) {
			var years = Math.floor(delta / year);
			fuzzy = years === 1 ? years + xlate('yearago')
					: years + xlate('yearsago');
			var months = Math.floor( (delta % year) / month );
			if (months) fuzzy += ' ' + (months === 1 ? months + xlate('monthago')
					: months + xlate('monthsago'));
		}
		return fuzzy;
	};
	time.days = function (days) {
		days = new Date().getTime() - new Date(days).getTime();
		days = days / time.day;
		return days;
	};
	time.fuzzytime = function (date, muxtasar) {
		date = date || +new Date;
		var delta = Math.round( (+new Date - date) / 1000),
			future;
		if (delta < 0) {
			future = 1;
			delta *= -1;
		}
		var minute = 60,
			hour = minute * 60,
			day = hour * 24,
			week = day * 7,
			month = day * 30,
			year = month * 12;
		var fuzzy;
		if (!future && delta < 15) {
			if (muxtasar)
			fuzzy = delta + translate('sseconds');
			else
			fuzzy = translate('justnow');
		}
		else if (delta < minute) {
			if (muxtasar)
			fuzzy = delta + translate('sseconds');
			else
			fuzzy = delta + ' ' + translate('secondsago');
		}
		else if (delta < 2 * minute) {
			if (muxtasar)
			fuzzy = 1 + translate('sminutes');
			else
			fuzzy = translate('aminuteago');
		}
		else if (delta < hour) {
			if (muxtasar)
			fuzzy = Math.floor(delta / minute) + translate('sminutes');
			else
			fuzzy = Math.floor(delta / minute) + ' ' + translate('minutesago');
		}
		else if (Math.floor(delta / hour) == 1) {
			fuzzy = 1 + translate('hourago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) {
				if (muxtasar)
				fuzzy = ' ' + mins + translate('sminutes');
				else
				fuzzy += ' ' + mins + translate('minutesago');
			}
		}
		else if (delta < day) {
			fuzzy = Math.floor(delta / hour) + translate('hoursago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + mins + translate('minutesago');
		}
		else if (delta >= day && delta < month) {
			var days = Math.floor(delta / day);
			fuzzy = days === 1 ? 1 + translate('dayago') : days + translate('daysago');
			var hours = Math.floor( (delta % day) / hour );
			if (hours)
				fuzzy += ' ' + (hours === 1 ?
								hours + translate('hourago')
								: hours + translate('hoursago'));
		}
		else if (delta > month && delta < year) {
			var months = Math.floor(delta / month);
			fuzzy = months === 1 ? months + translate('monthago')
					: months + translate('monthsago');
			var days = Math.floor( (delta % month) / day );
			if (days) fuzzy += ' ' + (days === 1 ? days + translate('dayago')
									: days + translate('daysago'));
		}
		else if (delta > year) {
			var years = Math.floor(delta / year);
			fuzzy = years === 1 ? years + translate('yearago')
					: years + translate('yearsago');
			var months = Math.floor( (delta % year) / month );
			if (months) fuzzy += ' ' + (months === 1 ? months + translate('monthago')
					: months + translate('monthsago'));
		}
		if (future) fuzzy = translate('infuture') +' '+ fuzzy;
		return translate.a3daad(fuzzy);
	};
	time.relativetime = function (datetime, e, dataset) {
		if (datetime === 'false') return translate('alongtime');
		var today = time.striptime().getTime(),
			yesterday = time.traversebydays(today, -1),
			tomorrow = time.traversebydays(today, 1),
			text = '',
			is24 = preferences.get(24, 1);
		if (e) {
			dataset = e.dataset;
			var datetime = parseInt(dataset.time),
				minus = dataset.minus,
				by = dataset.by;
			delete dataset.i18n;
			if (minus !== undefined) datetime = time.now() - datetime;
			if (by === 'age') {
				innerhtml(e, time.fuzzytime(datetime));
			} else
			if (by === 'days') {
				var days = time.days(datetime);
				if (days < 0.1) days = days.toFixed(2);
				else if (days < 1) days = days.toFixed(1);
				else days = Math.floor(days);
				innerhtml(e, days + ' ' + translate('daysago'));
			} else
			if (by === 'hourly') {
				innerhtml(e, time.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') ));
			} else
			if (by === 'yearly') {
				innerhtml(e, time.formatdate( new Date(datetime), 'YYYY' ));
			} else
			if (by === 'monthly') {
				innerhtml(e, time.formatdate( new Date(datetime), 'MMMM YYYY' ));
			} else
			if (by === 'daily') {
				innerhtml(e, time.formatdate( new Date(datetime), 'Do MMMM YYYY' ));
			} else
			if (by === 'minute') {
				innerhtml(e, time.formatdate( new Date(datetime), is24 ? 'HH:mm' : 'hh:mma' ));
			} else {
				if (datetime === today)
					dataset.i18n = 'today';
				else if (datetime === yesterday)
					dataset.i18n = 'yesterday';
				else if (datetime === tomorrow)
					dataset.i18n = 'tomorrow';
				else
					innerhtml(e, time.formatdate( new Date(datetime), 'Do MMM YYYY' ));
			}
		} else {
			var at = translate('@');
			var c = translate(','); // unicode commas
			var months = ( ( time.now() - datetime ) / time.month );
			var days = ( ( time.now() - datetime ) / time.day );
			if (days <= 1) {
				if (dataset && dataset.muxtasar == '3')
					text += time.fuzzytime( datetime, 1 );
				else if (dataset && dataset.muxtasar == '2')
					text += time.fuzzytime( datetime );
				else {
					if (dataset && !dataset.muxtasar)
						text += time.fuzzytime( datetime ) + ' '+at+' ';
					text += time.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') );
				}
			} else if (days > 1 && days <= 4) {
				text = time.formatdate( new Date(datetime), 'dddd'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			} else if (months < 2) {
				text = time.formatdate( new Date(datetime), 'Do MMM'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			} else {
				text = time.formatdate( new Date(datetime), 'Do MMM YYYY'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			}
			if (e) innerhtml(e, text);
		}
		return text;
	};
	time._calcs = {};
	time._replacements = [];
	time._uid = 0;
	time.now = function () { return new Date().getTime(); };
	time.zero = function (s) { return s < 10 ? '0'+s: s };
	time.year = 31557600000 ;
	time.month = 2629800000 ;
	time.day = 87660000 ;
	time.hour = 3652500 ;
	time.minute = 60875 ;
	time.second = 1000 ;
	time.milli = 1 ;
	time.striptime = function (_time) {
		var parsed = new Date(_time||new Date().getTime());
		parsed = (parsed.getDate()) + ' ' + monthnames[parsed.getMonth()] + ' ' + parsed.getFullYear() + ' GMT';
		parsed = new Date(parsed);
		if (parsed.toString() === 'Invalid Date') parsed = false;
		return parsed;
	};
	/*
	* both int values
	* */
	time.traversebydays = function (intdate, num) {
		intdate = new Date( intdate );
		intdate.setDate( intdate.getDate() + num );
		return intdate.getTime();
	};
	time.realdatereplace = function (s) {
		if ( s === ('YYYY') ) { return val._year }
		if ( s === ('YY') ) { return val._shortyear < 10 ? '0'+val._shortyear: val._shortyear }
		if ( s === ('Y') ) { return val._shortyear }
		if ( s === ('HH') ) { return val._hours < 10 ? '0'+val._hours: val._hours }
		if ( s === ('H') ) { return val._hours }
		if ( s === ('hh') ) { return val._hours12 < 10 ? '0'+val._hours12: val._hours12 }
		if ( s === ('h') ) { return val._hours12 }
		if ( s === ('mm') ) { return val._minutes < 10 ? '0'+val._minutes: val._minutes }
		if ( s === ('m') ) { return val._minutes }
		if ( s === ('ss') ) { return val._seconds < 10 ? '0'+val._seconds: val._seconds }
		if ( s === ('s') ) { return val._seconds }
		if ( s === ('a') ) { return val._ampm }
		if ( s === ('MMMM') ) { return val._monthname }
		if ( s === ('MMM') ) { return (val._monthname||'').substr(0, 3) }
		if ( s === ('MM') ) { return val._month < 10 ? '0'+val._month: val._month }
		if ( s === ('M') ) { return val._month }
		if ( s === ('dddd') ) { return val._dayname }
		if ( s === ('ddd') ) { return (val._dayname||'').substr(0, 3) }
		if ( s === ('DD') ) { return val._day < 10 ? '0'+val._day: val._day }
		if ( s === ('Do') ) { return val._day+val._o }
		if ( s === ('D') ) { return val._day }
	};
	time.replacewithuid = function () {
		time._replacements[time._uid] = time.realdatereplace(arguments[0]);
		++time._uid;
		return '%{'+time._uid+'}';
	};
	time.formatdate = function (date, format) {
		format = format || 'MM/DD/YYYY h:mma';
		time._uid = 0;
		time._replacements = [];
		val._year = date.getFullYear()+'' ,
		val._shortyear = parseInt(val._year.substr(-2)) ,
		val._month = date.getMonth()+1 ,
		val._monthname = monthnames[val._month-1] ,
		val._day = date.getDate() ,
		val._dayname = weekdays[date.getDay()] ,
		val._hours = date.getHours() ,
		val._hours12 = val._hours % 12 ,
		val._hours12 = val._hours12 < 1 ? 12: val._hours12 , // the hour '0' should be '12'
		val._minutes = date.getMinutes() ,
		val._seconds = date.getSeconds() ,
		val._ampm = val._hours >= 12 ? translate('pm') : translate('am') ;
		val._monthname = translate(val._monthname);
		val._dayname = translate(val._dayname);
		val._o = translate('th');
		if (val._day === 1 || val._day === 21 || val._day === 31) val._o = translate('st');
		if (val._day === 2 || val._day === 22) val._o = translate('nd');
		if (val._day === 3 || val._day === 23) val._o = translate('rd');
		var datetimestring = format;
			datetimestring = datetimestring
				.replace(/YYYY/g, time.replacewithuid)
				.replace(/YY/g , time.replacewithuid)
				.replace(/Y/g , time.replacewithuid)
				.replace(/HH/g , time.replacewithuid)
				.replace(/H/g , time.replacewithuid)
				.replace(/hh/g , time.replacewithuid)
				.replace(/h/g , time.replacewithuid)
				.replace(/mm/g , time.replacewithuid)
				.replace(/m/g , time.replacewithuid)
				.replace(/ss/g , time.replacewithuid)
				.replace(/s/g , time.replacewithuid)
				.replace(/a/g , time.replacewithuid)
				.replace(/MMMM/g, time.replacewithuid)
				.replace(/MMM/g , time.replacewithuid)
				.replace(/MM/g , time.replacewithuid)
				.replace(/M/g , time.replacewithuid)
				.replace(/dddd/g, time.replacewithuid)
				.replace(/ddd/g , time.replacewithuid)
				.replace(/DD/g , time.replacewithuid)
				.replace(/Do/g , time.replacewithuid)
				.replace(/D/g , time.replacewithuid)
				;
		var matches;
		datetimestring = datetimestring.replace(/\%\{(\d)*\}/gm, function () {
			return time._replacements[ arguments[1]-1 ];
		});
		return datetimestring;
	};
	time.start = function (parent) {
		started = 1;
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			time(parent);
			if (started) time.start();
		}, 10*1000);
	};
	time.stop = function () {
		clearTimeout(timeout);
		started = 0;
	};
	Hooks.set('visible', function () {
		time.start();
	});
	Hooks.set('hidden', function () {
		time.stop();
	});
	Hooks.set('widgets', function (parent) {
		if (parent) time(parent);
	});
	Hooks.set('ready', function () {
	});
})();
var settings, currentad;
;(function(){
	var settingsitems = [
		/*['quality', 0, function () {
			Hooks.run('sheet', {
				name: 'quality',
				title: translate('quality'),
			});
		}],*/
		['reportbug', 0, function () {
			activity.abrad(myemail+'?subject='+appname+' bug '+33);
		}],
		['requestfeat', 0, function () {
			activity.abrad(myemail+'?subject='+appname+' request '+33);
		}],
		['timeformat', function () {
			var is24 = preferences.get(24, 1);
			return [is24 ? 'hours24' : 'hours12'];
		}, function () {
			var is24 = preferences.get(24, 1);
			if (is24) preferences.set(24, 0);
			else preferences.set(24, 1);
		}],
		['calendar', function () {
			var isgregorian = preferences.get(26, 1);
			return [isgregorian ? 'gregorian' : 'hijri'];
		}, function () {
			var isgregorian = preferences.get(26, 1);
			if (isgregorian) preferences.set(26, 0);
			else preferences.set(26, 1);
		}],
		['transparency', function () {
			var isit = preferences.get(23, 1);
			webapp.transparency();
			return [isit ? 'on' : 'off'];
		}, function () {
			var isit = preferences.get(23, 1);
			if (isit) { preferences.set(23, 0); }
			else { preferences.set(23, 1); }
		}],
		['largetext', function () {
			var largetext = preferences.get(9, 1);
			webapp.textsize();
			return [largetext ? 'on' : 'off'];
		}, function () {
			preferences.set(9, preferences.get(9, 1) ? 0: 1);
		}]
	], settingslist, myemail = 'hxorasani@gmail.com', keys;
	settings = {
		adaaf: function (name, getvalue, onpress) { // add
			settingsitems.push([name, getvalue, onpress]);
			settings.jaddad(settingsitems.length-1);
			return settingsitems.length-1;
		},
		axad: function (uid) { // get
			return settingsitems[uid];
		},
		jaddad: function (uid) { // update
			var item = settings.axad(uid);
			if (item) {
				var body = typeof item[1] === 'function' ? item[1]() : undefined;
				var obj = {
					uid: uid,
				};
				obj.index = uid;
				obj.titlei18n = item[0];
				if (body instanceof Array)
					obj.bodyi18n = body[0];
				else
					obj.body = body;
				if (settingslist) {
					settingslist.set(obj);
					if (backstack.states.view === 'settings')
						settingslist.select();
				}
			}
		},
	};
	Hooks.set('ready', function () {
		keys = view.mfateeh('settings');
		settingslist = list( keys.list ).idprefix('settings');
		settingslist.beforeset = function (item, id) {
			return item;
		};
		settingsitems.forEach(function (item, i) {
			settings.jaddad(i);
		});
		settingslist.onpress = function (item, key, uid) {
			if (item) {
				settings.axad(item.index)[2]();
				settings.jaddad(item.index);
			}
		};
		if (0 && 'getKaiAd' in window)
		getKaiAd({
			publisher: '7e2cfabf-ef5c-46eb-8e57-c20f3d6a1171',
			test: 0 ? 0: 1,
			timeout: 60*1000,
			h: 48,
			w: 240,
			container: keys.ad,
			onerror: function (e) { $.log.e(e); },
			onready: function (ad) {
				currentad = ad;
				ad.call('display', {
				});
			}
		});
	});
	Hooks.set('viewready', function (args) {
		switch (args.name) {
			case 'main':
				softkeys.set('9', function () {
					Hooks.run('view', 'settings');
				}, '9', 'iconsettings');
				break;
			case 'settings':
				webapp.header( ['settings'] );
				softkeys.list.basic(settingslist);
				softkeys.set(K.en, function () {
					settingslist.press(K.en);
				});
				softkeys.set(K.bs, function () {
					backstack.back();
				});
				if (0 && 'getKaiAd' in window)
				softkeys.set('0', function () {
					if (currentad) currentad.call && currentad.call('click');
				}, translate('openad'), false);
				/* TEST
				* this can be automated by giving a function to view.?set?
				*
				* view should autocall this function on restore
				* it can find functions by looping
				* */
				settingslist.select();
				break;
		}
	});
})();
var translate, taraajim = taraajim || {}, xlate;
;(function(){
	'use strict';
	var
	languages = Object.keys(taraajim),
	uglynames = {
		en: 'en',
		ar: 'ar',
		ur: 'ur',
	},
	defaultlang = 'en',
	donumbers = function (translation) {
		var language = translate.get();
		if (['ur', 'ar'].includes(language)) {
			return translation .replace(/0/g, '٠')
								.replace(/1/g, '١')
								.replace(/2/g, '٢')
								.replace(/3/g, '٣')
								.replace(/4/g, '٤')
								.replace(/5/g, '٥')
								.replace(/6/g, '٦')
								.replace(/7/g, '٧')
								.replace(/8/g, '٨')
								.replace(/9/g, '٩')
								.replace(/%/g, '٪');
		} else {
			return translation;
		}
	},
	dodirection = function (parent, selector) {
		if (selector === undefined) selector = '[data-dir]';
		var items = (parent||document).querySelectorAll(selector);
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dir;
					if (e instanceof HTMLInputElement
					|| e instanceof HTMLTextAreaElement) {
						dir = translate.direction(e.value);
						e.dir = dir === 1 ? 'rtl' : 'ltr';
						listener(e, ['focus', 'input'], function () {
							dir = translate.direction(this.value);
							this.dir = dir === 1 ? 'rtl' : 'ltr';
						});
					} else {
						if (e.dataset.dir === 'rtl') { // force rtl
							dir = 'rtl';
						} else if (e.dataset.dir === 'ltr') { // force ltr
							dir = 'ltr';
						} else {
							dir = translate.direction(e.innerText);
						}
						if (e.dataset.dir == 'parent') { // apply to parent
							e.parentElement.dir = dir === 1 ? 'rtl' : 'ltr';
						} else {
							e.dir = dir === 1 ? 'rtl' : 'ltr';
						}
					}
				}
			}
		}
	};
	translate = function (alias) {
		var str = '';
		var language = translate.get();
		if (language && taraajim[language]) {
			if (taraajim[language][alias])
				str = taraajim[language][alias];
		}
		if (str === '') {
			if (taraajim['en'] && taraajim['en'][alias])
				str = taraajim['en'][alias];
		}
		var args = arguments;
		if (args.length > 1) {
			for (var i = 0; i < args.length; ++i) {
				str = str.replace( new RegExp('\%'+(i+1), 'g'), args[i+1] );
			}
		}
		if (str === '') str = alias || '';
		str = donumbers(str);
		return '' + str;
	};
	translate.get = function () {
		return preferences.get(translate.saveto) || defaultlang;
	};
	translate.set = function (language) {
		preferences.set(translate.saveto, language);
	};
	translate.saveto = 25;
	translate.change = function (language) {
		language = language || defaultlang;
		if (['ur', 'ar'].includes(language)) {
			document.body.dir = 'rtl';
		} else {
			document.body.dir = 'ltr';
		}
		Hooks && Hooks.run('translateupdate');
		translate.set(language);
		translate.update();
	};
	translate.a3daad = function (str) {
		return donumbers(str);
	};
	translate.update = function (parent) {
		var items = (parent||document).querySelectorAll('[data-i18n]');
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dataset = e.dataset;
					var i18n = dataset.i18n;
					if (i18n !== '') {
						var translation = translate(i18n);
						translation = donumbers(translation);
						if (e instanceof HTMLInputElement
						|| e instanceof HTMLSelectElement
						|| e instanceof HTMLTextAreaElement) {
							e.placeholder = translation;
						} else {
							e.innerText = translation;
						}
					}
				}
			}
		}
		dodirection(parent);
		dodirection(parent, 'input');
		dodirection(parent, 'textarea');
	};
	/*
	* detect language direction, 0-ltr, 1-rtl, 2-mixed
	* */
	translate.direction = function (text) {
		text = text || '';
		var ltr = text.match(/[a-zA-Z]+/),
			rtl = text.match(/[ا-ي]+/);
		if (rtl) return 1;
		if (ltr) return 0;
		return 2;
	};
	Hooks.set('ready', function () {
		translate.change( translate.get() );
		settings.adaaf('language', function () {
			var language = translate.get();
			if (language) return translate( uglynames[language]||'' );
		}, function () {
			var language = translate.get();
			var index = languages.indexOf( language );
			if (index < languages.length-1)
				++index;
			else
				index = 0;
			translate.change(languages[index]);
		});
	});
	xlate = translate;
})();
var templates;
;(function(){
	var index = {};
	templates = {
		mfateeh: function (element) {
			return templates.keys(element);
		},
		keys: function (element) {
			if (!(element instanceof HTMLElement)) return;
			var keys = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					if (otherviews[i].dataset)
						keys[ otherviews[i].dataset.id ] = otherviews[i];
				}
			}
			return keys;
		},
		set: function (clone, o, template) {
			var keys = templates.keys(clone);
			o = o || {};
			if (o.hidden) clone.hidden = 1;
			if (o.id) clone.id = o.id;
			if (o.classes) clone.className = o.classes;
			if (o.status == 1) clone.dataset.selected = 1, clone.disabled = 0;
			else if (o.status == 2) clone.disabled = 1, delete clone.dataset.selected;
			else clone.disabled = 0, delete clone.dataset.selected;
			if (o.data)
			for (var i in o.data) {
				if (o.data[i] !== undefined)
					clone.dataset[i] = o.data[i];
				else
					delete clone.dataset[i];
			}
			if (o.onclick) clone.onclick = o.onclick;
			for (var i in keys) {
				if (!isundef(o[i]) || !isundef(o[i+'$h'])) {
					if (o[i] == 'ixtaf') {
						keys[i].hidden = 1;
					} else
					if (o[i] == 'izhar') {
						keys[i].hidden = 0;
					} else
					if (keys[i] instanceof HTMLInputElement) {
						keys[i].value = o[i];
					} else
					if (keys[i] instanceof HTMLImageElement) {
						if (typeof o[i] === 'string' && o[i].length) {
							if (o[i].startsWith('app://'))
								keys[i].src = o[i];
							else
								keys[i].src = 'file://'+o[i];
							keys[i].hidden = 0;
						} else {
							keys[i].hidden = 1;
						}
					} else
					if ( ['titlehours', 'titledays', 'titletime',
							'time', 'timeshow', 'days', 'waqt']
						.includes(i) ) { // dataset.time...
						if (o[i] !== undefined) {
							keys[i].dataset.time = o[i];
						}
						if (o.deadline)
							keys[i].dataset.deadline = 1;
						else
							delete keys[i].dataset.deadline;
					} else // improve how this is handled
					if (['titlei18n', 'bodyi18n'].includes(i)) {
						if (o[i]) {
							keys[i].hidden = 0;
							keys[i].dataset.i18n = o[i];
						} else {
							keys[i].hidden = 1;
							delete keys[i].dataset.i18n;
							keys[i].innerHTML = '';
						}
					} else // improve how this is handled
					if (['titlehtml', 'bodyhtml', 'bodyshowhtml']
						.includes(i)) { // raw HTML mode
						if (o[i]) {
							keys[i].hidden = 0;
							keys[i].innerHTML = o[i];
						} else {
							keys[i].hidden = 1;
							keys[i].innerHTML = '';
						}
					} else
					if (i == 'icon') { // create SVG inside
						if (typeof o[i] === 'string' && o[i].length) {
							keys[i].hidden = 0;
							var e = eqonaat.querySelector('#'+o[i]);
							if (e)
								keys[i].innerHTML = '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>';
						} else {
							keys[i].hidden = 1;
							keys[i].innerHTML = '';
						}
					} else {
						if (keys[i].hidden) keys[i].hidden = 0;
						var html = o[i+'$h'];
						if (!isundef(html)) innerhtml(keys[i], html);
						else innertext(keys[i], o[i]);
					}
				}
			}
			Hooks.rununtilconsumed('templateset', [clone, o, keys, template]);
			translate && translate.update(clone.parentElement);
			time && time(clone.parentElement);
			datepicker && datepicker.fahras(clone.parentElement);
			return clone;
		},
		/*
		* you can pass either an element or a name that's already indexed
		*
		* if only element is specified, then its clone is return
		*
		* if parent is also specified then it inserts the clone under parent
		* and returns a function that accepts {options} to setup the clone
		*
		* before can be a child under parent to insert before, else appends
		*
		* id can be used to reuse old elements
		* */
		get: function (element, parent, before, id) {
			if (typeof element == 'string') element = index[element];
			if (!(element instanceof HTMLElement)) return false;
			var clone, template;
			if (id) {
				clone = document.getElementById(id);
				if (clone) before = clone.nextElementSibling;
			}
			if (!clone)
				clone = element.cloneNode(true),
				template = clone.dataset.template,
				delete clone.dataset.template,
				clone.hidden = 0;
			if (parent) {
				if (before instanceof HTMLElement) {
					parent.insertBefore(clone, before);
				} else if (before) {
					parent.insertBefore(clone, parent.firstElementChild);
				} else
					parent.appendChild(clone);
				Hooks.rununtilconsumed('widgets', parent);
				return function (o) {
					return templates.set(clone, o, template);
				};
			}
			return clone;
		},
		/*
		* indexes any htm elements marked with [template=<name>]
		* */
		index: function (parent) {
			var elements = (parent||document.body).querySelectorAll('[data-template]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.template ) {
					elements[i].hidden = 1;
					index[ elements[i].dataset.template ] = elements[i];
				}
			}
			return index;
		},
	};
	templates.index();
})();
var softkeys, K, P;
;(function(){
	K = { // key code names
		mt: 'microphonetoggle',
		sr: 'softright',
		sl: 'softleft',
		en: 'enter',
		pu: 'pageup',
		pd: 'pagedown',
		up: 'arrowup',
		dn: 'arrowdown',
		rt: 'arrowright',
		lf: 'arrowleft',
		cl: 'call',
		bs: 'backspace',
	},
	P = {
		empty: {},
		sheet: {},
		dialog: {},
		list: {},
	};
	var hfizM = {}, M = {}, // mapped keys
	current,
	inlongpress, lastkey, lastkeytime, repeatmode,
	index = {},
	selectionorigin = 0,
	removableparent = function (element) {
		var parent = element.parentElement;
		if (parent.dataset.focus) {
			if (parent.dataset.removable)
				return parent;
			else // check parent's parent
				return removableparent(parent);
		}
	},
	updatekey = function (k) {
		var parent, o = {}, classes = '', args = M[k];
		if (!args) return;
		if (args.length === 1) o.hidden = 1;
		if (args[0]) o.onclick = function (e) {
			args[0](e.key, e);
		};
		o.label = args[1] || '';
		o.icon = args[2];
		o.status = args[3];
		if (o.icon === false) {
			o.name = k;
		}
		if ( k == K.sl ) classes = 'left' ;
		if ( k == K.en ) classes = 'center';
		if ( k == K.sr ) classes = 'right' ;
		if ( k == '*' ) classes = 'star' ;
		if ( k == '#' ) classes = 'hash' ;
		if ([K.sr, K.sl, K.en].includes(k)) {
			parent = skmain;
		} else {
			parent = skhints;
		}
		o.id = 'sk'+k;
		o.classes = classes;
		index[k] = templates.get('skbutton', parent, 0, o.id)(o);
		skdots.hidden = totalvisible() ? 0: 1;
		resize();
	},
	adaaf = function (name, callback, label, icon, status) {
		var action = [];
		M[name] = M[name] || action;
		action[0] = callback === undefined ? M[name][0] : callback;
		action[1] = label === undefined ? M[name][1] : label;
		action[2] = icon === undefined ? M[name][2] : icon;
		action[3] = status === undefined ? M[name][3] : status;
		M[name] = action;
	},
	talaf = function (name) {
		M[name] = undefined;
	};
	totalvisible = function () {
		var total = 0;
		for (var i in skhints.childNodes) {
			if (skhints.childNodes.hasOwnProperty(i))
				if (!skhints.childNodes[i].hidden) total++;
		}
		return total;
	};
	/*
	* putting these inside a function keeps them unique
	* */
	P.empty = function () {
		M[K.sr] = [function () {
			Hooks.run('back');
			return 1;
		}, 0, 'iconclose'];
		M[K.bs] = [function () {
			Hooks.run('minimize');
		}];
		M['#'] = [function () {
			softkeys.showhints();
			return 1;
		}/*, '#', 'iconhelp'*/];
		softkeys.update();
	},
	softkeys = {
		P: P,
		K: K,
		saveto: 7,
		/*
		* clear previous map explicitly, .map doesn't clear it by default
		* */
		clear: function () {
			M = {};
			softkeys.update();
			backstack.set('softkeys', M);
			return softkeys;
		},
		havaf: function (name) {
			return softkeys.talaf(name);
		},
		baidaa: function (name, yes) { if (M[name]) {
			M[name][3] = yes ? 1: undefined;
			softkeys.update();
		} },
		talaf: function (name) {
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						talaf(n);
					});
				} else {
					talaf(name);
				}
				softkeys.update();
				backstack.set('softkeys', M);
			}
			return softkeys;
		},
		update: function () {
			skhints.innerHTML = '';
			skmain.innerHTML = '';
			if (M) for (var k in M) updatekey(k);
		},
		showhints: function () {
			delete softkeysui.dataset.hidden;
			if (!skhelp.hidden) {
				skhelp.hidden = 1;
				preferences.set(7, 1);
			}
			$.taxeer('softkeyshints', function () {
				softkeysui.dataset.hidden = 1;
			}, 2500);
		},
		/*
		* remember one or more actions which you can recall later
		* you can also forget stored actions
		* */
		hfiz: function (name) { // remember
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						softkeys.hfiz(n);
					});
				} else {
					hfizM[name] = M[name];
				}
			}
			return softkeys;
		},
		fasax: function () { // recall
			for (var i in hfizM) {
				M[i] = hfizM[i];
			}
			softkeys.update();
			return softkeys;
		},
		nsee: function () { // forget
			hfizM = {};
			return softkeys;
		},
		/*
		* update a single key definition in M
		* status 0normal 1selected 2disabled
		* */
		set: function (name, callback, label, icon, status) {
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						adaaf(n, callback, label, icon, status);
					});
				} else {
					adaaf(name, callback, label, icon, status);
				}
				softkeys.update(name);
				backstack.set('softkeys', M);
			}
			return softkeys;
		},
		/*
		* preset P.<name>
		* callbacks {enter: callback}
		* */
		map: function (preset, callbacks) {
			M = Object.assign({}, M, preset);
			if (M && callbacks) {
				for (var i in callbacks) {
					M[i] = M[i] || [];
					M[i][0] = callbacks[i];
				}
			}
			softkeys.update();
			backstack.set('softkeys', M);
		},
		actualpress: function (k, e, longpress) {
			var pd = function () { e && e.preventDefault() };
			k = k.toLowerCase();
			if (k == 'sl') k = K.sl, pd();
			if (k == 'up') k = K.up, pd();
			if (k == 'sr') k = K.sr, pd();
			if (k == 'lf') k = K.lf, pd();
			if (k == 'en') k = K.en, pd();
			if (k == 'rt') k = K.rt, pd();
			if (k == 'cl') k = K.cl, pd();
			if (k == 'dn') k = K.dn, pd();
			if (k == 'bs') k = K.bs, pd();
			if (M && M[k] && typeof M[k][0] == 'function')
				M[k][0](k, e, e && e.type, longpress) && pd(); // prevent default if true is returned
		},
		press: function (k, e, longpress) {
			var pd = function () { preventdefault(e); }, caught;
			kraw = k;
			k = k.toLowerCase();
			if (e && e.type && e.type == 'mousewheel') {
				if (e.y <= -1) k = K.up;
				if (e.y >= 1) k = K.dn;
			}
			if (k == 'f1') k = K.sl, pd();
			if (k == 'f2') k = K.sr, pd();
			if (k == 'f5' || (e && e.ctrlKey && k == 'r')) history.go();
			if ('escape' == k && !document.fullscreenElement)
				k = K.sr, pd();
			if (k == K.mt) pd();
			var editmode = 0, a = document.activeElement, dir;
			if ((a instanceof HTMLTextAreaElement && a.type != 'range') || a.contentEditable == 'true') {
				if (e && e.altKey || [K.sl, K.sr].includes(k)) {} else caught = 1;
			}
			if ((a instanceof HTMLInputElement
			|| a instanceof HTMLTextAreaElement) && a.type != 'range') {
				editmode = 1,
				dir = translate.direction(a.value);
				a.dir = dir === 1 ? 'rtl' : 'ltr';
			}
			if (a instanceof HTMLButtonElement) {
				if (a.dataset.remover && k == K.en) {
					var parent = removableparent(a);
					if (!focusprev(parent))
						caught = focusnext(parent);
					if (parent) parent.remove();
					pd();
				}
			}
			/*
			* always allow using up/down keys to move between fields
			* */
			if (editmode) {
				var atend = (a.value.length === a.selectionStart),
					atstart = (0 === a.selectionStart);
				if (atstart && k == K.up) caught = focusprev(a), pd();
				if (atend && k == K.dn) caught = focusnext(a), pd();
				else if (k == K.en && e.shiftKey && a.uponshiftenter) a.uponshiftenter(), pd();
				else if (k == K.en && !e.shiftKey && a.uponenter) a.uponenter(), pd();
			}
			else if (a) {
				if ( navigables.includes( a.tagName.toLowerCase() )
					|| a.parentElement.dataset.focus ) {
					if (k == K.up) caught = focusprev(a), pd();
					if (k == K.dn) caught = focusnext(a), pd();
					if (k == K.en && a.onclick) a.onclick(), pd();
				}
			}
			/*
			* if text field isn't empty, disable arrow key handling
			* K.bs is managed by KaiOS
			* */
			if (editmode && !a.value.length) {
				if (k == K.bs) {
					if (a.dataset.removable)
						caught = focusprev(a), a.remove(), pd();
					else
						/*Hooks.run('back'), webapp.blur(), */pd();
				}
			}
			if (editmode && a.value.length
			&& [K.up, K.dn, K.lf, K.rt, K.en].includes(k)) {
				/*if (k == K.en)
					if (selectionorigin === undefined)
						softkeys.set(K.en, function () {
							selectionorigin = undefined;
						}, 0, 'iconcopy', 1),
						selectionorigin = a.selectionStart;
					else
						softkeys.set(K.en, function () {
							selectionorigin = a.selectionStart;
						}, 0, 'iconcopy', 0),
						selectionorigin = undefined;*/
				if (selectionorigin !== undefined) {
					if (a.selectionStart < selectionorigin) // backwards
						selectiondirection = 0;
					else if (a.selectionStart > selectionorigin) // forwards
						selectiondirection = 1;
					if (k == K.lf && a.selectionEnd == selectionorigin)
						a.selectionEnd = selectionorigin, --a.selectionStart, pd();
					else if (k == K.rt && a.selectionStart-a.selectionEnd)
						a.selectionStart = selectionorigin, ++a.selectionEnd, pd();
					else if (k == K.rt && a.selectionEnd < a.value.length)
						++a.selectionEnd, pd();
					else if (k == K.lf && a.selectionStart > -1)
						--a.selectionStart, pd();
					else if (k == K.lf && a.selectionStart)
						--a.selectionStart, pd();
				}
				return;
			} else {
				selectionorigin = undefined;
			}
			caught = caught || Hooks.rununtilconsumed('softkey', [k, e || {}, e && e.type, longpress]);
			if (caught) return;
			var mmm = M[kraw] || M[k];
			if (mmm && typeof mmm[0] == 'function')
				mmm[0](k, e, e && e.type, longpress) && pd(); // prevent default if true is returned
			else {
				/*if (k == K.dn) {
					webapp.scrollx(40);
					pd();
				}
				if (k == K.up) {
					webapp.scrollx(-40);
					pd();
				}
				if (k == K.rt) {
					webapp.scrolltobottom();
					pd();
				}
				if (k == K.lf) {
					webapp.scrolltotop();
					pd();
				}*/
			}
		},
	};
	softkeys.showhints();
	var autoheight = function (a) {
		if (a instanceof HTMLTextAreaElement) {
			setcss(a, 'height', 0);
			if (a.scrollHeight > a.offsetHeight)
				setcss(a, 'height', a.scrollHeight+3+'px');
		}
	};
	softkeys.autoheight = autoheight;
	var resize = function () {
		var w = innerwidth(), sl = index[K.sl], sr = index[K.sr];
		if (w > 720) {
			var ww = ((innerwidth()-640)/2);
			if (sl) setcss(sl, 'width', ww+'px');
			if (sr) setcss(sr, 'width', ww+'px');
		} else {
			if (sl) setcss(sl, 'width');
			if (sr) setcss(sr, 'width');
		}
	};
	listener('resize', function () {
		$.taxeer('resizesoftkeys', function () { resize(); }, 100);
	});
	resize();
	Hooks.set('contextmenu', function (e) {
		var a = document.activeElement
		if (a && (a instanceof HTMLInputElement
		|| a instanceof HTMLTextAreaElement) && a.type != 'range') {
		} else {
			softkeys.showhints();
			return 1;
		}
	});
	Hooks.set('ready', function () {
		skhints.onclick =
		skdots.onclick = function () {
			softkeys.showhints();
		};
	});
	Hooks.set('mousewheel', function (e) {
		e && softkeys.press('', e, e.type);
	});
	Hooks.set('keyup', function (e) {
		var a = document.activeElement;
		if ((a instanceof HTMLInputElement
		|| a instanceof HTMLTextAreaElement) && a.type != 'range') {
			var len = a.value.trim().length, yes;
			if (len) {
				var min = parseint(getattribute(a, 'min') || 0);
				var max = parseint(getattribute(a, 'max') || 0);
				if (min && len < min) a.dataset.under = 1, yes = 1;
				else delete a.dataset.under;
				if (max && len > max) a.dataset.over = 1, yes = 2;
				else delete a.dataset.over;
			} else {
				delete a.dataset.under;
				delete a.dataset.over;
			}
			$.taxeer('softkeysminmax', function () {
				if (yes === 1) webapp.taht3nsar('-'+(min-len));
				else if (yes === 2) webapp.taht3nsar(len+' / '+max+' +'+(len-max));
				else webapp.taht3nsar(len);
			}, 50);
			$.taxeer('softkeysautoheight', function () {
				autoheight(a);
			}, 100);
		} else {
		}
		Hooks.rununtilconsumed('softkey', [e.key.toLowerCase(), e || {}, e && e.type, 0]);
		preventdefault(e);
	});
	Hooks.set('keydown', function (e) {
		if (time.now() - lastkeytime > 60 || lastkeytime === undefined || !0) {
			e && softkeys.press(e.key, e, e.type, 0);
			lastkeytime = time.now();
		} else {
			preventdefault(e);
		}
	});
	Hooks.set('templateset', function (args) {
		var o = args[1],
			k = args[2],
			t = args[3];
		if (t === 'skbutton') {
			if (k.icon && !o.icon)
				k.icon.remove();
			if (!o.label && !o.icon)
				args[0].hidden = 1;
			return 1;
		}
	});
	Hooks.set('restore', function (args) {
		var oldM = backstack.get('softkeys');
		if (oldM) {
			M = Object.assign({}, oldM);
			softkeys.update();
		}
	});
	if (preferences.get(softkeys.saveto, 1)) skhelp.hidden = 1;
})();
;(function(){
	softkeys.list = {
		/*
		* if LV is undefined, it clears these keys
		* */
		basic: function (LV) {
			if (LV) {
				softkeys.set(K.en, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.press(K.en);
						e && e.preventDefault();
					}
				});
				softkeys.set(K.up, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.up();
						e && e.preventDefault();
					}
				});
				softkeys.set(K.dn, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.down();
						e && e.preventDefault();
					}
				});
				softkeys.set(K.rt, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.right();
						e && e.preventDefault();
					}
				});
				softkeys.set(K.lf, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.left();
						e && e.preventDefault();
					}
				});
			} else {
				softkeys.talaf([K.en, K.up, K.dn, K.rt, K.lf]);
			}
		},
	};
})();
var sheet;
;(function(){
	var index = {}, header, container, zaahirname, ae, murakkaz;
	sheet = {
		okay: 0,
		cancel: 0,
		onshow: 0,
		zaahir: function (name) { // currently active sheet
			return zaahirname === name;
		},
		bardaa: function (v) {
			if (!container.firstElementChild) return;
			var children = Object.values(container.firstElementChild.children);
			if (v) {
				children.forEach(function (item) {
					if (getdata(item, 'focus') === 'list') {
						var l = item.listobject;
						if (l.murakkaz) {
							murakkaz = l;
							l.rakkaz();
						}
					}
				});
				setdata(container, 'bardaa', 1);
				softkeys.set(K.sl, function (e) {
					webapp.itlaa3('pleasewait');
				}, 0, 'iconhourglassempty');
				ae = webapp.blur();
			}
			else {
				softkeys.set(K.sl, function (e) {
					sheet.okay();
				}, 0, 'icondone');
				popdata(container, 'bardaa');
				if (ae) ae.focus();
				if (murakkaz) murakkaz.rakkaz(1);
			}
		},
		header: function (text) {
			if (text) {
				if (text instanceof Array) {
					header.dataset.i18n = text[0];
				} else {
					header.innerText = text;
				}
				header.hidden = 0;
			} else
				delete headerui.dataset.i18n,
				header.innerText = '',
				header.hidden = 1;
		},
		hide: function () {
			sheetui.hidden = 1;
			sheet.okay = 0;
			sheet.cancel = 0;
			zaahirname = 0;
		},
		show: function (args) {
			ae = murakkaz = 0;
			container.innerHTML = '';
			sheetui.hidden = 0;
			if (typeof args === 'string')
				args = {
					name: args,
				};
			var name = args.name || args.n,
				title = args.title || args.t || '',
				minqabl = args.minqabl || args.b,
				callback = args.callback || args.c,
				oncancel = args.oncancel || args.x,
				ayyihaal = args.ayyihaal|| args.a,
				init = args.init || args.i,
				keys;
			header.innerText = title;
			sheet.onshow && sheet.onshow(name);
			var ui = index[name];
			if (ui) {
				zaahirname = name;
				var node = ui.cloneNode(true);
				if (node) {
					delete node.dataset.sheet;
					node.dataset.visiblesheet = 1;
					node.hidden = 0;
					container.appendChild(node);
					sheetui.focus();
					translate && translate.update( sheetui );
					Hooks.rununtilconsumed('widgets', sheetui);
					keys = templates.keys(container);
					init && init( keys );
					Hooks.rununtilconsumed('widgets', sheetui);
				}
			}
			if (callback)
			sheet.okay = function (args) {
				callback && callback( args || keys );
				ayyihaal && ayyihaal( args || keys );
				webapp.blur();
				Hooks.run('back');
			};
			else
			sheet.okay = 0;
			sheet.bardaa();
			if (isfun(minqabl)) {
				var oldokay = sheet.okay;
				sheet.okay = function (args) {
					sheet.bardaa(1);
					minqabl(args || keys, function (args) {
						oldokay(args || keys);
					});
				};
			}
			sheet.cancel = function (args) {
				oncancel && oncancel( args || keys );
				ayyihaal && ayyihaal( args || keys );
				webapp.blur();
				Hooks.run('back');
			};
		},
		get: function (name) {
			if (!name) return container.firstElementChild;
			else return index[name];
		},
		index: function (parent) {
			var elements = (parent||document.body).querySelectorAll('[data-sheet]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.sheet ) {
					elements[i].hidden = 1;
					index[ elements[i].dataset.sheet ] = elements[i];
				}
			}
			return index;
		},
	};
	Hooks.set('ready', function () {
		sheet.index();
		var mfateeh = templates.keys(sheetui);
		header = mfateeh.header;
		container = mfateeh.container;
	});
})();
var themes;
;(function(){
	var K, P, settingsuid, current = 0;
	var store = {
		0: {
			status: 'rgba(0,0,0,0.6)',
			textl: '#fff',
			text: '#ddd',
			textd: '#aaa',
			textxd: '#777',
			primaryl: '#050505',
			primary: 'black',
			primaryd: 'black',
			primaryt: 'rgba(0,0,0,0.8)', // perfect transparent level
			secondaryl: '#353535',
			secondary: '#333',
			secondaryd: '#252525',
			secondaryt: 'rgba(40,40,40,0.8)',
			tertiaryl: '#454545',
			tertiary: '#444',
			tertiaryd: '#353535',
			tertiaryt: 'rgba(53,53,53,0.8)',
			accentl: '#4ccbfc',
			accent: '#04baf5',
			accentt: 'rgba(4, 186, 245, 0.7)',
			accentd: '#0284c0',
			accentdt: 'rgba(4, 126, 205, 0.7)',
			green: '#0c0',
			yellow: '#ca0',
			redl: '#f99',
			red: '#c00',
			redd: '#900',
},
		1: {
			status: 'rgba(0,0,0,0.6)',
			textl: '#111',
			text: '#333',
			textd: '#666',
			textxd: '#888',
			primaryl: '#e6e6e6',
			primary: '#fff',
			primaryd: '#d6d6d6',
			primaryt: 'rgba(255,255,255,0.8)', // perfect transparent level
			secondaryl: '#e6e6e6',
			secondary: '#d6d6d6',
			secondaryd: '#c6c6c6',
			secondaryt: 'rgba(180,180,180,0.8)',
			tertiaryl: '#eee',
			tertiary: '#ddd',
			tertiaryd: '#ccc',
			tertiaryt: 'rgba(204,204,204,0.8)',
			accentl: '#0bb8cb',
			accent: '#00609a',
			accentt: 'rgba(0, 67, 113, 0.7)',
			accentd: '#004371',
			accentdt: 'rgba(0, 37, 93, 0.7)',
			green: '#0c0',
			yellow: '#ca0',
			redl: '#900',
			red: '#c00',
			redd: '#faa',
		},
	};
	themes = {
		/*
		* in preferences (using localStorage), use this key to remember theme
		* */
		saveto: 19,
		/*
		* +changes the theme if only the theme name is provided
		* theme is a string, refers to an object inside store
		* this objects contains key:value pairs
		* that refer to slang css variables
		*
		* +if only theme & key are provided and not value
		* assumes that key is an object representing theme
		*
		* +if key and value are also provided
		* inside a store.theme, set a key to value
		* */
		set: function (theme, key, value) {
			var arglen = arguments.length;
			if (arglen === 0) {
				themes.set(current);
			}
			if (arglen === 1) {
				if (store[theme])
					current = theme,
					dynamicstyle.innerHTML = updatetheme(store[theme]),
					preferences.set(themes.saveto, current);
					themecolor && themecolor.setAttribute('content', themes.get('status'));
			}
			if (arglen === 2) {
				store[theme] = key;
			}
			if (arglen === 3) {
				store[theme] = store[theme] || {};
				store[theme][key] = value;
			}
			return themes;
		},
		/*
		* if only one arg is provided, assume it's the key
		* */
		get: function (theme, key) {
			var arglen = arguments.length;
			if (arglen === 0 && current !== undefined)
				return current;
			if (arglen === 1 && current !== undefined)
				return store[current][theme];
			if (arglen === 2)
				return store[theme][key];
			return false;
		},
		toggle: function () {
			current = current ? current = 0: 1;
			themes.set(current);
			settings.jaddad(settingsuid);
		},
	};
	Hooks.set('ready', function () {
		if (preferences) current = preferences.get(themes.saveto, 1) || 0;
		themes.set(current);
		settingsuid = settings.adaaf('theme', function () {
			var iswhite = preferences.get(themes.saveto, 1);
			themes.set(iswhite);
			return [iswhite ? 'white' : 'black' ];
		}, function () {
			preferences.set(themes.saveto, preferences.get(themes.saveto, 1) ? 0: 1);
		});
	});
	Hooks.set('viewready', function (args) {
		K = softkeys.K, // key names
		P = softkeys.P; // presets
		switch (args.name) {
			case 'main':
				softkeys.set(1, function (k, e) {
					themes.toggle();
					e && e.preventDefault();
				}, '1', 'icontheme');
				break;
		}
	});
})();
var dialog;
;(function(){
	dialog = {
		okay: 0,
		cancel: 0,
		onshow: 0,
		hide: function () {
			dialogui.hidden = 1;
			dialog.okay = 0;
			dialog.cancel = 0;
		},
		show: function (args) {
			args = args || {};
			markooz() && markooz().blur();
			dialogui.hidden = 0;
			var k = templates.keys(dialogui) ,
				max = args.max || args.x ,
				callback = args.callback || args.c ,
				message = args.message || args.m ,
				answer = args.answer || args.a ,
				question = args.question || args.q ;
			dialog.onshow && dialog.onshow(name);
			dialog.okay = function () {
				var answer = k.input.value;
				if (max) answer = answer.slice(0, max);
				callback && callback(answer);
				document.activeElement && document.activeElement.blur();
				Hooks.run('back');
			};
			dialog.cancel = function () {
				document.activeElement && document.activeElement.blur();
				Hooks.run('back');
			};
			k.input.value = answer || '';
			attribute(k.input, 'max', max || 0);
			if (question) {
				k.input.hidden = 0;
				k.input.focus();
			} else {
				k.input.hidden = 1;
			}
			innertext(k.message, '');
			k.message.dataset.i18n = message || '';
			translate.update(dialogui);
		},
	};
})();
/*
* when a touchscreen is detected, this adds an option to settings that allows
* switching between dpad and touch navigation
*
* with dpad navigation, touch also emulates a dpad
* */
;(function(){
	var x = 0, y = 0, curx = 0, cury = 0, horizontal = 0, vertical = 0,
		size = 20, sizew = 15, caught = 0, start = 0;
	var saveto = 18, settingsuid, webapptouchdir = 0;
	Hooks.set('ready', function () {
		if (preferences) webapptouchdir = preferences.get(saveto, 1) || 1;
		webapp.touchdir = webapptouchdir;
		settingsuid = settings.adaaf('webapptouchdir', function () {
			webapptouchdir = preferences.get(saveto, 1);
			webapp.touchdir = webapptouchdir;
			if (!webapptouchdir) delete document.body.dataset.align;
			return [webapptouchdir ? 'on' : 'off' ];
		}, function () {
			preferences.set(saveto, preferences.get(saveto, 1) ? 0: 1);
		});
	});
	Hooks.set('keyup', function (e) {
		var k = e.key.toLowerCase();
		if (k === 'r' && e.ctrlKey)
			location.reload(), preventdefault(e);
		if (['escape', 'f11'].includes(k) && document.fullscreenElement)
			document.exitFullscreen(), preventdefault(e);
		else if (k === 'f11')
			document.firstElementChild.requestFullscreen(), preventdefault(e);
	});
	listener('touchstart', function (e) {
		if (softkeys.touchdpad) preventdefault(e);
		x = e.touches[0].clientX;
		y = e.touches[0].clientY;
		caught = 0;
		start = e.timeStamp;
		if (webapptouchdir) {
			if ( x / innerwidth() < 0.5 ) {
				document.body.dataset.align = 'left';
			} else {
				delete document.body.dataset.align;
			}
		}
		Hooks.run('navigationstart', [x, y]);
	}, { passive: false });
	listener('touchmove', function (e) {
		curx = e.touches[0].clientX,
		cury = e.touches[0].clientY,
		horizontal = curx - x,
		vertical = cury - y;
		if (horizontal < -sizew || horizontal > sizew) {
			if (horizontal > sizew)
				horizontal = 1;
			else if (horizontal < -sizew)
				horizontal = -1;
			if (horizontal !== 0)
				x = curx;
		} else horizontal = 0;
		if (vertical < -size || vertical > size) {
			if (vertical > size)
				vertical = 1;
			else if (vertical < -size)
				vertical = -1;
			if (vertical !== 0)
				y = cury;
		} else vertical = 0;
		if (horizontal !== 0 || vertical !== 0)
			caught = 1,
			Hooks.run('navigation', [horizontal, vertical]);
	});
	listener('touchend', function (e) {
		if (!caught) {
			if ( e.timeStamp - start > 250 ) // held for 250ms or more
				Hooks.run('navigationlongpress', [x, y, e.path, horizontal, vertical]);
			else
				Hooks.run('navigationpress', [x, y, e.path, horizontal, vertical]);
		} else
			Hooks.run('navigationend', [x, y, e.path, horizontal, vertical]);
	});
})();
;(function(){
	var saveto = 16, settingsuid, locked = 0,
		edgestart = 0, // -1 left, 0 center, 1 right
		edgeend = 0, lastitem,
		softkeystouchdpad = 1; // 1 hor, 2 vert
	Hooks.set('ready', function () {
		if (preferences) softkeystouchdpad = preferences.get(saveto, 1) || 1;
		softkeys.touchdpad = softkeystouchdpad;
		settingsuid = settings.adaaf('softkeystouchdpad', function () {
			softkeystouchdpad = preferences.get(saveto, 1);
			softkeys.touchdpad = softkeystouchdpad;
			return [softkeystouchdpad ? 'on' : 'off' ];
		}, function () {
			preferences.set(saveto, preferences.get(saveto, 1) ? 0: 1);
		});
	});
	Hooks.set('navigationstart', function (args) {
		locked = 0; // free direction lock
		if (args[0] > innerwidth(-60)) edgestart = 1;
		else if (args[0] < 60) edgestart = -1;
		else edgestart = 0;
	});
	Hooks.set('navigation', function (args) {
		if (!locked || locked === 2) {
			if (args[0] > 0) { // right
				if (softkeystouchdpad && !edgestart) softkeys.press(K.rt);
				locked = 2;
			}
			if (args[0] < 0) { // left
				if (softkeystouchdpad && !edgestart) softkeys.press(K.lf);
				locked = 2;
			}
		}
		if (!locked || locked === 1) {
			if (args[1] > 0) { // down
				if (softkeystouchdpad && !edgestart) softkeys.press(K.dn);
				locked = 1;
			}
			if (args[1] < 0) { // up
				if (softkeystouchdpad && !edgestart) softkeys.press(K.up);
				locked = 1;
			}
		}
	});
	var doclick = function (path) {
		for (var i = 0; i < path.length; ++i) {
			if (path[i].onclick) {
				path[i].onclick();
				path[i].blur();
				break;
			}
			if (path[i] instanceof HTMLButtonElement) {
				path[i].click();
				path[i].blur();
				break;
			}
		}
	};
	Hooks.set('navigationend', function (args) {
		if (!softkeystouchdpad) {
			if (args[3] < 0) {
				pager && pager.yameen();
			}
			if (args[3] > 0) {
				pager && pager.shimaal();
			}
		} else
		if (pager && edgestart) { // started on an edge
			edgeend = 0;
			if (args[0] > innerwidth(-60)) edgeend = 1;
			else if (args[0] < 60) edgeend = -1;
			else edgeend = 0;
			if (edgestart !== edgeend) { // ended on a diff edge
				if (edgestart === 1) pager.yameen(); // right
				else if (edgestart === -1) pager.shimaal(); // left
			}
		}
	});
	Hooks.set('navigationpress', function (args) {
		var isbutton = 0;
		args[2].forEach(function (item) {
			if (item instanceof HTMLButtonElement
			|| item instanceof HTMLInputElement
			|| item instanceof HTMLTextAreaElement
			) {
				isbutton = 1;
				item.focus();
				if (lastitem) {
					popdata(lastitem, 'lamsah');
					lastitem = 0;
				}
				setdata(item, 'lamsah', 1);
				lastitem = item;
				$.taxeer('sklamsah', function () {
					if (lastitem) {
						popdata(lastitem, 'lamsah');
						lastitem = 0;
					}
				}, 300);
			}
		});
		if (args[1] > innerheight(-60)) {
			if (softkeystouchdpad) doclick(args[2]);
		} else
		if (iswithinelement(args, skhints) || isbutton) {
			if (softkeystouchdpad) doclick(args[2]);
			softkeys.showhints();
		}
		else if (softkeystouchdpad) {
			if (!skhints.hidden) softkeys.showhints();
			softkeys.press(K.en);
		}
	});
	Hooks.set('navigationlongpress', function (args) {
		softkeys.showhints();
	});
})();
var main, replacements = {}, surahs = {}, cached = {}, meanings = {};
;(function(){
	'use strict';
	var surah = 1, ayah = 0, textview, textview2, progress, duration, current,
	gname, vicinity = 6, dots = '…', showmeanings, settingsuid,
	/*latinify = function (str) {
		return str .replace(/ا/g, 'a')
					.replace(/ب/g, 'b')
					.replace(/ت/g, 't')
					.replace(/ث/g, 'C')
					.replace(/ج/g, 'j')
					.replace(/ح/g, 'H')
					.replace(/خ/g, 'x')
					.replace(/د/g, 'd')
					.replace(/ذ/g, 'v')
					.replace(/ر/g, 'r')
					.replace(/ز/g, 'z')
					.replace(/س/g, 's')
					.replace(/ش/g, 'c')
					.replace(/ص/g, 'S')
					.replace(/ض/g, 'D')
					.replace(/ط/g, 'T')
					.replace(/ظ/g, 'Z')
					.replace(/ع/g, 'e')
					.replace(/غ/g, 'g')
					.replace(/ف/g, 'f')
					.replace(/ق/g, 'q')
					.replace(/ك/g, 'k')
					.replace(/ل/g, 'l')
					.replace(/م/g, 'm')
					.replace(/ن/g, 'n')
					.replace(/و/g, 'w')
					.replace(/ه/g, 'h')
					.replace(/ي/g, 'i')
					.replace(/ى/g, 'y')
					.replace(/ؤ/g, 'w')
					.replace(/ئ/g, '\'')
					.replace(/ء/g, '\'')
					;
	},*/
	meaningstoggle = function () {
		showmeanings = preferences.get(13, 1) ? 0: 1;
		preferences.set(13, showmeanings);
		main.show();
	},
	nazzaf = function (text) {
		return text .toLowerCase()
					.replace(/ئ/g, 'ء') // hamza on yaa to hamza
					.replace(/ى/g, 'ي') // alef maksura to yaa
					.replace(/أ/g, 'ا') // alef hamza above
					.replace(/إ/g, 'ا') // alef hamza below
					.replace(/آ/g, 'ا') // alef madda
					.replace(/ٱ/g, 'ا') // werid alef
					.replace(/ؤ/g, 'و') // wow with hamza
					.replace(/ک/g, 'ك') // urdu kaf to arabic
					.replace(/ہ/g, 'ه') // urdu hah to arabic
					.replace(/َ/g, '') // fathah
					.replace(/ِ/g, '') // kasrah
					.replace(/ُ/g, '') // damma
					.replace(/ّ/g, '') // tashdeed
					.replace(/ٰ/g, '') // mini-alef
					.replace(/ْ/g, '') // sukoon
					.replace(/ٌ/g, '') // dammatyn
					.replace(/ً/g, '') // fthhtyn
					.replace(/ٍ/g, '') // kasratyn
					.replace(/ٓ/g, '') // madda
					;
	},
	nateejah = function (surah, ayah, string) { // matched words + surrounding words
		var stripped = cached[surah][ayah].split(string);
		var count = 0, lastword = 0;
		var str = '';
		if (stripped[0].length) str += stripped[0].split(' ').slice(-4).join(' ');
		stripped.forEach(function (sentence, j) {
			if (sentence.length) {
				if (j) {
					str += '<span>'+string+'</span>';
					var words = sentence.split(' '), count2 = 0;
					words.splice(0, 4).forEach(function (item, i) {
						if (item.length) {
							if (i) str += ' ';
							str += item;
						} else {
							str += ' ';
						}
					});
					if (words.length) {
						if (words.length > 4) str += '&hellip;';
						words.splice(-4).forEach(function (item, i) {
							if (item.length) {
								str += ' '+item;
							} else {
								str += ' ';
							}
						});
					}
				}
			}
		});
		return str;
	},
	hawalah = function (surah, ayah) {
		var metadata = meta.surahs[surah];
		return metadata[4]+' '+(parseInt(ayah)+1);
	};
	main = {
		fahras: function (T, Q) {
			var lines = Q.split(','), table = T.split(',');
			table.forEach(function (item, i) {
				var splat = item.split('|');
				replacements[splat[1]] = splat[0];
				if (splat[2] && splat[2].length)
					meanings[splat[0]] = splat[2];
			});
			lines.forEach(function (line) {
				var index = line.split('|'),
					s = index[0],
					text = index[2],
					newtext = '';
				if (replacements[text]) {
					text = replacements[text];
				}
				text.split(' ').forEach(function (word) {
					if (replacements[word]) {
						newtext += ' '+replacements[word];
					} else {
						newtext += ' '+word;
					}
				});
				newtext = newtext.trim();
				cached[ s ] = cached[ s ] || [];
				cached[ s ].push( nazzaf(newtext) );
				surahs[ s ] = surahs[ s ] || [];
				surahs[ s ].push(newtext);
			});
			main.show();
		},
		ilaa: function (s, a) { // go to surah:ayah
			surah = s;
			ayah = a || 0;
			main.hifz();
			main.show();
		},
		show: function () {
			var metadata = meta.surahs[surah];
			var ayaat = surahs[ surah ];
			if (ayaat) {
				surahpicker && surahpicker.ilaa( surah );
				/*
				* abstract this into a sep module
				* */
				progress.style.width = Math.floor( ( ( ayah / (ayaat.length-1) ) * 100 ) + .75 )+'%';
				gname.innerText = surah +' '+ metadata[4];
				current.innerText = ayah+1;
				duration.innerText = ayaat.length;
				webapp.scrolltotop();
				var str = '';
				var words = ayaat[ ayah ].split(' ');
				words.forEach(function (item, i) {
					str += '<span>';
					str += item + (
							(showmeanings && meanings[item])
							? '<div class=dim>'+meanings[item]+'</div>' : ''
					);
					str += '</span>&nbsp;&nbsp;';
				});
				textview.innerHTML = str.trim();
				translate.update();
			}
		},
		axad: function () {
			return [surah, ayah];
		},
		next: function () {
			if (surah < 114) {
				++surah,
				ayah = 0,
				main.hifz();
				main.show();
				return 1;
			}
		},
		prev: function (fromend) {
			if (surah > 1) {
				--surah,
				ayah = fromend ? surahs[surah].length-1: 0,
				main.hifz();
				main.show();
				if (fromend) webapp.scrolltobottom();
				return 1;
			}
		},
		nextayah: function () {
			var text = surahs[ surah ];
			if (text) {
				if ( text[ ayah+1 ] ) {
					++ayah, main.show();
					main.hifz();
					return 1;
				} else {
					return main.next();
				}
			}
		},
		prevayah: function () {
			if (ayah > 0) {
				--ayah, main.show();
				main.hifz();
				webapp.scrolltobottom();
				return 1;
			} else {
				return main.prev(1);
			}
		},
		hifz: function (restore, bookmark) { // save
			/* another bookmark savepoint that is restored at startup
			*
			* the default savepoint is written to even when browsing around
			* so the extra savepoint comes it handy
			*
			* manual restore using a button
			* */
			if (restore) {
				surah = preferences.get(bookmark ? 'bs' : 's', 1) || 1;
				ayah = preferences.get(bookmark ? 'ba' : 'a', 1) || 0;
			} else {
				preferences.set(bookmark ? 'bs' : 's', surah);
				preferences.set(bookmark ? 'ba' : 'a', ayah);
			}
		},
		badaa: function (T, Q) {
			main.hifz(1); // restore
			main.fahras(T, Q);
		},
	};
	Hooks.set('bahaconpress', function (args) {
		if (args[1] === K.en) {
			Hooks.run('back');
			surah = args[0].surah;
			ayah = args[0].ayah;
			main.hifz();
			main.show();
		}
	});
	Hooks.set('bahac', function (rawstring) {
		var string = nazzaf(rawstring).trim();
		if (string.length) {
			var results = [], count = 0, surahcount = 0;
			for (var i = 1; i <= 114 && surahcount < 3; ++i) {
				var metadata = meta.surahs[i];
				if (nazzaf(metadata[4]).includes(string)
				|| nazzaf(metadata[6]).includes(string)) {
					results.push({
						id: i,
						surah: parseInt(i),
						ayah: 0,
						title: i + ' ' + metadata[4],
						body: metadata[6],
					});
					++surahcount;
				}
			}
		}
		if (string.length > 1) {
			for (var i in cached) {
				var s = cached[i];
				for (var j in s) {
					var a = s[j];
					if (a.includes(string))
						results.push({
							titlehide: hawalah(i, j),
							surah: parseInt(i),
							ayah: parseInt(j),
							id: i+':'+j,
							bodyshowhtml: nateejah( i, j, nazzaf(rawstring) ),
						});
					++count;
					if (results.length >= 20) break;
				}
				if (results.length >= 20) break;
			}
		}
		bahac.fahras(results);
	});
	Hooks.set('scroll', function (top) {
		globalplayer.style.position = top > 12 ? 'fixed' : '';
		textview.style.paddingTop = top > 12 ? '24px' : '';
		duration.hidden =
		gname.hidden = top > 12 ? 1: 0;
	});
	Hooks.set('ready', function () {
		webapp.statusbarpadding();
		var mfateeh = view.mfateeh('main');
		textview = mfateeh.text;
		textview2 = mfateeh.text2;
		gname = mfateeh.name;
		progress = mfateeh.progress;
		duration = mfateeh.duration;
		current = mfateeh.current;
		showmeanings = preferences.get(13, 1);
		settingsuid = settings.adaaf('showmeanings', function () {
			showmeanings = preferences.get(13, 1);
			return translate( showmeanings ? 'on' : 'off' );
		}, function () {
			meaningstoggle();
		});
		tempscript.onload = function () {
			main.badaa(T, Q);
		};
		tempscript.src = 'q.js';
	});
	Hooks.set('viewready', function (args) {
		switch (args.name) {
			case 'main':
				webapp.header();
				softkeys.set(K.en, function () {
					main.hifz(0, 1);
					webapp.itlaa3(['bookmarked']);
					return 1;
				}, 0, 'iconbookmarkborder');
				softkeys.set('5', function () {
					main.hifz(1, 1);
					main.show();
					webapp.itlaa3(['restored']);
					return 1;
				}, '5', 'iconhistory');
				softkeys.set('7', function () {
					meaningstoggle();
					settings.jaddad(settingsuid);
					return 1;
				}, '7', 'icontranslate');
				softkeys.set(K.sl, function () {
					Hooks.run('view', 'surahs');
				}, 0, 'iconmenu');
				softkeys.set(K.lf, function () {
					main.prev();
				});
				softkeys.set(K.rt, function () {
					main.next();
				});
				softkeys.set(K.up, function () {
					if (webapp.isatop())
						return main.prevayah();
				});
				softkeys.set(K.dn, function () {
					if (webapp.isatbottom())
						return main.nextayah();
				});
				break;
		}
	});
	Hooks.set('restore', function (darajah) {
		if (darajah === 0) {
			switch ( view.axad() ) {
				case 'main':
					webapp.header();
					main.show();
					break;
			}
		}
	});
})();
var surahpicker, surahslist;
;(function(){
	'use strict';
	surahpicker = {
		ilaa: function (s) {
			if (surahslist)
				surahslist.select(s-1, 1, 1, 1);
		},
	};
	Hooks.set('ready', function () {
		surahslist = list( view.mfateeh('surahs').list )
		surahslist.idprefix('surah');
		surahpicker.ilaa( main.axad()[0] ); // restore surah selection
		for (var i = 1; i <= 114; ++i) {
			var metadata = meta.surahs[i];
			surahslist.set({
				id: i,
				title: i + ' ' + metadata[4],
				body: metadata[6],
				subtitle: metadata[1] +' '+ translate('ayaat'),
			}, i-1); // to correctly index them in the list adapter
		}
		surahslist.onpress = function (item, key, i) {
			if (key === K.en) {
				main.ilaa( i+1 );
				Hooks.run('back');
			}
		};
	});
	Hooks.set('viewready', function (args) {
		switch (args.name) {
			case 'surahs':
				webapp.header();
				softkeys.list.basic(surahslist);
				surahpicker.ilaa( main.axad()[0] ); // restore surah selection
				surahslist.rakkaz(1);
				surahslist.intaxabscroll();
				break;
		}
	});
	Hooks.set('restore', function (darajah) {
		if (darajah === 1) {
			switch ( view.axad() ) {
				case 'surahs':
					surahslist.select();
					break;
			}
		}
	});
})();
var meta = {};
;(function(){
	'use strict';
	meta.surahs = [
		[],
		[0, 7, 5, 1, 'الفاتحة', "Al-Faatiha", 'The Opening', 0],
		[7, 286, 87, 40, 'البقرة', "Al-Baqara", 'The Cow', 1],
		[293, 200, 89, 20, 'آل عمران', "Aal-i-Imraan", 'The Family of Imraan', 1],
		[493, 176, 92, 24, 'النساء', "An-Nisaa", 'The Women', 1],
		[669, 120, 112, 16, 'المائدة', "Al-Maaida", 'The Table', 1],
		[789, 165, 55, 20, 'الأنعام', "Al-An'aam", 'The Cattle', 0],
		[954, 206, 39, 24, 'الأعراف', "Al-A'raaf", 'The Heights', 0],
		[1160, 75, 88, 10, 'الأنفال', "Al-Anfaal", 'The Spoils of War', 1],
		[1235, 129, 113, 16, 'التوبة', "At-Tawba", 'The Repentance', 1],
		[1364, 109, 51, 11, 'يونس', "Yunus", 'Jonas', 0],
		[1473, 123, 52, 10, 'هود', "Hud", 'Hud', 0],
		[1596, 111, 53, 12, 'يوسف', "Yusuf", 'Joseph', 0],
		[1707, 43, 96, 6, 'الرعد', "Ar-Ra'd", 'The Thunder', 1],
		[1750, 52, 72, 7, 'ابراهيم', "Ibrahim", 'Abraham', 0],
		[1802, 99, 54, 6, 'الحجر', "Al-Hijr", 'The Rock', 0],
		[1901, 128, 70, 16, 'النحل', "An-Nahl", 'The Bee', 0],
		[2029, 111, 50, 12, 'الإسراء', "Al-Israa", 'The Night Journey', 0],
		[2140, 110, 69, 12, 'الكهف', "Al-Kahf", 'The Cave', 0],
		[2250, 98, 44, 6, 'مريم', "Maryam", 'Mary', 0],
		[2348, 135, 45, 8, 'طه', "Taa-Haa", 'Taa-Haa', 0],
		[2483, 112, 73, 7, 'الأنبياء', "Al-Anbiyaa", 'The Prophets', 0],
		[2595, 78, 103, 10, 'الحج', "Al-Hajj", 'The Pilgrimage', 1],
		[2673, 118, 74, 6, 'المؤمنون', "Al-Muminoon", 'The Believers', 0],
		[2791, 64, 102, 9, 'النور', "An-Noor", 'The Light', 1],
		[2855, 77, 42, 6, 'الفرقان', "Al-Furqaan", 'The Criterion', 0],
		[2932, 227, 47, 11, 'الشعراء', "Ash-Shu'araa", 'The Poets', 0],
		[3159, 93, 48, 7, 'النمل', "An-Naml", 'The Ant', 0],
		[3252, 88, 49, 8, 'القصص', "Al-Qasas", 'The Stories', 0],
		[3340, 69, 85, 7, 'العنكبوت', "Al-Ankaboot", 'The Spider', 0],
		[3409, 60, 84, 6, 'الروم', "Ar-Room", 'The Romans', 0],
		[3469, 34, 57, 3, 'لقمان', "Luqman", 'Luqman', 0],
		[3503, 30, 75, 3, 'السجدة', "As-Sajda", 'The Prostration', 0],
		[3533, 73, 90, 9, 'الأحزاب', "Al-Ahzaab", 'The Clans', 1],
		[3606, 54, 58, 6, 'سبإ', "Saba", 'Sheba', 0],
		[3660, 45, 43, 5, 'فاطر', "Faatir", 'The Originator', 0],
		[3705, 83, 41, 5, 'يس', "Yaseen", 'Yaseen', 0],
		[3788, 182, 56, 5, 'الصافات', "As-Saaffaat", 'Those drawn up in Ranks', 0],
		[3970, 88, 38, 5, 'ص', "Saad", 'The letter Saad', 0],
		[4058, 75, 59, 8, 'الزمر', "Az-Zumar", 'The Groups', 0],
		[4133, 85, 60, 9, 'غافر', "Al-Ghaafir", 'The Forgiver', 0],
		[4218, 54, 61, 6, 'فصلت', "Fussilat", 'Explained in detail', 0],
		[4272, 53, 62, 5, 'الشورى', "Ash-Shura", 'Consultation', 0],
		[4325, 89, 63, 7, 'الزخرف', "Az-Zukhruf", 'Ornaments of gold', 0],
		[4414, 59, 64, 3, 'الدخان', "Ad-Dukhaan", 'The Smoke', 0],
		[4473, 37, 65, 4, 'الجاثية', "Al-Jaathiya", 'Crouching', 0],
		[4510, 35, 66, 4, 'الأحقاف', "Al-Ahqaf", 'The Dunes', 0],
		[4545, 38, 95, 4, 'محمد', "Muhammad", 'Muhammad', 1],
		[4583, 29, 111, 4, 'الفتح', "Al-Fath", 'The Victory', 1],
		[4612, 18, 106, 2, 'الحجرات', "Al-Hujuraat", 'The Inner Apartments', 1],
		[4630, 45, 34, 3, 'ق', "Qaaf", 'The letter Qaaf', 0],
		[4675, 60, 67, 3, 'الذاريات', "Adh-Dhaariyat", 'The Winnowing Winds', 0],
		[4735, 49, 76, 2, 'الطور', "At-Tur", 'The Mount', 0],
		[4784, 62, 23, 3, 'النجم', "An-Najm", 'The Star', 0],
		[4846, 55, 37, 3, 'القمر', "Al-Qamar", 'The Moon', 0],
		[4901, 78, 97, 3, 'الرحمن', "Ar-Rahmaan", 'The Beneficent', 1],
		[4979, 96, 46, 3, 'الواقعة', "Al-Waaqia", 'The Inevitable', 0],
		[5075, 29, 94, 4, 'الحديد', "Al-Hadid", 'The Iron', 1],
		[5104, 22, 105, 3, 'المجادلة', "Al-Mujaadila", 'The Pleading Woman', 1],
		[5126, 24, 101, 3, 'الحشر', "Al-Hashr", 'The Exile', 1],
		[5150, 13, 91, 2, 'الممتحنة', "Al-Mumtahana", 'She that is to be examined', 1],
		[5163, 14, 109, 2, 'الصف', "As-Saff", 'The Ranks', 1],
		[5177, 11, 110, 2, 'الجمعة', "Al-Jumu'a", 'Friday', 1],
		[5188, 11, 104, 2, 'المنافقون', "Al-Munaafiqoon", 'The Hypocrites', 1],
		[5199, 18, 108, 2, 'التغابن', "At-Taghaabun", 'Mutual Disillusion', 1],
		[5217, 12, 99, 2, 'الطلاق', "At-Talaaq", 'Divorce', 1],
		[5229, 12, 107, 2, 'التحريم', "At-Tahrim", 'The Prohibition', 1],
		[5241, 30, 77, 2, 'الملك', "Al-Mulk", 'The Sovereignty', 0],
		[5271, 52, 2, 2, 'القلم', "Al-Qalam", 'The Pen', 0],
		[5323, 52, 78, 2, 'الحاقة', "Al-Haaqqa", 'The Reality', 0],
		[5375, 44, 79, 2, 'المعارج', "Al-Ma'aarij", 'The Ascending Stairways', 0],
		[5419, 28, 71, 2, 'نوح', "Nooh", 'Noah', 0],
		[5447, 28, 40, 2, 'الجن', "Al-Jinn", 'The Jinn', 0],
		[5475, 20, 3, 2, 'المزمل', "Al-Muzzammil", 'The Enshrouded One', 0],
		[5495, 56, 4, 2, 'المدثر', "Al-Muddaththir", 'The Cloaked One', 0],
		[5551, 40, 31, 2, 'القيامة', "Al-Qiyaama", 'The Resurrection', 0],
		[5591, 31, 98, 2, 'الانسان', "Al-Insaan", 'Man', 1],
		[5622, 50, 33, 2, 'المرسلات', "Al-Mursalaat", 'The Emissaries', 0],
		[5672, 40, 80, 2, 'النبإ', "An-Naba", 'The Announcement', 0],
		[5712, 46, 81, 2, 'النازعات', "An-Naazi'aat", 'Those who drag forth', 0],
		[5758, 42, 24, 1, 'عبس', "Abasa", 'He frowned', 0],
		[5800, 29, 7, 1, 'التكوير', "At-Takwir", 'The Overthrowing', 0],
		[5829, 19, 82, 1, 'الإنفطار', "Al-Infitaar", 'The Cleaving', 0],
		[5848, 36, 86, 1, 'المطففين', "Al-Mutaffifin", 'Defrauding', 0],
		[5884, 25, 83, 1, 'الإنشقاق', "Al-Inshiqaaq", 'The Splitting Open', 0],
		[5909, 22, 27, 1, 'البروج', "Al-Burooj", 'The Constellations', 0],
		[5931, 17, 36, 1, 'الطارق', "At-Taariq", 'The Morning Star', 0],
		[5948, 19, 8, 1, 'الأعلى', "Al-A'laa", 'The Most High', 0],
		[5967, 26, 68, 1, 'الغاشية', "Al-Ghaashiya", 'The Overwhelming', 0],
		[5993, 30, 10, 1, 'الفجر', "Al-Fajr", 'The Dawn', 0],
		[6023, 20, 35, 1, 'البلد', "Al-Balad", 'The City', 0],
		[6043, 15, 26, 1, 'الشمس', "Ash-Shams", 'The Sun', 0],
		[6058, 21, 9, 1, 'الليل', "Al-Lail", 'The Night', 0],
		[6079, 11, 11, 1, 'الضحى', "Ad-Dhuhaa", 'The Morning Hours', 0],
		[6090, 8, 12, 1, 'الشرح', "Ash-Sharh", 'The Consolation', 0],
		[6098, 8, 28, 1, 'التين', "At-Tin", 'The Fig', 0],
		[6106, 19, 1, 1, 'العلق', "Al-Alaq", 'The Clot', 0],
		[6125, 5, 25, 1, 'القدر', "Al-Qadr", 'The Power, Fate', 0],
		[6130, 8, 100, 1, 'البينة', "Al-Bayyina", 'The Evidence', 1],
		[6138, 8, 93, 1, 'الزلزلة', "Az-Zalzala", 'The Earthquake', 1],
		[6146, 11, 14, 1, 'العاديات', "Al-Aadiyaat", 'The Chargers', 0],
		[6157, 11, 30, 1, 'القارعة', "Al-Qaari'a", 'The Calamity', 0],
		[6168, 8, 16, 1, 'التكاثر', "At-Takaathur", 'Competition', 0],
		[6176, 3, 13, 1, 'العصر', "Al-Asr", 'The Declining Day, Epoch', 0],
		[6179, 9, 32, 1, 'الهمزة', "Al-Humaza", 'The Traducer', 0],
		[6188, 5, 19, 1, 'الفيل', "Al-Fil", 'The Elephant', 0],
		[6193, 4, 29, 1, 'قريش', "Quraish", 'Quraysh', 0],
		[6197, 7, 17, 1, 'الماعون', "Al-Maa'un", 'Almsgiving', 0],
		[6204, 3, 15, 1, 'الكوثر', "Al-Kawthar", 'Abundance', 0],
		[6207, 6, 18, 1, 'الكافرون', "Al-Kaafiroon", 'The Disbelievers', 0],
		[6213, 3, 114, 1, 'النصر', "An-Nasr", 'Divine Support', 1],
		[6216, 5, 6, 1, 'المسد', "Al-Masad", 'The Palm Fibre', 0],
		[6221, 4, 22, 1, 'الإخلاص', "Al-Ikhlaas", 'Sincerity', 0],
		[6225, 5, 20, 1, 'الفلق', "Al-Falaq", 'The Dawn', 0],
		[6230, 6, 21, 1, 'الناس', "An-Naas", 'Mankind', 0],
		[6236, 1]
	];
	meta.ajzaa = [
		[],
		[1, 1], [2, 142], [2, 253], [3, 93], [4, 24],
		[4, 148], [5, 82], [6, 111], [7, 88], [8, 41],
		[9, 93], [11, 6], [12, 53], [15, 1], [17, 1],
		[18, 75], [21, 1], [23, 1], [25, 21], [27, 56],
		[29, 46], [33, 31], [36, 28], [39, 32], [41, 47],
		[46, 1], [51, 31], [58, 1], [67, 1], [78, 1],
		[115, 1]
	];
	meta.hizbquarter = [
		[],
		[1, 1], [2, 26], [2, 44], [2, 60],
		[2, 75], [2, 92], [2, 106], [2, 124],
		[2, 142], [2, 158], [2, 177], [2, 189],
		[2, 203], [2, 219], [2, 233], [2, 243],
		[2, 253], [2, 263], [2, 272], [2, 283],
		[3, 15], [3, 33], [3, 52], [3, 75],
		[3, 93], [3, 113], [3, 133], [3, 153],
		[3, 171], [3, 186], [4, 1], [4, 12],
		[4, 24], [4, 36], [4, 58], [4, 74],
		[4, 88], [4, 100], [4, 114], [4, 135],
		[4, 148], [4, 163], [5, 1], [5, 12],
		[5, 27], [5, 41], [5, 51], [5, 67],
		[5, 82], [5, 97], [5, 109], [6, 13],
		[6, 36], [6, 59], [6, 74], [6, 95],
		[6, 111], [6, 127], [6, 141], [6, 151],
		[7, 1], [7, 31], [7, 47], [7, 65],
		[7, 88], [7, 117], [7, 142], [7, 156],
		[7, 171], [7, 189], [8, 1], [8, 22],
		[8, 41], [8, 61], [9, 1], [9, 19],
		[9, 34], [9, 46], [9, 60], [9, 75],
		[9, 93], [9, 111], [9, 122], [10, 11],
		[10, 26], [10, 53], [10, 71], [10, 90],
		[11, 6], [11, 24], [11, 41], [11, 61],
		[11, 84], [11, 108], [12, 7], [12, 30],
		[12, 53], [12, 77], [12, 101], [13, 5],
		[13, 19], [13, 35], [14, 10], [14, 28],
		[15, 1], [15, 50], [16, 1], [16, 30],
		[16, 51], [16, 75], [16, 90], [16, 111],
		[17, 1], [17, 23], [17, 50], [17, 70],
		[17, 99], [18, 17], [18, 32], [18, 51],
		[18, 75], [18, 99], [19, 22], [19, 59],
		[20, 1], [20, 55], [20, 83], [20, 111],
		[21, 1], [21, 29], [21, 51], [21, 83],
		[22, 1], [22, 19], [22, 38], [22, 60],
		[23, 1], [23, 36], [23, 75], [24, 1],
		[24, 21], [24, 35], [24, 53], [25, 1],
		[25, 21], [25, 53], [26, 1], [26, 52],
		[26, 111], [26, 181], [27, 1], [27, 27],
		[27, 56], [27, 82], [28, 12], [28, 29],
		[28, 51], [28, 76], [29, 1], [29, 26],
		[29, 46], [30, 1], [30, 31], [30, 54],
		[31, 22], [32, 11], [33, 1], [33, 18],
		[33, 31], [33, 51], [33, 60], [34, 10],
		[34, 24], [34, 46], [35, 15], [35, 41],
		[36, 28], [36, 60], [37, 22], [37, 83],
		[37, 145], [38, 21], [38, 52], [39, 8],
		[39, 32], [39, 53], [40, 1], [40, 21],
		[40, 41], [40, 66], [41, 9], [41, 25],
		[41, 47], [42, 13], [42, 27], [42, 51],
		[43, 24], [43, 57], [44, 17], [45, 12],
		[46, 1], [46, 21], [47, 10], [47, 33],
		[48, 18], [49, 1], [49, 14], [50, 27],
		[51, 31], [52, 24], [53, 26], [54, 9],
		[55, 1], [56, 1], [56, 75], [57, 16],
		[58, 1], [58, 14], [59, 11], [60, 7],
		[62, 1], [63, 4], [65, 1], [66, 1],
		[67, 1], [68, 1], [69, 1], [70, 19],
		[72, 1], [73, 20], [75, 1], [76, 19],
		[78, 1], [80, 1], [82, 1], [84, 1],
		[87, 1], [90, 1], [94, 1], [100, 9],
		[115, 1]
	];
	meta.manzil = [
		[],
		[1, 1], [5, 1], [10, 1], [17, 1],
		[26, 1], [37, 1], [50, 1]
	];
	meta.rukuu3 = [
		[],
		[1, 1], [2, 1], [2, 8], [2, 21], [2, 30],
		[2, 40], [2, 47], [2, 60], [2, 62], [2, 72],
		[2, 83], [2, 87], [2, 97], [2, 104], [2, 113],
		[2, 122], [2, 130], [2, 142], [2, 148], [2, 153],
		[2, 164], [2, 168], [2, 177], [2, 183], [2, 189],
		[2, 197], [2, 211], [2, 217], [2, 222], [2, 229],
		[2, 232], [2, 236], [2, 243], [2, 249], [2, 254],
		[2, 258], [2, 261], [2, 267], [2, 274], [2, 282],
		[2, 284], [3, 1], [3, 10], [3, 21], [3, 31],
		[3, 42], [3, 55], [3, 64], [3, 72], [3, 81],
		[3, 92], [3, 102], [3, 110], [3, 121], [3, 130],
		[3, 144], [3, 149], [3, 156], [3, 172], [3, 181],
		[3, 190], [4, 1], [4, 11], [4, 15], [4, 23],
		[4, 26], [4, 34], [4, 43], [4, 51], [4, 60],
		[4, 71], [4, 77], [4, 88], [4, 92], [4, 97],
		[4, 101], [4, 105], [4, 113], [4, 116], [4, 127],
		[4, 135], [4, 142], [4, 153], [4, 163], [4, 172],
		[5, 1], [5, 6], [5, 12], [5, 20], [5, 27],
		[5, 35], [5, 44], [5, 51], [5, 57], [5, 67],
		[5, 78], [5, 87], [5, 94], [5, 101], [5, 109],
		[5, 116], [6, 1], [6, 11], [6, 21], [6, 31],
		[6, 42], [6, 51], [6, 56], [6, 61], [6, 71],
		[6, 83], [6, 91], [6, 95], [6, 101], [6, 111],
		[6, 122], [6, 130], [6, 141], [6, 145], [6, 151],
		[6, 155], [7, 1], [7, 11], [7, 26], [7, 32],
		[7, 40], [7, 48], [7, 54], [7, 59], [7, 65],
		[7, 73], [7, 85], [7, 94], [7, 100], [7, 109],
		[7, 127], [7, 130], [7, 142], [7, 148], [7, 152],
		[7, 158], [7, 163], [7, 172], [7, 182], [7, 189],
		[8, 1], [8, 11], [8, 20], [8, 29], [8, 38],
		[8, 45], [8, 49], [8, 59], [8, 65], [8, 70],
		[9, 1], [9, 7], [9, 17], [9, 25], [9, 30],
		[9, 38], [9, 43], [9, 60], [9, 67], [9, 73],
		[9, 81], [9, 90], [9, 100], [9, 111], [9, 119],
		[9, 123], [10, 1], [10, 11], [10, 21], [10, 31],
		[10, 41], [10, 54], [10, 61], [10, 71], [10, 83],
		[10, 93], [10, 104], [11, 1], [11, 9], [11, 25],
		[11, 36], [11, 50], [11, 61], [11, 69], [11, 84],
		[11, 96], [11, 110], [12, 1], [12, 7], [12, 21],
		[12, 30], [12, 36], [12, 43], [12, 50], [12, 58],
		[12, 69], [12, 80], [12, 94], [12, 105], [13, 1],
		[13, 8], [13, 19], [13, 27], [13, 32], [13, 38],
		[14, 1], [14, 7], [14, 13], [14, 22], [14, 28],
		[14, 35], [14, 42], [15, 1], [15, 16], [15, 26],
		[15, 45], [15, 61], [15, 80], [16, 1], [16, 10],
		[16, 22], [16, 26], [16, 35], [16, 41], [16, 51],
		[16, 61], [16, 66], [16, 71], [16, 77], [16, 84],
		[16, 90], [16, 101], [16, 111], [16, 120], [17, 1],
		[17, 11], [17, 23], [17, 31], [17, 41], [17, 53],
		[17, 61], [17, 71], [17, 78], [17, 85], [17, 94],
		[17, 101], [18, 1], [18, 13], [18, 18], [18, 23],
		[18, 32], [18, 45], [18, 50], [18, 54], [18, 60],
		[18, 71], [18, 83], [18, 102], [19, 1], [19, 16],
		[19, 41], [19, 51], [19, 66], [19, 83], [20, 1],
		[20, 25], [20, 55], [20, 77], [20, 90], [20, 105],
		[20, 116], [20, 129], [21, 1], [21, 11], [21, 30],
		[21, 42], [21, 51], [21, 76], [21, 94], [22, 1],
		[22, 11], [22, 23], [22, 26], [22, 34], [22, 39],
		[22, 49], [22, 58], [22, 65], [22, 73], [23, 1],
		[23, 23], [23, 33], [23, 51], [23, 78], [23, 93],
		[24, 1], [24, 11], [24, 21], [24, 27], [24, 35],
		[24, 41], [24, 51], [24, 58], [24, 62], [25, 1],
		[25, 10], [25, 21], [25, 35], [25, 45], [25, 61],
		[26, 1], [26, 10], [26, 34], [26, 53], [26, 70],
		[26, 105], [26, 123], [26, 141], [26, 160], [26, 176],
		[26, 192], [27, 1], [27, 15], [27, 32], [27, 45],
		[27, 59], [27, 67], [27, 83], [28, 1], [28, 14],
		[28, 22], [28, 29], [28, 43], [28, 51], [28, 61],
		[28, 76], [29, 1], [29, 14], [29, 23], [29, 31],
		[29, 45], [29, 52], [29, 64], [30, 1], [30, 11],
		[30, 20], [30, 28], [30, 41], [30, 54], [31, 1],
		[31, 12], [31, 20], [32, 1], [32, 12], [32, 23],
		[33, 1], [33, 9], [33, 21], [33, 28], [33, 35],
		[33, 41], [33, 53], [33, 59], [33, 69], [34, 1],
		[34, 10], [34, 22], [34, 31], [34, 37], [34, 46],
		[35, 1], [35, 8], [35, 15], [35, 27], [35, 38],
		[36, 1], [36, 13], [36, 33], [36, 51], [36, 68],
		[37, 1], [37, 22], [37, 75], [37, 114], [37, 139],
		[38, 1], [38, 15], [38, 27], [38, 41], [38, 65],
		[39, 1], [39, 10], [39, 22], [39, 32], [39, 42],
		[39, 53], [39, 64], [39, 71], [40, 1], [40, 10],
		[40, 21], [40, 28], [40, 38], [40, 51], [40, 61],
		[40, 69], [40, 79], [41, 1], [41, 9], [41, 19],
		[41, 26], [41, 33], [41, 45], [42, 1], [42, 10],
		[42, 20], [42, 30], [42, 44], [43, 1], [43, 16],
		[43, 26], [43, 36], [43, 46], [43, 57], [43, 68],
		[44, 1], [44, 30], [44, 43], [45, 1], [45, 12],
		[45, 22], [45, 27], [46, 1], [46, 11], [46, 21],
		[46, 27], [47, 1], [47, 12], [47, 20], [47, 29],
		[48, 1], [48, 11], [48, 18], [48, 27], [49, 1],
		[49, 11], [50, 1], [50, 16], [50, 30], [51, 1],
		[51, 24], [51, 47], [52, 1], [52, 29], [53, 1],
		[53, 26], [53, 33], [54, 1], [54, 23], [54, 41],
		[55, 1], [55, 26], [55, 46], [56, 1], [56, 39],
		[56, 75], [57, 1], [57, 11], [57, 20], [57, 26],
		[58, 1], [58, 7], [58, 14], [59, 1], [59, 11],
		[59, 18], [60, 1], [60, 7], [61, 1], [61, 10],
		[62, 1], [62, 9], [63, 1], [63, 9], [64, 1],
		[64, 11], [65, 1], [65, 8], [66, 1], [66, 8],
		[67, 1], [67, 15], [68, 1], [68, 34], [69, 1],
		[69, 38], [70, 1], [70, 36], [71, 1], [71, 21],
		[72, 1], [72, 20], [73, 1], [73, 20], [74, 1],
		[74, 32], [75, 1], [75, 31], [76, 1], [76, 23],
		[77, 1], [77, 41], [78, 1], [78, 31], [79, 1],
		[79, 27], [80, 1], [81, 1], [82, 1], [83, 1],
		[84, 1], [85, 1], [86, 1], [87, 1], [88, 1],
		[89, 1], [90, 1], [91, 1], [92, 1], [93, 1],
		[94, 1], [95, 1], [96, 1], [97, 1], [98, 1],
		[99, 1], [100, 1], [101, 1], [102, 1], [103, 1],
		[104, 1], [105, 1], [106, 1], [107, 1], [108, 1],
		[109, 1], [110, 1], [111, 1], [112, 1], [113, 1],
		[114, 1]
	];
	meta.safhaat = [
		[],
		[1, 1], [2, 1], [2, 6], [2, 17], [2, 25],
		[2, 30], [2, 38], [2, 49], [2, 58], [2, 62],
		[2, 70], [2, 77], [2, 84], [2, 89], [2, 94],
		[2, 102], [2, 106], [2, 113], [2, 120], [2, 127],
		[2, 135], [2, 142], [2, 146], [2, 154], [2, 164],
		[2, 170], [2, 177], [2, 182], [2, 187], [2, 191],
		[2, 197], [2, 203], [2, 211], [2, 216], [2, 220],
		[2, 225], [2, 231], [2, 234], [2, 238], [2, 246],
		[2, 249], [2, 253], [2, 257], [2, 260], [2, 265],
		[2, 270], [2, 275], [2, 282], [2, 283], [3, 1],
		[3, 10], [3, 16], [3, 23], [3, 30], [3, 38],
		[3, 46], [3, 53], [3, 62], [3, 71], [3, 78],
		[3, 84], [3, 92], [3, 101], [3, 109], [3, 116],
		[3, 122], [3, 133], [3, 141], [3, 149], [3, 154],
		[3, 158], [3, 166], [3, 174], [3, 181], [3, 187],
		[3, 195], [4, 1], [4, 7], [4, 12], [4, 15],
		[4, 20], [4, 24], [4, 27], [4, 34], [4, 38],
		[4, 45], [4, 52], [4, 60], [4, 66], [4, 75],
		[4, 80], [4, 87], [4, 92], [4, 95], [4, 102],
		[4, 106], [4, 114], [4, 122], [4, 128], [4, 135],
		[4, 141], [4, 148], [4, 155], [4, 163], [4, 171],
		[4, 176], [5, 3], [5, 6], [5, 10], [5, 14],
		[5, 18], [5, 24], [5, 32], [5, 37], [5, 42],
		[5, 46], [5, 51], [5, 58], [5, 65], [5, 71],
		[5, 77], [5, 83], [5, 90], [5, 96], [5, 104],
		[5, 109], [5, 114], [6, 1], [6, 9], [6, 19],
		[6, 28], [6, 36], [6, 45], [6, 53], [6, 60],
		[6, 69], [6, 74], [6, 82], [6, 91], [6, 95],
		[6, 102], [6, 111], [6, 119], [6, 125], [6, 132],
		[6, 138], [6, 143], [6, 147], [6, 152], [6, 158],
		[7, 1], [7, 12], [7, 23], [7, 31], [7, 38],
		[7, 44], [7, 52], [7, 58], [7, 68], [7, 74],
		[7, 82], [7, 88], [7, 96], [7, 105], [7, 121],
		[7, 131], [7, 138], [7, 144], [7, 150], [7, 156],
		[7, 160], [7, 164], [7, 171], [7, 179], [7, 188],
		[7, 196], [8, 1], [8, 9], [8, 17], [8, 26],
		[8, 34], [8, 41], [8, 46], [8, 53], [8, 62],
		[8, 70], [9, 1], [9, 7], [9, 14], [9, 21],
		[9, 27], [9, 32], [9, 37], [9, 41], [9, 48],
		[9, 55], [9, 62], [9, 69], [9, 73], [9, 80],
		[9, 87], [9, 94], [9, 100], [9, 107], [9, 112],
		[9, 118], [9, 123], [10, 1], [10, 7], [10, 15],
		[10, 21], [10, 26], [10, 34], [10, 43], [10, 54],
		[10, 62], [10, 71], [10, 79], [10, 89], [10, 98],
		[10, 107], [11, 6], [11, 13], [11, 20], [11, 29],
		[11, 38], [11, 46], [11, 54], [11, 63], [11, 72],
		[11, 82], [11, 89], [11, 98], [11, 109], [11, 118],
		[12, 5], [12, 15], [12, 23], [12, 31], [12, 38],
		[12, 44], [12, 53], [12, 64], [12, 70], [12, 79],
		[12, 87], [12, 96], [12, 104], [13, 1], [13, 6],
		[13, 14], [13, 19], [13, 29], [13, 35], [13, 43],
		[14, 6], [14, 11], [14, 19], [14, 25], [14, 34],
		[14, 43], [15, 1], [15, 16], [15, 32], [15, 52],
		[15, 71], [15, 91], [16, 7], [16, 15], [16, 27],
		[16, 35], [16, 43], [16, 55], [16, 65], [16, 73],
		[16, 80], [16, 88], [16, 94], [16, 103], [16, 111],
		[16, 119], [17, 1], [17, 8], [17, 18], [17, 28],
		[17, 39], [17, 50], [17, 59], [17, 67], [17, 76],
		[17, 87], [17, 97], [17, 105], [18, 5], [18, 16],
		[18, 21], [18, 28], [18, 35], [18, 46], [18, 54],
		[18, 62], [18, 75], [18, 84], [18, 98], [19, 1],
		[19, 12], [19, 26], [19, 39], [19, 52], [19, 65],
		[19, 77], [19, 96], [20, 13], [20, 38], [20, 52],
		[20, 65], [20, 77], [20, 88], [20, 99], [20, 114],
		[20, 126], [21, 1], [21, 11], [21, 25], [21, 36],
		[21, 45], [21, 58], [21, 73], [21, 82], [21, 91],
		[21, 102], [22, 1], [22, 6], [22, 16], [22, 24],
		[22, 31], [22, 39], [22, 47], [22, 56], [22, 65],
		[22, 73], [23, 1], [23, 18], [23, 28], [23, 43],
		[23, 60], [23, 75], [23, 90], [23, 105], [24, 1],
		[24, 11], [24, 21], [24, 28], [24, 32], [24, 37],
		[24, 44], [24, 54], [24, 59], [24, 62], [25, 3],
		[25, 12], [25, 21], [25, 33], [25, 44], [25, 56],
		[25, 68], [26, 1], [26, 20], [26, 40], [26, 61],
		[26, 84], [26, 112], [26, 137], [26, 160], [26, 184],
		[26, 207], [27, 1], [27, 14], [27, 23], [27, 36],
		[27, 45], [27, 56], [27, 64], [27, 77], [27, 89],
		[28, 6], [28, 14], [28, 22], [28, 29], [28, 36],
		[28, 44], [28, 51], [28, 60], [28, 71], [28, 78],
		[28, 85], [29, 7], [29, 15], [29, 24], [29, 31],
		[29, 39], [29, 46], [29, 53], [29, 64], [30, 6],
		[30, 16], [30, 25], [30, 33], [30, 42], [30, 51],
		[31, 1], [31, 12], [31, 20], [31, 29], [32, 1],
		[32, 12], [32, 21], [33, 1], [33, 7], [33, 16],
		[33, 23], [33, 31], [33, 36], [33, 44], [33, 51],
		[33, 55], [33, 63], [34, 1], [34, 8], [34, 15],
		[34, 23], [34, 32], [34, 40], [34, 49], [35, 4],
		[35, 12], [35, 19], [35, 31], [35, 39], [35, 45],
		[36, 13], [36, 28], [36, 41], [36, 55], [36, 71],
		[37, 1], [37, 25], [37, 52], [37, 77], [37, 103],
		[37, 127], [37, 154], [38, 1], [38, 17], [38, 27],
		[38, 43], [38, 62], [38, 84], [39, 6], [39, 11],
		[39, 22], [39, 32], [39, 41], [39, 48], [39, 57],
		[39, 68], [39, 75], [40, 8], [40, 17], [40, 26],
		[40, 34], [40, 41], [40, 50], [40, 59], [40, 67],
		[40, 78], [41, 1], [41, 12], [41, 21], [41, 30],
		[41, 39], [41, 47], [42, 1], [42, 11], [42, 16],
		[42, 23], [42, 32], [42, 45], [42, 52], [43, 11],
		[43, 23], [43, 34], [43, 48], [43, 61], [43, 74],
		[44, 1], [44, 19], [44, 40], [45, 1], [45, 14],
		[45, 23], [45, 33], [46, 6], [46, 15], [46, 21],
		[46, 29], [47, 1], [47, 12], [47, 20], [47, 30],
		[48, 1], [48, 10], [48, 16], [48, 24], [48, 29],
		[49, 5], [49, 12], [50, 1], [50, 16], [50, 36],
		[51, 7], [51, 31], [51, 52], [52, 15], [52, 32],
		[53, 1], [53, 27], [53, 45], [54, 7], [54, 28],
		[54, 50], [55, 17], [55, 41], [55, 68], [56, 17],
		[56, 51], [56, 77], [57, 4], [57, 12], [57, 19],
		[57, 25], [58, 1], [58, 7], [58, 12], [58, 22],
		[59, 4], [59, 10], [59, 17], [60, 1], [60, 6],
		[60, 12], [61, 6], [62, 1], [62, 9], [63, 5],
		[64, 1], [64, 10], [65, 1], [65, 6], [66, 1],
		[66, 8], [67, 1], [67, 13], [67, 27], [68, 16],
		[68, 43], [69, 9], [69, 35], [70, 11], [70, 40],
		[71, 11], [72, 1], [72, 14], [73, 1], [73, 20],
		[74, 18], [74, 48], [75, 20], [76, 6], [76, 26],
		[77, 20], [78, 1], [78, 31], [79, 16], [80, 1],
		[81, 1], [82, 1], [83, 7], [83, 35], [85, 1],
		[86, 1], [87, 16], [89, 1], [89, 24], [91, 1],
		[92, 15], [95, 1], [97, 1], [98, 8], [100, 10],
		[103, 1], [106, 1], [109, 1], [112, 1], [115, 1]
	];
	meta.sujood = [
		[],
		[7, 206, 0],
		[13, 15, 0],
		[16, 50, 0],
		[17, 109, 0],
		[19, 58, 0],
		[22, 18, 0],
		[22, 77, 0],
		[25, 60, 0],
		[27, 26, 0],
		[32, 15, 1],
		[38, 24, 0],
		[41, 38, 1],
		[53, 62, 1],
		[84, 21, 0],
		[96, 19, 1],
	];
	module.exports = meta;
})();

