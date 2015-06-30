$('<h3 id="mmmmy">极速的网络体验</h3>').prependTo('body');

setTimeout(function() {
	// newTab();
}, 1000);

function newTab() {
	var srcTag = '<div class="show-img-area">';

	$('img').each(function() {
		srcTag += '<div class="show-img"><img src="'+this.src+'"></img>'
				+'<div><a href="#">下载图片</a></div></div>';
	});

	srcTag += '</div>';

	$('body').prepend(srcTag);

	$('.show-img').find('a').click(function() {
		// TODO
	});
}