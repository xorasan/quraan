//+ fahras shortcuts hifz ilaa show next prev nextayah prevayah axad badaa
var main, replacements = {}, surahs = {}, cached = {}, meanings = {};
;(function(){
	'use strict';

	var surah = 1, ayah = 0, textview, textview2, progress, duration, current,
	gname, vicinity = 6, dots = '…', showmeanings, settingsuid,

	/*latinify = function (str) {
		return str	.replace(/ا/g, 'a')
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
		showmeanings = preferences.get(13, 1) ? 0 : 1;
		preferences.set(13, showmeanings);
		main.show();
	},
	nazzaf = function (text) {
		return text	.toLowerCase()
					.replace(/ئ/g, 'ء')		// hamza on yaa to hamza
					.replace(/ى/g, 'ي')	// alef maksura to yaa
					.replace(/أ/g, 'ا')		// alef hamza above
					.replace(/إ/g, 'ا')		// alef hamza below
					.replace(/آ/g, 'ا')		// alef madda
					.replace(/ٱ/g, 'ا')		// werid alef
					.replace(/ؤ/g, 'و')		// wow with hamza
					.replace(/ک/g, 'ك')	// urdu kaf to arabic
					.replace(/ہ/g, 'ه')		// urdu hah to arabic
					.replace(/َ/g, '')		// fathah
					.replace(/ِ/g, '')		// kasrah
					.replace(/ُ/g, '')		// damma
					.replace(/ّ/g, '')		// tashdeed
					.replace(/ٰ/g, '')		// mini-alef
					.replace(/ْ/g, '')		// sukoon
					.replace(/ٌ/g, '')		// dammatyn
					.replace(/ً/g, '')		// fthhtyn
					.replace(/ٍ/g, '')		// kasratyn
					.replace(/ٓ/g, '')		// madda
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

					// words before next sentence if any
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
							// code		word		meaning
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
							? '<div class=XPO.dim>'+meanings[item]+'</div>' : ''
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
				ayah = fromend ? surahs[surah].length-1 : 0,
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
	
	Hooks.set('XPO.bahaconpress', function (args) {
		if (args[1] === K.en) {
			Hooks.run('XPO.back');
			surah = args[0].XPO.surah;
			ayah = args[0].XPO.ayah;
			main.hifz();
			main.show();
		}
	});
	Hooks.set('XPO.bahac', function (rawstring) {
		var string = nazzaf(rawstring).trim();
		if (string.length) {
			var results = [], count = 0, surahcount = 0;
			for (var i = 1; i <= 114 && surahcount < 3; ++i) {
				var metadata = meta.surahs[i];
				if (nazzaf(metadata[4]).includes(string)
				||	nazzaf(metadata[6]).includes(string)) {
					results.push({
						id: i,
						XPO.surah: parseInt(i),
						XPO.ayah: 0,
						XPO.title: i + ' ' + metadata[4],
						XPO.body: metadata[6],
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
							XPO.titlehide: hawalah(i, j),
							XPO.surah: parseInt(i),
							XPO.ayah: parseInt(j),
							id: i+':'+j,
							XPO.bodyshowhtml: nateejah( i, j, nazzaf(rawstring) ),
						});

					++count;

					if (results.length >= 20) break;
				}
				if (results.length >= 20) break;
			}
		}
		bahac.fahras(results);
	});
	Hooks.set('XPO.scroll', function (top) {
		XPO.globalplayer.style.position = top > 12 ? 'fixed' : '';
		textview.style.paddingTop = top > 12 ? '24px' : '';
		duration.hidden = 
		gname.hidden = top > 12 ? 1 : 0;
	});
	Hooks.set('XPO.ready', function () {
		webapp.statusbarpadding();
		
		var mfateeh = view.mfateeh('XPO.main');
		textview = mfateeh.XPO.text;
		textview2 = mfateeh.XPO.text2;
		gname = mfateeh.XPO.name;
		progress = mfateeh.XPO.progress;
		duration = mfateeh.XPO.duration;
		current = mfateeh.XPO.current;

		showmeanings = preferences.get(13, 1);

		settingsuid = settings.adaaf('XPO.showmeanings', function () {
			showmeanings = preferences.get(13, 1);
			return translate( showmeanings ? 'XPO.on' : 'XPO.off' );
		}, function () {
			meaningstoggle();
		});

		XPO.tempscript.onload = function () {
			main.badaa(T, Q);
		};
		XPO.tempscript.src = 'q.js';
	});
	Hooks.set('XPO.viewready', function (args) {
		switch (args.XPO.name) {
			case 'XPO.main':
				webapp.header();
				softkeys.set(K.en, function () {
					main.hifz(0, 1);
					webapp.itlaa3(['XPO.bookmarked']);
					return 1;
				}, 0, 'XPO.iconbookmarkborder');
				softkeys.set('5', function () {
					main.hifz(1, 1);
					main.show();
					webapp.itlaa3(['XPO.restored']);
					return 1;
				}, '5', 'XPO.iconhistory');

				softkeys.set('7', function () {
					meaningstoggle();
					settings.jaddad(settingsuid);
					return 1;
				}, '7', 'XPO.icontranslate');

				softkeys.set(K.sl, function () {
					Hooks.run('XPO.view', 'XPO.surahs');
				}, 0, 'XPO.iconmenu');
				
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
	Hooks.set('XPO.restore', function (darajah) {
		if (darajah === 0) {
			switch ( view.axad() ) {
				case 'XPO.main':
					webapp.header();
					main.show();
					break;
			}
		}
	});

})();
