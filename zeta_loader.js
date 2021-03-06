ZetaLoad = function(options, callback) {
	if (!options.path) throw "Missing option: path!";

	var scripts_array = [];
	var script_ldr = function() {
		if (scripts_array.length == 0) {
			ZetaInitialize(options, callback);
		} else {
			var scrSrc = scripts_array.shift();
			var scr = document.createElement("script");
			scr.onload = script_ldr;
			scr.src = scrSrc;
			document.body.appendChild(scr);
		}
	}

	scripts_array = [
		options.path+"zeta_native.js",
		options.path+"uzip.min.js",
		options.path+"zeta.min.js"
	];
	if (options.dev) {
		scripts_array[2] = options.path+"zeta.js"
	}

	script_ldr();
}
