
var ZetaNative = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(ZetaNative) {
  ZetaNative = ZetaNative || {};


null;var a;a||(a=typeof ZetaNative !== 'undefined' ? ZetaNative : {});var l,m;a.ready=new Promise(function(b,c){l=b;m=c});var p={},q;for(q in a)a.hasOwnProperty(q)&&(p[q]=a[q]);var t="";"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src);_scriptDir&&(t=_scriptDir);0!==t.indexOf("blob:")?t=t.substr(0,t.replace(/[?#].*/,"").lastIndexOf("/")+1):t="";var ba=a.print||console.log.bind(console),v=a.printErr||console.warn.bind(console);
for(q in p)p.hasOwnProperty(q)&&(a[q]=p[q]);p=null;var w;a.wasmBinary&&(w=a.wasmBinary);var noExitRuntime=a.noExitRuntime||!0;"object"!==typeof WebAssembly&&x("no native wasm support detected");var y,z=!1,A="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;function B(b){for(var c="";;){var d=C[b++>>0];if(!d)return c;c+=String.fromCharCode(d)}}var D,C,E;
function F(){var b=y.buffer;D=b;a.HEAP8=new Int8Array(b);a.HEAP16=new Int16Array(b);a.HEAP32=E=new Int32Array(b);a.HEAPU8=C=new Uint8Array(b);a.HEAPU16=new Uint16Array(b);a.HEAPU32=new Uint32Array(b);a.HEAPF32=new Float32Array(b);a.HEAPF64=new Float64Array(b)}var G,K=[],L=[],M=[];function ca(){var b=a.preRun.shift();K.unshift(b)}var N=0,O=null,P=null;a.preloadedImages={};a.preloadedAudios={};
function x(b){if(a.onAbort)a.onAbort(b);b="Aborted("+b+")";v(b);z=!0;b=new WebAssembly.RuntimeError(b+". Build with -s ASSERTIONS=1 for more info.");m(b);throw b;}function Q(){return R.startsWith("data:application/octet-stream;base64,")}var R;R="zeta_native.wasm";if(!Q()){var S=R;R=a.locateFile?a.locateFile(S,t):t+S}function T(){var b=R;try{if(b==R&&w)return new Uint8Array(w);throw"both async and sync fetching of the wasm failed";}catch(c){x(c)}}
function da(){return w||"function"!==typeof fetch?Promise.resolve().then(function(){return T()}):fetch(R,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+R+"'";return b.arrayBuffer()}).catch(function(){return T()})}function U(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c(a);else{var d=c.sa;"number"===typeof d?void 0===c.ra?V(d)():V(d)(c.ra):d(void 0===c.ra?null:c.ra)}}}var W=[];
function V(b){var c=W[b];c||(b>=W.length&&(W.length=b+1),W[b]=c=G.get(b));return c}
var ea=[null,[],[]],ha={d:function(b){console.log(B(b))},n:function(b,c,d){C.copyWithin(b,c,c+d)},o:function(b){var c=C.length;b>>>=0;if(2147483648<b)return!1;for(var d=1;4>=d;d*=2){var f=c*(1+.2/d);f=Math.min(f,b+100663296);f=Math.max(b,f);0<f%65536&&(f+=65536-f%65536);a:{try{y.grow(Math.min(2147483648,f)-D.byteLength+65535>>>16);F();var e=1;break a}catch(k){}e=void 0}if(e)return!0}return!1},p:function(){return 0},m:function(){},h:function(b,c,d,f){for(var e=0,k=0;k<d;k++){var fa=E[c>>2],Z=E[c+4>>
2];c+=8;for(var H=0;H<Z;H++){var g=C[fa+H],I=ea[b];if(0===g||10===g){g=I;for(var n=0,r=n+NaN,u=n;g[u]&&!(u>=r);)++u;if(16<u-n&&g.subarray&&A)g=A.decode(g.subarray(n,u));else{for(r="";n<u;){var h=g[n++];if(h&128){var J=g[n++]&63;if(192==(h&224))r+=String.fromCharCode((h&31)<<6|J);else{var aa=g[n++]&63;h=224==(h&240)?(h&15)<<12|J<<6|aa:(h&7)<<18|J<<12|aa<<6|g[n++]&63;65536>h?r+=String.fromCharCode(h):(h-=65536,r+=String.fromCharCode(55296|h>>10,56320|h&1023))}}else r+=String.fromCharCode(h)}g=r}(1===
b?ba:v)(g);I.length=0}else I.push(g)}e+=Z}E[f>>2]=e;return 0},k:function(b){speakerg_off(b)},l:function(b,c){speakerg_on(b,c)},v:function(b){return vfsg_chdir(b)},w:function(b){return vfsg_close(b)},r:function(b,c,d){return vfsg_findfirst(b,c,d)},q:function(b){return vfsg_findnext(b)},u:function(b,c){return vfsg_getcwd(b,c)},i:function(b,c){return vfsg_open(b,c)},a:function(b,c,d){return vfsg_read(b,c,d)},b:function(b,c,d){return vfsg_seek(b,c,d)},t:function(b,c){return vfsg_truncate(b,c)},s:function(b,
c,d){return vfsg_write(b,c,d)},g:function(b){return vfsg_has_feature(b)},j:function(){return vfsg_time_ms()},f:function(b){return zetag_update_blink(b)},c:function(b,c,d){return zetag_update_charset(b,c,d)},e:function(b){return zetag_update_palette(b)}};
(function(){function b(e){a.asm=e.exports;y=a.asm.x;F();G=a.asm.z;L.unshift(a.asm.y);N--;a.monitorRunDependencies&&a.monitorRunDependencies(N);0==N&&(null!==O&&(clearInterval(O),O=null),P&&(e=P,P=null,e()))}function c(e){b(e.instance)}function d(e){return da().then(function(k){return WebAssembly.instantiate(k,f)}).then(function(k){return k}).then(e,function(k){v("failed to asynchronously prepare wasm: "+k);x(k)})}var f={a:ha};N++;a.monitorRunDependencies&&a.monitorRunDependencies(N);if(a.instantiateWasm)try{return a.instantiateWasm(f,
b)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return w||"function"!==typeof WebAssembly.instantiateStreaming||Q()||"function"!==typeof fetch?d(c):fetch(R,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,f).then(c,function(k){v("wasm streaming compile failed: "+k);v("falling back to ArrayBuffer instantiation");return d(c)})})})().catch(m);return{}})();
a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.y).apply(null,arguments)};a._zzt_kmod_set=function(){return(a._zzt_kmod_set=a.asm.A).apply(null,arguments)};a._zzt_kmod_clear=function(){return(a._zzt_kmod_clear=a.asm.B).apply(null,arguments)};a._zzt_key_get_delay=function(){return(a._zzt_key_get_delay=a.asm.C).apply(null,arguments)};a._zzt_key_get_repeat_delay=function(){return(a._zzt_key_get_repeat_delay=a.asm.D).apply(null,arguments)};
a._zzt_key_set_delay=function(){return(a._zzt_key_set_delay=a.asm.E).apply(null,arguments)};a._zzt_key=function(){return(a._zzt_key=a.asm.F).apply(null,arguments)};a._zzt_keyup=function(){return(a._zzt_keyup=a.asm.G).apply(null,arguments)};a._zzt_mark_frame=function(){return(a._zzt_mark_frame=a.asm.H).apply(null,arguments)};a._zzt_joy_set=function(){return(a._zzt_joy_set=a.asm.I).apply(null,arguments)};a._zzt_joy_clear=function(){return(a._zzt_joy_clear=a.asm.J).apply(null,arguments)};
a._zzt_joy_axis=function(){return(a._zzt_joy_axis=a.asm.K).apply(null,arguments)};a._zzt_mouse_set=function(){return(a._zzt_mouse_set=a.asm.L).apply(null,arguments)};a._zzt_mouse_clear=function(){return(a._zzt_mouse_clear=a.asm.M).apply(null,arguments)};a._zzt_mouse_axis=function(){return(a._zzt_mouse_axis=a.asm.N).apply(null,arguments)};a._zzt_force_default_charset=function(){return(a._zzt_force_default_charset=a.asm.O).apply(null,arguments)};
a._zzt_load_charset=function(){return(a._zzt_load_charset=a.asm.P).apply(null,arguments)};a._zzt_set_timer_offset=function(){return(a._zzt_set_timer_offset=a.asm.Q).apply(null,arguments)};a._zzt_set_max_extended_memory=function(){return(a._zzt_set_max_extended_memory=a.asm.R).apply(null,arguments)};a._zzt_video_mode=function(){return(a._zzt_video_mode=a.asm.S).apply(null,arguments)};a._zzt_load_binary=function(){return(a._zzt_load_binary=a.asm.T).apply(null,arguments)};
a._zzt_load_ega_palette=function(){return(a._zzt_load_ega_palette=a.asm.U).apply(null,arguments)};a._zzt_load_palette=function(){return(a._zzt_load_palette=a.asm.V).apply(null,arguments)};a._zzt_load_blink=function(){return(a._zzt_load_blink=a.asm.W).apply(null,arguments)};a._zzt_get_screen_size=function(){return(a._zzt_get_screen_size=a.asm.X).apply(null,arguments)};a._zzt_get_charset=function(){return(a._zzt_get_charset=a.asm.Y).apply(null,arguments)};
a._zzt_get_palette=function(){return(a._zzt_get_palette=a.asm.Z).apply(null,arguments)};a._zzt_get_blink=function(){return(a._zzt_get_blink=a.asm._).apply(null,arguments)};a._zzt_init=function(){return(a._zzt_init=a.asm.$).apply(null,arguments)};a._zzt_execute=function(){return(a._zzt_execute=a.asm.aa).apply(null,arguments)};a._zzt_mark_timer=function(){return(a._zzt_mark_timer=a.asm.ba).apply(null,arguments)};
a._zzt_mark_timer_turbo=function(){return(a._zzt_mark_timer_turbo=a.asm.ca).apply(null,arguments)};a._zzt_get_ram=function(){return(a._zzt_get_ram=a.asm.da).apply(null,arguments)};a._malloc=function(){return(a._malloc=a.asm.ea).apply(null,arguments)};a._free=function(){return(a._free=a.asm.fa).apply(null,arguments)};a._audio_stream_init=function(){return(a._audio_stream_init=a.asm.ga).apply(null,arguments)};
a._audio_stream_get_volume=function(){return(a._audio_stream_get_volume=a.asm.ha).apply(null,arguments)};a._audio_stream_get_max_volume=function(){return(a._audio_stream_get_max_volume=a.asm.ia).apply(null,arguments)};a._audio_stream_set_volume=function(){return(a._audio_stream_set_volume=a.asm.ja).apply(null,arguments)};a._audio_stream_generate=function(){return(a._audio_stream_generate=a.asm.ka).apply(null,arguments)};
a._audio_stream_append_on=function(){return(a._audio_stream_append_on=a.asm.la).apply(null,arguments)};a._audio_local_delay_time=function(){return(a._audio_local_delay_time=a.asm.ma).apply(null,arguments)};a._audio_should_insert_pause=function(){return(a._audio_should_insert_pause=a.asm.na).apply(null,arguments)};a._audio_stream_append_off=function(){return(a._audio_stream_append_off=a.asm.oa).apply(null,arguments)};
a._audio_get_note_delay=function(){return(a._audio_get_note_delay=a.asm.pa).apply(null,arguments)};a._audio_set_note_delay=function(){return(a._audio_set_note_delay=a.asm.qa).apply(null,arguments)};a.AsciiToString=B;var X;P=function ia(){X||Y();X||(P=ia)};
function Y(){function b(){if(!X&&(X=!0,a.calledRun=!0,!z)){U(L);l(a);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var c=a.postRun.shift();M.unshift(c)}U(M)}}if(!(0<N)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)ca();U(K);0<N||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b())}}a.run=Y;
if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();Y();


  return ZetaNative.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = ZetaNative;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return ZetaNative; });
else if (typeof exports === 'object')
  exports["ZetaNative"] = ZetaNative;
