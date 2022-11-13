+htm
body
	+include managed.htm.slang
	script #tempscript

	[view=main]
		[id=player] #globalplayer .player
			[id=name] .name .absolute
			[id=progress] .progress
			[id=duration] .duration .absolute
			[id=current] .current .absolute
		[id=text] @dir(rtl) .matn
		[id=text2] @dir(rtl) .matn .dim

		[fullscreen=1] .maHdood
	[view=surahs]
		[id=list]

	[template=soorahli] .soorahli .listitem .flex
			.flex .start .vertical .shrink .vcenter .padv
				[id=matn] .pad .matn
			.small .dim .vcenter
				img src() [id=soorah] .soorah

