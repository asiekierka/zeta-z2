var i;

zzt_kbdmap = {};
zzt_kbdmap["ArrowUp"] = 0x48;
zzt_kbdmap["ArrowLeft"] = 0x4B;
zzt_kbdmap["ArrowRight"] = 0x4D;
zzt_kbdmap["ArrowDown"] = 0x50;

zzt_kbdmap["Enter"] = 0x1C;
zzt_kbdmap["Escape"] = 1;

for (i=1;i<=9;i++) zzt_kbdmap[""+i] = i+1;
zzt_kbdmap["0"] = 11;
zzt_kbdmap["-"] = 12;
zzt_kbdmap["_"] = 12;
zzt_kbdmap["="] = 13;
zzt_kbdmap["+"] = 13;
zzt_kbdmap["Backspace"] = 14;
zzt_kbdmap["Tab"] = 15;

var addchrs = function(c, off) {
	for(i=0;i<c.length;i++) {
		zzt_kbdmap[c.charAt(i)]=off+1+i;
	}
}

addchrs("QWERTYUIOP{}", 15);
addchrs("qwertyuiop[]", 15);
addchrs("asdfghjkl;'", 29);
addchrs("ASDFGHJKL:\"", 29);
addchrs("zxcvbnm,./", 43);
addchrs("ZXCVBNM<>?", 43);

zzt_kbdmap["`"] = 41;
zzt_kbdmap["~"] = 41;
zzt_kbdmap["\\"] = 43;
zzt_kbdmap["|"] = 43;
zzt_kbdmap["*"] = 55;
zzt_kbdmap[" "] = 57;
