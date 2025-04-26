var ZetaNative = (() => {
  var _scriptName = typeof document != 'undefined' ? document.currentScript?.src : undefined;
  
  return (
async function(moduleArg = {}) {
  var moduleRtn;

var b=moduleArg,c,l,p=new Promise((a,d)=>{c=a;l=d}),q="",r;"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src);_scriptName&&(q=_scriptName);q.startsWith("blob:")?q="":q=q.slice(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1);r=async a=>{a=await fetch(a,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw Error(a.status+" : "+a.url);};var u=console.log.bind(console),v=console.error.bind(console),w,y=!1,D,E;
function F(){var a=w.buffer;new Int8Array(a);new Int16Array(a);b.HEAPU8=D=new Uint8Array(a);new Uint16Array(a);new Int32Array(a);b.HEAPU32=E=new Uint32Array(a);new Float32Array(a);new Float64Array(a);new BigInt64Array(a);new BigUint64Array(a)}var G=0,H=null,I;async function J(a){try{var d=await r(a);return new Uint8Array(d)}catch{}throw"both async and sync fetching of the wasm failed";}
async function K(a,d){try{var e=await J(a);return await WebAssembly.instantiate(e,d)}catch(h){throw v(`failed to asynchronously prepare wasm: ${h}`),a=h,a="Aborted("+a+")",v(a),y=!0,a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info."),l(a),a;}}
async function N(a){var d=I;if("function"==typeof WebAssembly.instantiateStreaming)try{var e=fetch(d,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(e,a)}catch(h){v(`wasm streaming compile failed: ${h}`),v("falling back to ArrayBuffer instantiation")}return K(d,a)}var O=[null,[],[]],P="undefined"!=typeof TextDecoder?new TextDecoder:void 0,Q=a=>{for(var d="";;){var e=D[a++];if(!e)return d;d+=String.fromCharCode(e)}};b.AsciiToString=Q;
var R={d:function(a){console.log(Q(a))},m:a=>{var d=D.length;a>>>=0;if(2147483648<a)return!1;for(var e=1;4>=e;e*=2){var h=d*(1+.2/e);h=Math.min(h,a+100663296);a:{h=(Math.min(2147483648,65536*Math.ceil(Math.max(a,h)/65536))-w.buffer.byteLength+65535)/65536|0;try{w.grow(h);F();var t=1;break a}catch(z){}t=void 0}if(t)return!0}return!1},o:()=>52,n:function(){return 70},i:(a,d,e,h)=>{for(var t=0,z=0;z<e;z++){var T=E[d>>2],L=E[d+4>>2];d+=8;for(var A=0;A<L;A++){var x=a,f=D[T+A],B=O[x];if(0===f||10===f){x=
1===x?u:v;f=B;for(var k=0,m=k+NaN,n=k;f[n]&&!(n>=m);)++n;if(16<n-k&&f.buffer&&P)f=P.decode(f.subarray(k,n));else{for(m="";k<n;){var g=f[k++];if(g&128){var C=f[k++]&63;if(192==(g&224))m+=String.fromCharCode((g&31)<<6|C);else{var M=f[k++]&63;g=224==(g&240)?(g&15)<<12|C<<6|M:(g&7)<<18|C<<12|M<<6|f[k++]&63;65536>g?m+=String.fromCharCode(g):(g-=65536,m+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else m+=String.fromCharCode(g)}f=m}x(f);B.length=0}else B.push(f)}t+=L}E[h>>2]=t;return 0},g:function(a){speakerg_off(a)},
l:function(a,d){speakerg_on(a,d)},u:function(a){return vfsg_chdir(a)},v:function(a){return vfsg_close(a)},q:function(a,d,e){return vfsg_findfirst(a,d,e)},p:function(a){return vfsg_findnext(a)},t:function(a,d){return vfsg_getcwd(a,d)},j:function(a,d){return vfsg_open(a,d)},a:function(a,d,e){return vfsg_read(a,d,e)},c:function(a,d,e){return vfsg_seek(a,d,e)},s:function(a,d){return vfsg_truncate(a,d)},r:function(a,d,e){return vfsg_write(a,d,e)},h:function(a){return vfsg_has_feature(a)},k:function(){return vfsg_time_ms()},
b:function(a){return zetag_update_blink(a)},e:function(a,d,e){return zetag_update_charset(a,d,e)},f:function(a){return zetag_update_palette(a)}},S=await (async function(){G++;var a={a:R};I??=q+"zeta_native.wasm";try{return S=(await N(a)).instance.exports,w=S.w,F(),G--,0==G&&H&&(a=H,H=null,a()),S}catch(d){return l(d),Promise.reject(d)}}());b._zzt_get_ip=S.z;b._zzt_get_cycles=S.A;b._zzt_kmod_get=S.B;b._zzt_kmod_set=S.C;b._zzt_kmod_clear=S.D;b._zzt_set_lock_charset=S.E;
b._zzt_set_lock_palette=S.F;b._zzt_key_get_delay=S.G;b._zzt_key_get_repeat_delay=S.H;b._zzt_key_set_delay=S.I;b._zzt_key=S.J;b._zzt_keyup=S.K;b._zzt_mark_frame=S.L;b._zzt_joy_set=S.M;b._zzt_joy_clear=S.N;b._zzt_joy_axis=S.O;b._zzt_mouse_set=S.P;b._zzt_mouse_clear=S.Q;b._zzt_mouse_axis=S.R;b._zzt_get_charset_default=S.S;b._zzt_force_default_charset=S.T;b._zzt_load_charset=S.U;b._zzt_set_timer_offset=S.V;b._zzt_set_max_extended_memory=S.W;b._zzt_video_mode=S.X;b._zzt_load_palette_default=S.Y;
b._zzt_key_pop=S.Z;b._zzt_load_binary=S._;b._zzt_load_ega_palette=S.$;b._zzt_load_palette=S.aa;b._zzt_load_blink=S.ba;b._zzt_get_active_blink_duration_ms=S.ca;b._zzt_get_screen_size=S.da;b._zzt_get_charset=S.ea;b._zzt_get_palette=S.fa;b._zzt_get_blink=S.ga;b._zzt_get_blink_user_override=S.ha;b._zzt_set_blink_user_override=S.ia;b._zzt_get_blink_duration_ms=S.ja;b._zzt_set_blink_duration_ms=S.ka;b._zzt_init=S.la;b._audio_set_remove_player_movement_sound=S.ma;b._zzt_execute=S.na;
b._zzt_get_pit_tick_ms=S.oa;b._zzt_mark_timer=S.pa;b._zzt_mark_timer_turbo=S.qa;b._zzt_get_ram=S.ra;b._malloc=S.sa;b._free=S.ta;b._ui_activate=S.ua;b._audio_stream_get_volume=S.va;b._audio_get_remove_player_movement_sound=S.wa;b._audio_stream_set_volume=S.xa;b._audio_stream_init=S.ya;b._audio_stream_get_max_volume=S.za;b._audio_stream_generate=S.Aa;b._audio_stream_append_on=S.Ba;b._audio_local_delay_time=S.Ca;b._audio_should_insert_pause=S.Da;b._audio_stream_append_off=S.Ea;
b._audio_generate_init=S.Fa;b._audio_get_note_delay=S.Ga;b._audio_set_note_delay=S.Ha;function U(){0<G?H=U:0<G?H=U:(b.calledRun=!0,y||(S.x(),c(b)))}U();moduleRtn=p;


  return moduleRtn;
}
);
})();
if (typeof exports === 'object' && typeof module === 'object') {
  module.exports = ZetaNative;
  // This default export looks redundant, but it allows TS to import this
  // commonjs style module.
  module.exports.default = ZetaNative;
} else if (typeof define === 'function' && define['amd'])
  define([], () => ZetaNative);
