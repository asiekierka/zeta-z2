
var ZetaNative = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(ZetaNative) {
  ZetaNative = ZetaNative || {};

var Module=typeof ZetaNative!=="undefined"?ZetaNative:{};var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram="./this.program";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=true;var ENVIRONMENT_IS_WORKER=false;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptDir){scriptDirectory=_scriptDir}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=function shell_read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=function readBinary(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=function readAsync(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function xhr_onload(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=function(title){document.title=title}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime;if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(typeof WebAssembly!=="object"){err("no native wasm support detected")}var wasmMemory;var wasmTable=new WebAssembly.Table({"initial":7,"maximum":7+0,"element":"anyfunc"});var ABORT=false;var EXITSTATUS=0;function Pointer_stringify(ptr,length){abort("this function has been removed - you should use UTF8ToString(ptr, maxBytesToRead) instead!")}function AsciiToString(ptr){var str="";while(1){var ch=HEAPU8[ptr++>>0];if(!ch)return str;str+=String.fromCharCode(ch)}}var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}var WASM_PAGE_SIZE=65536;var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var DYNAMIC_BASE=1338656,DYNAMICTOP_PTR=1076352;var INITIAL_TOTAL_MEMORY=Module["TOTAL_MEMORY"]||4194304;if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{wasmMemory=new WebAssembly.Memory({"initial":INITIAL_TOTAL_MEMORY/WASM_PAGE_SIZE,"maximum":INITIAL_TOTAL_MEMORY/WASM_PAGE_SIZE})}if(wasmMemory){buffer=wasmMemory.buffer}INITIAL_TOTAL_MEMORY=buffer.byteLength;updateGlobalBufferAndViews(buffer);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Module["dynCall_v"](func)}else{Module["dynCall_vi"](func,callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what+="";out(what);err(what);ABORT=true;EXITSTATUS=1;what="abort("+what+"). Build with -s ASSERTIONS=1 for more info.";throw new WebAssembly.RuntimeError(what)}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return String.prototype.startsWith?filename.startsWith(dataURIPrefix):filename.indexOf(dataURIPrefix)===0}var wasmBinaryFile="zeta_native.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(){try{if(wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(wasmBinaryFile)}else{throw"both async and sync fetching of the wasm failed"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary()})}return new Promise(function(resolve,reject){resolve(getBinary())})}function createWasm(){var info={"env":asmLibraryArg,"wasi_unstable":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiatedSource(output){receiveInstance(output["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch==="function"){fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiatedSource,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");instantiateArrayBuffer(receiveInstantiatedSource)})})}else{return instantiateArrayBuffer(receiveInstantiatedSource)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync();return{}}__ATINIT__.push({func:function(){___wasm_call_ctors()}});function _cpu_ext_log(s){console.log(Pointer_stringify(s))}function abortOnCannotGrowMemory(requestedSize){abort("OOM")}function _emscripten_resize_heap(requestedSize){abortOnCannotGrowMemory(requestedSize)}var ENV={};function _emscripten_get_environ(){if(!_emscripten_get_environ.strings){var env={"USER":"web_user","LOGNAME":"web_user","PATH":"/","PWD":"/","HOME":"/home/web_user","LANG":(typeof navigator==="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8","_":thisProgram};for(var x in ENV){env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(x+"="+env[x])}_emscripten_get_environ.strings=strings}return _emscripten_get_environ.strings}function _environ_get(__environ,environ_buf){var strings=_emscripten_get_environ();var bufSize=0;strings.forEach(function(string,i){var ptr=environ_buf+bufSize;HEAP32[__environ+i*4>>2]=ptr;writeAsciiToMemory(string,ptr);bufSize+=string.length+1});return 0}function _environ_sizes_get(penviron_count,penviron_buf_size){var strings=_emscripten_get_environ();HEAP32[penviron_count>>2]=strings.length;var bufSize=0;strings.forEach(function(string){bufSize+=string.length+1});HEAP32[penviron_buf_size>>2]=bufSize;return 0}function _speaker_off(cycles){speakerg_off(cycles)}function _speaker_on(cycles,freq){speakerg_on(cycles,freq)}function _vfs_close(h){return vfsg_close(h)}function _vfs_findfirst(ptr,mask,spec){return vfsg_findfirst(ptr,mask,spec)}function _vfs_findnext(ptr){return vfsg_findnext(ptr)}function _vfs_open(fn,mode){return vfsg_open(fn,mode)}function _vfs_read(h,ptr,amount){return vfsg_read(h,ptr,amount)}function _vfs_seek(h,pos,type){return vfsg_seek(h,pos,type)}function _vfs_write(h,ptr,amount){return vfsg_write(h,ptr,amount)}function _zeta_has_feature(id){return vfsg_has_feature(id)}function _zeta_time_ms(){return vfsg_time_ms()}function _zeta_update_charset(width,height,char_ptr){return zetag_update_charset(width,height,char_ptr)}function _zeta_update_palette(data_ptr){return zetag_update_palette(data_ptr)}var asmLibraryArg={"c":_cpu_ext_log,"e":_emscripten_resize_heap,"l":_environ_get,"m":_environ_sizes_get,"memory":wasmMemory,"j":_speaker_off,"k":_speaker_on,"table":wasmTable,"q":_vfs_close,"o":_vfs_findfirst,"n":_vfs_findnext,"g":_vfs_open,"a":_vfs_read,"b":_vfs_seek,"p":_vfs_write,"h":_zeta_has_feature,"f":_zeta_time_ms,"d":_zeta_update_charset,"i":_zeta_update_palette};var asm=createWasm();Module["asm"]=asm;var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return Module["asm"]["r"].apply(null,arguments)};var _zzt_kmod_set=Module["_zzt_kmod_set"]=function(){return Module["asm"]["s"].apply(null,arguments)};var _zzt_kmod_clear=Module["_zzt_kmod_clear"]=function(){return Module["asm"]["t"].apply(null,arguments)};var _zzt_key_get_delay=Module["_zzt_key_get_delay"]=function(){return Module["asm"]["u"].apply(null,arguments)};var _zzt_key_get_repeat_delay=Module["_zzt_key_get_repeat_delay"]=function(){return Module["asm"]["v"].apply(null,arguments)};var _zzt_key_set_delay=Module["_zzt_key_set_delay"]=function(){return Module["asm"]["w"].apply(null,arguments)};var _zzt_key=Module["_zzt_key"]=function(){return Module["asm"]["x"].apply(null,arguments)};var _zzt_keyup=Module["_zzt_keyup"]=function(){return Module["asm"]["y"].apply(null,arguments)};var _zzt_mark_frame=Module["_zzt_mark_frame"]=function(){return Module["asm"]["z"].apply(null,arguments)};var _zzt_joy_set=Module["_zzt_joy_set"]=function(){return Module["asm"]["A"].apply(null,arguments)};var _zzt_joy_clear=Module["_zzt_joy_clear"]=function(){return Module["asm"]["B"].apply(null,arguments)};var _zzt_joy_axis=Module["_zzt_joy_axis"]=function(){return Module["asm"]["C"].apply(null,arguments)};var _zzt_mouse_set=Module["_zzt_mouse_set"]=function(){return Module["asm"]["D"].apply(null,arguments)};var _zzt_mouse_clear=Module["_zzt_mouse_clear"]=function(){return Module["asm"]["E"].apply(null,arguments)};var _zzt_mouse_axis=Module["_zzt_mouse_axis"]=function(){return Module["asm"]["F"].apply(null,arguments)};var _zzt_set_timer_offset=Module["_zzt_set_timer_offset"]=function(){return Module["asm"]["G"].apply(null,arguments)};var _zzt_video_mode=Module["_zzt_video_mode"]=function(){return Module["asm"]["H"].apply(null,arguments)};var _zzt_load_binary=Module["_zzt_load_binary"]=function(){return Module["asm"]["I"].apply(null,arguments)};var _zzt_load_charset=Module["_zzt_load_charset"]=function(){return Module["asm"]["J"].apply(null,arguments)};var _zzt_load_palette=Module["_zzt_load_palette"]=function(){return Module["asm"]["K"].apply(null,arguments)};var _zzt_init=Module["_zzt_init"]=function(){return Module["asm"]["L"].apply(null,arguments)};var _zzt_execute=Module["_zzt_execute"]=function(){return Module["asm"]["M"].apply(null,arguments)};var _zzt_mark_timer=Module["_zzt_mark_timer"]=function(){return Module["asm"]["N"].apply(null,arguments)};var _zzt_get_ram=Module["_zzt_get_ram"]=function(){return Module["asm"]["O"].apply(null,arguments)};var _audio_stream_init=Module["_audio_stream_init"]=function(){return Module["asm"]["P"].apply(null,arguments)};var _audio_stream_get_volume=Module["_audio_stream_get_volume"]=function(){return Module["asm"]["Q"].apply(null,arguments)};var _audio_stream_get_max_volume=Module["_audio_stream_get_max_volume"]=function(){return Module["asm"]["R"].apply(null,arguments)};var _audio_stream_set_volume=Module["_audio_stream_set_volume"]=function(){return Module["asm"]["S"].apply(null,arguments)};var _audio_stream_generate_u8=Module["_audio_stream_generate_u8"]=function(){return Module["asm"]["T"].apply(null,arguments)};var _audio_stream_append_on=Module["_audio_stream_append_on"]=function(){return Module["asm"]["U"].apply(null,arguments)};var _audio_stream_append_off=Module["_audio_stream_append_off"]=function(){return Module["asm"]["V"].apply(null,arguments)};var _audio_local_delay_time=Module["_audio_local_delay_time"]=function(){return Module["asm"]["W"].apply(null,arguments)};var _audio_should_insert_pause=Module["_audio_should_insert_pause"]=function(){return Module["asm"]["X"].apply(null,arguments)};var _audio_get_note_delay=Module["_audio_get_note_delay"]=function(){return Module["asm"]["Y"].apply(null,arguments)};var _audio_set_note_delay=Module["_audio_set_note_delay"]=function(){return Module["asm"]["Z"].apply(null,arguments)};var _malloc=Module["_malloc"]=function(){return Module["asm"]["_"].apply(null,arguments)};var _free=Module["_free"]=function(){return Module["asm"]["$"].apply(null,arguments)};Module["asm"]=asm;Module["AsciiToString"]=AsciiToString;var calledRun;Module["then"]=function(func){if(calledRun){func(Module)}else{var old=Module["onRuntimeInitialized"];Module["onRuntimeInitialized"]=function(){if(old)old();func(Module)}}return Module};dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0)return;function doRun(){if(calledRun)return;calledRun=true;if(ABORT)return;initRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}Module["run"]=run;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}noExitRuntime=true;run();


  return ZetaNative
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = ZetaNative;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return ZetaNative; });
    else if (typeof exports === 'object')
      exports["ZetaNative"] = ZetaNative;
    