jQuery(document).ready(function ($) {
	$.getJSON('config.json', function (config) {
		var $title = $('title').text('. . .');
		var $target = $('#target');

		if ($.url().param(config.get.markdown) !== undefined) {
			$.get(config.root.markdown + $.url().param(config.get.markdown) + '.md', function (data) {
				$target.append(markdown.toHTML(data));
				$title.text($('h1').first().text());
			});
		} else if ($.url().param(config.get.textile) !== undefined) {
			$.get(config.root.textile + $.url().param(config.get.textile) + '.textile', function (data) {
				$target.append(textile.parse(data));
				$title.text($('h1').first().text());
			});
		}
	});
});