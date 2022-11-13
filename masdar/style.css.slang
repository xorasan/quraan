+include managed.css.slang
.matn
	font-size		140%
	line-height		1.6
	padding			8px 5px 0 5px
.matn span
	display			inline-block
	vertical-align	text-top
	text-align		center
.matn span .dim
	font-size		70%
.list .item span
	color			@redl
.list .item[data-selected] span
	color			@red

.absolute
	position		absolute
.player
	position		relative
	top				0
	left			0
	right			0
	height			24px
	z-index			50
	background		linear-gradient(@primaryt 5%, transparent 130%)
.player .progress
	height			2px
	border-top		2px solid @accentl
	background		@accent
	border-bottom	2px solid @accentd
	width			0
.player .current
	left			0
.player .duration
	right			0
.player .name
	text-align		center
	left			30px
	right			30px
.player .name, .player .current, .player .duration
	top				3px
	font-weight		bold
	text-shadow		2px 2px 0 @primary
	margin			0 3px