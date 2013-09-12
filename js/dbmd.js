jQuery(document).ready(function ($) {
	var md = $.url().param('md');

	if (md !== undefined) {
		$.get('md/' + md + '.md', function (data) {
			$('#markdown').append(markdown.toHTML(data));
		});
	}
});