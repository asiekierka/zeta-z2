
var ZetaNative = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(moduleArg = {}) {

var b=moduleArg,d,m;b.ready=new Promise((a,c)=>{d=a;m=c});var q=Object.assign({},b),r="";"undefined"!=typeof document&&document.currentScript&&(r=document.currentScript.src);_scriptDir&&(r=_scriptDir);0!==r.indexOf("blob:")?r=r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+1):r="";var t=console.log.bind(console),u=console.error.bind(console);Object.assign(b,q);q=null;"object"!=typeof WebAssembly&&v("no native wasm support detected");var x,y=!1,z,A;
function B(){var a=x.buffer;b.HEAP8=new Int8Array(a);b.HEAP16=new Int16Array(a);b.HEAPU8=z=new Uint8Array(a);b.HEAPU16=new Uint16Array(a);b.HEAP32=new Int32Array(a);b.HEAPU32=A=new Uint32Array(a);b.HEAPF32=new Float32Array(a);b.HEAPF64=new Float64Array(a)}var C=[],G=[],H=[],I=0,J=null,K=null;function v(a){a="Aborted("+a+")";u(a);y=!0;a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");m(a);throw a;}var L=a=>a.startsWith("data:application/octet-stream;base64,"),M;M="zeta_native.wasm";
L(M)||(M=r+M);function N(){throw"both async and sync fetching of the wasm failed";}function O(a){return"function"==typeof fetch?fetch(a,{credentials:"same-origin"}).then(c=>{if(!c.ok)throw"failed to load wasm binary file at '"+a+"'";return c.arrayBuffer()}).catch(()=>N()):Promise.resolve().then(()=>N())}function P(a,c,e){return O(a).then(f=>WebAssembly.instantiate(f,c)).then(f=>f).then(e,f=>{u(`failed to asynchronously prepare wasm: ${f}`);v(f)})}
function Q(a,c){var e=M;return"function"!=typeof WebAssembly.instantiateStreaming||L(e)||"function"!=typeof fetch?P(e,a,c):fetch(e,{credentials:"same-origin"}).then(f=>WebAssembly.instantiateStreaming(f,a).then(c,function(k){u(`wasm streaming compile failed: ${k}`);u("falling back to ArrayBuffer instantiation");return P(e,a,c)}))}
var R="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,V=[null,[],[]],W=a=>{for(var c="";;){var e=z[a++>>0];if(!e)return c;c+=String.fromCharCode(e)}},aa={d:function(a){console.log(W(a))},p:(a,c,e)=>z.copyWithin(a,c,c+e),n:a=>{var c=z.length;a>>>=0;if(2147483648<a)return!1;for(var e=1;4>=e;e*=2){var f=c*(1+.2/e);f=Math.min(f,a+100663296);var k=Math;f=Math.max(a,f);a:{k=(k.min.call(k,2147483648,f+(65536-f%65536)%65536)-x.buffer.byteLength+65535)/65536;try{x.grow(k);B();var w=1;break a}catch(S){}w=
void 0}if(w)return!0}return!1},o:()=>52,m:function(){return 70},i:(a,c,e,f)=>{for(var k=0,w=0;w<e;w++){var S=A[c>>2],T=A[c+4>>2];c+=8;for(var D=0;D<T;D++){var g=z[S+D],E=V[a];if(0===g||10===g){g=E;for(var l=0,n=l+NaN,p=l;g[p]&&!(p>=n);)++p;if(16<p-l&&g.buffer&&R)g=R.decode(g.subarray(l,p));else{for(n="";l<p;){var h=g[l++];if(h&128){var F=g[l++]&63;if(192==(h&224))n+=String.fromCharCode((h&31)<<6|F);else{var U=g[l++]&63;h=224==(h&240)?(h&15)<<12|F<<6|U:(h&7)<<18|F<<12|U<<6|g[l++]&63;65536>h?n+=String.fromCharCode(h):
(h-=65536,n+=String.fromCharCode(55296|h>>10,56320|h&1023))}}else n+=String.fromCharCode(h)}g=n}(1===a?t:u)(g);E.length=0}else E.push(g)}k+=T}A[f>>2]=k;return 0},g:function(a){speakerg_off(a)},l:function(a,c){speakerg_on(a,c)},v:function(a){return vfsg_chdir(a)},w:function(a){return vfsg_close(a)},r:function(a,c,e){return vfsg_findfirst(a,c,e)},q:function(a){return vfsg_findnext(a)},u:function(a,c){return vfsg_getcwd(a,c)},j:function(a,c){return vfsg_open(a,c)},a:function(a,c,e){return vfsg_read(a,
c,e)},b:function(a,c,e){return vfsg_seek(a,c,e)},t:function(a,c){return vfsg_truncate(a,c)},s:function(a,c,e){return vfsg_write(a,c,e)},h:function(a){return vfsg_has_feature(a)},k:function(){return vfsg_time_ms()},e:function(a){return zetag_update_blink(a)},c:function(a,c,e){return zetag_update_charset(a,c,e)},f:function(a){return zetag_update_palette(a)}},X=function(){var a={a:aa};I++;Q(a,function(c){X=c.instance.exports;x=X.x;B();G.unshift(X.y);I--;0==I&&(null!==J&&(clearInterval(J),J=null),K&&
(c=K,K=null,c()))}).catch(m);return{}}();b._zzt_get_ip=()=>(b._zzt_get_ip=X.A)();b._zzt_get_cycles=()=>(b._zzt_get_cycles=X.B)();b._zzt_kmod_get=()=>(b._zzt_kmod_get=X.C)();b._zzt_kmod_set=a=>(b._zzt_kmod_set=X.D)(a);b._zzt_kmod_clear=a=>(b._zzt_kmod_clear=X.E)(a);b._zzt_set_lock_charset=a=>(b._zzt_set_lock_charset=X.F)(a);b._zzt_set_lock_palette=a=>(b._zzt_set_lock_palette=X.G)(a);b._zzt_key_get_delay=()=>(b._zzt_key_get_delay=X.H)();b._zzt_key_get_repeat_delay=()=>(b._zzt_key_get_repeat_delay=X.I)();
b._zzt_key_set_delay=(a,c)=>(b._zzt_key_set_delay=X.J)(a,c);b._zzt_key=(a,c)=>(b._zzt_key=X.K)(a,c);b._zzt_keyup=a=>(b._zzt_keyup=X.L)(a);b._zzt_mark_frame=()=>(b._zzt_mark_frame=X.M)();b._zzt_joy_set=a=>(b._zzt_joy_set=X.N)(a);b._zzt_joy_clear=a=>(b._zzt_joy_clear=X.O)(a);b._zzt_joy_axis=(a,c)=>(b._zzt_joy_axis=X.P)(a,c);b._zzt_mouse_set=a=>(b._zzt_mouse_set=X.Q)(a);b._zzt_mouse_clear=a=>(b._zzt_mouse_clear=X.R)(a);b._zzt_mouse_axis=(a,c)=>(b._zzt_mouse_axis=X.S)(a,c);
b._zzt_get_charset_default=()=>(b._zzt_get_charset_default=X.T)();b._zzt_force_default_charset=a=>(b._zzt_force_default_charset=X.U)(a);b._zzt_load_charset=(a,c,e,f)=>(b._zzt_load_charset=X.V)(a,c,e,f);b._zzt_set_timer_offset=a=>(b._zzt_set_timer_offset=X.W)(a);b._zzt_set_max_extended_memory=a=>(b._zzt_set_max_extended_memory=X.X)(a);b._zzt_video_mode=()=>(b._zzt_video_mode=X.Y)();b._zzt_load_palette_default=()=>(b._zzt_load_palette_default=X.Z)();b._zzt_key_pop=a=>(b._zzt_key_pop=X._)(a);
b._zzt_load_binary=(a,c)=>(b._zzt_load_binary=X.$)(a,c);b._zzt_load_ega_palette=a=>(b._zzt_load_ega_palette=X.aa)(a);b._zzt_load_palette=a=>(b._zzt_load_palette=X.ba)(a);b._zzt_load_blink=a=>(b._zzt_load_blink=X.ca)(a);b._zzt_get_screen_size=(a,c)=>(b._zzt_get_screen_size=X.da)(a,c);b._zzt_get_charset=(a,c)=>(b._zzt_get_charset=X.ea)(a,c);b._zzt_get_palette=()=>(b._zzt_get_palette=X.fa)();b._zzt_get_blink=()=>(b._zzt_get_blink=X.ga)();
b._zzt_get_blink_disable_user_override=()=>(b._zzt_get_blink_disable_user_override=X.ha)();b._zzt_set_blink_disable_user_override=a=>(b._zzt_set_blink_disable_user_override=X.ia)(a);b._zzt_get_blink_duration_ms=()=>(b._zzt_get_blink_duration_ms=X.ja)();b._zzt_get_active_blink_duration_ms=()=>(b._zzt_get_active_blink_duration_ms=X.ka)();b._zzt_set_blink_duration_ms=a=>(b._zzt_set_blink_duration_ms=X.la)(a);b._zzt_init=a=>(b._zzt_init=X.ma)(a);
b._audio_set_remove_player_movement_sound=a=>(b._audio_set_remove_player_movement_sound=X.na)(a);b._zzt_execute=a=>(b._zzt_execute=X.oa)(a);b._zzt_mark_timer=()=>(b._zzt_mark_timer=X.pa)();b._zzt_mark_timer_turbo=()=>(b._zzt_mark_timer_turbo=X.qa)();b._zzt_get_ram=()=>(b._zzt_get_ram=X.ra)();b._malloc=a=>(b._malloc=X.sa)(a);b._free=a=>(b._free=X.ta)(a);b._ui_activate=()=>(b._ui_activate=X.ua)();b._audio_stream_get_volume=()=>(b._audio_stream_get_volume=X.va)();
b._audio_get_remove_player_movement_sound=()=>(b._audio_get_remove_player_movement_sound=X.wa)();b._audio_stream_set_volume=a=>(b._audio_stream_set_volume=X.xa)(a);b._audio_stream_init=(a,c,e,f)=>(b._audio_stream_init=X.ya)(a,c,e,f);b._audio_stream_get_max_volume=()=>(b._audio_stream_get_max_volume=X.za)();b._audio_stream_generate=(a,c,e)=>(b._audio_stream_generate=X.Aa)(a,c,e);b._audio_stream_append_on=(a,c,e)=>(b._audio_stream_append_on=X.Ba)(a,c,e);
b._audio_local_delay_time=(a,c,e)=>(b._audio_local_delay_time=X.Ca)(a,c,e);b._audio_should_insert_pause=(a,c)=>(b._audio_should_insert_pause=X.Da)(a,c);b._audio_stream_append_off=(a,c)=>(b._audio_stream_append_off=X.Ea)(a,c);b._audio_generate_init=()=>(b._audio_generate_init=X.Fa)();b._audio_get_note_delay=()=>(b._audio_get_note_delay=X.Ga)();b._audio_set_note_delay=a=>(b._audio_set_note_delay=X.Ha)(a);b.AsciiToString=W;var Y;K=function ba(){Y||Z();Y||(K=ba)};
function Z(){if(!(0<I)){for(;0<C.length;)C.shift()(b);if(!(0<I||Y||(Y=!0,b.calledRun=!0,y))){for(;0<G.length;)G.shift()(b);for(d(b);0<H.length;)H.shift()(b)}}}Z();


  return moduleArg.ready
}
);
})();
;
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = ZetaNative;
else if (typeof define === 'function' && define['amd'])
  define([], () => ZetaNative);
