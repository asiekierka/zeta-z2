var canvas = null;
var ctx = null;

var scripts_array = [];
var zzt_opts = {};
var script_ldr = function() {
	if (scripts_array.length == 0) {
		zzt_emu_create(zzt_opts);
		return;
	}

	var s = scripts_array.shift();
	var scr = document.createElement("script");
	scr.onload = script_ldr;
	scr.src = s;
	document.body.appendChild(scr);
}

function zzt_emu_load(path, options) {
	var canvas = document.getElementById('zzt_canvas');
	canvas.tabindex=1;

	var ctx = canvas.getContext('2d', {alpha: false});

	zzt_opts = options;
	zzt_opts.path = path;

	var imgload = new Image();
	imgload.onload = function() {
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(imgload,0,0,320,175,(canvas.width - 640)/2,(canvas.height - 350)/2,640,350);
	};
	imgload.src = path+"loading.png";
	scripts_array = [
		path+"uzip.min.js",
		path+"zeta86.js",
		path+"zzt.min.js"
	];
	script_ldr();
}
