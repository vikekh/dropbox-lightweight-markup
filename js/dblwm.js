jQuery(document).ready(function ($) {
	$.getJSON('config.json', function (config) {
		var $title = $('title').text('. . .');
		var langs = ['markdown', 'textile'];

		for (var i = 0; i < langs.length; i++) {
			var lang = langs[i];
			var get = $.url().param(config[lang].get);

			if (get === undefined) continue;

			$.get(config[lang].root + get + config[lang].ext, function (data) {
				var html, ext;
				var matches = this.url.match(/.\w+$/);

				if (matches !== null && matches.length === 1) ext = matches[0];

				switch (ext) {
					case config.markdown.ext:
						html = markdown.toHTML(data);
						break;
					case config.textile.ext:
						html = textile.parse(data);
						break;
				}

				$('#html').append(html);
				$title.text($('h1').first().text());
			});
		}
	});
});