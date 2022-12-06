//+ 
var surahpicker, surahslist;
;(function(){
	'use strict';

	surahpicker = {
		ilaa: function (s) {
			if (surahslist)
				surahslist.select(s-1, 1, 1, 1);
		},
	};

	Hooks.set('XPO.ready', function () {
		surahslist = list( view.mfateeh('XPO.surahs').XPO.list )
		surahslist.idprefix('XPO.surah');
		surahpicker.ilaa( main.axad()[0] ); // restore surah selection

		for (var i = 1; i <= 114; ++i) {
			var metadata = meta.surahs[i];
			surahslist.set({
				id: i-1,
				XPO.title: i + ' ' + metadata[4],
				XPO.body: metadata[6],
				XPO.subtitle: metadata[1] +' '+ translate('ayaat'),
			}); // to correctly index them in the list adapter
		}
		surahslist.onpress = function (item, key, i) {
			if (key === K.en) {
				main.ilaa( i+1 );
				Hooks.run('XPO.back');
			}
		};
	});
	Hooks.set('XPO.viewready', function (args) {
		switch (args.XPO.name) {
			case 'XPO.surahs':
				webapp.header();
				softkeys.list.basic(surahslist);
				surahpicker.ilaa( main.axad()[0] ); // restore surah selection
				surahslist.rakkaz(1);
				surahslist.intaxabscroll();
				break;
		}
	});
	Hooks.set('XPO.restore', function (darajah) {
		if (darajah === 1) {
			switch ( view.axad() ) {
				case 'XPO.surahs':
					// restore scroll position
					surahslist.select();
					break;
			}
		}
	});

})();
