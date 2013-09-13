jQuery(document).ready(function ($) {
	var $title = $('title').text('. . .');
	var md = $.url().param('md');

	if (md !== undefined) {
		$.get('md/' + md + '.md', function (data) {
			$('#markdown').append(markdown.toHTML(data));
			$title.text($('h1').first().text());
		});
	}
});