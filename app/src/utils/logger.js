const _0x163e73=_0x2289;(function(_0xbc9d45,_0x5c08cf){const _0x596d97=_0x2289,_0x25b1ff=_0xbc9d45();while(!![]){try{const _0x41c43d=-parseInt(_0x596d97(0x180))/0x1*(parseInt(_0x596d97(0x197))/0x2)+-parseInt(_0x596d97(0x18a))/0x3*(-parseInt(_0x596d97(0x183))/0x4)+parseInt(_0x596d97(0x195))/0x5*(parseInt(_0x596d97(0x189))/0x6)+parseInt(_0x596d97(0x18e))/0x7*(parseInt(_0x596d97(0x18b))/0x8)+parseInt(_0x596d97(0x185))/0x9*(parseInt(_0x596d97(0x191))/0xa)+parseInt(_0x596d97(0x198))/0xb+-parseInt(_0x596d97(0x184))/0xc;if(_0x41c43d===_0x5c08cf)break;else _0x25b1ff['push'](_0x25b1ff['shift']());}catch(_0xebbb3d){_0x25b1ff['push'](_0x25b1ff['shift']());}}}(_0x962b,0xdbd2e));import{createLogger,format,transports}from'winston';import _0x26613d from'fs';function _0x2289(_0x53fd41,_0x593510){const _0x962b82=_0x962b();return _0x2289=function(_0x22893f,_0x5189fd){_0x22893f=_0x22893f-0x17f;let _0x44f7f1=_0x962b82[_0x22893f];return _0x44f7f1;},_0x2289(_0x53fd41,_0x593510);}const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x552ef6,message:_0x34c309,timestamp:_0x2d9044})=>{const _0xea22a7=_0x2289;return _0x2d9044+'\x20['+_0x552ef6+_0xea22a7(0x192)+_0x34c309;});class Logger{constructor(){const _0x7508c2=_0x2289;this[_0x7508c2(0x186)]=createLogger({'level':_0x7508c2(0x17f),'format':combine(timestamp({'format':_0x7508c2(0x181)}),colorize(),customFormat),'transports':[new transports['File']({'filename':_0x7508c2(0x194)})],'exceptionHandlers':[new transports[(_0x7508c2(0x190))]({'filename':_0x7508c2(0x194)})],'rejectionHandlers':[new transports[(_0x7508c2(0x190))]({'filename':'log/app.log'})]});}[_0x163e73(0x18c)](_0x47105b){const _0x5c965f=_0x163e73;this[_0x5c965f(0x186)][_0x5c965f(0x18c)](_0x47105b);}[_0x163e73(0x187)](_0xb0221){this['logger']['warn'](_0xb0221);}['error'](_0x5062a8){const _0xbadba9=_0x163e73;this[_0xbadba9(0x186)][_0xbadba9(0x18f)](_0x5062a8);}[_0x163e73(0x17f)](_0x3c5d05){const _0x12f5c7=_0x163e73;this[_0x12f5c7(0x186)][_0x12f5c7(0x17f)](_0x3c5d05);}[_0x163e73(0x193)](_0x4cb601){const _0x59112d=_0x163e73;this[_0x59112d(0x186)][_0x59112d(0x196)]=_0x4cb601;}[_0x163e73(0x182)](){const _0x12015a=_0x163e73;_0x26613d['truncate'](_0x12015a(0x194),0x0,_0x536c41=>{const _0x521c5b=_0x12015a;_0x536c41?this[_0x521c5b(0x186)][_0x521c5b(0x18f)](_0x521c5b(0x188)+_0x536c41[_0x521c5b(0x18d)]):this[_0x521c5b(0x186)]['info']('Log\x20file\x20cleared');});}}export default new Logger();function _0x962b(){const _0xfa2f6f=['322qcbVFa','error','File','7033090ErQRQD',']:\x20','setLevel','log/app.log','5369815SbRKsG','level','402HSGlkx','3071596JrTOsR','debug','2022uRfvRH','YYYY-MM-DD\x20HH:mm:ss','clear','8sODOng','21257328csioKn','9YesuJD','logger','warn','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','6CyxRPW','1453629zTTugk','9160TrCfHN','info','message'];_0x962b=function(){return _0xfa2f6f;};return _0x962b();}